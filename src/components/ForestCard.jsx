import React from "react";

const ForestCard = ({ data, unit, dark }) => {
  const { main: { temp }, weather, dt_txt } = data;

  const temperature = unit === "metric" ? temp : (temp * 9) / 5 + 32;
  const icon = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
  const day = new Date(dt_txt).toLocaleDateString("en-US", { weekday: "short" });

  return (
    <div className={`flex flex-col items-center p-4 rounded-xl transition-all duration-500
        ${dark ? "bg-gray-700 text-white" : "bg-white shadow-lg text-gray-900"}`}>
      <p className="font-semibold">{day}</p>
      <img src={icon} alt="weather" className="w-12 h-12" />
      <p className="font-bold">{Math.round(temperature)}°{unit === "metric" ? "C" : "F"}</p>
      <p className="capitalize opacity-80">{weather[0].main}</p>
    </div>
  );
};

export default ForestCard;
