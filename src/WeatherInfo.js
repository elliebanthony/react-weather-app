import React from "react";
import TempDegree from "./TempDegree";
import FormatDate from "./FormatDate";
import WeatherForecast from "./WeatherForecast";

export default function WeatherInfo(props) {
  return (
    <div>
      <div className="row m-2 p-3">
        <div className="col-5">
          <h2>{props.data.city}</h2>
          <h3>
            {" "}
            <FormatDate />{" "}
          </h3>
          <h4>
            {" "}
            <TempDegree fahr={props.data.temp} />{" "}
          </h4>
        </div>
        <div className="col-7">
          <img
            src={props.data.icon}
            alt="current state"
            className="img-fluid"
          />
          <div className="current"> {props.data.description} </div>
          <div className="wind">
            {" "}
            Wind Speed: {Math.round(props.data.wind)} km/h
          </div>
          <div className="humidity"> Humidity: {props.data.humidity} % </div>
        </div>
      </div>
      <div className="flex-sm-row">
        <WeatherForecast coordinates={props.data.coordinates} />
      </div>
    </div>
  );
}
