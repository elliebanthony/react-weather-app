import React from "react";

export default function TempDegree(props) {
  return (
    <span>
      <span> {Math.round(props.fahr)} </span>
      <span className="Unit"> °F </span>
    </span>
  );
}
