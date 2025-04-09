import React from 'react';
import sunIcon from '../assets/sun.png';
import cloudyIcon from '../assets/cloudy.png';
import cloudsIcon from '../assets/clouds.png';
import rainIcon from '../assets/rain.png';

function WeatherDisplay({ data, type }) {
  if (!data) {
    return (
      <p className="text-red-400 text-lg font-medium">
        No data available. Please search for a city.
      </p>
    );
  }

  // Function to map weather description to the appropriate local icon
  const getWeatherIcon = (description) => {
    if (!description) return sunIcon; // Default to sun if no description

    const desc = description.toLowerCase();
    if (desc.includes('clear')) return sunIcon;
    if (desc.includes('few clouds') || desc.includes('scattered clouds'))
      return cloudyIcon;
    if (desc.includes('broken clouds') || desc.includes('overcast clouds'))
      return cloudsIcon;
    if (desc.includes('rain') || desc.includes('shower')) return rainIcon;

    return sunIcon; // Fallback icon
  };

  if (type === 'current') {
    const iconSrc = getWeatherIcon(data.weather[0].description);
    return (
      <div className="bg-gradient-to-br from-white/20 to-blue-500/20 backdrop-blur-lg p-6 rounded-2xl border border-white/30 shadow-xl text-white hover:shadow-2xl transition-all duration-300">
        <h2 className="text-3xl font-bold">{data.name || 'Unknown City'}</h2>
        <div className="flex items-center justify-center my-4">
          <img
            src={iconSrc}
            alt="weather icon"
            className="w-20 h-20"
            onError={(e) =>
              (e.target.src = 'https://via.placeholder.com/80?text=Icon+Error')
            }
          />
          <p className="text-5xl font-extrabold">
            {Math.round(data.main.temp)}°C
          </p>
        </div>
        <p className="text-lg capitalize">
          {data.weather[0].description || 'N/A'}
        </p>
        <p className="text-sm opacity-80">
          Max: {Math.round(data.main.temp_max)}°C | Min:{' '}
          {Math.round(data.main.temp_min)}°C
        </p>
        <p className="text-sm opacity-80">Humidity: {data.main.humidity}%</p>
      </div>
    );
  } else if (type === 'forecast') {
    const daily = data.list
      .filter((item, index) => index % 8 === 0)
      .slice(0, 5);
    return (
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {daily.map((day) => {
          const iconSrc = getWeatherIcon(day.weather[0].description);
          return (
            <div
              key={day.dt}
              className="bg-gradient-to-br from-white/20 to-blue-500/20 backdrop-blur-lg p-4 rounded-2xl border border-white/30 shadow-xl text-center text-white hover:shadow-2xl transition-all duration-300"
            >
              <p className="font-medium">
                {new Date(day.dt * 1000).toLocaleDateString('en-US', {
                  weekday: 'short',
                })}
              </p>
              <img
                src={iconSrc}
                alt="weather icon"
                className="w-12 h-12 mx-auto my-2"
                onError={(e) =>
                  (e.target.src =
                    'https://via.placeholder.com/48?text=Icon+Error')
                }
              />
              <p className="text-lg font-semibold">
                {Math.round(day.main.temp)}°C
              </p>
              <p className="text-sm capitalize opacity-80">
                {day.weather[0].description || 'N/A'}
              </p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default WeatherDisplay;
