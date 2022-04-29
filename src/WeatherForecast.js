import React, { useState, useEffect } from "react";
import axios from "axios";
import ForecastDay from "./ForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function displayForecast(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div>
        <div className="row">
          {" "}
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div key={index} className="col">
                  <ForecastDay data={dailyForecast} />
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    );
  } else {
    let lat = props.coordinates.lat;
    let long = props.coordinates.lon;
    let apiKey = "61585f15453918f9f78604040a26d7b6";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=${apiKey}&units=imperial`;

    axios.get(apiUrl).then(displayForecast);

    return null;
  }
}
