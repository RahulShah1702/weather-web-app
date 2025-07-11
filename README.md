# 🌤️ Responsive Weather Web Application

A responsive web application that displays real-time weather conditions based on the user's current location using the browser’s Geolocation API and OpenWeatherMap API.

## 🚀 Features

- 🌎 Detects user’s current location using the Geolocation API
- ☀️ Displays real-time weather information (temperature, humidity, conditions, etc.)
- 📱 Fully responsive design – works on mobile, tablet, and desktop
- 🌐 Fetches weather data from the OpenWeatherMap API
- 🎨 Clean and modern UI

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- OpenWeatherMap API
- Geolocation API

## 📸 Screenshots
<img width="878" height="565" alt="Screenshot 2025-07-11 160233" src="https://github.com/user-attachments/assets/8c3f70f2-143b-482f-b43d-8466b20230b0" />

<img width="705" height="687" alt="Screenshot 2025-07-11 160323" src="https://github.com/user-attachments/assets/6d3e83b6-454b-4cf3-8afc-cf337bc4707b" />

## ⚙️ How It Works

1. The browser prompts the user for location access.
2. Once permission is granted, the Geolocation API retrieves the latitude and longitude.
3. These coordinates are used to fetch current weather data from the OpenWeatherMap API.
4. The UI is dynamically updated with the latest weather conditions.

## 🧑‍💻 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Edge, etc.)
- An internet connection
- An API key from [OpenWeatherMap](https://openweathermap.org/api)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/RahulShah1702/weather-app.git
cd weather-app

```

2.Open the index.html file in your browser.

3.(Optional) Replace the YOUR_API_KEY placeholder in the JavaScript file with your OpenWeatherMap API key.

```javascript
const API_KEY = 'YOUR_API_KEY'; // Replace with your actual API key

