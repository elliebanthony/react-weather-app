import React, { useState } from "react";
import axios from "axios";

export default function WeatherForecast(props) {
  let { loaded, setLoaded } = useState(false);
  let { forecast, setForecast } = useState(null);

  function displayForecast(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }
  if (loaded) {
    return (
      <div className="row">
        <div className="col-2">
          <div className="day">{forecast[0].dt} </div>
          <img src={forecast[0].weather[0].icon} alt="Clear" id="icon" />
          <div className="highLow">
            {" "}
            <span> {forecast[0].temp.max} </span>
            <span> {forecast[0].temp.min} </span>
          </div>
        </div>
      </div>
    );
  } else {
    let lat = props.coordinates.lat;
    let long = props.coordinates.lon;
    let apiKey = "61585f15453918f9f78604040a26d7b6";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayForecast);
    return null;
  }
}
