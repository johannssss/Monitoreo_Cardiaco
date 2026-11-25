# Central de Telemetría Cardíaca IoT (ESP32 P2P MAC + AD8232)

Sistema de monitoreo electrocardiográfico en tiempo real basado en **enlace directo ESP-NOW por dirección física MAC entre 2 placas ESP32**, conectado por USB WebSerial al Dashboard SCADA y retransmitido automáticamente vía nube MQTT (WSS) para visualización remota en teléfono móvil mediante **GitHub Pages**.

---

## Estructura del Repositorio

* **`index.html` / `styles.css` / `app.js` / `assets/`**: Dashboard SCADA 60 FPS listo para **GitHub Pages** y teléfonos móviles.
* **`1_PROGRAMACION_ESP32/`**: Códigos optimizados y verificados para ESP32 Core 4.0.0:
  * `1_Lector_MAC_Receptor`: Obtiene la dirección MAC del ESP32 Receptor.
  * `2_ESP32_1_Emisor_Sensor_AD8232`: Va conectado al paciente y sensor AD8232 (Pines 34, 19, 21). Transmite a 250 Hz por MAC.
  * `3_ESP32_2_Receptor_Dashboard_USB`: Va conectado por USB al notebook. Recibe tramas ESP-NOW y envía JSON por USB a 115200 baudios.
* **`2_DOCUMENTO_EXPLICATIVO_ESP32/`**:
  * `MANUAL_EXPLICACION_ESP32_P2P_MAC.pdf`: Manual visual con diagramas de arquitectura, conexión de pines, pantallazos numerados y explicación línea por línea de ambos ESP32.

---

## Cómo Subirlo a GitHub y Verlo en el Teléfono del Profesor

1. Crea un repositorio público nuevo en GitHub y sube todo el contenido de esta carpeta.
2. Ve a **Settings -> Pages**, selecciona **Branch: `main`** y carpeta **`/ (root)`**, y presiona **Save**.
3. Abre el enlace generado (`https://tu-usuario.github.io/tu-repo/`) en **Google Chrome / Edge** en tu computador, abre `☰ MENÚ` y presiona **`🔌 Conectar USB`** eligiendo tu ESP32 N° 2 Receptor.
4. Comparte ese mismo enlace con el profesor para que lo abra en su **teléfono móvil**: verá el electrocardiograma, los LPM y el corazón 3D latiendo en vivo vía nube automáticamente.

*(Tip: si otros compañeros usan el mismo link al mismo tiempo, agrega `?sala=tugrupo` al final de la URL para aislar tu canal).*

---
**PIN de Supervisor Clínico:** `7294`
