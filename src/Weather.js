import React, { useState } from "react";
import axios from "axios";
import FormatDate from "./FormatDate";
import TempDegree from "./TempDegree";
import Forecast from "./Forecast";

export default function Weather(props) {
  const [city, changeCity] = useState(props.defaultCity);
  const [weather, changeWeather] = useState({ ready: false });

  function showWeather(response) {
    changeWeather({
      ready: true,
      temp: response.data.main.temp,
      coordinates: response.data.coord,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }
  function submitCity(event) {
    event.preventDefault();
    search();
  }
  function onSubmit(event) {
    event.preventDefault();
    changeCity(event.target.value);
  }
  function search() {
    let apiKey = "61585f15453918f9f78604040a26d7b6";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
  }
  if (weather.ready)
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
        <h3>
          {" "}
          <FormatDate />{" "}
        </h3>
        <h4>
          {" "}
          <TempDegree celcius={weather.temp} />{" "}
        </h4>
        <img src={weather.icon} alt="current state" />
        <div className="current"> {weather.description} </div>
        <div className="wind"> Wind Speed: {Math.round(weather.wind)} km/h</div>
        <div className="humidity"> Humidity: {weather.humidity} % </div> <br />
        <Forecast coordinates={weather.coordinates} />
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
        <h2> Williamson, NY</h2>
        <h3>Last Updated: Thursday, 10:00</h3>
        <h4>°C / °F</h4>
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
