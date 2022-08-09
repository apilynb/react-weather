import axios from "axios";
import React, { useState } from "react";
import "./App.css";
import sunny from "./sunny.png";
import FormattedDate from "./FormattedDate";

export default function SearchEngine(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [displayIcon, setDisplayIcon] = useState(" ");

  function handleSubmit(response) {
    console.log(response.data);

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
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000)
    });
  }

  if (weatherData.ready) {
    return (
      // Search Engine for the Weather App
      <div className="Weather">
        <div className="row">
          <div className="col-10">
            <form id="city-search">
              <div className="input-group mb-3">
                <input
                  id="city-input"
                  type="text"
                  autoComplete="on"
                  className="form-control searchBar shadow-sm"
                  placeholder="Change City"
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

        {/* Middle Section with main details for the Weather App */}

        <div className="row">
          <div className="col-6 todayTemp">
            <div className="main">
              <img
                className="mainImage icons img-fluid text-capitalize"
                src={sunny}
                alt={weatherData.description}
              />{" "}
              <span className="mainTemp">{weatherData.mainTemp}</span>
              <span className="convertTemp ">
                {" "}
                <a className="fDegrees active" href="/">
                  °F
                </a>{" "}
                |{" "}
                <a className="cDegrees" href="/">
                  °C
                </a>
              </span>
            </div>
            <div className="todayLoHi">
              <span className="todayLow">{weatherData.mainMin}°</span> /
              <span className="high">{weatherData.mainMax}°</span>
            </div>
          </div>
          <div className="col-6 leftBody">
            <div className="col-12 cityName">
              <h1 id="city-name">{weatherData.city}</h1>
              <div className="dateAndTime">
                <FormattedDate date={weatherData.date} />
                </div>
            </div>
            <div className="col-12 todayWeather text-capitalize">
              {weatherData.description}
            </div>
            <div className="col-6 weatherDetails ">
              <span className="misc">Feel Like: </span>
              <span className="feelLike">{weatherData.feelLike}°</span>
              <br />
              <span className="misc">Wind Speed: </span>
              <span className="windSpeed">{weatherData.wind} mph</span>
              <br />
              <span className="misc">Humidity: </span>
              <span className="humidity">{weatherData.humidity}%</span>
              <br />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = `8ca7dd4e61360b90fb66918853670e48`;
    let city = props.defaultCity;
    let units = "imperial";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    console.log(apiUrl);
    axios.get(apiUrl).then(handleSubmit);
    
    return "Loading...";
  }
}
