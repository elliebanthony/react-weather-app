import React from "react";
import "./App.css";

export default function Current() {
  return (
    <div>
      <h3>Last Updated: Thursday 10:00</h3>
      <h4>
        <span id="number"> °F </span>
      </h4>
      <img
        src="https://openweathermap.org/img/wn/10d@2x.png"
        alt="Clear"
        id="icon"
      />
      <div className="current" id="state">
        Clear
      </div>
      <div className="wind" id="windSpeed">
        Wind Speed: 0 mph
      </div>
      <div className="humidity" id="humid">
        Humidity: 10%
      </div>
    </div>
  );
}
