import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <footer>
          This project was coded by Rosemarie Feliciano and is{" "}
          <a
            href="https://github.com/frosemarie92/react-2022"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on github
          </a>{" "}
          and{" "}
          <a
            href="https://resilient-tiramisu-69660f.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
