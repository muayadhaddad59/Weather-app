import React from 'react';
import SearchForm from '../components/SearchForm';

function Home({ setCity, setWeatherData, setForecastData }) {
  return (
    <div className="text-center py-12">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-5xl font-extrabold text-white mb-4">
          Weather Forecast
        </h2>
        <p className="text-lg text-gray-200 mb-6">
          Get real-time weather updates and 5-day forecasts for any city in the
          world.
        </p>
        <SearchForm
          setCity={setCity}
          setWeatherData={setWeatherData}
          setForecastData={setForecastData}
        />
      </div>
    </div>
  );
}

export default Home;
