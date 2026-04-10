import React, { useState, useMemo } from 'react';
import SharedFooter from './SharedFooter';
import WebsiteAdBanner from './assets/WebsiteAdBanner';
import SocialBar from './assets/SocialBar';
import AboutSection from './assets/AboutSection';

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
  { id: 63, name: "Light Intensity Module GY-302 BH1750, I2C Coms", details: "GY-302 BH1750, I2C Coms | 0 - 65535 lux", price: 5.00, category: "Sensors & Input Devices", img: "./assets/id63.png" },
  { id: 64, name: "Water Level Sensor", details: "", price: 5.00, category: "Sensors & Input Devices", img: "./assets/id64.png" },
  { id: 65, name: "Load Cell", details: "1kg, 5kg, 10kg & 20kg", price: 6.00, category: "Sensors & Input Devices", img: "./assets/id65.png" },
  { id: 66, name: "Non-contact Level Sensor XKC-Y25-V ", details: "XKC-Y25-V | DC 5V ~ 25V", price: 8.00, category: "Sensors & Input Devices", img: "./assets/id66.png" },
  { id: 67, name: "4x4 Matrix Keyboard", details: "Plastic / Membrane", price: 6.00, category: "Sensors & Input Devices", img: "./assets/id67.png" },
  { id: 68, name: "Microphone", details: "", price: 5.00, category: "Sensors & Input Devices", img: "./assets/id68.png" },
  { id: 69, name: "Mic Amplifier Module MAX4466", details: "MAX4466", price: 6.00, category: "Sensors & Input Devices", img: "./assets/id69.png" },
  { id: 70, name: "pH Sensor", details: "ph 0-14", price: 20.00, category: "Sensors & Input Devices", img: "./assets/id70.png" },
  { id: 71, name: "PIR Motion Sensor HC-SR501", details: "HC-SR501", price: 5.00, category: "Sensors & Input Devices", img: "./assets/id71.png" },
  { id: 72, name: "Mini PIR Sensor MH-SR602", details: "MH-SR602", price: 4.00, category: "Sensors & Input Devices", img: "./assets/id72.png" },
  { id: 73, name: "PN532 NFC Module", details: "PN532", price: 9.00, category: "Sensors & Input Devices", img: "./assets/id73.png" },
  { id: 74, name: "Barometric Pressure Sensor BMP280, I2C", details: "BMP280, I2C", price: 5.00, category: "Sensors & Input Devices", img: "./assets/id74.png" },
  { id: 75, name: "Pressure Sensor", details: "BF350", price: 1.15, category: "Sensors & Input Devices", img: "./assets/id75.png" },
  { id: 76, name: "Proximity Sensor", details: "5V, Inductive | NPN / PNP", price: 10.00, category: "Sensors & Input Devices", img: "./assets/id76.png" },
  { id: 77, name: "Pulse/Heart Rate Sensor", details: "DC 3V - 5V", price: 5.00, category: "Sensors & Input Devices", img: "./assets/id77.png" },
  { id: 78, name: "Rain Sensor", details: "Digital output | DC 3.3V - 5V", price: 5.00, category: "Sensors & Input Devices", img: "./assets/id78.png" },
  { id: 79, name: "Radar Sensor Module", details: "RCWL-0516, 4-28VDC Input", price: 6.00, category: "Sensors & Input Devices", img: "./assets/id79.png" },
  { id: 80, name: "Reed Sensor", details: "", price: 5.00, category: "Sensors & Input Devices", img: "./assets/id80.png" },
  { id: 81, name: "Real Time Clock AT24C32 DS1307 | I2C", details: "AT24C32 DS1307 | I2C", price: 6.00, category: "Sensors & Input Devices", img: "./assets/id81.png" },
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
  { id: 104.0, name: "Relay Modules single channel", details: "1ch: $3.50 ", price: 3.50, category: "Actuators & Output Devices", img: "./assets/id104.png" },
  { id: 104.1, name: "Relay Modules 2 channel", details: "2ch: $4.50 ", price: 4.50, category: "Actuators & Output Devices", img: "./assets/id104.png" },
  { id: 104.2, name: "Relay Modules 4 channel", details: " 4ch: $7.00", price: 7.00, category: "Actuators & Output Devices", img: "./assets/id104.png" },
  { id: 105.0, name: "Solid State Relay 1ch", details: "1ch: $4.00 ", price: 4.00, category: "Actuators & Output Devices", img: "./assets/id105.png" },
  { id: 105.1, name: "Solid State Relay 2ch", details: "2ch: $6.00 ", price: 6.00, category: "Actuators & Output Devices", img: "./assets/id105.png" },
  { id: 105.2, name: "Solid State Relay 4ch", details: "/ 4ch: $8.00", price: 8.00, category: "Actuators & Output Devices", img: "./assets/id105.png" },
  { id: 106, name: "IR Relay Module  1 channel", details: "5V / 12V | 1 channel", price: 7.00, category: "Actuators & Output Devices", img: "./assets/id106.png" },
  { id: 107.0, name: "Servo Motors SG90", details: "SG90: $6 ", price: 6.00, category: "Actuators & Output Devices", img: "./assets/id107.png" },
  { id: 107.1, name: "Servo Motors SG90", details: " MG90S: $8 ", price: 8.00, category: "Actuators & Output Devices", img: "./assets/id107.png" },
  { id: 107.2, name: "Servo Motors MG995R:", details: " MG995R: $10", price: 10.00, category: "Actuators & Output Devices", img: "./assets/id107.png" },
  { id: 108, name: "NEMA-17 Motor", details: "5V", price: 24.00, category: "Actuators & Output Devices", img: "./assets/id108.png" },
  { id: 109, name: "Solenoid Valve", details: "", price: 9.00, category: "Actuators & Output Devices", img: "./assets/id109.png" },
  { id: 110, name: "Wheel & Motor", details: "", price: 7.00, category: "Actuators & Output Devices", img: "./assets/id110.png" },

  // --- Power & Connections ---
  { id: 111.0, name: "Breadboard 400 pin", details: " 400 pin: $3.50", price: 3.50, category: "Power & Connections", img: "./assets/id111.png" },
  { id: 111.1, name: "Breadboard 830 pin:", details: " 830 pin: $4.50", price: 4.50, category: "Power & Connections", img: "./assets/id111.png" },
  { id: 112.0, name: "PCB 6x8 cm", details: "6x8 cm: $3.50 ", price: 3.50, category: "Power & Connections", img: "./assets/id112.png" },
  { id: 112.1, name: "PCB 8x12 cm:", details: " 8x12 cm: $4.00", price: 4.00, category: "Power & Connections", img: "./assets/id112.png" },
  { id: 113.0, name: "Veroboard 6x9 cm: ", details: "6x9 cm: $4.50 ", price: 4.50, category: "Power & Connections", img: "./assets/id113.png" },
  { id: 113.1, name: "Veroboard 9x12 cm:", details: " 9x12 cm: $5.50", price: 5.50, category: "Power & Connections", img: "./assets/id113.png" },
  { id: 114.0, name: "Copper Clad Plate 7x10 cm:", details: "7x10 cm: $6.00 ", price: 6.00, category: "Power & Connections", img: "./assets/id114.png" },
  { id: 114.1, name: "Copper Clad Plate  15x20 cm:", details: "15x20 cm: $11.00", price: 11.00, category: "Power & Connections", img: "./assets/id114.png" },
  { id: 115, name: "Jumper cables 20cm/30cm/40cm", details: "20cm/30cm/40cm ($1 for set)", price: 1.00, category: "Power & Connections", img: "./assets/id115.png" },
  { id: 116, name: "Jumper to Aligator", details: "", price: 0.50, category: "Power & Connections", img: "./assets/id116.png" },
  { id: 117.0, name: "XH Plug 3 Pin", details: "3 Pin: $0.80 ", price: 0.80, category: "Power & Connections", img: "./assets/id117.png" },
  { id: 117.1, name: "XH Plug  5 Pin", details: " 5 Pin: $1.00", price: 1.00, category: "Power & Connections", img: "./assets/id117.png" },
  { id: 118, name: "Breadboard Power Supply Module", details: "", price: 3.50, category: "Power & Connections", img: "./assets/id118.png" },
  { id: 119.0, name: "DC Power Supply Adapter", details: "5V: $10.00 ", price: 10.00, category: "Power & Connections", img: "./assets/id119.png" },
  { id: 119.1, name: "DC Power Supply Adapter", details: "  12V: $4.00", price: 4.00, category: "Power & Connections", img: "./assets/id119.png" },
  { id: 120.0, name: "Battery Holder 2 Bay:", details: "2 Bay: $2.50 ", price: 2.50, category: "Power & Connections", img: "./assets/id120.png" },
  { id: 120.1, name: "Battery Holder 3 Bay ", details: " 3 Bay: $3.50", price: 3.50, category: "Power & Connections", img: "./assets/id120.png" },
  { id: 121.0, name: "AC - DC Step Down Transformer 5V", details: "5V: $5.00 ", price: 5.00, category: "Power & Connections", img: "./assets/id121.png" },
  { id: 121.1, name: "AC - DC Step Down Transformer 12V:", details: " 12V: $6.00", price: 6.00, category: "Power & Connections", img: "./assets/id121.png" },
  { id: 122, name: "DC - AC Inverter", details: "12VDC to 220VAC 120W", price: 10.00, category: "Power & Connections", img: "./assets/id122.png" },
  { id: 123, name: "Step-down Power Supply Module LM2596 Adjustable", details: "LM2596 Adjustable", price: 6.00, category: "Power & Connections", img: "./assets/id123.png" },
  { id: 124, name: "5A DC-DC Boost Converter", details: "XL6019 Adjustable", price: 6.00, category: "Power & Connections", img: "./assets/id124.png" },
  { id: 125, name: "400W 15A DC-DC Boost Converter", details: "Adjustable Voltage & Current", price: 10.00, category: "Power & Connections", img: "./assets/id125.png" },
  { id: 126, name: "Solar Battery Charger Module (1S) DC 5V solar input", details: "DC 5V solar input", price: 8.00, category: "Power & Connections", img: "./assets/id126.png" },
  { id: 127, name: "12V MPPT Solar Charge Controller", details: "SD30CRMA Controller", price: 10.00, category: "Power & Connections", img: "./assets/id127.png" },
  { id: 128, name: "UPS Battery Charger Module 18650 LI", details: "18650 LI Battery Charger", price: 10.00, category: "Power & Connections", img: "./assets/id128.png" },
  { id: 129, name: "Photovoltaic Solar Panel 90 x 30 mm | 0.38W", details: "90 x 30 mm | 0.38W", price: 6.00, category: "Power & Connections", img: "./assets/id129.png" },
  { id: 130, name: "Polycrystalline Solar Panel (Small) 142 x 85 mm | 2W", details: "142 x 85 mm | 2W", price: 8.00, category: "Power & Connections", img: "./assets/id130.png" },
  { id: 131, name: "Polycrystalline Solar Panel (Large) 145 x 145 mm | 3W", details: "145 x 145 mm | 3W", price: 14.00, category: "Power & Connections", img: "./assets/id131.png" },

  // --- Basic Components ---
  { id: 132, name: "Capacitors Electrolytic / Ceramic", details: "Electrolytic / Ceramic", price: 0.15, category: "Basic Components", img: "./assets/id132.png" },
  { id: 133, name: "LEDs 3mm / 5mm / RGB", details: "3mm / 5mm / RGB", price: 0.15, category: "Basic Components", img: "./assets/id133.png" },
  { id: 134, name: "LED Traffic Light", details: "3 x 5 mm", price: 1.50, category: "Basic Components", img: "./assets/id134.png" },
  { id: 135, name: "Push Button", details: "", price: 0.35, category: "Basic Components", img: "./assets/id135.png" },
  { id: 136, name: "Resistors", details: "", price: 0.15, category: "Basic Components", img: "./assets/id136.png" },
  { id: 137, name: "Variable Resistors", details: "", price: 0.35, category: "Basic Components", img: "./assets/id137.png" },
  { id: 138, name: "Crystal Oscillator", details: "", price: 0.35, category: "Basic Components", img: "./assets/id138.png" },
  { id: 139, name: "Headers Pins Male & female rows pair", details: "Male & female rows pair", price: 1.00, category: "Basic Components", img: "./assets/id139.png" },
  { id: 140, name: "IC Sockets", details: "", price: 0.50, category: "Basic Components", img: "./assets/id140.png" },
  { id: 141, name: "Switches", details: "Two state", price: 0.50, category: "Basic Components", img: "./assets/id141.png" },
  { id: 142, name: "Transistors TIP102/20/22/27/42/47 series", details: "TIP102/20/22/27/42/47 series", price: 0.25, category: "Basic Components", img: "./assets/id142.png" },
  { id: 143, name: "Diodes PN Junction / Zener", details: "PN Junction / Zener", price: 0.15, category: "Basic Components", img: "./assets/id143.png" },
  { id: 144, name: "MOSFET IRF640N | 220V 18A", details: "IRF640N | 220V 18A", price: 1.00, category: "Basic Components", img: "./assets/id144.png" },
  { id: 145, name: "Heat Sinks", details: "", price: 1.50, category: "Basic Components", img: "./assets/id145.png" },
  { id: 146, name: "Wheel", details: "", price: 5.00, category: "Basic Components", img: "./assets/id146.png" },

  // --- DIY Drone Parts ---
  { id: 147.0, name: "FPV F330 MultiCopter Frame Without gear", details: " Without: $28.00", price: 28.00, category: "DIY Drone Parts", img: "./assets/id147.png" },
  { id: 147.1, name: "FPV F330 MultiCopter Frame With gear:", details: "With gear: $36.00 ", price: 36.00, category: "DIY Drone Parts", img: "./assets/id147.png" },
  { id: 148, name: "F330 Landing Gear Set", details: "", price: 15.00, category: "DIY Drone Parts", img: "./assets/id148.png" },
  { id: 149, name: "F330 Blades Protection Set", details: "", price: 15.00, category: "DIY Drone Parts", img: "./assets/id149.png" },
  { id: 150, name: "8045 Propeller Set", details: "Self-locking | For 2212 Motor", price: 12.00, category: "DIY Drone Parts", img: "./assets/id150.png" },
  { id: 151, name: "MX221 2212 920kv Brushless Motor Set", details: "KV: 920kv | 3mm shaft", price: 24.00, category: "DIY Drone Parts", img: "./assets/id151.png" },
  { id: 152.0, name: "Hobbywing Skywalker ESC Speed Controller", details: " 20A: $20 ", price: 18.00, category: "DIY Drone Parts", img: "./assets/id152.png" },
  { id: 152.1, name: "Hobbywing Skywalker ESC Speed Controller 15A", details: "15A: $18 ", price: 18.00, category: "DIY Drone Parts", img: "./assets/id152.png" },
  { id: 152.2, name: "Hobbywing Skywalker ESC Speed Controller 20A", details: " / 20A: $20 ", price: 20.00, category: "DIY Drone Parts", img: "./assets/id152.png" },
  { id: 152.3, name: "Hobbywing Skywalker ESC Speed Controller 40A:", details: " 40A: $24", price: 24.00, category: "DIY Drone Parts", img: "./assets/id152.png" },
  { id: 153, name: "FPV F450 MultiCopter Frame", details: "Max take-off weight: 1.8kg", price: 36.00, category: "DIY Drone Parts", img: "./assets/id153.png" },
  { id: 154, name: "F450 Landing Skids Set", details: "", price: 12.00, category: "DIY Drone Parts", img: "./assets/id154.png" },
  { id: 155, name: "F450 Blades Protection Set", details: "", price: 14.00, category: "DIY Drone Parts", img: "./assets/id155.png" },
  { id: 156, name: "Multicopter Kit", details: "4x ESC | 4x Motor | 4x Propeller", price: 70.00, category: "DIY Drone Parts", img: "./assets/id156.png" },
  { id: 157, name: "SpeedyBee F405 V4 BLS 55A Stack", details: "Stack: $100 / FC: $55 / ESC: $70", price: 100.00, category: "DIY Drone Parts", img: "./assets/id157.png" },

  // --- Robotics & Kits ---
  { id: 158, name: "2WD Car Chassis Kit 2 Wheels + motors + Chasis", details: "2 Wheels + motors + Chasis", price: 20.00, category: "Robotics & Kits", img: "./assets/id158.png" },
  { id: 159, name: "4WD Car Chassis Kit 4 Wheels + motors + Chasis", details: "4 Wheels + motors + Chasis", price: 35.00, category: "Robotics & Kits", img: "./assets/id159.png" },
  { id: 160, name: "Tanker Chassis Kit 6-12V Motor ", details: "6-12V Motor", price: 40.00, category: "Robotics & Kits", img: "./assets/id160.png" },
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
  { id: 204, name: "Raspberry Pi 4 B 2GB", details: "  2GB: ", price: 179.00, category: "Raspberry Pi Boards", img: "" },
  { id: 205, name: "Raspberry Pi 4 B 4GB", details: " 4GB: ", price: 305.00, category: "Raspberry Pi Boards", img: "" },

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
  { id: 187, name: "PTC Resettable Fuse Set of 10", details: "2–3A protection | Set of 10", price: 4.00, category: "Protection Components", img: "" },
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

  // --- Signal Conditioning ---
  { id: 214, name: "Precision Op-Amp OPA2134PA", details: "Dual Audio Op-Amp | Low Noise | DIP-8 | ±18V supply", price: 0.00, category: "Signal Conditioning", img: "" },
  { id: 215, name: "Instrumentation Amplifier INA128P", details: "Low Noise | G=1–10,000 | CMRR 120dB | DIP-8", price: 0.00, category: "Signal Conditioning", img: "" },
  { id: 216, name: "16-Bit ADC ADS1115IDGST", details: "4-Ch | I²C | 860SPS | 2.0–5.5V | TSSOP-10", price: 0.00, category: "Signal Conditioning", img: "" },
  { id: 217, name: "12-Bit DAC MCP4725A0T-E/OT", details: "Single Ch | I²C | 12-bit | 2.7–5.5V | SOT-23-6", price: 0.00, category: "Signal Conditioning", img: "" },
  { id: 218, name: "555 Timer NE555P", details: "Classic Timer IC | PWM / Monostable / Astable | DIP-8", price: 0.00, category: "Signal Conditioning", img: "" },
  { id: 219, name: "Quad Op-Amp LM324N", details: "4 x Op-Amp | Single Supply 3–32V | DIP-14", price: 0.00, category: "Signal Conditioning", img: "" },
  { id: 220, name: "AND Gate IC 74HC08N", details: "Quad 2-Input AND Gate | 2–6V | DIP-14", price: 0.00, category: "Signal Conditioning", img: "" },
  { id: 221, name: "OR Gate IC 74HC32N", details: "Quad 2-Input OR Gate | 2–6V | DIP-14", price: 0.00, category: "Signal Conditioning", img: "" },
  { id: 222, name: "NOT Gate IC 74HC04N", details: "Hex Inverter | 2–6V | DIP-14", price: 0.00, category: "Signal Conditioning", img: "" },
  { id: 223, name: "NAND Gate IC 74HC00N", details: "Quad 2-Input NAND Gate | 2–6V | DIP-14", price: 0.00, category: "Signal Conditioning", img: "" },
  { id: 224, name: "Flip-Flop IC 74HC74N", details: "Dual D-Type Positive-Edge Flip-Flop | DIP-14", price: 0.00, category: "Signal Conditioning", img: "" },
  { id: 225, name: "Shift Register IC 74HC595N", details: "8-Bit Serial-In Parallel-Out | 2–6V | DIP-16", price: 0.00, category: "Signal Conditioning", img: "" },
  { id: 226, name: "Multiplexer IC 74HC4051N", details: "8-Ch Analog Mux/Demux | 2–10V | DIP-16", price: 0.00, category: "Signal Conditioning", img: "" },

  // --- Industrial & Power Systems ---
  { id: 227, name: "IGBT FGA25N120ANTD", details: "1200V 25A N-Ch | TO-247 | For AC Drives & Inverters", price: 0.00, category: "Industrial & Power Systems", img: "" },
  { id: 228, name: "TRIAC BTA16-600BRG", details: "600V 16A | TO-220AB | AC Dimming & High-Power Switching", price: 0.00, category: "Industrial & Power Systems", img: "" },
  { id: 229, name: "SCR BT151-500R", details: "500V 12A | TO-220 | Phase Control & Power Switching", price: 0.00, category: "Industrial & Power Systems", img: "" },
  { id: 230, name: "Current Transformer SCT-013-030", details: "30A Non-Invasive | Split-Core | 1V output | AC Monitoring", price: 10.00, category: "Industrial & Power Systems", img: "" },
  { id: 231, name: "RS485 Module MAX485CSA+", details: "Half-Duplex | 2.5Mbps | Modbus Compatible | SOP-8", price: 0.00, category: "Industrial & Power Systems", img: "" },
  { id: 232, name: "CAN Bus Module MCP2515-I/ST", details: "SPI Interface | 1Mbps | Automotive/Robotics | TSSOP-20", price: 0.00, category: "Industrial & Power Systems", img: "" },
  { id: 233, name: "Optocoupler PC817C", details: "Single Ch | 35V | CTR 100–300% | DIP-4 | Galvanic Isolation", price: 0.00, category: "Industrial & Power Systems", img: "" },
  { id: 234, name: "Optocoupler 4N35", details: "Single Ch | 70V | CTR 100% | DIP-6 | High Voltage Isolation", price: 0.00, category: "Industrial & Power Systems", img: "" },
  { id: 235, name: "Isolated Gate Driver TLP250H", details: "IGBT/MOSFET Driver | Optocoupled | ±1.5A | DIP-8", price: 0.00, category: "Industrial & Power Systems", img: "" },
  { id: 236, name: "Bridge Rectifier KBPC5010", details: "1000V 50A | Flat Package | AC-to-DC High Power Conversion", price: 0.00, category: "Industrial & Power Systems", img: "" },
  { id: 237, name: "Varistor MOV 10D471K", details: "470V Clamping | 10mm Disc | Transient Overvoltage Protection", price: 0.00, category: "Industrial & Power Systems", img: "" },
  { id: 238, name: "AC Solid State Relay SSR-40DA", details: "3–32V DC Control | 24–480V AC Load | 40A | Panel Mount", price: 0.00, category: "Industrial & Power Systems", img: "" },

  // --- Actuation & Feedback ---
  { id: 239, name: "Stepper Driver TMC2208-LA-T", details: "Silent StealthChop2 | UART | 2A RMS | 5.5–36V | SilentStepStick", price: 0.00, category: "Actuation & Feedback", img: "" },
  { id: 240, name: "Stepper Driver A4988SETTR-T", details: "1/16 Microstepping | 2A | 8–35V | SilentStepStick Module", price: 0.00, category: "Actuation & Feedback", img: "" },
  { id: 241, name: "Hall Effect Sensor SS49E", details: "Linear Ratiometric | 5V | ±90mT Range | TO-92 | Position/Current", price: 0.00, category: "Actuation & Feedback", img: "" },
  { id: 242, name: "Optical Encoder LPD3806-600BM-G5-24C", details: "600PPR | 5–24V | A/B Quadrature Output | Incremental Rotary", price: 0.00, category: "Actuation & Feedback", img: "" },
  { id: 243, name: "Magnetic Encoder AS5600L-ASOM", details: "12-Bit | I²C | 0–360° Contactless | SOT-23-8 | Motor Feedback", price: 0.00, category: "Actuation & Feedback", img: "" },
  { id: 244, name: "Linear Actuator LA-T8-12V-50", details: "12V DC | 50mm Stroke | 750N Max Force | Built-in Limit Switches", price: 0.00, category: "Actuation & Feedback", img: "" },
  { id: 245, name: "Servo Driver PCA9685PW", details: "16-Ch | 12-Bit PWM | I²C | 2.3–5.5V | TSSOP-28", price: 0.00, category: "Actuation & Feedback", img: "" },

  // --- Protection & Thermal ---
  { id: 246, name: "High-Performance Thermal Paste MX-4", details: "8.5W/m·K | 4g Tube | CPU / MOSFET / IGBT Heatsink Mounting", price: 0.00, category: "Protection & Thermal", img: "" },
  { id: 247, name: "Thermal Pad 100x100mm 1mm 3W", details: "Silicone | 3W/m·K | 100×100×1mm | Cut-to-size Sheet", price: 0.00, category: "Protection & Thermal", img: "" },
  { id: 248, name: "Resettable Fuse MF-R135", details: "1.35A Hold | 2.7A Trip | PPTC | Through-Hole | Overcurrent Protection", price: 1.00, category: "Protection & Thermal", img: "" },
  { id: 249, name: "TVS Diode P6KE18A", details: "18V Uni-directional | 600W Peak | DO-15 | Transient Surge Protection", price: 0.00, category: "Protection & Thermal", img: "" },
  { id: 250, name: "Schottky Diode SS34", details: "40V 3A | SMA | Low Forward Voltage 0.5V | Reverse Polarity Protection", price: 0.00, category: "Protection & Thermal", img: "" },
  { id: 251, name: "Fast Recovery Diode UF4007", details: "1000V 1A | DO-41 | 75ns Recovery | Flyback & Rectification", price: 0.00, category: "Protection & Thermal", img: "" },

  // --- Power Management (extended) ---
  { id: 252, name: "Buck Converter Module LM2596S-ADJ", details: "40V Input | 1.25–37V Adj. Output | 3A | TO-263-5 | With Onboard Inductor", price: 0.00, category: "Power Management", img: "" },
  { id: 253, name: "Boost Converter Module MT3608", details: "2–24V Input | Up to 28V Output | 2A | Fixed/Adj. | SOT-23-6", price: 0.00, category: "Power Management", img: "" },
  { id: 254, name: "LDO Regulator AMS1117-3.3", details: "3.3V | 1A | SOT-223 | Low Dropout | Microcontroller Supply", price: 0.00, category: "Power Management", img: "" },
  { id: 255, name: "LDO Regulator AMS1117-5.0", details: "5.0V | 1A | SOT-223 | Low Dropout | Logic & Sensor Supply", price: 0.00, category: "Power Management", img: "" },
  { id: 256, name: "Li-Ion Charger IC TP4056", details: "1A | 4.2V | USB-C Input | With Protection | SOT-23 / Module", price: 0.00, category: "Power Management", img: "" },
  { id: 257, name: "Solar MPPT Charger CN3791", details: "40V Input | Li-Ion / LiFePO4 | MPPT Tracking | SOP-16", price: 0.00, category: "Power Management", img: "" },
  { id: 258, name: "Supercapacitor 2.7V 10F", details: "2.7V | 10F | 0.1Ω ESR | Radial | Backup & Burst Energy Storage", price: 0.00, category: "Power Management", img: "" },
  { id: 259, name: "Voltage Reference IC LM4040CIM3-3.0", details: "3.0V Precision Shunt | 0.1% | SOT-23 | ADC Reference", price: 0.00, category: "Power Management", img: "" },
  { id: 260, name: "Power Monitor IC INA219BIDR", details: "26V | 3.2A | I²C | 12-bit | SOP-8 | Current/Voltage/Power", price: 0.00, category: "Power Management", img: "" },

  // --- Wireless & IoT (extended) ---
  { id: 261, name: "LoRa Module Ra-02 SX1278", details: "433MHz | -148dBm Sensitivity | 20dBm | SPI | 10km Range", price: 0.00, category: "Wireless & Communication", img: "" },
  { id: 262, name: "LoRa Module E32-915T20D SX1276", details: "915MHz | UART | 20dBm | 3km LoS | UART Transparent", price: 0.00, category: "Wireless & Communication", img: "" },
  { id: 263, name: "Zigbee Module XBee S2C", details: "2.4GHz | Mesh Network | 1.2km LoS | 802.15.4 | UART/SPI", price: 0.00, category: "Wireless & Communication", img: "" },
  { id: 264, name: "4G LTE Module SIM7600G-H", details: "Global LTE Cat-4 | 150Mbps DL | GNSS | USB / UART", price: 0.00, category: "Wireless & Communication", img: "" },
  { id: 265, name: "Wi-Fi + BLE Module ATWINC1500-MR210PB", details: "802.11 b/g/n | BLE 4.0 | SPI | 2.4GHz | Microchip IoT Module", price: 0.00, category: "Wireless & Communication", img: "" },

  // --- Memory & Storage ---
  { id: 266, name: "EEPROM AT24C256C-SSHL-T", details: "256Kbit | I²C | 1MHz | 2.5–5.5V | SOP-8 | Data Logging", price: 0.00, category: "Memory & Storage", img: "" },
  { id: 267, name: "Flash Memory W25Q128JVSIQ", details: "128Mbit | SPI | 133MHz | 2.7–3.6V | SOIC-8 | Firmware Storage", price: 0.00, category: "Memory & Storage", img: "" },
  { id: 268, name: "FRAM MB85RS256BPNF-G-JNERE1", details: "256Kbit | SPI | Unlimited Write Cycles | SOP-8 | Non-volatile RAM", price: 4.50, category: "Memory & Storage", img: "" },
  { id: 269, name: "MicroSD Card Module", details: "SPI Interface | 3.3V/5V Compatible | FAT32 | Data Logging", price: 0.00, category: "Memory & Storage", img: "" },

  // --- Display Modules ---
  { id: 270, name: "LCD 16x2 HD44780 Module", details: "16x2 Character | 5V | Parallel/I²C | Blue/Green Backlight", price: 0.00, category: "Actuators & Output Devices", img: "" },
  { id: 271, name: "LCD 20x4 HD44780 Module", details: "20x4 Character | 5V | I²C Backpack | Blue Backlight", price: 0.00, category: "Actuators & Output Devices", img: "" },
  { id: 272, name: "E-Paper Display 2.9\" GDEH029A1", details: "296x128 | SPI | 3.3V | Ultra-Low Power | Black/White", price: 0.00, category: "Actuators & Output Devices", img: "" },
  { id: 273, name: "7-Segment Display TM1637 4-Digit", details: "0.36\" | I²C | Clock/Counter Display | 3.3–5V | Red", price: 0.00, category: "Actuators & Output Devices", img: "" },
  { id: 274, name: "MAX7219 LED Matrix Module 8x8", details: "8x8 Dot Matrix | SPI | 3.3–5V | Chainable | 64 LEDs", price: 0.00, category: "Actuators & Output Devices", img: "" },

  // --- Audio ---
  { id: 275, name: "Audio Amplifier PAM8403 Module", details: "2x3W | Class-D | 5V | Filterless | USB Powered | Stereo", price: 0.00, category: "Actuators & Output Devices", img: "" },
  { id: 276, name: "MP3 Player Module DFPlayer Mini", details: "FAT16/32 | MicroSD | UART | 3W Built-in Amp | Arduino Ready", price: 0.00, category: "Actuators & Output Devices", img: "" },
  { id: 277, name: "I2S Microphone Breakout INMP441", details: "Omnidirectional | I²S | 24-bit | 3.3V | SNR 61dB | MEMS", price: 0.00, category: "Sensors & Input Devices", img: "" },

  // --- Enclosures & Hardware ---
  { id: 278, name: "Standoff M3 Hex Brass Spacer Kit", details: "M3 | 6/10/15/20mm | Male-Female Brass | 120pcs Assorted", price: 0.00, category: "Enclosures & Hardware", img: "" },
  { id: 279, name: "M3 Nylon Screw & Nut Kit", details: "M3 | 6/10/20mm Screws + Nuts + Washers | 180pcs | PCB Mounting", price: 0.00, category: "Enclosures & Hardware", img: "" },
  { id: 280, name: "DIN Rail Mount Enclosure 6-Module", details: "6-Module | ABS | For MCB/Terminal/Relay | Panel Board Mounting", price: 0.00, category: "Enclosures & Hardware", img: "" },
  { id: 281, name: "Terminal Block Screw Connector 2-Pin 5.08mm", details: "2-Pin | 5.08mm Pitch | 300V 15A | PCB Mount | Blue", price: 0.00, category: "Connectors", img: "" },
  { id: 282, name: "Terminal Block Screw Connector 3-Pin 5.08mm", details: "3-Pin | 5.08mm Pitch | 300V 15A | PCB Mount | Blue", price: 0.00, category: "Connectors", img: "" },

  // --- Test & Measurement ---
  { id: 283, name: "Logic Analyzer 8-Ch 24MHz USB", details: "8-Ch | 24MHz | Compatible with PulseView/Sigrok | USB | 3.3–5V", price: 0.00, category: "Tools & Consumables", img: "" },
  { id: 284, name: "Oscilloscope DSO138 Kit", details: "1Msps | 200kHz BW | 2.4\" TFT | DIY Soldering Kit | Single Ch", price: 0.00, category: "Tools & Consumables", img: "" },
  { id: 285, name: "Multimeter DT830D", details: "Auto-Range | AC/DC Voltage | Resistance | Diode Test | LCD", price: 0.00, category: "Tools & Consumables", img: "" },
  { id: 286, name: "LCR Meter ESR / Capacitance Tester", details: "Inductance / Capacitance / Resistance / ESR | 1% Accuracy | Auto", price: 0.00, category: "Tools & Consumables", img: "" },
  { id: 287, name: "Soldering Iron TS100 65W", details: "65W | PD / DC 12–24V | Digital | Interchangeable Tips | Portable", price: 0.00, category: "Tools & Consumables", img: "" },
  { id: 288, name: "Solder Wire Sn63Pb37 0.8mm 100g", details: "63/37 Tin-Lead | 0.8mm | Rosin Core | 100g Reel | Low-temp", price: 0.00, category: "Tools & Consumables", img: "" },
  { id: 289, name: "Flux Pen MG Chemicals 835-P", details: "No-Clean | Rosin Flux | SMD Rework | Fine Tip Pen Applicator", price: 0.00, category: "Tools & Consumables", img: "" },
  { id: 290, name: "Desoldering Pump ZD-108", details: "Spring Loaded | Aluminium Body | Anti-static | Through-hole Rework", price: 0.00, category: "Tools & Consumables", img: "" },
  { id: 291, name: "Heat Gun 858D 700W", details: "700W | 100–500°C Adjustable | SMD Rework | LCD Temperature Display", price: 0.00, category: "Tools & Consumables", img: "" },
  { id: 292, name: "Third-Hand Soldering Station with Magnifier", details: "5x Magnifier | Alligator Clips | Weighted Base | PCB Holder", price: 0.00, category: "Tools & Consumables", img: "" },

  // =====================================================================
  // --- NEW COMPONENTS (id 293+) — price: 0.00, full specs in name/details
  // =====================================================================

  // --- Microcontrollers & SoCs ---
  { id: 293, name: "STM32F103C8T6 Blue Pill Board", details: "ARM Cortex-M3 | 72MHz | 64KB Flash | 20KB SRAM | USB | CAN | SPI | I2C | UART | 3.3V | LQFP-48", price: 0.00, category: "Micro-controllers & Boards", img: "" },
  { id: 294, name: "STM32F401CCU6 Black Pill Board", details: "ARM Cortex-M4 | 84MHz | 256KB Flash | 64KB SRAM | USB-C | SPI | I2C | UART | 3.3V | LQFP-48", price: 0.00, category: "Micro-controllers & Boards", img: "" },
  { id: 295, name: "RP2040 Microcontroller IC Bare Chip", details: "Dual Cortex-M0+ | 133MHz | 264KB SRAM | 30 GPIO | QFN-56 | Used in Pi Pico", price: 0.00, category: "Micro-controllers & Boards", img: "" },
  { id: 296, name: "Arduino Leonardo ATmega32U4", details: "ATmega32U4 | 16MHz | 32KB Flash | 2.5KB SRAM | Native USB HID | 20 Digital I/O", price: 0.00, category: "Micro-controllers & Boards", img: "" },
  { id: 297, name: "Teensy 4.0 Development Board NXP iMXRT1062", details: "NXP iMXRT1062 | 600MHz ARM Cortex-M7 | 1MB RAM | 2MB Flash | USB | 40 I/O | 3.3V", price: 0.00, category: "Micro-controllers & Boards", img: "" },

  // --- Wireless & Communication (extended) ---
  { id: 298, name: "HC-06 Bluetooth Serial Module", details: "Bluetooth 2.0 | Slave Only | UART | 3.3V–5V | 10m Range | Arduino Compatible", price: 6.00, category: "Wireless & Communication", img: "" },
  { id: 299, name: "SX1262 LoRa Module EBYTE E22-900M30S", details: "868/915MHz | -148dBm | 30dBm | SPI | Up to 30km LoS | Low Power", price: 0.00, category: "Wireless & Communication", img: "" },
  { id: 300, name: "ESP8266-01S Wi-Fi Module", details: "Wi-Fi 802.11 b/g/n | UART AT Commands | 3.3V | 2MB Flash | Low-cost IoT", price: 0.00, category: "Wireless & Communication", img: "" },
  { id: 301, name: "nRF52840 Dongle Nordic USB", details: "Bluetooth 5.0 + BLE + Thread + Zigbee | USB | 1MB Flash | 256KB RAM | -40 to +85°C", price: 0.00, category: "Wireless & Communication", img: "" },
  { id: 302, name: "Quectel EC21-A Mini PCIe LTE Module", details: "LTE Cat 1 | 10Mbps DL / 5Mbps UL | USB 2.0 | UART | GPS | -40 to +85°C", price: 0.00, category: "Communication Modules", img: "" },

  // --- Sensors (extended) ---
  { id: 303, name: "VL53L0X Time-of-Flight Distance Sensor GY-530", details: "940nm Laser | Up to 2m | I²C | 2.8V–5V | 30ms Response | ±3% Accuracy | 4.4×2.4mm", price: 0.00, category: "Sensors & Input Devices", img: "" },
  { id: 304, name: "ICM-42688-P 6-Axis IMU Module", details: "3-Axis Gyro + 3-Axis Accel | SPI/I²C | ±2000dps / ±16g | Low Noise | QFN-14", price: 0.00, category: "Sensors & Input Devices", img: "" },
  { id: 305, name: "SHT31-D Humidity & Temperature Sensor Breakout", details: "±2% RH / ±0.3°C | I²C | 2.15–5.5V | -40 to +125°C | DFN-8 | High Accuracy", price: 0.00, category: "Sensors & Input Devices", img: "" },
  { id: 306, name: "APDS-9960 Gesture RGB Proximity Sensor Module", details: "RGB + Gesture + Proximity + ALS | I²C | 3.3V | 10cm Range | 3.94×2.36mm", price: 0.00, category: "Sensors & Input Devices", img: "" },
  { id: 307, name: "AS7262 6-Channel Visible Spectral Sensor Breakout", details: "450–650nm | 6 Ch | I²C / UART | 2.7–3.6V | 28-QFN | Colour & Light Analysis", price: 0.00, category: "Sensors & Input Devices", img: "" },
  { id: 308, name: "Capacitive Soil Moisture Sensor v2.0", details: "Analog Output | 3.3V–5V | Corrosion Resistant | No Electrolysis | Arduino Compatible", price: 0.00, category: "Sensors & Input Devices", img: "" },
  { id: 309, name: "MAX31865 PT100/PT1000 RTD Temperature Amplifier", details: "15-bit ADC | SPI | ±0.03°C Resolution | -200 to +850°C | TSSOP-16", price: 0.00, category: "Sensors & Input Devices", img: "" },
  { id: 310, name: "HX711 Load Cell Amplifier Module", details: "24-Bit ADC | 10Hz/80Hz SPS | 2-wire Interface | 2.7–5.25V | For Scales & Force Sensors", price: 0.00, category: "Sensors & Input Devices", img: "" },
  { id: 311, name: "OPT3001DNPR Ambient Light Sensor", details: "0.01–83865 lux | I²C | Human Eye Response | USON-6 | 1.6–3.6V | ±20% Accuracy", price: 0.00, category: "Sensors & Input Devices", img: "" },
  { id: 312, name: "Micro Switch Limit Switch SS-5GL2", details: "5A 250VAC | Momentary | Long Hinge Lever | SPDT | PCB / Panel Mount", price: 0.00, category: "Sensors & Input Devices", img: "" },
  { id: 313, name: "Encoder Rotary KY-040 Module", details: "360° Rotation | 20 Pulses/Rev | 5V | Push Button | A/B Phase Output | Arduino Ready", price: 0.00, category: "Sensors & Input Devices", img: "" },

  // --- Displays ---
  { id: 314, name: "ILI9341 2.8\" TFT LCD SPI Display 240x320", details: "240×320 | SPI | 2.8\" | 16-bit Colour | Touch Option | 3.3V / 5V Compatible", price: 0.00, category: "Actuators & Output Devices", img: "" },
  { id: 315, name: "SSD1306 1.3\" OLED Display I2C 128x64", details: "128×64 | I²C | 1.3\" | White Pixels | 3.3V–5V | SH1106 Compatible", price: 0.00, category: "Actuators & Output Devices", img: "" },
  { id: 316, name: "WS2812B Addressable LED Strip 60 LEDs/m 1m", details: "60 LED/m | RGB | 5V | Individual Addressable | IP30 | 1m | 18W/m", price: 0.00, category: "LEDs & Display", img: "" },
  { id: 317, name: "APA102C Addressable LED Strip 60 LEDs/m 1m", details: "60 LED/m | RGB+White | SPI | 5V | High Refresh Rate | 1m | For Video/Sync", price: 0.00, category: "LEDs & Display", img: "" },
  { id: 318, name: "Nextion NX4827T043 4.3\" HMI TFT LCD Display", details: "4.3\" | 480×272 | Resistive Touch | UART | Built-in MCU | 5V | For Arduino / Pi", price: 0.00, category: "Actuators & Output Devices", img: "" },

  // --- Motor Drivers & Controllers ---
  { id: 319, name: "DRV8825 Stepper Motor Driver Module", details: "1/32 Microstepping | 2.5A Peak | 8.2–45V | STEP/DIR Interface | Heat-sink Included", price: 0.00, category: "Actuation & Feedback", img: "" },
  { id: 320, name: "TB6600 Stepper Motor Driver 9–42V 4A", details: "9–42V | 4A Max | 1/32 Microstepping | Single Supply | Optocoupled Inputs | CNC/3D Print", price: 0.00, category: "Actuation & Feedback", img: "" },
  { id: 321, name: "VNH2SP30 Monster Motor Shield 30A Arduino", details: "30A Cont. | 41V Max | Full H-Bridge | SPI | PWM Speed | Current Sense | Arduino Shield", price: 0.00, category: "Actuation & Feedback", img: "" },
  { id: 322, name: "MX1508 Mini Dual DC Motor Driver 1.5A 2–10V", details: "1.5A Per Ch | 2–10V | PWM | H-Bridge | 2-Ch | Ultra-compact | Arduino/Pi Compatible", price: 0.00, category: "Actuation & Feedback", img: "" },

  // --- Power Management (new additions) ---
  { id: 323, name: "XL4016 DC-DC Buck Converter 8A 4–40V Adjustable", details: "4–40V Input | 1.25–36V Output | 8A | PWM Adjustable | LED Display Module", price: 0.00, category: "Power Management", img: "" },
  { id: 324, name: "IP5306 Li-Ion Battery Power Bank IC SOP-8", details: "5V USB Out | 1A Charge / 2.4A Discharge | I²C Status | SOP-8 | Auto Power-off", price: 0.00, category: "Power Management", img: "" },
  { id: 325, name: "MCP73831T-2ACI/OT Li-Ion Charge Controller SOT-23-5", details: "4.2V | 500mA Max | Charge Status LED | SOT-23-5 | Single Cell | USB Charging", price: 0.00, category: "Power Management", img: "" },
  { id: 326, name: "LM317T Adjustable Voltage Regulator 1.2–37V TO-220", details: "1.2–37V Output | 1.5A | TO-220 | Low Noise | Classic Linear Regulator", price: 0.00, category: "Power Management", img: "" },
  { id: 327, name: "7805 +5V Fixed Linear Voltage Regulator TO-220", details: "+5V Fixed | 1A | TO-220 | Input 7–35V | Classic MCU Supply | Dropout 2V", price: 0.00, category: "Power Management", img: "" },
  { id: 328, name: "7812 +12V Fixed Linear Voltage Regulator TO-220", details: "+12V Fixed | 1A | TO-220 | Input 14–35V | Relay / Fan / Motor Supply", price: 0.00, category: "Power Management", img: "" },

  // --- Audio & Signal Processing ---
  { id: 329, name: "MAX98357A I2S Class-D Amplifier Breakout 3W 4Ω", details: "3W | 4Ω / 8Ω | I²S Digital Input | 5V | No RC Filters | Mono | Raspberry Pi / ESP32", price: 0.00, category: "Actuators & Output Devices", img: "" },
  { id: 330, name: "VS1053B MP3 OGG AAC MIDI Codec IC LQFP-48", details: "MP3/OGG/AAC/WMA/FLAC/MIDI | SPI | DAC | 3.3V | SCI/SDI Interface | LQFP-48", price: 0.00, category: "Signal Conditioning", img: "" },

  // --- Connectors & Cables ---
  { id: 331, name: "JST PH 2.0mm 2-Pin Connector Male Female Pair 10-set", details: "2.0mm Pitch | 2-Pin | JST PH | Male + Female Crimp Set | 10 Pairs | Battery Connector", price: 0.00, category: "Connectors", img: "" },
  { id: 332, name: "XT60 Male Female Connector Pair High-Current 60A", details: "60A Continuous | 30V | Gold Plated | 12–10AWG | LiPo / LiIon Battery Connector", price: 0.00, category: "Connectors", img: "" },
  { id: 333, name: "Micro USB Type-B PCB Socket 5-Pin SMD", details: "5-Pin | SMD | Micro USB Type-B | 5V | Board-Mount Charging / Data Port", price: 0.00, category: "Connectors", img: "" },
  { id: 334, name: "USB Type-C 16-Pin SMD Receptacle Connector", details: "16-Pin | SMD | 5V–20V | USB 2.0 / PD Compatible | Bottom Mount | PCB Level", price: 0.00, category: "Connectors", img: "" },

  // --- RF & Antenna ---
  { id: 335, name: "SMA Female PCB Edge-Mount Connector 50Ω", details: "50Ω | SMA Female | PCB Edge Mount | Gold Plated | For RF Modules / LoRa / Wi-Fi Antenna", price: 0.00, category: "Wireless & Communication", img: "" },
  { id: 336, name: "2.4GHz Omnidirectional Antenna RP-SMA 3dBi 15cm Pigtail", details: "2.4GHz | 3dBi Gain | RP-SMA Male | 15cm Coax Pigtail | Wi-Fi / BLE / Zigbee", price: 0.00, category: "Wireless & Communication", img: "" },
  { id: 337, name: "915MHz LoRa Antenna SMA Male 3dBi 15cm", details: "915MHz | 3dBi | SMA Male | 50Ω | Fibreglass | For LoRa / LoRaWAN / SigFox Modules", price: 0.00, category: "Wireless & Communication", img: "" },

  // --- Passive Components (extended) ---
  { id: 338, name: "Electrolytic Capacitor Assortment Kit 0.1uF–2200uF 500pcs", details: "0.1µF–2200µF | 16V–50V | Through-Hole Radial | 24 Values | 500pcs | Aluminium", price: 0.00, category: "Passive Components", img: "" },
  { id: 339, name: "Ceramic Capacitor Assortment Kit 1pF–100nF 600pcs", details: "1pF–100nF | 50V | 0805 SMD | 30 Values | 600pcs | Multilayer Ceramic (MLCC)", price: 0.00, category: "Passive Components", img: "" },
  { id: 340, name: "Metal Film Resistor Kit 1Ω–10MΩ 1% 600pcs", details: "1Ω–10MΩ | 1% Tolerance | 1/4W | Through-Hole | 60 Values | 600pcs | Metal Film", price: 0.00, category: "Passive Components", img: "" },
  { id: 341, name: "Inductor Assortment Kit 1uH–10mH 125pcs", details: "1µH–10mH | 0.4A–2A | Through-Hole | Radial Shielded | 25 Values | 125pcs", price: 0.00, category: "Passive Components", img: "" },
  { id: 342, name: "Ferrite Bead 600Ω 100MHz 0402 SMD Pack of 100", details: "600Ω @ 100MHz | 0402 | 300mA | EMI Suppression | SMD | 100pcs | FBMH1005HM601", price: 0.00, category: "Passive Components", img: "" },

  // --- Mechanical / Structural ---
  { id: 343, name: "Stepper Motor 28BYJ-48 5V with ULN2003 Driver Board", details: "5V DC | 1/64 Reduction | 200mA | UART Step | Unipolar | Includes ULN2003 PCB Driver", price: 0.00, category: "Actuation & Feedback", img: "" },
  { id: 344, name: "Micro Metal Gear Motor 6V 300RPM N20 with Encoder", details: "6V | 300RPM | N20 | 1:30 Gear | Carbon Brush | Encoder 7 PPR | 25mm Shaft | Dual Shaft", price: 0.00, category: "Actuators & Output Devices", img: "" },
  { id: 345, name: "Worm Gear Motor 12V 10RPM JGY-370 High Torque", details: "12V | 10RPM | JGY-370 | 0.8–1Nm Torque | Self-locking Worm | For Locks/Valves/Lifts", price: 0.00, category: "Actuators & Output Devices", img: "" },

  // --- Prototyping & Fabrication ---
  { id: 346, name: "KiCad 6 Compatible SMD Prototype PCB 10x10cm Set of 5", details: "10×10cm | 2-Layer | FR-4 | 1.6mm | HASL | Green Solder Mask | White Silkscreen | 5pcs", price: 0.00, category: "PCB & Fabrication", img: "" },
  { id: 347, name: "Kapton Polyimide Tape 10mm x 33m High Temp", details: "10mm Wide | 33m Roll | 260°C Rated | PCB Masking | Reflow Soldering | Electronics Repair", price: 0.00, category: "Tools & Consumables", img: "" },
  { id: 348, name: "Lead-Free Solder Paste Sn42Bi58 138°C Syringe 10cc", details: "Sn42Bi58 | Low Temp 138°C | No-Clean | 10cc Syringe | SMD Reflow | T4 Particle Size", price: 0.00, category: "Tools & Consumables", img: "" },
  { id: 349, name: "PCB Drill Bit Set 0.3mm–1.2mm 10 Sizes HSS", details: "0.3/0.4/0.5/0.6/0.7/0.8/0.9/1.0/1.1/1.2mm | HSS | Carbide Coated | PCB / Via Drilling", price: 0.00, category: "Tools & Consumables", img: "" },
  { id: 350, name: "Anti-Static ESD Wrist Strap Adjustable with Grounding Lead", details: "Adjustable Band | 1MΩ Resistor | 1.8m Coiled Lead | Alligator Clip | PCB / IC Safety", price: 0.00, category: "Tools & Consumables", img: "" },
];

const componentContacts = [
  { name: "SPARK SYSTEMS", number: "263787374675" },
  { name: "ELECTRIFAI", number: "263776868774" },
  { name: "RC Forge", number: "263780114134" }
];

const gadgetContacts = [
  { name: "RC Forge", number: "263780114134" },
  { name: "OM", number: "263784882920" }
];

// ─── Search Bar Component ─────────────────────────────────────────────────────
function SearchBar({ searchTerm, setSearchTerm, resultCount, totalCount }) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div style={{ maxWidth: '1400px', margin: '0 auto 28px', padding: '0 4px' }}>
      {/* Search container */}
      <div style={{
        background: isFocused
          ? 'linear-gradient(135deg, #1a2a3a 0%, #0d1f2d 100%)'
          : 'linear-gradient(135deg, #162533 0%, #0d1a25 100%)',
        borderRadius: '16px',
        padding: '20px 24px',
        boxShadow: isFocused
          ? '0 8px 32px rgba(0, 196, 252, 0.18), 0 2px 8px rgba(0,0,0,0.25)'
          : '0 4px 20px rgba(0,0,0,0.2)',
        transition: 'all 0.3s ease',
        border: isFocused ? '1.5px solid rgba(0, 196, 252, 0.45)' : '1.5px solid rgba(255,255,255,0.06)',
      }}>
        {/* Label row */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{
              fontSize: '1.15rem',
              fontWeight: '700',
              color: '#e0f4ff',
              letterSpacing: '0.3px'
            }}>
              🔍 Search Components
            </span>
            <span style={{
              fontSize: '0.72rem',
              background: 'rgba(0, 196, 252, 0.15)',
              color: '#00c4fc',
              border: '1px solid rgba(0, 196, 252, 0.3)',
              borderRadius: '20px',
              padding: '2px 10px',
              fontWeight: '600',
              letterSpacing: '0.5px',
              textTransform: 'uppercase'
            }}>
              {totalCount} items
            </span>
          </div>
          {searchTerm && (
            <span style={{
              fontSize: '0.78rem',
              color: resultCount === 0 ? '#ff7675' : '#55efc4',
              fontWeight: '600',
              background: resultCount === 0 ? 'rgba(255, 118, 117, 0.12)' : 'rgba(85, 239, 196, 0.12)',
              border: `1px solid ${resultCount === 0 ? 'rgba(255,118,117,0.3)' : 'rgba(85,239,196,0.3)'}`,
              borderRadius: '20px',
              padding: '3px 12px',
              transition: 'all 0.2s'
            }}>
              {resultCount === 0 ? 'No results' : `${resultCount} found`}
            </span>
          )}
        </div>

        {/* Input row */}
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '12px' }}>
          {/* Search icon */}
          <div style={{
            position: 'absolute',
            left: '16px',
            top: '50%',
            transform: 'translateY(-50%)',
            fontSize: '1.1rem',
            opacity: isFocused ? 1 : 0.5,
            transition: 'opacity 0.2s',
            pointerEvents: 'none'
          }}>
            🔎
          </div>

          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder="e.g. Arduino, ESP32, sensor, relay, BMP280, motor driver..."
            style={{
              flex: 1,
              padding: '14px 120px 14px 48px',
              borderRadius: '10px',
              border: isFocused
                ? '1.5px solid rgba(0, 196, 252, 0.6)'
                : '1.5px solid rgba(255,255,255,0.1)',
              background: 'rgba(255,255,255,0.05)',
              color: '#e8f4fd',
              fontSize: '0.98rem',
              fontFamily: 'inherit',
              outline: 'none',
              transition: 'all 0.25s ease',
              letterSpacing: '0.2px',
              caretColor: '#00c4fc',
            }}
          />

          {/* Clear button */}
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              style={{
                position: 'absolute',
                right: '130px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'rgba(255,255,255,0.1)',
                border: 'none',
                borderRadius: '50%',
                width: '26px',
                height: '26px',
                cursor: 'pointer',
                color: '#b2bec3',
                fontSize: '0.85rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'background 0.2s',
              }}
              onMouseOver={e => e.currentTarget.style.background = 'rgba(255,118,117,0.3)'}
              onMouseOut={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
              title="Clear search"
            >
              ✕
            </button>
          )}

          {/* Search pill button */}
          <button
            onClick={() => { }}
            style={{
              position: 'absolute',
              right: '10px',
              top: '50%',
              transform: 'translateY(-50%)',
              padding: '8px 18px',
              background: 'linear-gradient(135deg, #0984e3, #00b4d8)',
              color: '#fff',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: '700',
              fontSize: '0.82rem',
              letterSpacing: '0.5px',
              transition: 'opacity 0.2s',
              boxShadow: '0 2px 8px rgba(9,132,227,0.35)'
            }}
          >
            Search
          </button>
        </div>

        {/* Quick filter chips */}
        <div style={{ marginTop: '14px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {['Arduino', 'ESP32', 'Sensor', 'Relay', 'Motor', 'Display', 'Raspberry Pi', 'LoRa', 'Power'].map(tag => (
            <button
              key={tag}
              onClick={() => setSearchTerm(tag)}
              style={{
                padding: '4px 12px',
                borderRadius: '20px',
                border: searchTerm.toLowerCase() === tag.toLowerCase()
                  ? '1.5px solid #00c4fc'
                  : '1.5px solid rgba(255,255,255,0.12)',
                background: searchTerm.toLowerCase() === tag.toLowerCase()
                  ? 'rgba(0, 196, 252, 0.2)'
                  : 'rgba(255,255,255,0.05)',
                color: searchTerm.toLowerCase() === tag.toLowerCase() ? '#00c4fc' : '#9ab',
                fontSize: '0.75rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.18s',
                letterSpacing: '0.3px',
              }}
              onMouseOver={e => {
                if (searchTerm.toLowerCase() !== tag.toLowerCase()) {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                  e.currentTarget.style.color = '#e0f4ff';
                }
              }}
              onMouseOut={e => {
                if (searchTerm.toLowerCase() !== tag.toLowerCase()) {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                  e.currentTarget.style.color = '#9ab';
                }
              }}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Main App ─────────────────────────────────────────────────────────────────
function App() {
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
  const [gadgetDescription, setGadgetDescription] = useState('');
  const [gadgetContactIndex, setGadgetContactIndex] = useState(() => {
    const saved = localStorage.getItem('gadgetContactIndex');
    return saved !== null ? parseInt(saved, 10) : 0;
  });

  // ── Search state ──
  const [searchTerm, setSearchTerm] = useState('');

  // ── Filtered products ──
  const filteredProducts = useMemo(() => {
    if (!searchTerm.trim()) return componentsData;
    const lower = searchTerm.toLowerCase();
    return componentsData.filter(p =>
      p.name.toLowerCase().includes(lower) ||
      p.category.toLowerCase().includes(lower) ||
      (p.details && p.details.toLowerCase().includes(lower))
    );
  }, [searchTerm]);

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

  const sendComponentOrder = async () => {
    if (customerName.trim() === '') { alert('Please enter your name before booking.'); return; }
    if (customerWhatsApp.trim() === '') { alert('Please enter your WhatsApp number before booking.'); return; }
    setIsSubmitting(true);
    const orderData = {
      token: import.meta.env.VITE_ORDER_TOKEN,
      customerName: customerName.trim(),
      whatsapp: customerWhatsApp.trim(),
      items: cart.map(item => ({ name: item.name, quantity: item.quantity, unitPrice: item.price })),
      totalPrice: parseFloat(calculateTotal())
    };
    try {
      const response = await fetch(
        'https://script.google.com/macros/s/AKfycbzQmvVJDWTwDrdfwEiCSR--GsM6fpdoObVmRJU7ZDd84o1zv8_Planz1sFpX8HtoIe0FQ/exec',
        { method: 'POST', body: JSON.stringify(orderData), redirect: 'follow' }
      );
      const result = await response.json();
      if (result.success) {
        const currentContact = componentContacts[componentContactIndex];
        setOrderConfirmation({ orderId: result.orderId, contact: currentContact, total: calculateTotal() });
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
    const { orderId, contact, total } = orderConfirmation;
    let message = ` *New Component Order from RC Forge Platform*\n\n`;
    message += ` *Order ID:* ${orderId}\n`;
    message += ` *Name:* ${customerName}\n`;
    message += ` *WhatsApp:* ${customerWhatsApp}\n\n`;
    message += `I would like to place an order for the following items:\n\n`;
    cart.forEach(item => {
      message += `• *${item.name}* x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}\n`;
    });
    message += `\n *Total Amount:* $${total}`;
    if (orderNotes.trim() !== '') message += `\n\n *Notes:* ${orderNotes.trim()}`;
    message += `\n\n*Order sent to:* ${contact.name}`;
    window.open(`https://wa.me/${contact.number}?text=${encodeURIComponent(message)}`, '_blank');
    setCart([]); setOrderNotes(''); setCustomerName(''); setCustomerWhatsApp(''); setOrderConfirmation(null);
  };

  const sendGadgetOrder = () => {
    if (gadgetDescription.trim() === "") { alert("Please describe the gadget you need (laptop, phone, battery, etc.)"); return; }
    const currentContact = gadgetContacts[gadgetContactIndex];
    let message = " *New Gadget Order from RC Forge Platform* \n\nI would like to order the following gadget(s):\n\n";
    message += `${gadgetDescription.trim()}\n\n`;
    message += ` *Order sent to:* ${currentContact.name}`;
    window.open(`https://wa.me/${currentContact.number}?text=${encodeURIComponent(message)}`, '_blank');
    const nextIndex = (gadgetContactIndex + 1) % gadgetContacts.length;
    setGadgetContactIndex(nextIndex);
    localStorage.setItem('gadgetContactIndex', nextIndex);
  };

  return (
    <div style={{ fontFamily: '"Inter", sans-serif', background: '#f5f6fa', minHeight: '100vh', padding: '20px' }}>
      <SocialBar />

      {/* Header */}
      <header style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        gap: '20px', marginBottom: '40px', padding: '20px',
        background: '#4d9db3', color: '#fff', borderRadius: '10px'
      }}>
        <img src="RCForgelogo.png" alt="RC Forge Logo"
          style={{ height: '60px', width: 'auto', borderRadius: '5px' }}
          onError={(e) => { e.target.style.display = 'none'; }} />
        <div style={{ textAlign: 'left' }}>
          <h1 style={{ margin: 0, letterSpacing: '2px' }}>RC FORGE</h1>
          <p style={{ margin: '5px 0 0', color: '#00cec9' }}>Precision Electronic Components</p>
        </div>
      </header>

      <WebsiteAdBanner />
      <AboutSection />

      {/* ── SEARCH BAR ── */}
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        resultCount={filteredProducts.length}
        totalCount={componentsData.length}
      />

      <main style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', gap: '20px', flexDirection: 'row', flexWrap: 'wrap' }}>

        {/* Products Grid */}
        <div style={{ flex: 3, display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '20px' }}>
          {filteredProducts.length === 0 ? (
            <div style={{
              gridColumn: '1 / -1', textAlign: 'center', padding: '60px 20px',
              color: '#636e72'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🔍</div>
              <h3 style={{ margin: '0 0 8px', color: '#2d3436' }}>No components found</h3>
              <p style={{ margin: 0 }}>
                No results for <strong>"{searchTerm}"</strong>. Try a different keyword or browse a category.
              </p>
              <button
                onClick={() => setSearchTerm('')}
                style={{
                  marginTop: '18px', padding: '10px 24px', background: '#0984e3',
                  color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer',
                  fontWeight: '600', fontSize: '0.9rem'
                }}
              >
                Clear Search
              </button>
            </div>
          ) : (
            filteredProducts.map(product => (
              <div key={product.id} style={{
                background: '#fff', borderRadius: '10px', padding: '15px',
                textAlign: 'center', boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
                display: 'flex', flexDirection: 'column', justifyContent: 'space-between'
              }}>
                <div>
                  <div style={{
                    fontSize: '0.7rem', textTransform: 'uppercase', color: '#636e72',
                    background: '#44c4fc', padding: '3px 8px', borderRadius: '12px',
                    display: 'inline-block', marginBottom: '10px'
                  }}>
                    {product.category}
                  </div>
                  <div style={{
                    height: '150px', display: 'flex', alignItems: 'center',
                    justifyContent: 'center', background: 'hsl(189, 92%, 47%)',
                    borderRadius: '8px', overflow: 'hidden'
                  }}>
                    <img src={product.img} alt={product.name}
                      style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                      onError={(e) => { e.target.style.display = 'none'; e.target.parentNode.innerText = '📦 Image Ready'; }} />
                  </div>
                  <h3 style={{ fontSize: '1rem', margin: '15px 0 5px', color: '#2d3436' }}>{product.name}</h3>
                  {product.details && (
                    <p style={{ fontSize: '0.8rem', color: '#b2bec3', margin: '0 0 10px', minHeight: '35px' }}>{product.details}</p>
                  )}
                </div>
                <div>
                  <p style={{ fontWeight: 'bold', color: '#0984e3', margin: '10px 0 15px', fontSize: '1.2rem' }}>
                    {product.price === 0.00 ? (
                      <span style={{ fontSize: '0.85rem', color: '#636e72', fontWeight: '600' }}>Enquire for price</span>
                    ) : `$${product.price.toFixed(2)}`}
                  </p>
                  <button
                    onClick={() => addToCart(product)}
                    style={{
                      width: '100%', padding: '10px', background: '#2d3436',
                      color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer',
                      fontWeight: 'bold', transition: 'background 0.2s'
                    }}
                    onMouseOver={(e) => e.target.style.background = '#0984e3'}
                    onMouseOut={(e) => e.target.style.background = '#2d3436'}
                  >
                    Add to Order
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Sidebar Cart */}
        <div style={{
          flex: 1, minWidth: '320px', background: '#f7f8fa', padding: '20px',
          borderRadius: '10px', height: 'fit-content',
          boxShadow: '0 4px 6px rgba(0,0,0,0.05)', position: 'sticky', top: '20px'
        }}>
          <h2 style={{ marginTop: 0, borderBottom: '2px solid #e0e5f8', paddingBottom: '10px' }}>Your Order</h2>
          {cart.length === 0 ? (
            <p style={{ color: '#040607' }}>No items selected yet.</p>
          ) : (
            <>
              <div style={{ maxHeight: '400px', overflowY: 'auto', paddingRight: '5px' }}>
                {cart.map(item => (
                  <div key={item.id} style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    marginBottom: '10px', fontSize: '0.9rem',
                    borderBottom: '1px solid #09090a', paddingBottom: '5px'
                  }}>
                    <span style={{ flex: 2, paddingRight: '10px' }}>
                      {item.name} <br />
                      <small style={{ color: '#18b6fa' }}>x{item.quantity}</small>
                    </span>
                    <span style={{ fontWeight: 'bold', flex: 1, textAlign: 'right', marginRight: '10px' }}>
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      style={{
                        background: '#ff7675', color: '#fff', border: 'none', borderRadius: '50%',
                        width: '22px', height: '22px', cursor: 'pointer', display: 'flex',
                        alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', fontWeight: 'bold'
                      }}
                      title="Remove from cart"
                    >✕</button>
                  </div>
                ))}
              </div>

              {/* Customer Details */}
              <div style={{ marginTop: '15px' }}>
                <label style={{ fontSize: '0.9rem', fontWeight: 'bold', color: '#2d3436', display: 'block', marginBottom: '5px' }}>
                  Your Name:
                </label>
                <input type="text" value={customerName} onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="Enter your full name"
                  style={{ width: '100%', padding: '8px 10px', borderRadius: '5px', border: '1px solid #dfe6e9', fontSize: '0.9rem', boxSizing: 'border-box', marginBottom: '10px' }} />
                <label style={{ fontSize: '0.9rem', fontWeight: 'bold', color: '#2d3436', display: 'block', marginBottom: '5px' }}>
                  Your WhatsApp Number:
                </label>
                <input type="tel" value={customerWhatsApp} onChange={(e) => setCustomerWhatsApp(e.target.value)}
                  placeholder="e.g. 263780114134"
                  style={{ width: '100%', padding: '8px 10px', borderRadius: '5px', border: '1px solid #dfe6e9', fontSize: '0.9rem', boxSizing: 'border-box' }} />
              </div>

              {/* Order Notes */}
              <div style={{ marginTop: '15px' }}>
                <label style={{ fontSize: '0.9rem', fontWeight: 'bold', color: '#2d3436', display: 'block', marginBottom: '5px' }}>Order Notes:</label>
                <textarea value={orderNotes} onChange={(e) => setOrderNotes(e.target.value)}
                  placeholder="Write specific instructions here: IMPORTANT (university name/location), OPTIONAL (e.g., resistor values, etc)..."
                  style={{ width: '100%', minHeight: '80px', borderRadius: '5px', border: '1px solid #dfe6e9', padding: '10px', fontFamily: 'inherit', fontSize: '0.9rem', boxSizing: 'border-box', resize: 'vertical' }} />
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
        <textarea value={gadgetDescription} onChange={(e) => setGadgetDescription(e.target.value)}
          placeholder="Example: iPhone 12 Pro Max 256GB (Gold) – New, or Laptop battery for Dell XPS 15 – 6-cell"
          style={{ width: '100%', minHeight: '120px', borderRadius: '5px', border: '1px solid #dfe6e9', padding: '10px', fontFamily: 'inherit', fontSize: '1rem', boxSizing: 'border-box', resize: 'vertical', marginBottom: '20px' }} />
        <button onClick={sendGadgetOrder}
          style={{ padding: '12px 24px', background: '#0984e3', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold', fontSize: '1rem', transition: 'background 0.2s' }}
          onMouseOver={(e) => e.target.style.background = '#0652dd'}
          onMouseOut={(e) => e.target.style.background = '#0984e3'}>
          Send Gadget Inquiry via WhatsApp
        </button>
      </div>

      {/* Order Confirmation Modal */}
      {orderConfirmation && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.6)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px', boxSizing: 'border-box' }}>
          <div style={{ background: '#fff', borderRadius: '12px', padding: '30px', maxWidth: '480px', width: '100%', textAlign: 'center', boxShadow: '0 10px 40px rgba(0,0,0,0.3)' }}>
            <div style={{ fontSize: '3rem', marginBottom: '10px' }}>✅</div>
            <h2 style={{ color: '#00b894', margin: '0 0 10px' }}>Order Registered!</h2>
            <p style={{ color: '#636e72', marginBottom: '20px' }}>Your order has been logged in our system. Save your Order ID to track your order over WhatsApp.</p>
            <div style={{ background: '#f0f9f6', border: '2px dashed #00b894', borderRadius: '8px', padding: '15px', marginBottom: '20px' }}>
              <p style={{ margin: 0, fontSize: '0.85rem', color: '#636e72' }}>Your Order ID</p>
              <p style={{ margin: '5px 0 0', fontSize: '1.6rem', fontWeight: 'bold', color: '#2d3436', letterSpacing: '2px' }}>{orderConfirmation.orderId}</p>
            </div>
            <p style={{ fontSize: '0.85rem', color: '#636e72', marginBottom: '25px' }}>
              📌 <strong>Keep this ID.</strong> Quote it on WhatsApp so the team can find your order instantly.
            </p>
            <button onClick={confirmAndOpenWhatsApp}
              style={{ width: '100%', padding: '14px', background: '#25D366', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '10px' }}>
              💬 Open WhatsApp to Confirm Order
            </button>
            <button onClick={() => setOrderConfirmation(null)}
              style={{ width: '100%', padding: '10px', background: 'transparent', color: '#b2bec3', border: '1px solid #dfe6e9', borderRadius: '8px', cursor: 'pointer', fontSize: '0.9rem' }}>
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