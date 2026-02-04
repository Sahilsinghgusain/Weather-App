import React from "react";
import { Thermometer } from "lucide-react";

const Toggle = ({ unit, onToggle, dark }) => {
  return (
    <div className="flex justify-center my-4">
      <button
        onClick={onToggle}
        className={`flex items-center gap-2 px-4 py-2 rounded transition-all duration-300
          ${dark
            ? "bg-gray-800 text-white hover:bg-gray-700 border border-gray-600"
            : "bg-gray-100 text-gray-900 hover:bg-gray-200 border border-gray-300"}
        `}
      >
        <Thermometer className="w-4 h-4" />
        {unit === "metric" ? "Switch to °F" : "Switch to °C"}
      </button>
    </div>
  );
};

export default Toggle;
