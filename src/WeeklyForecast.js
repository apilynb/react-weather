import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeeklyForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecastData, setForecastData] = useState(null);
  console.log(props);

  useEffect(() => {
    setLoaded(false);
  }, [props.coords]);

  function handleResponse(response) {
    console.log(response);
    setForecastData(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="row">
        {forecastData.map(function (dailyForecast, index) {
          if (index > 0 && index < 6) {
            return (
              <div className="WeeklyForecast col text-center" key={index}>
                {" "}
                <WeatherForecastDay data={dailyForecast} />{" "}
              </div>
            );} else {
              return null
            }
        })}
      </div>
    );
  } else {
    const apiKey = "8ca7dd4e61360b90fb66918853670e48";
    let lat = props.coords.lat;
    let lon = props.coords.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&appid=${apiKey}&units=imperial`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
