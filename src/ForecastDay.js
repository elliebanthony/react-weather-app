import React from "react";

export default function ForecastDay(props) {
  function maxTemp() {
    let max = Math.round(props.data.temp.max);
    return `${max} °F`;
  }
  function minTemp() {
    let min = Math.round(props.data.temp.min);
    return `${min} °F`;
  }
  function icon() {
    let iconSrc = `https://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`;
    return iconSrc;
  }
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }
  return (
    <div className="flex-row">
      <div className="col">
        <div className="day"> {day()} </div>
        <img src={icon()} alt="Clear" id="icon" className="img-fluid" />
        <div className="highLow">
          {" "}
          <span> {maxTemp()}</span>
          <hr />
          <span> {minTemp()}</span>
        </div>
      </div>
    </div>
  );
}
