import React, { useState } from "react";
import axios from "axios";
import FormatDate from "./FormatDate";

export default function Weather() {
  const [city, changeCity] = useState(null);
  const [weather, changeWeather] = useState("");
  const [enter, afterEnter] = useState("false");

  function showWeather(response) {
    changeWeather({
      temp: response.data.main.temp,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }
  function submitCity(event) {
    event.preventDefault();
    afterEnter(true);
    let apiKey = "61585f15453918f9f78604040a26d7b6";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
  }
  function onSubmit(event) {
    changeCity(event.target.value);
  }
  if (enter === true)
    return (
      <div>
        <form onSubmit={submitCity}>
          <input
            type="search"
            placeholder="Search for a city"
            onChange={onSubmit}
          />
          <button> Enter </button>
        </form>
        <h2> {city}</h2>
        <FormatDate date={changeWeather.date} />
        <h4> {Math.round(weather.temp)} °C</h4>
        <img src={weather.icon} alt="current state" />
        <div className="current"> {weather.description} </div>
        <div className="wind"> Wind Speed: {Math.round(weather.wind)} km/h</div>
        <div className="humidity"> Humidity: {weather.humidity} % </div>{" "}
      </div>
    );
  else
    return (
      <div>
        <form onSubmit={submitCity}>
          <input
            type="search"
            placeholder="Search for a city"
            onChange={onSubmit}
            autoComplete="off"
            autoFocus="on"
          />
          <button> Enter </button>
        </form>
        <br />
        <h2> Williamson, NY</h2>
        <h3>Last Updated: Thursday 10:00</h3>
        <h4>
          <span id="number"> °F </span>
        </h4>
        <img
          src="https://openweathermap.org/img/wn/10d@2x.png"
          alt="Clear"
          id="icon"
        />
        <div className="current">Clear</div>
        <div className="wind">Wind Speed: 0 mph</div>
        <div className="humidity">Humidity: 10%</div>
      </div>
    );
}
