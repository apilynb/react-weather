import React, { useContext } from "react";
import { TempContext } from "./Helper";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  const {celcius, setCelcius} = useContext(TempContext);

  function maxTemp() {
    let maxTemp = Math.round(props.data.temp.max);
    return `${maxTemp}°`;
  }
  function minTemp() {
    let minTemp = Math.round(props.data.temp.min);
    return `${minTemp}°`;
  }

  function day() {
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    return days[day];
  }

  function celciusMinTemp() {
    let minTemp = Math.round(props.data.temp.min);
    let celciusMinTemp = (minTemp - 32) * 5 / 9;
    return `${Math.round(celciusMinTemp)}°` 
  }

  function celciusMaxTemp() {
    let maxTemp = Math.round(props.data.temp.max);
    let celciusMaxTemp = (maxTemp - 32) * 5 / 9;
    console.log(celciusMaxTemp)
    return `${Math.round(celciusMaxTemp)}°`;
  }



  return (
    <div>
      {celcius ? (
        <div>
          <div className="mb-1">{day()}</div>
          <WeatherIcon code={props.data.weather[0].icon} />
          <div>
            {celciusMinTemp()}
            <strong> {celciusMaxTemp()}</strong>
          </div>
        </div>
      ) : ( 
        <div>
        <div className="mb-1">{day()}</div>
        <WeatherIcon code={props.data.weather[0].icon} />
        <div>
          {minTemp()}
          <strong> {maxTemp()}</strong>
        </div>
      </div>
        
      )}
    </div>
  );
}
