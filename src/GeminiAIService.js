// src/services/GeminiAIService.js

import axios from 'axios';

class GeminiAIService {
  constructor() {
    this.apiClient = axios.create({
      baseURL: 'https://api.gemini.ai', // Replace with the actual base URL
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer YOUR_GEMINI_API_KEY`, // Replace with your actual API key
      },
    });
  }

  analyzeData(biofeedbackData, environmentData) {
    return this.apiClient.post('/analyze', {
      biofeedback: biofeedbackData,
      environment: environmentData,
    });
  }
}

export default new GeminiAIService();
