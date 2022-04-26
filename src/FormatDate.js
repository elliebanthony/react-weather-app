import React from "react";

export default function FormatDate() {
  let now = new Date();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[now.getDay()];
  let hours = now.getHours();
  let minutes = now.getMinutes();

  if (minutes < 10) {
    minutes = `0 ${minutes}`;
  }
  return (
    <div>
      {" "}
      {day}, {hours}:{minutes}
    </div>
  );
}
