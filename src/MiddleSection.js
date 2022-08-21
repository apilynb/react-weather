import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemp from "./WeatherTemp";
import WeeklyForecast from "./WeeklyForecast";
import FeelLike from "./FeelLike";
import WindSpeed from "./WindSpeed";

export default function MiddleSection(props) {
  return (
    <div className="MiddleSection">
      <div className="row">
        <div className="col-6 todayTemp">
          <div className="main">
            <WeatherIcon code={props.info.icon} alt={props.info.description} />{" "}
            <WeatherTemp
              fahrenheit={props.info.mainTemp}
              high={props.info.mainMax}
              low={props.info.mainMin}
            />
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
            <span className="feelLike"><FeelLike info={props.info.feelLike} /> </span>
            <br />
            <span className="misc">Wind Speed: </span>
            <span className="windSpeed"> <WindSpeed info={props.info.wind} /> </span>
            <br />
            <span className="misc">Humidity: </span>
            <span className="humidity">{props.info.humidity}%</span>
            <br />
          </div>
        </div>
      </div>
      <div className="row">
        <WeeklyForecast coords={props.info.coord}/>
      </div>
    </div>
  );
}

