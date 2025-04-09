````markdown
# Weather App

## Overview

This is a real-time Weather App built with React. It fetches current weather and 5-day forecast data from the OpenWeatherMap API and displays it across multiple pages using React Router. The app features a modern, responsive design with custom weather icons and a glassmorphism UI.

### Features

- **Multi-Page Application**: 3 pages (Home, Current Weather, 5-Day Forecast) using React Router.
- **API Integration**: Fetches data from OpenWeatherMap API for real-time weather updates.
- **Custom Icons**: Uses local weather icons (`sun.png`, `cloudy.png`, `clouds.png`, `rain.png`) for different weather conditions.
- **Responsive Design**: Built with Tailwind CSS for a responsive and modern UI.
- **State Management**: Uses `useState` and `useEffect` for managing dynamic data and side effects.
- **Event Handling**: Includes form submission and input handling for city search.

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation

1. Clone the repository:
   ```bash
   git clone <https://github.com/Yussif20/weather-app>
   cd weather-app
   ```
````

2. Install dependencies:

   ```bash
   npm install
   ```

3. Ensure the following dependencies are installed (already in `package.json`):
   - `react`
   - `react-dom`
   - `react-router-dom`
   - `axios`
   - `tailwindcss`

## Running the App

1. Start the development server:

   ```bash
   npm run dev
   ```

   The app will run on `http://localhost:5173`.

2. On the Home page, you’ll see weather data for "Cairo" by default (fetched on app load). You can search for any city using the form.

## Project Structure

- `src/App.jsx`: Main app component with state management and routing.
- `src/components/`: Contains reusable components (`Header.jsx`, `Nav.jsx`, `SearchForm.jsx`, `WeatherDisplay.jsx`).
- `src/pages/`: Contains page components (`Home.jsx`, `Weather.jsx`, `Forecast.jsx`).
- `src/assets/`: Contains custom weather icons (`sun.png`, `cloudy.png`, `clouds.png`, `rain.png`).

## API Key

The app uses the OpenWeatherMap API with the following API key (already included in the code):

- API Key: `7a790157fdc0f0770cb4dfd11af5f843`

If you want to use your own API key:

1. Sign up at [OpenWeatherMap](https://openweathermap.org/) to get a free API key.
2. Replace the API key in `App.jsx` and `SearchForm.jsx` with your own.

## Notes

- The app fetches weather data for "Cairo" by default on load using `useEffect`.
- Custom icons are used to represent weather conditions (sun, cloudy, clouds, rain).
- The design is inspired by a modern weather app UI with a dark gradient background and glassmorphism cards.
