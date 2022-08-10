import React from "react";
import FormattedDate from "./FormattedDate";

export default function MiddleSection(props) {
  return (
    <div className="MiddleSection">
      <div className="row">
        <div className="col-6 todayTemp">
          <div className="main">
            <img
              className="mainImage icons img-fluid text-capitalize"
              src={props.info.icon}
              alt={props.info.description}
            />{" "}
            <span className="mainTemp">{props.info.mainTemp}</span>
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
            <span className="todayLow">{props.info.mainMin}°</span> /
            <span className="high">{props.info.mainMax}°</span>
          </div>
        </div>
        <div className="col-6 leftBody">
          <div className="col-12 cityName">
            <h1 id="city-name text-capitalize">{props.info.city}</h1>
            <div className="dateAndTime">
              <FormattedDate date={props.info.date} />
            </div>
          </div>
          <div className="col-12 todayWeather text-capitalize">
            {props.info.description}
          </div>
          <div className="col-6 weatherDetails ">
            <span className="misc">Feel Like: </span>
            <span className="feelLike">{props.info.feelLike}°</span>
            <br />
            <span className="misc">Wind Speed: </span>
            <span className="windSpeed">{props.info.wind} mph</span>
            <br />
            <span className="misc">Humidity: </span>
            <span className="humidity">{props.info.humidity}%</span>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}
