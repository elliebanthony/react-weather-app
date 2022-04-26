import React, { useState } from "react";

export default function TempDegree(props) {
  const [unit, setUnit] = useState("celcius");

  function fahrTemp(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function celcTemp(event) {
    event.preventDefault();
    setUnit("celcius");
  }

  if (unit === "celcius") {
    return (
      <span>
        <span> {celcTemp} °C | </span>
        <span className="Unit">
          {" "}
          <a href="/" onClick={fahrTemp}>
            {" "}
            °F{" "}
          </a>
        </span>
      </span>
    );
  } else {
    let fahr = (props.celcius * 9) / 5 + 32;
    return (
      <span>
        <span> {Math.round(fahr)} °F</span>
        <span className="Unit">
          {" "}
          <a href="/" onClick={celcTemp}>
            °C{" "}
          </a>
        </span>{" "}
      </span>
    );
  }
}
