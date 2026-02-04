const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5";

// Fetch current weather by city
export const fetchWeatherByCity = async (city, unit) => {
  const res = await fetch(
    `${BASE_URL}/weather?q=${city}&units=${unit}&appid=${API_KEY}`
  );

  if (!res.ok) {
    throw new Error("City not found");
  }

  return res.json();
};

// Fetch current weather by coordinates
export const fetchWeatherByCoords = async (lat, lon, unit) => {
  const res = await fetch(
    `${BASE_URL}/weather?lat=${lat}&lon=${lon}&units=${unit}&appid=${API_KEY}`
  );

  if (!res.ok) {
    throw new Error("Location not found");
  }

  return res.json();
};

// Fetch 5-day forecast by city
export const fetchForecastByCity = async (city, unit) => {
  const res = await fetch(
    `${BASE_URL}/forecast?q=${city}&units=${unit}&appid=${API_KEY}`
  );

  if (!res.ok) {
    throw new Error("Forecast not found");
  }

  const data = await res.json();

  // Pick one forecast per day (12:00 PM)
  const daily = data.list
    .filter(f => f.dt_txt.includes("12:00:00"))
    .slice(0, 5);

  return daily;
};

// Fetch 5-day forecast by coordinates
export const fetchForecastByCoords = async (lat, lon, unit) => {
  const res = await fetch(
    `${BASE_URL}/forecast?lat=${lat}&lon=${lon}&units=${unit}&appid=${API_KEY}`
  );

  if (!res.ok) {
    throw new Error("Forecast not found");
  }

  const data = await res.json();

  // Pick one forecast per day (12:00 PM)
  const daily = data.list
    .filter(f => f.dt_txt.includes("12:00:00"))
    .slice(0, 5);

  return daily;
};
