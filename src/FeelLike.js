import React, { useContext } from "react";
import { TempContext } from "./Helper";

export default function FeelLike(props) {
  const { celcius, setCelcius } = useContext(TempContext);

  function toCelcius() {
    let data = props.info;
    let celciusFeelLike = (Math.round(data - 32) * 5) / 9;
    setCelcius(true);
    return `${Math.round(celciusFeelLike)}°`;
  }

  return (
    <span>
      {celcius ? <span> {toCelcius()} </span> : <span> {props.info}° </span>}
    </span>
  );
}
