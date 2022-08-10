import React from "react";

export default function FormattedDate(props) {
  let now = new Date(props.date);
  let time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let weekday = days[now.getDay()];
  
  return (
    <span>
      <em>Last Updated:</em> <br /> {weekday} {time} Local Time
    </span>
  );
}
