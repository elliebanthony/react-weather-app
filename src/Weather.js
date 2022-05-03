import React, { useState } from "react";
import axios from "axios";
import FormatDate from "./FormatDate";
import TempDegree from "./TempDegree";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";

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
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(showWeather);
  }
  if (weather.ready)
    return (
      <div className="weather">
        <form onSubmit={submitCity}>
          <input
            type="search"
            placeholder="Search for a city"
            onChange={onSubmit}
          />
          <button className="m-1 rounded-pill shadow-lg"> Enter </button>
        </form>
        <div className="row m-2 p-3">
          <div className="col-4">
            <h2> {city}</h2>
            <h3>
              {" "}
              <FormatDate />{" "}
            </h3>
            <h4>
              {" "}
              <TempDegree fahr={weather.temp} />{" "}
            </h4>
          </div>
          <div className="col-8">
            <img src={weather.icon} alt="current state" className="img-fluid" />
            <div className="current"> {weather.description} </div>
            <div className="wind">
              {" "}
              Wind Speed: {Math.round(weather.wind)} km/h
            </div>
            <div className="humidity"> Humidity: {weather.humidity} % </div>
          </div>
        </div>
        <div className="flex-sm-row">
          <WeatherForecast coordinates={weather.coordinates} />
        </div>
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
          <button className="m-1 rounded-pill shadow-lg"> Enter </button>
        </form>
      </div>
    );
}
