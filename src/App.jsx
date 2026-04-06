import React, { useState } from 'react';
import SharedFooter from './SharedFooter';
import WebsiteAdBanner from './assets/WebsiteAdBanner';
import SocialBar from './assets/SocialBar';
import AboutSection from './assets/AboutSection';
// The complete merged catalog with numeric prices for cart math
const componentsData = [
  // --- Micro-controllers & Boards ---
  { id: 1, name: "ATMEGA328P-PU IC", details: "", price: 4.50, category: "Micro-controllers & Boards", img: "./assets/id1.png" },
  { id: 2, name: "Arduino Pro Micro", details: "", price: 6.00, category: "Micro-controllers & Boards", img: "./assets/id2.png" },
  { id: 3, name: "Arduino Nano", details: "", price: 7.00, category: "Micro-controllers & Boards", img: "./assets/id3.png" },
  { id: 4, name: "Arduino Uno R3", details: "", price: 10.00, category: "Micro-controllers & Boards", img: "./assets/id4.png" },
  { id: 5, name: "Arduino Mega R3", details: "", price: 18.50, category: "Micro-controllers & Boards", img: "./assets/id5.png" },
  { id: 6, name: "PCF8575 IO Expander", details: "", price: 6.00, category: "Micro-controllers & Boards", img: "./assets/id6.png" },
  { id: 7, name: "FTDI Programmer", details: "", price: 5.00, category: "Micro-controllers & Boards", img: "./assets/id7.png" },
  { id: 8, name: "USB Host Shield", details: "", price: 10.00, category: "Micro-controllers & Boards", img: "./assets/id8.png" },
  { id: 9, name: "I2C Logic Level", details: "", price: 6.00, category: "Micro-controllers & Boards", img: "./assets/id9.png" },
  { id: 10, name: "L298N Motor Driver", details: "", price: 6.00, category: "Micro-controllers & Boards", img: "./assets/id10.png" },
  { id: 11, name: "L293D Motor Driver", details: "", price: 8.00, category: "Micro-controllers & Boards", img: "./assets/id11.png" },
  { id: 12, name: "BTS7960 Motor Driver", details: "", price: 15.00, category: "Micro-controllers & Boards", img: "./assets/id12.png" },

  // --- Wireless & Communication ---
  { id: 13, name: "Wemos D1 Mini", details: "", price: 6.00, category: "Wireless & Communication", img: "./assets/id13.png" },
  { id: 14, name: "NodeMCU ESP8266", details: "", price: 7.00, category: "Wireless & Communication", img: "./assets/id14.png" },
  { id: 15, name: "ESP32 Board", details: "", price: 8.00, category: "Wireless & Communication", img: "./assets/id15.png" },
  { id: 16, name: "ESP-WROOM-32", details: "", price: 10.00, category: "Wireless & Communication", img: "./assets/id16.png" },
  { id: 17, name: "Wemos Mega", details: "", price: 23.00, category: "Wireless & Communication", img: "./assets/id17.png" },
  { id: 18, name: "ESP32 Cam", details: "", price: 14.00, category: "Wireless & Communication", img: "./assets/id18.png" },
  { id: 19, name: "NRF24L01", details: "", price: 6.00, category: "Wireless & Communication", img: "./assets/id19.png" },
  { id: 20, name: "RF Nano", details: "", price: 10.00, category: "Wireless & Communication", img: "./assets/id20.png" },
  { id: 21, name: "433 MHz RF Kit", details: "", price: 6.00, category: "Wireless & Communication", img: "./assets/id21.png" },
  { id: 22, name: "Ethernet Shield (W5100)", details: "", price: 12.00, category: "Wireless & Communication", img: "./assets/id22.png" },
  { id: 23, name: "Ethernet Shield W5500", details: "", price: 9.00, category: "Wireless & Communication", img: "./assets/id23.png" },
  { id: 24, name: "Bluetooth Module (HC-05)", details: "", price: 6.00, category: "Wireless & Communication", img: "./assets/id24.png" },
  { id: 25, name: "GPS Sensor (NEO-6M)", details: "", price: 10.00, category: "Wireless & Communication", img: "./assets/id25.png" },
  { id: 26, name: "GSM & GPRS Module SIM800L", details: "", price: 10.00, category: "Wireless & Communication", img: "./assets/id26.png" },
  { id: 27, name: "GSM & GPRS Module SIM800L V2.0", details: "", price: 12.00, category: "Wireless & Communication", img: "./assets/id27.png" },
  { id: 28, name: "GSM & GPRS Module SIM900 V4.0", details: "", price: 14.00, category: "Wireless & Communication", img: "./assets/id28.png" },
  { id: 29, name: "GPS Sensor SIM808", details: "", price: 20.00, category: "Wireless & Communication", img: "./assets/id29.png" },

  // --- Sensors & Input Devices ---
  { id: 30, name: "Analog Accelerometer ADXL335", details: "", price: 8.00, category: "Sensors & Input Devices", img: "./assets/id30.png" },
  { id: 31, name: "Acceleration Module ADXL345", details: "", price: 6.00, category: "Sensors & Input Devices", img: "./assets/id31.png" },
  { id: 32, name: "Accelerometer & Gyro MPU6050", details: "", price: 7.00, category: "Sensors & Input Devices", img: "./assets/id32.png" },
  { id: 33, name: "Altimeter Module BMP388L", details: "", price: 8.00, category: "Sensors & Input Devices", img: "./assets/id33.png" },
  { id: 34, name: "Air Particle/Dust Sensor PM2.5 PMS5003", details: "", price: 20.00, category: "Sensors & Input Devices", img: "./assets/id34.png" },
  { id: 35, name: "Barcode & QR Code Reader GM805-S", details: "", price: 20.00, category: "Sensors & Input Devices", img: "./assets/id35.png" },
  { id: 36, name: "OV7670 Camera", details: "", price: 8.00, category: "Sensors & Input Devices", img: "./assets/id36.png" },
  { id: 37, name: "Color Sensor TCS230/TCS3200", details: "", price: 10.00, category: "Sensors & Input Devices", img: "./assets/id37.png" },
  { id: 38, name: "Current Sensor ACS712", details: "", price: 6.00, category: "Sensors & Input Devices", img: "./assets/id38.png" },
  { id: 39, name: "Hall Current Sensor WCS1800", details: "", price: 12.00, category: "Sensors & Input Devices", img: "./assets/id39.png" },
  { id: 40, name: "Optical Dust Sensor GP2Y1014AUOF", details: "", price: 10.00, category: "Sensors & Input Devices", img: "./assets/id40.png" },
  { id: 41, name: "ECG Module AD8232", details: "", price: 15.00, category: "Sensors & Input Devices", img: "./assets/id41.png" },
  { id: 42, name: "AC Energy Meter PZEM-004T (10A)", details: "", price: 15.00, category: "Sensors & Input Devices", img: "./assets/id42.png" },
  { id: 43, name: "AC Energy Meter PZEM-004T (100A)", details: "", price: 18.00, category: "Sensors & Input Devices", img: "./assets/id43.png" },
  { id: 44, name: "Environmental Sensor BME680", details: "", price: 12.00, category: "Sensors & Input Devices", img: "./assets/id44.png" },
  { id: 45, name: "Force Sensitive Resistor", details: "FSR402 | 0.5\" (12.7 mm) 100 g - 10 kg", price: 7.00, category: "Sensors & Input Devices", img: "./assets/id45.png" },
  { id: 46, name: "Fingerprint Sensor", details: "AS608 | Optical Sensor | 20 fingerprints capacity | USB/UART", price: 15.00, category: "Sensors & Input Devices", img: "./assets/id46.png" },
  { id: 47, name: "Flame Sensor", details: "", price: 5.00, category: "Sensors & Input Devices", img: "./assets/id47.png" },
  { id: 48, name: "Flex Sensor", details: "", price: 15.00, category: "Sensors & Input Devices", img: "./assets/id48.png" },
  { id: 49, name: "YF-S201 Flow Meter", details: "4.5V to 18V DC | 5V TTL output | 1 - 30 liters/minute range", price: 7.00, category: "Sensors & Input Devices", img: "./assets/id49.png" },
  { id: 50, name: "Float Level Sensor", details: "", price: 6.00, category: "Sensors & Input Devices", img: "./assets/id50.png" },
  { id: 51, name: "MQ Gas Sensor", details: "MQ-2 - 9", price: 5.00, category: "Sensors & Input Devices", img: "./assets/id51.png" },
  { id: 52, name: "Gas Sensor", details: "CCS811 I2C Comms | Carbon Dioxide Detection", price: 12.00, category: "Sensors & Input Devices", img: "./assets/id52.png" },
  { id: 53, name: "Gesture & ALS sensor", details: "", price: 5.00, category: "Sensors & Input Devices", img: "./assets/id53.png" },
  { id: 54, name: "Heart rate sensor", details: "MAX30102", price: 5.00, category: "Sensors & Input Devices", img: "./assets/id54.png" },
  { id: 55, name: "Humidity Sensor", details: "GY-21 | I2C High Precision", price: 6.00, category: "Sensors & Input Devices", img: "./assets/id55.png" },
  { id: 56, name: "Infrared Receiver / Transmitter", details: "Receiver (1838) | Transmitter (4838)", price: 1.50, category: "Sensors & Input Devices", img: "./assets/id56.png" },
  { id: 57, name: "Infrared Remote", details: "Over 8m range", price: 5.00, category: "Sensors & Input Devices", img: "./assets/id57.png" },
  { id: 58, name: "Infrared Sensor", details: "2 - 30cm distance | 3.3V to 5V working voltage", price: 5.00, category: "Sensors & Input Devices", img: "./assets/id58.png" },
  { id: 59, name: "Joystick Module", details: "", price: 5.00, category: "Sensors & Input Devices", img: "./assets/id59.png" },
  { id: 60, name: "Joystick Shield", details: "", price: 8.00, category: "Sensors & Input Devices", img: "./assets/id60.png" },
  { id: 61, name: "Laser Distance Sensor", details: "100cm range", price: 12.00, category: "Sensors & Input Devices", img: "./assets/id61.png" },
  { id: 62, name: "LDR Module", details: "Adjustable sensitivity", price: 5.00, category: "Sensors & Input Devices", img: "./assets/id62.png" },
  { id: 63, name: "Light Intensity Module", details: "GY-302 BH1750, I2C Coms | 0 - 65535 lux", price: 5.00, category: "Sensors & Input Devices", img: "./assets/id63.png" },
  { id: 64, name: "Water Level Sensor", details: "", price: 5.00, category: "Sensors & Input Devices", img: "./assets/id64.png" },
  { id: 65, name: "Load Cell", details: "1kg, 5kg, 10kg & 20kg", price: 6.00, category: "Sensors & Input Devices", img: "./assets/id65.png" },
  { id: 66, name: "Non-contact Level Sensor", details: "XKC-Y25-V | DC 5V ~ 25V", price: 8.00, category: "Sensors & Input Devices", img: "./assets/id66.png" },
  { id: 67, name: "4x4 Matrix Keyboard", details: "Plastic / Membrane", price: 6.00, category: "Sensors & Input Devices", img: "./assets/id67.png" },
  { id: 68, name: "Microphone", details: "", price: 5.00, category: "Sensors & Input Devices", img: "./assets/id68.png" },
  { id: 69, name: "Mic Amplifier Module", details: "MAX4466", price: 6.00, category: "Sensors & Input Devices", img: "./assets/id69.png" },
  { id: 70, name: "pH Sensor", details: "ph 0-14", price: 20.00, category: "Sensors & Input Devices", img: "./assets/id70.png" },
  { id: 71, name: "PIR Motion Sensor", details: "HC-SR501", price: 5.00, category: "Sensors & Input Devices", img: "./assets/id71.png" },
  { id: 72, name: "Mini PIR Sensor", details: "MH-SR602", price: 4.00, category: "Sensors & Input Devices", img: "./assets/id72.png" },
  { id: 73, name: "PN532 NFC Module", details: "PN532", price: 9.00, category: "Sensors & Input Devices", img: "./assets/id73.png" },
  { id: 74, name: "Barometric Pressure Sensor", details: "BMP280, I2C", price: 5.00, category: "Sensors & Input Devices", img: "./assets/id74.png" },
  { id: 75, name: "Pressure Sensor", details: "BF350", price: 1.15, category: "Sensors & Input Devices", img: "./assets/id75.png" },
  { id: 76, name: "Proximity Sensor", details: "5V, Inductive | NPN / PNP", price: 10.00, category: "Sensors & Input Devices", img: "./assets/id76.png" },
  { id: 77, name: "Pulse/Heart Rate Sensor", details: "DC 3V - 5V", price: 5.00, category: "Sensors & Input Devices", img: "./assets/id77.png" },
  { id: 78, name: "Rain Sensor", details: "Digital output | DC 3.3V - 5V", price: 5.00, category: "Sensors & Input Devices", img: "./assets/id78.png" },
  { id: 79, name: "Radar Sensor Module", details: "RCWL-0516, 4-28VDC Input", price: 6.00, category: "Sensors & Input Devices", img: "./assets/id79.png" },
  { id: 80, name: "Reed Sensor", details: "", price: 5.00, category: "Sensors & Input Devices", img: "./assets/id80.png" },
  { id: 81, name: "Real Time Clock", details: "AT24C32 DS1307 | I2C", price: 6.00, category: "Sensors & Input Devices", img: "./assets/id81.png" },
  { id: 82, name: "RFID Reader", details: "S50, S70, UltraLight, Pro, Desfire cards supported", price: 6.00, category: "Sensors & Input Devices", img: "./assets/id82.png" },
  { id: 83, name: "Soil Moisture Sensor", details: "LM393 chip | 3.3V - 5V", price: 5.00, category: "Sensors & Input Devices", img: "./assets/id83.png" },
  { id: 84, name: "AHT10 Sensor", details: "Temp & Humidity, I2C Com", price: 6.00, category: "Sensors & Input Devices", img: "./assets/id84.png" },
  { id: 85, name: "MLX90614 Non Contact Temp Sensor", details: "", price: 8.00, category: "Sensors & Input Devices", img: "./assets/id85.png" },
  { id: 86, name: "Temp Probe Sensor", details: "3.0V ~ 5.5V | -55°C ~ +125°C (±0.5°C)", price: 6.00, category: "Sensors & Input Devices", img: "./assets/id86.png" },
  { id: 87, name: "Temp IC Sensor", details: "LM35", price: 5.00, category: "Sensors & Input Devices", img: "./assets/id87.png" },
  { id: 88, name: "Temp & Humidity", details: "DHT11 / DHT22", price: 5.00, category: "Sensors & Input Devices", img: "./assets/id88.png" },
  { id: 89, name: "Thermocouple", details: "MAX6675 - K Type", price: 6.00, category: "Sensors & Input Devices", img: "./assets/id89.png" },
  { id: 90, name: "TDS Sensor", details: "", price: 8.00, category: "Sensors & Input Devices", img: "./assets/id90.png" },
  { id: 91, name: "Tilt Sensor", details: "", price: 5.00, category: "Sensors & Input Devices", img: "./assets/id91.png" },
  { id: 92, name: "Turbidity Sensor", details: "", price: 10.00, category: "Sensors & Input Devices", img: "./assets/id92.png" },
  { id: 93, name: "Ultrasonic Sensor", details: "2cm - 450cm", price: 5.00, category: "Sensors & Input Devices", img: "./assets/id93.png" },
  { id: 94, name: "UV Sensor", details: "240nm - 370nm", price: 6.00, category: "Sensors & Input Devices", img: "./assets/id94.png" },
  { id: 95, name: "Vibration Sensor", details: "SW-420 | Digital output", price: 5.00, category: "Sensors & Input Devices", img: "./assets/id95.png" },
  { id: 96, name: "Voltage Sensor", details: "ZMPT101B | 2mA", price: 6.00, category: "Sensors & Input Devices", img: "./assets/id96.png" },

  // --- Actuators & Output Devices ---
  { id: 97, name: "Buzzer", details: "Plain: $0.50 / Module: $2.00", price: 0.50, category: "Actuators & Output Devices", img: "./assets/id97.png" },
  { id: 98, name: "Brushless Fan", details: "DC 5V, 2 Pin", price: 4.00, category: "Actuators & Output Devices", img: "./assets/id98.png" },
  { id: 100, name: "OLED Display", details: "0.91\" / 0.96\" OLED", price: 6.00, category: "Actuators & Output Devices", img: "./assets/id100.png" },
  { id: 101, name: "TFT Display", details: "2.4\": $10.50 / 3.5\": $14.00", price: 10.50, category: "Actuators & Output Devices", img: "./assets/id101.png" },
  { id: 102, name: "DC Motor", details: "3V: $5.00 / 6V: $7.00 / 12V: $9.00", price: 5.00, category: "Actuators & Output Devices", img: "./assets/id102.png" },
  { id: 103, name: "Liquid Pump", details: "5V: $5.00 / 12V Inline: $12.00", price: 5.00, category: "Actuators & Output Devices", img: "./assets/id103.png" },
  { id: 104, name: "Relay Modules", details: "1ch: $3.50 / 2ch: $4.50 / 4ch: $7.00", price: 3.50, category: "Actuators & Output Devices", img: "./assets/id104.png" },
  { id: 105, name: "Solid State Relay", details: "1ch: $4.00 / 2ch: $6.00 / 4ch: $8.00", price: 4.00, category: "Actuators & Output Devices", img: "./assets/id105.png" },
  { id: 106, name: "IR Relay Module", details: "5V / 12V | 1 channel", price: 7.00, category: "Actuators & Output Devices", img: "./assets/id106.png" },
  { id: 107, name: "Servo Motors", details: "SG90: $6 / MG90S: $7 / MG995R: $10", price: 6.00, category: "Actuators & Output Devices", img: "./assets/id107.png" },
  { id: 108, name: "NEMA-17 Motor", details: "5V", price: 24.00, category: "Actuators & Output Devices", img: "./assets/id108.png" },
  { id: 109, name: "Solenoid Valve", details: "", price: 9.00, category: "Actuators & Output Devices", img: "./assets/id109.png" },
  { id: 110, name: "Wheel & Motor", details: "", price: 7.00, category: "Actuators & Output Devices", img: "./assets/id110.png" },

  // --- Power & Connections ---
  { id: 111, name: "Breadboard", details: "400 pin: $3.50 / 830 pin: $4.50", price: 3.50, category: "Power & Connections", img: "./assets/id111.png" },
  { id: 112, name: "PCB", details: "6x8 cm: $3.50 / 8x12 cm: $4.00", price: 3.50, category: "Power & Connections", img: "./assets/id112.png" },
  { id: 113, name: "Veroboard", details: "6x9 cm: $4.50 / 9x12 cm: $5.50", price: 4.50, category: "Power & Connections", img: "./assets/id113.png" },
  { id: 114, name: "Copper Clad Plate", details: "7x10 cm: $6.00 / 15x20 cm: $11.00", price: 6.00, category: "Power & Connections", img: "./assets/id114.png" },
  { id: 115, name: "Jumper cables", details: "20cm/30cm/40cm ($1 for set)", price: 1.00, category: "Power & Connections", img: "./assets/id115.png" },
  { id: 116, name: "Jumper to Aligator", details: "", price: 0.50, category: "Power & Connections", img: "./assets/id116.png" },
  { id: 117, name: "XH Plug", details: "3 Pin: $0.80 / 5 Pin: $1.00", price: 0.80, category: "Power & Connections", img: "./assets/id117.png" },
  { id: 118, name: "Breadboard Power Supply Module", details: "", price: 3.50, category: "Power & Connections", img: "./assets/id118.png" },
  { id: 119, name: "DC Power Supply Adapter", details: "5V: $10.00 / 12V: $4.00", price: 10.00, category: "Power & Connections", img: "./assets/id119.png" },
  { id: 120, name: "Battery Holder", details: "2 Bay: $2.50 / 3 Bay: $3.50", price: 2.50, category: "Power & Connections", img: "./assets/id120.png" },
  { id: 121, name: "AC - DC Step Down Transformer", details: "5V: $5.00 / 12V: $6.00", price: 5.00, category: "Power & Connections", img: "./assets/id121.png" },
  { id: 122, name: "DC - AC Inverter", details: "12VDC to 220VAC 120W", price: 10.00, category: "Power & Connections", img: "./assets/id122.png" },
  { id: 123, name: "Step-down Power Supply Module", details: "LM2596 Adjustable", price: 6.00, category: "Power & Connections", img: "./assets/id123.png" },
  { id: 124, name: "5A DC-DC Boost Converter", details: "XL6019 Adjustable", price: 6.00, category: "Power & Connections", img: "./assets/id124.png" },
  { id: 125, name: "400W 15A DC-DC Boost Converter", details: "Adjustable Voltage & Current", price: 10.00, category: "Power & Connections", img: "./assets/id125.png" },
  { id: 126, name: "Solar Battery Charger Module (1S)", details: "DC 5V solar input", price: 8.00, category: "Power & Connections", img: "./assets/id126.png" },
  { id: 127, name: "12V MPPT Solar Charge Controller", details: "SD30CRMA Controller", price: 10.00, category: "Power & Connections", img: "./assets/id127.png" },
  { id: 128, name: "UPS Battery Charger Module", details: "18650 LI Battery Charger", price: 10.00, category: "Power & Connections", img: "./assets/id128.png" },
  { id: 129, name: "Photovoltaic Solar Panel", details: "90 x 30 mm | 0.38W", price: 6.00, category: "Power & Connections", img: "./assets/id129.png" },
  { id: 130, name: "Polycrystalline Solar Panel (Small)", details: "142 x 85 mm | 2W", price: 8.00, category: "Power & Connections", img: "./assets/id130.png" },
  { id: 131, name: "Polycrystalline Solar Panel (Large)", details: "145 x 145 mm | 3W", price: 14.00, category: "Power & Connections", img: "./assets/id131.png" },

  // --- Basic Components ---
  { id: 132, name: "Capacitors", details: "Electrolytic / Ceramic", price: 0.15, category: "Basic Components", img: "./assets/id132.png" },
  { id: 133, name: "LEDs", details: "3mm / 5mm / RGB", price: 0.15, category: "Basic Components", img: "./assets/id133.png" },
  { id: 134, name: "LED Traffic Light", details: "3 x 5 mm", price: 1.50, category: "Basic Components", img: "./assets/id134.png" },
  { id: 135, name: "Push Button", details: "", price: 0.35, category: "Basic Components", img: "./assets/id135.png" },
  { id: 136, name: "Resistors", details: "", price: 0.15, category: "Basic Components", img: "./assets/id136.png" },
  { id: 137, name: "Variable Resistors", details: "", price: 0.35, category: "Basic Components", img: "./assets/id137.png" },
  { id: 138, name: "Crystal Oscillator", details: "", price: 0.35, category: "Basic Components", img: "./assets/id138.png" },
  { id: 139, name: "Headers Pins", details: "Male & female rows pair", price: 1.00, category: "Basic Components", img: "./assets/id139.png" },
  { id: 140, name: "IC Sockets", details: "", price: 0.50, category: "Basic Components", img: "./assets/id140.png" },
  { id: 141, name: "Switches", details: "Two state", price: 0.50, category: "Basic Components", img: "./assets/id141.png" },
  { id: 142, name: "Transistors", details: "TIP102/20/22/27/42/47 series", price: 0.25, category: "Basic Components", img: "./assets/id142.png" },
  { id: 143, name: "Diodes", details: "PN Junction / Zener", price: 0.15, category: "Basic Components", img: "./assets/id143.png" },
  { id: 144, name: "MOSFET", details: "IRF640N | 220V 18A", price: 1.00, category: "Basic Components", img: "./assets/id144.png" },
  { id: 145, name: "Heat Sinks", details: "", price: 1.50, category: "Basic Components", img: "./assets/id145.png" },
  { id: 146, name: "Wheel", details: "", price: 5.00, category: "Basic Components", img: "./assets/id146.png" },

  // --- DIY Drone Parts ---
  { id: 147, name: "FPV F330 MultiCopter Frame", details: "With gear: $36.00 / Without: $28.00", price: 28.00, category: "DIY Drone Parts", img: "./assets/id147.png" },
  { id: 148, name: "F330 Landing Gear Set", details: "", price: 15.00, category: "DIY Drone Parts", img: "./assets/id148.png" },
  { id: 149, name: "F330 Blades Protection Set", details: "", price: 15.00, category: "DIY Drone Parts", img: "./assets/id149.png" },
  { id: 150, name: "8045 Propeller Set", details: "Self-locking | For 2212 Motor", price: 12.00, category: "DIY Drone Parts", img: "./assets/id150.png" },
  { id: 151, name: "MX221 2212 920kv Brushless Motor Set", details: "KV: 920kv | 3mm shaft", price: 24.00, category: "DIY Drone Parts", img: "./assets/id151.png" },
  { id: 152, name: "Hobbywing Skywalker ESC Speed Controller", details: "15A: $18 / 20A: $20 / 40A: $24", price: 18.00, category: "DIY Drone Parts", img: "./assets/id152.png" },
  { id: 153, name: "FPV F450 MultiCopter Frame", details: "Max take-off weight: 1.8kg", price: 36.00, category: "DIY Drone Parts", img: "./assets/id153.png" },
  { id: 154, name: "F450 Landing Skids Set", details: "", price: 12.00, category: "DIY Drone Parts", img: "./assets/id154.png" },
  { id: 155, name: "F450 Blades Protection Set", details: "", price: 14.00, category: "DIY Drone Parts", img: "./assets/id155.png" },
  { id: 156, name: "Multicopter Kit", details: "4x ESC | 4x Motor | 4x Propeller", price: 70.00, category: "DIY Drone Parts", img: "./assets/id156.png" },
  { id: 157, name: "SpeedyBee F405 V4 BLS 55A Stack", details: "Stack: $100 / FC: $55 / ESC: $70", price: 100.00, category: "DIY Drone Parts", img: "./assets/id157.png" },

  // --- Robotics & Kits ---
  { id: 158, name: "2WD Car Chassis Kit", details: "2 Wheels + motors + Chasis", price: 20.00, category: "Robotics & Kits", img: "./assets/id158.png" },
  { id: 159, name: "4WD Car Chassis Kit", details: "4 Wheels + motors + Chasis", price: 35.00, category: "Robotics & Kits", img: "./assets/id159.png" },
  { id: 160, name: "Tanker Chassis Kit", details: "6-12V Motor", price: 40.00, category: "Robotics & Kits", img: "./assets/id160.png" },
  { id: 161, name: "4 DOF Robot Arm Kit", details: "Comes programmed", price: 40.00, category: "Robotics & Kits", img: "./assets/id161.png" },

  // --- Starter Kits ---
  { id: 162, name: "Arduino Mini Starter Kit", details: "Arduino Uno included", price: 15.00, category: "Starter Kits", img: "./assets/id162.png" },
  { id: 163, name: "Arduino Basic Starter Kit", details: "Arduino Uno + Sensors + Display", price: 20.00, category: "Starter Kits", img: "./assets/id163.png" },
  { id: 164, name: "ESP32 Basic Starter Kit", details: "ESP-32 + Relay + OLED display", price: 26.00, category: "Starter Kits", img: "./assets/id164.png" },
  { id: 165, name: "Arduino Upgraded Starter Kit", details: "Arduino Uno + LCD + Motors", price: 42.00, category: "Starter Kits", img: "./assets/id165.png" },

  // --- Raspberry Pi Boards ---
  { id: 166, name: "Raspberry Pi Pico", details: "26 multi-function GPIO", price: 20.00, category: "Raspberry Pi Boards", img: "./assets/id166.png" },
  { id: 167, name: "Raspberry Pi Pico W", details: "Infineon CYW43439 wireless chip", price: 25.00, category: "Raspberry Pi Boards", img: "./assets/id167.png" },
  { id: 168, name: "Raspberry Pi Zero W", details: "Bluetooth Low Energy | Mini HDMI", price: 40.00, category: "Raspberry Pi Boards", img: "./assets/id168.png" },
  { id: 169, name: "Raspberry Pi Zero 2 W", details: "Wi-Fi, BLE | Mini HDMI", price: 40.00, category: "Raspberry Pi Boards", img: "./assets/id169.png" },
  { id: 170, name: "Raspberry Pi Zero WH", details: "Wi-Fi, BLE | Mini HDMI", price: 45.00, category: "Raspberry Pi Boards", img: "./assets/id170.png" },
  { id: 171, name: "Raspberry Pi 3 Model A+", details: "512MB LPDDR2 SDRAM", price: 60.00, category: "Raspberry Pi Boards", img: "./assets/id171.png" },
  { id: 172, name: "Raspberry Pi 3 B", details: "1GB RAM, 64 Bit CPU", price: 80.00, category: "Raspberry Pi Boards", img: "./assets/id172.png" },
  { id: 173, name: "Raspberry Pi 3 B+", details: "1GB RAM, 64 Bit CPU", price: 80.00, category: "Raspberry Pi Boards", img: "./assets/id173.png" },
  { id: 174, name: "Raspberry Pi 4 B", details: "1GB: $159 / 2GB: $90 / 4GB: $105", price: 159.00, category: "Raspberry Pi Boards", img: "./assets/id174.png" },
  { id: 175, name: "Raspberry Pi 5 4GB", details: "4GB: $300 ", price: 300.00, category: "Raspberry Pi Boards", img: "./assets/id175.png" },
  { id: 176, name: "Raspberry Pi Compute Module 4", details: "No Wireless: $85 ", price: 65.00, category: "Raspberry Pi Boards", img: "./assets/id176.png" },
  // --- Microcontrollers ---
  { id: 177, name: "ESP32-S3-WROOM-1", details: "Dual-core 240MHz | Wi-Fi + BLE | 16MB Flash | 8MB PSRAM | Native USB", price: 15.00, category: "Microcontrollers", img: "" },

  // --- Communication Modules ---
  { id: 178, name: "Quectel BG95-M3", details: "LTE-M / NB-IoT / 2G fallback + GNSS", price: 19.85, category: "Communication Modules", img: "" },

  // --- Security ICs ---
  { id: 179, name: "ATECC608A", details: "Secure crypto element for hardware authentication", price: 25.00, category: "Security ICs", img: "" },

  // --- Power Management ---
  { id: 180, name: "TPS3430", details: "External watchdog timer IC", price: 5.00, category: "Power Management", img: "" },
  { id: 181, name: "MP1584EN Buck Converter", details: "4.5–28V input | 5V/3.3V output | 3A", price: 4.00, category: "Power Management", img: "" },
  { id: 182, name: "TLV1117-3.3 Regulator", details: "Low-noise 3.3V linear voltage regulator", price: 5.00, category: "Power Management", img: "" },
  { id: 183, name: "BQ24074 Solar Charger IC", details: "Solar-safe Li-ion charger IC | Included in bundle", price: 0.00, category: "Power Management", img: "" },

  // --- Connectors ---
  { id: 184, name: "USB-C Connector", details: "Native ESP32-S3 USB interface connector", price: 2.00, category: "Connectors", img: "" },

  // --- Power & Batteries ---
  { id: 185, name: "18650 Li-ion Battery + Charger", details: "2600 mAh | Includes USB charger", price: 7.00, category: "Power & Batteries", img: "" },
  { id: 186, name: "Supercapacitor 5.5V 1F", details: "5.5V | 1F | Backup energy storage", price: 3.00, category: "Power & Batteries", img: "" },

  // --- Protection Components ---
  { id: 187, name: "PTC Resettable Fuse", details: "2–3A protection | Set of 10", price: 4.00, category: "Protection Components", img: "" },
  { id: 188, name: "TVS Diode SMBJ58A", details: "Solar surge protection diode | Included in bundle", price: 0.00, category: "Protection Components", img: "" },

  // --- Sensors & Monitors ---
  { id: 189, name: "INA226", details: "High-side voltage/current monitor | I²C interface", price: 5.00, category: "Sensors & Monitors", img: "" },
  { id: 190, name: "Precision Shunt Resistor", details: "0.001–0.005Ω | 1–3W | 1% tolerance | $1.50 each", price: 1.50, category: "Sensors & Monitors", img: "" },
  { id: 191, name: "DS18B20 Temperature Sensor", details: "Waterproof digital temperature sensor | Included in bundle", price: 0.00, category: "Sensors & Monitors", img: "" },
  { id: 192, name: "LDR / Photodiode Set", details: "Case-open detection | Sold as a set", price: 3.00, category: "Sensors & Monitors", img: "" },
  { id: 193, name: "Reed Switch", details: "Enclosure tamper detection switch", price: 2.00, category: "Sensors & Monitors", img: "" },
  { id: 194, name: "SW-420 / SW-520D Vibration Sensor", details: "Shock / vibration detection sensor", price: 5.00, category: "Sensors & Monitors", img: "" },

  // --- Power Switching ---
  { id: 195, name: "DC MOSFET Module", details: "12–60V | ≥100A load control", price: 6.00, category: "Power Switching", img: "" },

  // --- Driver ICs ---
  { id: 196, name: "IR2101 MOSFET Gate Driver", details: "Half-bridge MOSFET/IGBT gate driver", price: 7.50, category: "Driver ICs", img: "" },

  // --- LEDs & Display ---
  { id: 197, name: "SMD LEDs  bulk 250-piece set", details: "Red / Green / Blue / Yellow / White | 250-piece set", price: 6.00, category: "LEDs & Display", img: "" },
  { id: 198, name: "WS2812B LED Ring", details: "12-LED addressable RGB ring | Optional add-on", price: 6.00, category: "LEDs & Display", img: "" },

  // --- Enclosures & Hardware ---
  { id: 199, name: "IP65 ABS Enclosure 100 × 65 × 55 mm", details: "100 × 65 × 55 mm | Weatherproof casing", price: 6.00, category: "Enclosures & Hardware", img: "" },
  { id: 200, name: "Cable Glands PG7/PG9", details: "Waterproof cable gland set", price: 6.00, category: "Enclosures & Hardware", img: "" },

  // --- PCB & Fabrication ---
  { id: 201, name: "FR-4 PCB", details: "2-layer | 50 × 70 mm | Pack of 3", price: 4.00, category: "PCB & Fabrication", img: "" },

  // --- Passive Components ---
  { id: 202, name: "R/C/L Passive Kit", details: "0402 / 0603 resistors, capacitors, inductors set", price: 6.00, category: "Passive Components", img: "" },

  // --- Tools & Consumables ---
  { id: 203, name: "Conformal Coating Spray", details: "Moisture & corrosion protection for PCBs", price: 4.00, category: "Tools & Consumables", img: "" },
  { id: 204, name: "Raspberry Pi 4 B 2GB", details: "  2GB: ", price: 179.00, category: "Raspberry Pi Boards", img: "" },
  { id: 205, name: "Raspberry Pi 4 B 4GB", details: " 4GB: ", price: 305.00, category: "Raspberry Pi Boards", img: "" },
]

const componentContacts = [

  { name: "SPARK SYSTEMS", number: "263787374675" },

  { name: "ELECTRIFAI", number: "263776868774" },

  { name: "RC Forge", number: "263780114134" }

];



// Contacts for gadget orders (rotate between these two)

const gadgetContacts = [

  { name: "RC Forge", number: "263780114134" },

  { name: "OM", number: "263784882920" }

];



function App() {

  // Component order states

  const [cart, setCart] = useState([]);

  const [orderNotes, setOrderNotes] = useState('');

  const [componentContactIndex, setComponentContactIndex] = useState(() => {

    const saved = localStorage.getItem('componentContactIndex');

    return saved !== null ? parseInt(saved, 10) : 0;

  });

  const [customerName, setCustomerName] = useState('');
  const [customerWhatsApp, setCustomerWhatsApp] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderConfirmation, setOrderConfirmation] = useState(null);



  // Gadget order states

  const [gadgetDescription, setGadgetDescription] = useState('');

  const [gadgetContactIndex, setGadgetContactIndex] = useState(() => {

    const saved = localStorage.getItem('gadgetContactIndex');

    return saved !== null ? parseInt(saved, 10) : 0;

  });



  // Component cart functions

  const addToCart = (product) => {

    setCart((prevCart) => {

      const existingItem = prevCart.find(item => item.id === product.id);

      if (existingItem) {

        return prevCart.map(item =>

          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item

        );

      }

      return [...prevCart, { ...product, quantity: 1 }];

    });

  };



  const removeFromCart = (productId) => {

    setCart((prevCart) => prevCart.filter(item => item.id !== productId));

  };



  const calculateTotal = () => {

    return cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);

  };



  // Send component order

  const sendComponentOrder = async () => {
    if (customerName.trim() === '') {
      alert('Please enter your name before booking.');
      return;
    }
    if (customerWhatsApp.trim() === '') {
      alert('Please enter your WhatsApp number before booking.');
      return;
    }

    setIsSubmitting(true);

    // Build components summary string
    const componentsList = cart.map(item =>
      `${item.name} x${item.quantity} ($${(item.price * item.quantity).toFixed(2)})`
    ).join(', ');

    const orderData = {
      customerName: customerName.trim(),
      whatsapp: customerWhatsApp.trim(),
      components: componentsList,
      totalPrice: parseFloat(calculateTotal())
    };

    try {
      const response = await fetch(
        'https://script.google.com/macros/s/AKfycbzQmvVJDWTwDrdfwEiCSR--GsM6fpdoObVmRJU7ZDd84o1zv8_Planz1sFpX8HtoIe0FQ/exec',
        {
          method: 'POST',
          body: JSON.stringify(orderData),
          redirect: 'follow'
        }
      );

      const result = await response.json();

      if (result.success) {
        const currentContact = componentContacts[componentContactIndex];

        // Save confirmation for modal
        setOrderConfirmation({
          orderId: result.orderId,
          contact: currentContact,
          componentsList,
          total: calculateTotal()
        });

        // Rotate contact index
        const nextIndex = (componentContactIndex + 1) % componentContacts.length;
        setComponentContactIndex(nextIndex);
        localStorage.setItem('componentContactIndex', nextIndex);

      } else {
        alert('Something went wrong registering your order. Please try again.');
        console.error(result.error);
      }

    } catch (err) {
      alert('Connection error. Please check your internet and try again.');
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const confirmAndOpenWhatsApp = () => {
    if (!orderConfirmation) return;

    const { orderId, contact,  total } = orderConfirmation;

    let message = ` *New Component Order from RC Forge Platform*\n\n`;
    message += ` *Order ID:* ${orderId}\n`;
    message += ` *Name:* ${customerName}\n`;
    message += ` *WhatsApp:* ${customerWhatsApp}\n\n`;
    message += `I would like to place an order for the following items:\n\n`;

    cart.forEach(item => {
      message += `• *${item.name}* x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}\n`;
    });

    message += `\n *Total Amount:* $${total}`;

    if (orderNotes.trim() !== '') {
      message += `\n\n *Notes:* ${orderNotes.trim()}`;
    }

    message += `\n\n*Order sent to:* ${contact.name}`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${contact.number}?text=${encodedMessage}`, '_blank');

    // Reset everything
    setCart([]);
    setOrderNotes('');
    setCustomerName('');
    setCustomerWhatsApp('');
    setOrderConfirmation(null);
  };


  // Send gadget order

  const sendGadgetOrder = () => {

    if (gadgetDescription.trim() === "") {

      alert("Please describe the gadget you need (laptop, phone, battery, etc.)");

      return;

    }



    const currentContact = gadgetContacts[gadgetContactIndex];

    const phoneNumber = currentContact.number;



    let message = " *New Gadget Order from RC Forge Platform* \n\n“I would like to order the following gadget(s):\n\n";

    message += `${gadgetDescription.trim()}\n\n`;

    message += ` *Order sent to:* ${currentContact.name}`;



    const encodedMessage = encodeURIComponent(message);

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;



    window.open(whatsappUrl, '_blank');



    // Rotate to next contact and save to localStorage

    const nextIndex = (gadgetContactIndex + 1) % gadgetContacts.length;

    setGadgetContactIndex(nextIndex);

    localStorage.setItem('gadgetContactIndex', nextIndex);

  };



  return (

    <div style={{ fontFamily: '"Inter", sans-serif', background: '#f5f6fa', minHeight: '100vh', padding: '20px' }}>
      <SocialBar /> 
      {/* Header */}

      <header style={{

        display: 'flex',

        alignItems: 'center',

        justifyContent: 'center',

        gap: '20px',

        marginBottom: '40px',

        padding: '20px',

        background: '#4d9db3',

        color: '#fff',

        borderRadius: '10px'

      }}>

        <img

          src="RCForgelogo.png"

          alt="RC Forge Logo"

          style={{ height: '60px', width: 'auto', borderRadius: '5px' }}

          onError={(e) => { e.target.style.display = 'none'; }}

        />

        <div style={{ textAlign: 'left' }}>

          <h1 style={{ margin: 0, letterSpacing: '2px' }}>RC FORGE</h1>

          <p style={{ margin: '5px 0 0', color: '#00cec9' }}>Precision Electronic Components</p>

        </div>

      </header>

      <WebsiteAdBanner />
      <AboutSection />
      <main style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', gap: '20px', flexDirection: 'row', flexWrap: 'wrap' }}>

        {/* Products Grid */}

        <div style={{ flex: 3, display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '20px' }}>

          {componentsData.map(product => (

            <div key={product.id} style={{ background: '#fff', borderRadius: '10px', padding: '15px', textAlign: 'center', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>

              <div>

                <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', color: '#636e72', background: '#44c4fc', padding: '3px 8px', borderRadius: '12px', display: 'inline-block', marginBottom: '10px' }}>

                  {product.category}

                </div>

                <div style={{ height: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'hsl(189, 92%, 47%)', borderRadius: '8px', overflow: 'hidden' }}>

                  <img src={product.img} alt={product.name} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}

                    onError={(e) => { e.target.style.display = 'none'; e.target.parentNode.innerText = ' Image Ready'; }} />

                </div>

                <h3 style={{ fontSize: '1rem', margin: '15px 0 5px', color: '#2d3436' }}>{product.name}</h3>

                {product.details && (

                  <p style={{ fontSize: '0.8rem', color: '#b2bec3', margin: '0 0 10px', minHeight: '35px' }}>{product.details}</p>

                )}

              </div>

              <div>

                <p style={{ fontWeight: 'bold', color: '#0984e3', margin: '10px 0 15px', fontSize: '1.2rem' }}>${product.price.toFixed(2)}</p>

                <button

                  onClick={() => addToCart(product)}

                  style={{ width: '100%', padding: '10px', background: '#2d3436', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold', transition: 'background 0.2s' }}

                  onMouseOver={(e) => e.target.style.background = '#0984e3'}

                  onMouseOut={(e) => e.target.style.background = '#2d3436'}

                >

                  Add to Order

                </button>

              </div>

            </div>

          ))}

        </div>



        {/* Sidebar Cart */}

        <div style={{ flex: 1, minWidth: '320px', background: '#f7f8fa', padding: '20px', borderRadius: '10px', height: 'fit-content', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', position: 'sticky', top: '20px' }}>

          <h2 style={{ marginTop: 0, borderBottom: '2px solid #e0e5f8', paddingBottom: '10px' }}>Your Order</h2>

          {cart.length === 0 ? (

            <p style={{ color: '#040607' }}>No items selected yet.</p>

          ) : (

            <>

              <div style={{ maxHeight: '400px', overflowY: 'auto', paddingRight: '5px' }}>

                {cart.map(item => (

                  <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px', fontSize: '0.9rem', borderBottom: '1px solid #09090a', paddingBottom: '5px' }}>

                    <span style={{ flex: 2, paddingRight: '10px' }}>{item.name} <br /><small style={{ color: '#18b6fa' }}>x{item.quantity}</small></span>

                    <span style={{ fontWeight: 'bold', flex: 1, textAlign: 'right', marginRight: '10px' }}>${(item.price * item.quantity).toFixed(2)}</span>

                    <button

                      onClick={() => removeFromCart(item.id)}

                      style={{ background: '#ff7675', color: '#fff', border: 'none', borderRadius: '50%', width: '22px', height: '22px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', fontWeight: 'bold' }}

                      title="Remove from cart"

                    >

                      ✕

                    </button>

                  </div>

                ))}

              </div>

                {/* Customer Details */}
                <div style={{ marginTop: '15px' }}>
                  <label style={{ fontSize: '0.9rem', fontWeight: 'bold', color: '#2d3436', display: 'block', marginBottom: '5px' }}>
                    Your Name:
                  </label>
                  <input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="Enter your full name"
                    style={{
                      width: '100%', padding: '8px 10px', borderRadius: '5px',
                      border: '1px solid #dfe6e9', fontSize: '0.9rem',
                      boxSizing: 'border-box', marginBottom: '10px'
                    }}
                  />
                  <label style={{ fontSize: '0.9rem', fontWeight: 'bold', color: '#2d3436', display: 'block', marginBottom: '5px' }}>
                    Your WhatsApp Number:
                  </label>
                  <input
                    type="tel"
                    value={customerWhatsApp}
                    onChange={(e) => setCustomerWhatsApp(e.target.value)}
                    placeholder="e.g. 263780114134"
                    style={{
                      width: '100%', padding: '8px 10px', borderRadius: '5px',
                      border: '1px solid #dfe6e9', fontSize: '0.9rem',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                
              {/* Order Notes Textarea */}

              <div style={{ marginTop: '15px' }}>

                <label style={{ fontSize: '0.9rem', fontWeight: 'bold', color: '#2d3436', display: 'block', marginBottom: '5px' }}>Order Notes:</label>

                <textarea

                  value={orderNotes}

                  onChange={(e) => setOrderNotes(e.target.value)}

                  placeholder="Write specific instructions here: IMPORTANT (university name/location), OPTIONAL (e.g., resistor values, etc)..."

                  style={{

                    width: '100%',

                    minHeight: '80px',

                    borderRadius: '5px',

                    border: '1px solid #dfe6e9',

                    padding: '10px',

                    fontFamily: 'inherit',

                    fontSize: '0.9rem',

                    boxSizing: 'border-box',

                    resize: 'vertical'

                  }}

                />

              </div>



              <div style={{ borderTop: '2px solid #f5f6fa', marginTop: '15px', paddingTop: '15px', display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', fontSize: '1.2rem' }}>

                <span>Total:</span>

                <span style={{ color: '#0984e3' }}>${calculateTotal()}</span>

              </div>

                <button
                  onClick={sendComponentOrder}
                  disabled={isSubmitting}
                  style={{
                    width: '100%', marginTop: '20px', padding: '15px',
                    background: isSubmitting ? '#b2bec3' : '#00b894',
                    color: '#fff', border: 'none', borderRadius: '5px',
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    fontWeight: 'bold', fontSize: '1.1rem', transition: 'background 0.2s'
                  }}
                >
                  {isSubmitting ? 'Registering Order...' : 'Book via WhatsApp'}
                </button>

            </>

          )}

        </div>

      </main>



      {/* Gadget Order Section */}

      <div style={{ maxWidth: '1400px', margin: '40px auto 0', background: '#fff', borderRadius: '10px', padding: '20px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>

        <h2 style={{ margin: '0 0 10px', color: '#2d3436', borderBottom: '2px solid #44c4fc', display: 'inline-block', paddingBottom: '5px' }}>

          Gadget Orders (Laptops, Phones, Batteries, Phone Parts)

        </h2>

        <p style={{ color: '#636e72', marginBottom: '20px' }}>

          Describe the gadget(s) you need. Orders will be rotated between RC Forge and OM.

        </p>

        <textarea

          value={gadgetDescription}

          onChange={(e) => setGadgetDescription(e.target.value)}

          placeholder="Example: iPhone 12 Pro Max 256GB (Gold) – New, or Laptop battery for Dell XPS 15 – 6-cell"

          style={{

            width: '100%',

            minHeight: '120px',

            borderRadius: '5px',

            border: '1px solid #dfe6e9',

            padding: '10px',

            fontFamily: 'inherit',

            fontSize: '1rem',

            boxSizing: 'border-box',

            resize: 'vertical',

            marginBottom: '20px'

          }}

        />

        <button

          onClick={sendGadgetOrder}

          style={{ padding: '12px 24px', background: '#0984e3', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold', fontSize: '1rem', transition: 'background 0.2s' }}

          onMouseOver={(e) => e.target.style.background = '#0652dd'}

          onMouseOut={(e) => e.target.style.background = '#0984e3'}

        >

          Send Gadget Inquiry via WhatsApp

        </button>

      </div>

      {/* Order Confirmation Modal */}
      {orderConfirmation && (
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
          background: 'rgba(0,0,0,0.6)', zIndex: 1000,
          display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px',
          boxSizing: 'border-box'
        }}>
          <div style={{
            background: '#fff', borderRadius: '12px', padding: '30px',
            maxWidth: '480px', width: '100%', textAlign: 'center',
            boxShadow: '0 10px 40px rgba(0,0,0,0.3)'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '10px' }}>✅</div>
            <h2 style={{ color: '#00b894', margin: '0 0 10px' }}>Order Registered!</h2>
            <p style={{ color: '#636e72', marginBottom: '20px' }}>
              Your order has been logged in our system. Save your Order ID to track your order over WhatsApp.
            </p>
            <div style={{
              background: '#f0f9f6', border: '2px dashed #00b894',
              borderRadius: '8px', padding: '15px', marginBottom: '20px'
            }}>
              <p style={{ margin: 0, fontSize: '0.85rem', color: '#636e72' }}>Your Order ID</p>
              <p style={{ margin: '5px 0 0', fontSize: '1.6rem', fontWeight: 'bold', color: '#2d3436', letterSpacing: '2px' }}>
                {orderConfirmation.orderId}
              </p>
            </div>
            <p style={{ fontSize: '0.85rem', color: '#636e72', marginBottom: '25px' }}>
              📌 <strong>Keep this ID.</strong> Quote it on WhatsApp so the team can find your order instantly.
            </p>
            <button
              onClick={confirmAndOpenWhatsApp}
              style={{
                width: '100%', padding: '14px', background: '#25D366',
                color: '#fff', border: 'none', borderRadius: '8px',
                cursor: 'pointer', fontWeight: 'bold', fontSize: '1.1rem',
                marginBottom: '10px'
              }}
            >
              💬 Open WhatsApp to Confirm Order
            </button>
            <button
              onClick={() => setOrderConfirmation(null)}
              style={{
                width: '100%', padding: '10px', background: 'transparent',
                color: '#b2bec3', border: '1px solid #dfe6e9', borderRadius: '8px',
                cursor: 'pointer', fontSize: '0.9rem'
              }}
            >
              Go Back
            </button>
          </div>
        </div>
      )}

      <SharedFooter />

    </div>



  );

}



export default App;