import React from 'react';
import WeatherDisplay from '../components/WeatherDisplay';

function Forecast({ city, forecastData }) {
  return (
    <div className="py-6">
      {forecastData ? (
        <>
          <h2 className="text-3xl font-bold text-white mb-6 text-center">
            5-Day Forecast for {city}
          </h2>
          <WeatherDisplay data={forecastData} type="forecast" />
        </>
      ) : (
        <p className="text-red-400 text-lg font-medium text-center">
          No forecast data available. Please search for a city.
        </p>
      )}
    </div>
  );
}

export default Forecast;
