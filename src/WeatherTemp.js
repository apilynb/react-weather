import React, { useContext } from "react";
import { TempContext } from "./Helper";

export default function WeatherTemp(props) {
  const {celcius, setCelcius} = useContext(TempContext);
 
   
    
  function convertToCelcius(event) {
    event.preventDefault();
    setCelcius(true)
  }

  function convertToFahrenheit(event) {
    event.preventDefault();
    setCelcius(false);
  }

  function celciusMainTemp () {
    let celciusMain = Math.round(((props.fahrenheit - 32) * 5) / 9);
    return `${celciusMain}`
  }

  function celciusLowTemp () {
     let celciusLow = Math.round(((props.low - 32) * 5) / 9);
     return `${celciusLow}°`
  }

  function celciusHighTemp () {
  let celciusHigh = Math.round(((props.high - 32) * 5) / 9);
  return `${celciusHigh}°`
  }



return (
  <span>
    {celcius ? (
      <span>
        <span className="WeatherTemp">
          <span className="mainTemp">{celciusMainTemp()}</span>
          <span className="convertTemp ">
            <a className="fDegrees" href="/" onClick={convertToFahrenheit}>
              °F{" "}
            </a>
            |<span className="cDegrees active"> °C</span>
          </span>
        </span>
        <div className="todayLoHi">
          <span className="todayLow">{celciusLowTemp()}</span> /
          <span className="high">{celciusHighTemp()}</span>
        </div>
      </span>
    ) : (
      <span>
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
            <span className="todayLow">{props.low}°</span>/
            <span className="high">{props.high}°</span>
          </div>
        </span>
      </span>
    )}
  </span>
); 
}
