import React from 'react';
import WeatherDisplay from '../components/WeatherDisplay';

function Weather({ city, weatherData }) {
  return (
    <div className="py-6 text-center max-w-md mx-auto">
      <h2 className="text-3xl font-bold text-white mb-6">
        Current Weather in {city || 'N/A'}
      </h2>
      <WeatherDisplay data={weatherData} type="current" />
    </div>
  );
}

export default Weather;
