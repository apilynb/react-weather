import React from "react";
import "./App.css";
import sunny from "./sunny.png";

export default function MiddleSection () {
return (
  <div className="MiddleSection">
    <div className="row">
      <div className="col-6 todayTemp">
          <div className="main">
            <img className="mainImage icons" src={sunny} alt="Cloudy Icon" />{" "}
            <span className="mainTemp">90</span>
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
            <span className="todayLow">46°</span> /
            <span className="high">57°</span>
          </div>
      </div>
      <div className="col-6 leftBody">
        <div className="col-12 cityName">
          <h1 id="city-name">New York</h1>
          <div className="dateAndTime">Thursday 4:07 PM</div>
        </div>
        <div className="col-12 todayWeather">Rain</div>
        <div className="col-6 weatherDetails ">
          <span className="misc">Feel Like: </span>
          <span className="feelLike">90°</span>
          <br />
          <span className="misc">Wind Speed: </span>
          <span className="windSpeed">5 mph</span>
          <br />
          <span className="misc">Humidity: </span>
          <span className="humidity">80%</span>
          <br />
        </div>
      </div>
    </div>
  </div>
);

}