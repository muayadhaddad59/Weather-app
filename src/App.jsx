import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import Nav from './components/Nav';
import Home from './pages/Home';
import Weather from './pages/Weather';
import Forecast from './pages/Forecast';

function App() {
  const [city, setCity] = useState('Cairo'); // Default city
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);

  const API_KEY = '7a790157fdc0f0770cb4dfd11af5f843';

  // Fetch default city data on app load
  useEffect(() => {
    const fetchDefaultData = async () => {
      try {
        const weatherRes = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=Cairo&appid=${API_KEY}&units=metric`
        );
        setWeatherData(weatherRes.data);

        const forecastRes = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=Cairo&appid=${API_KEY}&units=metric`
        );
        setForecastData(forecastRes.data);
      } catch (error) {
        console.error('Error fetching default weather data:', error);
        setWeatherData(null);
        setForecastData(null);
      }
    };

    fetchDefaultData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-blue-800 text-white">
      <Header />
      <Nav />
      <main className="container mx-auto p-6">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                setCity={setCity}
                setWeatherData={setWeatherData}
                setForecastData={setForecastData}
              />
            }
          />
          <Route
            path="/weather"
            element={<Weather city={city} weatherData={weatherData} />}
          />
          <Route
            path="/forecast"
            element={<Forecast city={city} forecastData={forecastData} />}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
