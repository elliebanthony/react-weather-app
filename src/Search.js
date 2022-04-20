import React from "react";

export default function Search() {
  return (
    <div>
      <form id="search-form">
        <input
          autoComplete="off"
          autoFocus="on"
          type="text"
          placeholder="Search City"
          id="city-input"
        />
        <button>Enter</button>
      </form>
    </div>
  );
}
