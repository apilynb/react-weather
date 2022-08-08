import React from "react";
import sunny from "./sunny.png";

export default function WeeklyForecast(props) {
     
  return (<div className="WeeklyForecast col-2 text-center">
    <div >{props.day}</div>
    <img src={sunny} alt="Cloudy Icon"></img>
      <div>86° / <strong>98°</strong></div>
   </div>
   

)

}
