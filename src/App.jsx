import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import Toggle from "./components/Toggle";
import WeatherCard from "./components/WeatherCard";
import ForestCard from "./components/ForestCard"; // new
// import ForecastCard from "./components/ForecastCard"; // new
import Loader from "./components/Loader";
import { fetchWeatherByCity, fetchForecastByCity } from "./services/weatherServices";
import { Moon, Sun } from "lucide-react";

function App() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]); // add forecast state
  const [unit, setUnit] = useState("metric");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [dark, setDark] = useState(false);

  const handleSearch = async (city) => {
    try {
      setLoading(true);
      setError("");

      // Current weather
      const data = await fetchWeatherByCity(city, unit);
      setWeather(data);

      // 5-day forecast
      const forecastData = await fetchForecastByCity(city, unit);
      setForecast(forecastData);

    } catch (err) {
      setError(err.message);
      setWeather(null);
      setForecast([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center p-4 transition-colors duration-500
        ${dark
          ? "bg-linear-to-br from-gray-900 to-gray-800"
          : "bg-linear-to-br from-blue-400 to-indigo-600"
        }`}
    >
      <div
        className={`w-full max-w-md rounded-2xl shadow-xl p-6 transition-all duration-500
          ${dark ? "bg-gray-900 text-white" : "bg-white text-gray-900"}
        `}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-bold">Weather</h1>
          <button
            onClick={() => setDark(!dark)}
            className="p-2 rounded-full hover:scale-110 transition"
          >
            {dark ? <Sun /> : <Moon />}
          </button>
        </div>

        {/* Search and Toggle */}
        <SearchBar onSearch={handleSearch} />
        <Toggle
          unit={unit}
          onToggle={() =>
            setUnit((u) => (u === "metric" ? "imperial" : "metric"))
          }
        />

        {/* Loader */}
        {loading && <Loader />}

        {/* Error */}
        {error && <p className="text-center text-red-400">{error}</p>}

        {/* Current Weather */}
        {weather && <WeatherCard data={weather} unit={unit} dark={dark} />}

        {/* 5-Day Forecast */}
        {forecast.length > 0 && (
          <div className="grid grid-cols-5 gap-4 mt-6">
            {forecast.map((day) => (
              <ForestCard key={day.dt} data={day} unit={unit} dark={dark} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
