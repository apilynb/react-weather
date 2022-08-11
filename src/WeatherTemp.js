import React, { useState } from "react";

export default function WeatherTemp(props) {
  const [unit, setUnit] = useState("fahrenheit");

  function convertToCelcius(event) {
    event.preventDefault();
    setUnit("celcius");
  }

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  if (unit === "fahrenheit") {
    return (
      <span>
        <span className="WeatherTemp">
          <span className="mainTemp">{props.fahrenheit}</span>
          <span className="convertTemp ">
            {" "}
            <span className="fDegrees active">°F</span> |{" "}
            <a className="cDegrees " href="/" onClick={convertToCelcius}>
              °C
            </a>
          </span>
        </span>
        <div className="todayLoHi">
          <span className="todayLow">{props.low}°</span> /
          <span className="high">{props.high}°</span>
        </div>
      </span>
    );
  } else {
    let celciusMain = Math.round(((props.fahrenheit - 32) * 5) / 9);
    let celciusLow = Math.round(((props.low - 32) * 5) / 9);
    let celciusHigh = Math.round(((props.high - 32) * 5) / 9);

    return (
      <span>
        <span className="WeatherTemp">
          <span className="mainTemp">{celciusMain}</span>
          <span className="convertTemp ">
            {" "}
            <a className="fDegrees" href="/" onClick={convertToFahrenheit}>
              °F
            </a>{" "}
            |{" "}
            <span className="cDegrees active" >
              °C
            </span>
          </span>
        </span>
        <div className="todayLoHi">
          <span className="todayLow">{celciusLow}°</span> /
          <span className="high">{celciusHigh}°</span>
        </div>
      </span>
    );
  }
}
