import React from "react";
import { Wind, Droplets } from "lucide-react";

const WeatherCard = ({ data, unit, dark }) => {
  const {
    name,
    sys: { country },
    main: { temp, humidity },
    weather,
    wind,
  } = data;

  const temperature =
    unit === "metric" ? temp : (temp * 9) / 5 + 32;
    

  const icon = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

  return (
    <div
      className={`mt-6 rounded-xl p-6 text-center transform transition-all duration-500
        hover:scale-[1.02]
        ${dark ? "bg-gray-800" : "bg-white shadow-lg"}
      `}
    >
      <h2 className="text-xl font-semibold">
        {name}, {country}
      </h2>

      <img src={icon} alt="weather" className="mx-auto animate-fade-in" />

      <p className="text-4xl font-bold text-indigo-500">
        {Math.round(temperature)}°{unit === "metric" ? "C" : "F"}
      </p>

      <p className="capitalize opacity-80">
        {weather[0].description}
      </p>

      <div className="flex justify-between mt-4 text-sm opacity-90">
        <span className="flex items-center gap-1">
          <Droplets size={16} /> {humidity}%
        </span>
        <span className="flex items-center gap-1">
          <Wind size={16} /> {wind.speed} m/s
        </span>
      </div>
    </div>
  );
};

export default WeatherCard;
