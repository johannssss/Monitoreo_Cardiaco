/**
 * ============================================================================
 * SISTEMA IOT DE TELEMETRÍA CARDÍACA P2P - ESP32 N° 1: EMISOR (SENSOR AD8232)
 * Versión Optimizada para Máxima Eficiencia y Defensa Oral
 * ============================================================================
 */

// ============================================================================
// SECCIÓN 1: LIBRERÍAS DE HARDWARE Y PROTOCOLO P2P (ESP-NOW)
// ============================================================================
#include <WiFi.h>     // Habilita el módem de radiofrecuencia 2.4 GHz del ESP32
#include <esp_now.h>  // Protocolo P2P de baja latencia (comunicación directa por MAC)

// ============================================================================
// SECCIÓN 2: PINES DEL SENSOR AD8232 EN EL ESP32
// ============================================================================
const int PIN_ECG_ANALOG     = 34; // OUTPUT del AD8232 -> GPIO 34 (ADC1_CH6, inmune a WiFi)
const int PIN_LEADS_OFF_PLUS = 19; // LO+ del AD8232    -> GPIO 19 (Electrodo RA suelto)
const int PIN_LEADS_OFF_MIN  = 21; // LO- del AD8232    -> GPIO 21 (Electrodo LA suelto)

// ============================================================================
// SECCIÓN 3: DIRECCIÓN MAC DEL ESP32 RECEPTOR (DESTINO P2P)
// ============================================================================
// Reemplaza los 0xFF con la MAC de tu Receptor (o déjalo en 0xFF para Broadcast)
uint8_t receiverMacAddress[] = {0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF};

// ============================================================================
// SECCIÓN 4: PAQUETE DE TELEMETRÍA Y TEMPORIZACIÓN (250 HZ = 4 MS)
// ============================================================================
#define SAMPLES_PER_PACKET 10
const unsigned long SAMPLE_INTERVAL_US = 4000; // 4000 µs = 250 muestras/segundo

typedef struct {
  uint16_t samples[SAMPLES_PER_PACKET]; // Lote de 10 lecturas de 12 bits (0 - 4095)
  uint8_t  leads_off;                   // 0 = Electrodos OK, 1 = Electrodo suelto
} EcgPacket;

EcgPacket txPacket;
unsigned long nextSampleMicros = 0;
uint8_t sampleIndex = 0;

// ============================================================================
// SECCIÓN 5: CONFIGURACIÓN INICIAL (SETUP)
// ============================================================================
void setup() {
  // Pines digitales con pulldown interno para evitar falsas alarmas por ruido
  pinMode(PIN_LEADS_OFF_PLUS, INPUT_PULLDOWN);
  pinMode(PIN_LEADS_OFF_MIN,  INPUT_PULLDOWN);

  // Calibración ADC: 12 bits (0 a 4095) y rango de voltaje completo (0 a 3.3V)
  analogReadResolution(12);
  analogSetAttenuation(ADC_11db);

  // Encender radio en modo Estación para habilitar ESP-NOW sin router
  WiFi.mode(WIFI_STA);
  WiFi.disconnect();
  esp_now_init();

  // Registrar el ESP32 Receptor como par de comunicación directa
  esp_now_peer_info_t peerInfo = {};
  memcpy(peerInfo.peer_addr, receiverMacAddress, 6);
  peerInfo.channel = 0;
  peerInfo.encrypt = false;
  esp_now_add_peer(&peerInfo);

  nextSampleMicros = micros();
}

// ============================================================================
// SECCIÓN 6: BUCLE DE ADQUISICIÓN Y ENVÍO P2P (LOOP A 250 HZ)
// ============================================================================
void loop() {
  unsigned long nowMicros = micros();

  // Muestreo temporal exacto cada 4000 µs (250 Hz) sin usar delay()
  if ((long)(nowMicros - nextSampleMicros) >= 0) {
    nextSampleMicros += SAMPLE_INTERVAL_US;

    // 1. Verificar contacto físico de los electrodos con la piel
    bool leadsOff = digitalRead(PIN_LEADS_OFF_PLUS) || digitalRead(PIN_LEADS_OFF_MIN);

    // 2. Conversión Analógico-Digital (0-3.3V -> 0-4095) y almacenar en el lote
    txPacket.samples[sampleIndex++] = analogRead(PIN_ECG_ANALOG);

    // 3. Al juntar 10 muestras (40 ms), enviar trama binaria por radio MAC a MAC
    if (sampleIndex >= SAMPLES_PER_PACKET) {
      txPacket.leads_off = leadsOff ? 1 : 0;
      esp_now_send(receiverMacAddress, (uint8_t *)&txPacket, sizeof(txPacket));
      sampleIndex = 0;
    }
  }
}
