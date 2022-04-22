import React from "react";

export default function FormatDate(props) {
  let days = [
    "sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.date.getDay()];
  let hours = props.date.getHours();
  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0 ${minutes}`;
  } else {
    return (
      <div>
        <h3>
          {" "}
          {day}, {hours}:{minutes}
        </h3>
      </div>
    );
  }
}
