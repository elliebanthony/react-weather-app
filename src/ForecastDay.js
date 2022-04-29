import React from "react";

export default function ForecastDay(props) {
  return (
    <div className="row">
      <div className="col-2">
        <div className="day">{props.data.dt} </div>
        <img src={props.data.weather[0].icon} alt="Clear" id="icon" />
        <div className="highLow">
          {" "}
          <span> H: {Math.round(props.data.temp.max)} °C</span>
          <span> L: {Math.round(props.data.temp.min)}°C </span>
        </div>
      </div>
    </div>
  );
}
