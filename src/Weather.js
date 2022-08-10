import axios from "axios";
import React, { useState } from "react";
import "./App.css";
import MiddleSection from "./MiddleSection";

export default function Weather (props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);


  function handleResponse(response) {
    setWeatherData({
      ready: true,
      mainTemp: Math.round(response.data.main.temp),
      wind: Math.round(response.data.wind.speed),
      city: response.data.name,
      humidity: response.data.main.humidity,
      mainMax: Math.round(response.data.main.temp_max),
      mainMin: Math.round(response.data.main.temp_min),
      feelLike: Math.round(response.data.main.feels_like),
      description: response.data.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      date: new Date(response.data.dt * 1000),
    });
  }

  function updateCity (event) {
    console.log(city);
    setCity(event.target.value)
  }
 
function handleSubmit(event) {
  event.preventDefault();
  search(city);
}

function search () {
let apiKey = `8ca7dd4e61360b90fb66918853670e48`;
let units = "imperial";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
axios.get(apiUrl).then(handleResponse);
}

  if (weatherData.ready) {
    return (
      // Search Engine for the Weather App
      <div className="Weather">
        <div className="row">
          <div className="col-10">
            <form id="city-search" onSubmit={handleSubmit}>
              <div className="input-group mb-3">
                <input
                  id="city-input"
                  type="text"
                  autoComplete="on"
                  autoCorrect="on"
                  className="form-control searchBar shadow-sm"
                  placeholder="Change City"
                  onChange={updateCity}
                />
                <input
                  className="btn btn-outline-secondary shadow-sm"
                  type="submit"
                  id="button-addon2"
                />
              </div>
            </form>
          </div>
          <div className="col-2">
            <button type="button" className="btn btn-dark current">
              Current
            </button>
          </div>
        </div>
        <MiddleSection info={weatherData}/>
      </div>
    );
  } else {
    search(city);
    
    return "Loading...";
  }
}
