import React from "react";

export default function ForecastDay(props) {
  function maxTemp() {
    let max = Math.round(props.data.temp.max);
    return ` H:${max} °C`;
  }
  function minTemp() {
    let min = Math.round(props.data.temp.min);
    return ` L:${min} °C`;
  }
  function icon() {
    let iconSrc = `https://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`;
    return iconSrc;
  }
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "THur", "Fri", "Sat"];

    return days[day];
  }
  return (
    <div className="row">
      <div className="col-2">
        <div className="day"> {day()} </div>
        <img src={icon()} alt="Clear" id="icon" />
        <div className="highLow">
          {" "}
          <span> {maxTemp()}</span>
          <span> {minTemp()}</span>
        </div>
      </div>
    </div>
  );
}
