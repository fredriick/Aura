// src/services/BiofeedbackService.js

import { BleManager } from 'react-native-ble-plx';
import { Buffer } from 'buffer';

class BiofeedbackService {
  constructor() {
    this.manager = new BleManager();
  }

  startScanning() {
    this.manager.startDeviceScan(null, null, (error, device) => {
      if (error) {
        console.error(error);
        return;
      }

      // Filter and connect to the device
      if (device.name === 'YourDeviceName') {
        this.manager.stopDeviceScan();
        this.connectToDevice(device);
      }
    });
  }

  connectToDevice(device) {
    device.connect()
      .then((device) => device.discoverAllServicesAndCharacteristics())
      .then((device) => {
        // Get the specific service and characteristic for biofeedback data
        const serviceUUID = 'service-uuid';
        const characteristicUUID = 'characteristic-uuid';
        return device.readCharacteristicForService(serviceUUID, characteristicUUID);
      })
      .then((characteristic) => {
        const data = Buffer.from(characteristic.value, 'base64').toString('ascii');
        console.log(data); // Process the data as needed
      })
      .catch((error) => {
        console.error(error);
      });
  }
}

export default new BiofeedbackService();
