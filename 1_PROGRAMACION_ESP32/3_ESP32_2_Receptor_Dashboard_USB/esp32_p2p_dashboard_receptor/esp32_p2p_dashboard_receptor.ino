/**
 * ============================================================================
 * SISTEMA IOT DE TELEMETRÍA CARDÍACA P2P - ESP32 N° 2: RECEPTOR GATEWAY USB
 * Compatible con Arduino-ESP32 Core 3.x / 4.0.0 (ESP-IDF 5.x)
 * ============================================================================
 */

// ============================================================================
// SECCIÓN 1: LIBRERÍAS DE HARDWARE Y PROTOCOLO P2P (ESP-NOW)
// ============================================================================
#include <WiFi.h>     // Habilita la radiofrecuencia 2.4 GHz del ESP32
#include <esp_now.h>  // Protocolo P2P de baja latencia (recepción por interrupción)

// ============================================================================
// SECCIÓN 2: ESTRUCTURA DEL PAQUETE RECEPTOR (IDÉNTICA AL EMISOR)
// ============================================================================
#define SAMPLES_PER_PACKET 10

typedef struct {
  uint16_t samples[SAMPLES_PER_PACKET]; // Lote de 10 lecturas de 12 bits (0 - 4095)
  uint8_t  leads_off;                   // 0 = Electrodos OK, 1 = Electrodo suelto
} EcgPacket;

EcgPacket rxPacket;
volatile bool newPacketReady = false;

// ============================================================================
// SECCIÓN 3: INTERRUPCIÓN DE RECEPCIÓN INALÁMBRICA (ESP-NOW)
// ============================================================================
void onDataRecv(const esp_now_recv_info_t *info, const uint8_t *incomingData, int len) {
  // Seguridad: descartar paquetes corruptos o de distinto tamaño
  if (len != sizeof(rxPacket)) return;

  memcpy((void *)&rxPacket, incomingData, sizeof(rxPacket));
  newPacketReady = true;
}

// ============================================================================
// SECCIÓN 4: CONFIGURACIÓN INICIAL (SETUP)
// ============================================================================
void setup() {
  Serial.begin(115200);

  // Encender radio en modo Estación e inicializar ESP-NOW
  WiFi.mode(WIFI_STA);
  WiFi.disconnect();
  esp_now_init();

  // Enlazar la función de escucha automática al recibir paquetes por el aire
  esp_now_register_recv_cb(onDataRecv);
}

// ============================================================================
// SECCIÓN 5: BUCLE PRINCIPAL DE ENVÍO JSON AL DASHBOARD (LOOP)
// ============================================================================
void loop() {
  if (newPacketReady) {
    newPacketReady = false;

    // Imprimir trama JSON compacta por USB hacia el Dashboard Web (115200 baudios)
    Serial.print("{\"leads_off\":");
    Serial.print(rxPacket.leads_off ? "true" : "false");
    Serial.print(",\"samples\":[");
    for (int i = 0; i < SAMPLES_PER_PACKET; i++) {
      Serial.print(rxPacket.samples[i]);
      if (i < SAMPLES_PER_PACKET - 1) Serial.print(",");
    }
    Serial.println("]}");
  }
}
