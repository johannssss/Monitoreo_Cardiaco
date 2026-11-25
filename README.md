# 🫀 Central de Telemetría Cardíaca IoT (ESP32 Dual P2P + AD8232 + SCADA Web)

[![Estado](https://img.shields.io/badge/Estado-En%20Producción-00ff88?style=for-the-badge)](https://johannssss.github.io/Monitoreo_Cardiaco/)
[![Hardware](https://img.shields.io/badge/Hardware-2x%20ESP32%20%2B%20AD8232-0284c7?style=for-the-badge)]()
[![Protocolo](https://img.shields.io/badge/Enlace-ESP--NOW%20(Capa%202%20MAC)-7c3aed?style=for-the-badge)]()
[![Demo en Vivo](https://img.shields.io/badge/Dashboard%20Online-GitHub%20Pages-0ea5e9?style=for-the-badge)](https://johannssss.github.io/Monitoreo_Cardiaco/)

Sistema abierto de **monitoreo electrocardiográfico (ECG) en tiempo real** basado en microcontroladores **ESP32**, módulo biomédico **AD8232**, comunicación inalámbrica **Peer-to-Peer mediante dirección física MAC (ESP-NOW)** sin uso de routers Wi-Fi ni Bluetooth, conectado vía **WebSerial API** a un **Dashboard SCADA clínico a 60 FPS** con visualización anatómica 3D y retransmisión en vivo hacia dispositivos móviles.

---

## 🌐 Acceso Directo al Dashboard Online

👉 **Abrir Monitor en Vivo (PC, Tablet o Teléfono):**
**[https://johannssss.github.io/Monitoreo_Cardiaco/](https://johannssss.github.io/Monitoreo_Cardiaco/)**

> *Compatible con Google Chrome / Microsoft Edge en PC (para conectar el ESP32 Receptor por USB mediante WebSerial) y con cualquier navegador móvil para visualizar la telemetría de forma remota en tiempo real vía nube MQTT (WSS).*

---

## 🧠 ¿Cómo Funciona el Sistema? (Arquitectura de Extremo a Extremo)

```
┌─────────────────────────┐      Pines 34, 19, 21      ┌──────────────────────────┐
│  PACIENTE + AD8232      │ ─────────────────────────► │  ESP32 N° 1 (EMISOR)     │
│  • Electrodos RA/LA/RL  │    0–3.3V (0.5–40 Hz)      │  • Muestreo 250 Hz exacto│
│  • Detección Leads-Off  │                            │  • ADC 12 bits (0–4095)  │
└─────────────────────────┘                            └────────────┬─────────────┘
                                                                    │
                                              Radiofrecuencia 2.4GHz│ ESP-NOW (MAC ➔ MAC)
                                              Sin Router / Sin BT   │ Lotes 10 muestras (<2ms)
                                                                    ▼
┌─────────────────────────┐     WebSocket Seguro       ┌──────────────────────────┐
│  TELÉFONO / REMOTO      │ ◄───────────────────────── │  PC + DASHBOARD SCADA    │
│  • Visualización móvil  │     Nube MQTT (WSS)        │  • WebSerial 115200 bps  │
│  • Modo solo lectura    │                            │  • Filtro DSP + R-Peak   │
└─────────────────────────┘                            │  • Corazón 3D + Excel    │
                                                       └────────────▲─────────────┘
                                                                    │ USB 115200 baudios
                                                                    │ (Tramas JSON)
                                                       ┌────────────┴─────────────┐
                                                       │  ESP32 N° 2 (RECEPTOR)   │
                                                       │  • Sin sensores físicos  │
                                                       │  • Interrupción ESP-NOW  │
                                                       └──────────────────────────┘
```

### Características Principales
* **Comunicación P2P Pura por Dirección MAC (ESP-NOW):** Los dos microcontroladores se comunican punto a punto en Capa 2 (Data Link Layer) utilizando la dirección física MAC del silicio, con latencia inferior a 2 ms y sin depender de puntos de acceso Wi-Fi ni Bluetooth.
* **Adquisición Biomédica Real a 250 Hz:** Temporización no bloqueante mediante `micros()` (1 muestra cada 4000 µs) en el conversor **ADC1 (GPIO 34)** de 12 bits, agrupando 10 muestras por paquete para reducir en un 90% la congestión del enlace.
* **Detección de Electrodos Desconectados (*Leads-Off*):** Monitoreo continuo de los pines `LO+` y `LO-` con `INPUT_PULLDOWN` interno para evitar falsas lecturas o ruido de 50 Hz cuando los parches pierden contacto con la piel.
* **Procesamiento Digital en el Navegador (DSP + Pan-Tompkins):** Filtrado digital pasa-banda (0.5–40 Hz), cálculo automático de **Frecuencia Cardíaca (LPM)** e **Intervalo R-R (ms)**, y clasificación clínica según rangos fisiológicos:
  * 🔵 **Bradicardia:** `< 60 LPM`
  * 🟢 **Normocardia:** `60 – 100 LPM`
  * 🔴 **Taquicardia:** `> 100 LPM`
* **Gestión Multi-Paciente y Exportación a Excel:** Permite registrar múltiples perfiles (ideal para comparar electrocardiogramas entre integrantes de un equipo) y exportar los registros históricos en formato `.csv` compatible con Excel.
* **Control de Acceso (RBAC):** PIN de Supervisor Clínico (`7294`) para proteger la modificación de umbrales críticos de alerta y la exportación de datos.

---

## 🔌 Conexión Física de Pines (ESP32 N° 1 Emisor + AD8232)

| Pin del Módulo AD8232 | Pin del ESP32 N° 1 | Tipo de Señal | Función |
| :--- | :--- | :--- | :--- |
| **OUTPUT** | **GPIO 34** *(ADC1_CH6)* | Entrada Analógica | Señal ECG amplificada (0 a 3.3V). *Obligatorio usar ADC1 porque ADC2 comparte hardware con la radio 2.4 GHz.* |
| **LO+** | **GPIO 19** | Entrada Digital | Alerta de electrodo derecho desconectado (`INPUT_PULLDOWN`). |
| **LO-** | **GPIO 21** | Entrada Digital | Alerta de electrodo izquierdo desconectado (`INPUT_PULLDOWN`). |
| **3.3V** | **3V3** | Alimentación | **¡ATENCIÓN: Conectar solo a 3.3V! Nunca conectar a 5V.** |
| **GND** | **GND** | Tierra Común | Referencia equipotencial 0V. |

> *El **ESP32 N° 2 (Receptor)** no lleva ningún sensor conectado; va conectado únicamente por cable USB al computador.*

---

## 📂 Estructura del Repositorio

```text
Monitoreo_Cardiaco/
├── index.html                        # Dashboard SCADA Web (raíz para GitHub Pages)
├── styles.css                        # Diseño Cyber-Clinical 60 FPS + Responsivo Móvil
├── app.js                            # Motor DSP, Pan-Tompkins, WebSerial y Cloud MQTT
├── assets/                           # Modelo anatómico 3D (heart.glb) y recursos
├── 1_PROGRAMACION_ESP32/             # Códigos Arduino verificados para ESP32 Core 4.0.0
│   ├── 1_Lector_MAC_Receptor/        # Sketch auxiliar para obtener la MAC del Receptor
│   ├── 2_ESP32_1_Emisor_Sensor_AD8232/   # Firmware del ESP32 con el sensor AD8232
│   └── 3_ESP32_2_Receptor_Dashboard_USB/ # Firmware del ESP32 Gateway USB hacia Web
└── 2_DOCUMENTO_EXPLICATIVO_ESP32/    # Manual técnico PDF con diagramas y código comentado
```

---

## 🚀 Guía Rápida de Puesta en Marcha

1. **Obtener MAC del Receptor:** Carga `1_Lector_MAC_Receptor/esp32_p2p_mac_finder.ino` en el **ESP32 N° 2** y copia su dirección MAC física desde el Monitor Serie (115200 baudios).
2. **Programar Emisor:** Abre `2_ESP32_1_Emisor_Sensor_AD8232/esp32_p2p_sensor_emisor.ino`, pega la MAC en `receiverMacAddress[]` (línea 25) y súbelo al **ESP32 N° 1** conectado al AD8232.
3. **Programar Receptor:** Carga `3_ESP32_2_Receptor_Dashboard_USB/esp32_p2p_dashboard_receptor.ino` en el **ESP32 N° 2** y déjalo conectado por USB al computador.
4. **Conectar al Dashboard:** Abre [https://johannssss.github.io/Monitoreo_Cardiaco/](https://johannssss.github.io/Monitoreo_Cardiaco/) en Chrome o Edge, despliega `☰ MENÚ` y haz clic en **`🔌 Conectar USB`** seleccionando el puerto del ESP32 N° 2 a `115200` baudios.
5. **Ver en Teléfono / Múltiples Salas:** Cualquier persona puede abrir el mismo enlace desde su celular para observar la señal en tiempo real. Si varios equipos prueban simultáneamente, agrega `?sala=tu_nombre` al final de la URL para aislar el canal.

---

## 🔐 Credenciales de Demostración y Supervisión
* **Clave de Gestión de Pacientes (CRUD):** `admin123`
* **PIN de Supervisor Clínico (Umbrales y Excel):** `7294`

---
*Proyecto desarrollado para la cátedra de Sistema IoT / Automatismos y Programación (4to Semestre).*
