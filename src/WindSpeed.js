import React, { useContext } from "react";
import { TempContext } from "./Helper";

export default function WindSpeed(props) {
  const { celcius, setCelcius } = useContext(TempContext);

  function convertWindSpeed() {
    let data = props.info;
    let metricSpeed = data * 1.60934;
    setCelcius(true)
    return `${Math.round(metricSpeed)} km/h`
    
  }

  return <span>
    {celcius ? (<span>{convertWindSpeed()} </span>) : (<span>{props.info} mph </span>)}
    
    
    </span>
}




   




