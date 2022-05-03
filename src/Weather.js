import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
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
  function submitSearch(event) {
    event.preventDefault();
    search();
  }
  function updateCity(event) {
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
        <form onSubmit={submitSearch}>
          <input
            type="search"
            autoFocus="on"
            placeholder="Search for a city"
            className="form-control"
            onChange={updateCity}
          />
          <input
            type="submit"
            value="Search"
            className="m-1 btn btn-primary shadow-sm"
          />
        </form>
        <WeatherInfo data={weather} />
      </div>
    );
  else {
    search();
  }
  return "Loading...";
}
