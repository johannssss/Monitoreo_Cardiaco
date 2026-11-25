/**
 * ====================================================================================================
 * SISTEMA IOT DE TELEMETRÍA CARDÍACA BIOMÉDICA - CÁTEDRA SISTEMA IOT (4TO SEMESTRE)
 * HERRAMIENTA AUXILIAR: LECTOR DE DIRECCIÓN FÍSICA MAC DEL ESP32 RECEPTOR
 * ====================================================================================================
 * Propósito:
 * Sube este sketch al ESP32 que utilizarás como Receptor (Gateway al PC).
 * Abre el Monitor Serie a 115200 baudios y copia la dirección MAC que aparece en pantalla
 * para pegarla en el sketch del Emisor 'esp32_p2p_sensor_emisor.ino'.
 * ====================================================================================================
 */

// ====================================================================================================
// SECCIÓN 1: INCLUSIÓN DE LIBRERÍAS DE HARDWARE
// ====================================================================================================
#include <Arduino.h> // Funciones básicas de Arduino
#include <WiFi.h>    // Librería para interactuar con el controlador de radio y leer la dirección MAC

// ====================================================================================================
// SECCIÓN 2: CONFIGURACIÓN INICIAL Y LECTURA DE MAC (SETUP)
// ====================================================================================================
void setup() {
  // 1. Iniciar consola serie a 115200 baudios
  Serial.begin(115200);
  delay(500);

  // 2. Configurar la radio en modo estación para activar la interfaz MAC de capa de enlace
  WiFi.mode(WIFI_STA);
  WiFi.disconnect();

  // 3. Imprimir el encabezado informativo y la dirección MAC leída del chip
  Serial.println("\n====================================================================");
  Serial.println("   LECTOR DE DIRECCIÓN FÍSICA MAC PARA ENLACE P2P (ESP-NOW)         ");
  Serial.println("====================================================================");
  Serial.print(">> DIRECCIÓN MAC FÍSICA DE ESTE DISPOSITIVO: ");
  Serial.println(WiFi.macAddress());
  Serial.println("--------------------------------------------------------------------");
  Serial.println("INSTRUCCIÓN:");
  Serial.println("Copia estos 6 bytes e ingrésalos en el sketch 'esp32_p2p_sensor_emisor.ino'.");
  Serial.println("Ejemplo: si la MAC es 30:AE:A4:07:0F:2C, debes escribir:");
  Serial.println("uint8_t receiverMacAddress[] = {0x30, 0xAE, 0xA4, 0x07, 0x0F, 0x2C};");
  Serial.println("====================================================================\n");
}

// ====================================================================================================
// SECCIÓN 3: BUCLE PERIÓDICO DE IMPRESIÓN (LOOP CONTINUO)
// ====================================================================================================
void loop() {
  // Reitera la lectura cada 3 segundos para que no se pierda al abrir el monitor serie
  delay(3000);
  Serial.print("[INFO] Dirección MAC Física: ");
  Serial.println(WiFi.macAddress());
}
