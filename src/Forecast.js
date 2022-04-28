import React from "react";
import axios from "axios";

export default function Forecast() {
  function displayForecast(response) {
    console.log(response.data);
  }
  let apiKey = "61585f15453918f9f78604040a26d7b6";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=74&lon=40.7&appid=${apiKey}`;
  axios.get(apiUrl).then(displayForecast);

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
