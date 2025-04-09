import React from 'react';
import WeatherDisplay from '../components/WeatherDisplay';

function Weather({ city, weatherData }) {
  return (
    <div className="py-6 max-w-md mx-auto">
      {weatherData ? (
        <>
          <h2 className="text-3xl font-bold text-white mb-6">
            Current Weather in {city}
          </h2>
          <WeatherDisplay data={weatherData} type="current" />
        </>
      ) : (
        <p className="text-red-400 text-lg font-medium text-center">
          No weather data available. Please search for a city.
        </p>
      )}
    </div>
  );
}

export default Weather;
