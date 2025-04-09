import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function SearchForm({ setCity, setWeatherData, setForecastData }) {
  const [input, setInput] = useState('');
  const navigate = useNavigate();
  const API_KEY = '7a790157fdc0f0770cb4dfd11af5f843';

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input) return;

    try {
      const weatherRes = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${API_KEY}&units=metric`
      );
      setWeatherData(weatherRes.data);

      const forecastRes = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${input}&appid=${API_KEY}&units=metric`
      );
      setForecastData(forecastRes.data);

      setCity(input);
      setInput('');

      navigate('/weather');
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setWeatherData(null);
      setForecastData(null);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex space-x-3 max-w-md mx-auto">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter city name"
        className="p-3 w-full bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-gray-800 placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-yellow-400 backdrop-blur-sm"
      />
      <button
        type="submit"
        className="cursor-pointer bg-gradient-to-r from-yellow-400/50 to-blue-500/50 backdrop-blur-md p-3 rounded-lg border border-white/30 text-white font-bold shadow-lg hover:scale-105 hover:shadow-xl hover:border-yellow-400/50 transition-all duration-300"
      >
        Get Forecast
      </button>
    </form>
  );
}

export default SearchForm;
