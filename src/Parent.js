import React from "react";
import Weather from "./Weather";
import WeeklyForecast from "./WeeklyForecast";




export default function Parent() {



  
  return (
    <div>
      <Weather defaultCity="New York" />
      <div className="row">
        <br />
        <br />
        <WeeklyForecast day="Mon" />
        <WeeklyForecast day="Tue" />
        <WeeklyForecast day="Wed" />
        <WeeklyForecast day="Thu" />
        <WeeklyForecast day="Fri" />
        <WeeklyForecast day="Sat" />
      </div>
      <br />
  
    </div>
  );
}
