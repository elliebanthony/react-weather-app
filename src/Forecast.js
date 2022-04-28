import React from "react";

export default function Forecast() {
  return (
    <div className="row">
      <div className="col-2">
        <div className="day">Friday</div>
        <img
          src="https://openweathermap.org/img/wn/10d@2x.png"
          alt="Clear"
          id="icon"
        />
        <div className="highLow">
          {" "}
          <span> H: 10°C </span>
          <span> L: 5°C </span>
        </div>
      </div>
    </div>
  );
}
