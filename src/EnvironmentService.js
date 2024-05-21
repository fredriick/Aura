// src/services/EnvironmentService.js

import { accelerometer, gyroscope, magnetometer, barometer } from 'react-native-sensors';

class EnvironmentService {
  constructor() {
    this.subscriptions = [];
  }

  startMonitoring() {
    this.subscriptions.push(
      accelerometer.subscribe(({ x, y, z, timestamp }) => {
        console.log(`Accelerometer - x: ${x}, y: ${y}, z: ${z}, timestamp: ${timestamp}`);
      })
    );

    this.subscriptions.push(
      gyroscope.subscribe(({ x, y, z, timestamp }) => {
        console.log(`Gyroscope - x: ${x}, y: ${y}, z: ${z}, timestamp: ${timestamp}`);
      })
    );

    this.subscriptions.push(
      magnetometer.subscribe(({ x, y, z, timestamp }) => {
        console.log(`Magnetometer - x: ${x}, y: ${y}, z: ${z}, timestamp: ${timestamp}`);
      })
    );

    this.subscriptions.push(
      barometer.subscribe(({ pressure, timestamp }) => {
        console.log(`Barometer - pressure: ${pressure}, timestamp: ${timestamp}`);
      })
    );
  }

  stopMonitoring() {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}

export default new EnvironmentService();
