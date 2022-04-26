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
  function fahrConvert() {
    return (props.celcius * 9) / 5 + 32;
  }
  if (unit === "celcius") {
    return (
      <span>
        {" "}
        {celcTemp}
        <span className="Unit">
          {" "}
          <a href="/" onClick={celcTemp}>
            °C |{" "}
          </a>
          <a href="/" onClick={fahrTemp}>
            {" "}
            °F{" "}
          </a>
        </span>
      </span>
    );
  } else {
    return (
      <span>
        {" "}
        / {Math.round(fahrConvert())}
        <span className="Unit">
          {" "}
          <a href="/" onClick={celcTemp}>
            °C |{" "}
          </a>
          <a href="/" onClick={fahrTemp}>
            {" "}
            °F{" "}
          </a>
        </span>{" "}
      </span>
    );
  }
}
