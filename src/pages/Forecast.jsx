import React from 'react';
import WeatherDisplay from '../components/WeatherDisplay';

function Forecast({ city, forecastData }) {
  return (
    <div className="py-6 text-center">
      <h2 className="text-3xl font-bold text-white mb-6 text-center">
        5-Day Forecast for {city || 'N/A'}
      </h2>
      <WeatherDisplay data={forecastData} type="forecast" />
    </div>
  );
}

export default Forecast;
