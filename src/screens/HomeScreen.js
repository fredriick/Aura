import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import BiofeedbackService from '../services/BiofeedbackService';
import EnvironmentService from '../services/EnvironmentService';
import GeminiAIService from '../services/GeminiAIService';

const HomeScreen = () => {
  const startMonitoring = () => {
    BiofeedbackService.startScanning();
    EnvironmentService.startMonitoring();
  };

  const stopMonitoring = () => {
    EnvironmentService.stopMonitoring();
  };

  const analyzeData = async () => {
    const biofeedbackData = {}; // Collect the actual data
    const environmentData = {}; // Collect the actual data
    const response = await GeminiAIService.analyzeData(biofeedbackData, environmentData);
    console.log(response.data);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Aura</Text>
      <Button title="Start Monitoring" onPress={startMonitoring} />
      <Button title="Stop Monitoring" onPress={stopMonitoring} />
      <Button title="Analyze Data" onPress={analyzeData} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default HomeScreen;
