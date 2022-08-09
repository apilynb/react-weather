import React from "react";

export default function FormattedDate(props) {
  let now = new Date(props.date);
  let time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  console.log(time);
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
      <em>Last Updated:</em> <br /> {weekday} {time}
    </span>
  );
}
