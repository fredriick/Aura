# Aura

Aura is an innovative app that captures and visualizes a user's emotional and mental state through real-time biofeedback and environmental data. Integrating Gemini AI, the app uses inputs from wearable devices, smartphone sensors, and user interactions to create dynamic, personalized visual and auditory representations of a user's aura. This immersive experience aims to enhance self-awareness, mindfulness, and emotional well-being.
# Getting Started

Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

### Run the Project
```
npx react-native run-android
# or
npx react-native run-ios
```

## Key Features
Real-Time Biofeedback Analysis:

Connects to wearable devices (e.g., smartwatches, fitness trackers) to gather real-time data on heart rate, skin temperature, and other biometric indicators.
Uses smartphone sensors to monitor environmental factors like light, sound, and location.
Integrates Gemini AI to analyze biofeedback and environmental data, interpreting the user's emotional and mental state.

Dynamic Aura Visualization:

Generates a real-time, dynamic visual representation of the user's aura based on their emotional and mental state.
Visualizations can include colors, patterns, and shapes that change in response to biofeedback.
Offers an AR mode to visualize the aura in the real world, creating an immersive experience.

Personalized Soundscapes:

Creates personalized soundscapes that reflect the user's current emotional state.
Uses AI-generated music and ambient sounds to enhance relaxation, focus, or energy levels.

Mood and Emotion Tracking:

Tracks mood and emotional trends over time, providing insights and patterns.
Users can annotate and journal their feelings, events, and triggers.

Mindfulness and Well-being Tools:

Offers guided meditations, breathing exercises, and mindfulness practices tailored to the user's current state.
Provides personalized tips and recommendations to improve emotional well-being.

Community and Sharing:

Allows users to share their aura visualizations and soundscapes with friends or a community.
Enables users to explore and connect with others based on shared emotional experiences.

Privacy and Security:

Ensures robust privacy controls to manage who can view and interact with personal data.
Secure data storage and compliance with data protection regulations.

## Logs


Barometer:

Measures atmospheric pressure.
pressure value is given in units likely to be hectopascals (hPa).
timestamp indicates the time the reading was taken.
Gyroscope:

Measures the rate of rotation around the x, y, and z axes.
x, y, and z values indicate the rotational speed around each axis.
timestamp indicates the time the reading was taken.
Accelerometer:

Measures acceleration along the x, y, and z axes.
x, y, and z values indicate the acceleration in meters per second squared (m/s²).
timestamp indicates the time the reading was taken.
Magnetometer:

Measures the magnetic field strength along the x, y, and z axes.
x, y, and z values indicate the magnetic field strength in microteslas (µT).
timestamp indicates the time the reading was taken.
Interpretation of the Data
Barometer:

Shows a consistent pressure reading (1013.25 hPa), which is around the average atmospheric pressure at sea level.
Timestamp values indicate continuous logging of data.
Gyroscope:

Shows no rotation (x: 0, y: 0, z: 0), suggesting the device is stationary or not rotating.
Timestamp values are consistent with continuous logging.
Accelerometer:

Shows acceleration values around 9.776 m/s² on the y-axis and a small value on the z-axis.
These values are close to the acceleration due to gravity (approximately 9.8 m/s²), suggesting the device is stationary and oriented in such a way that the gravity vector affects the y-axis primarily.
Magnetometer:

Shows consistent magnetic field readings along the y-axis and negative readings along the z-axis.
Indicates the presence of a magnetic field, possibly the Earth's magnetic field.
Next Steps
If you are testing sensor integration, this data indicates that your sensors are correctly capturing and logging data.
If the data seems unexpected or incorrect, check the sensor initialization and calibration in your code.
If you need to analyze this data further, you might consider storing it in a database or visualizing it using a plotting library.