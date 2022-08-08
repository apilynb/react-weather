import React from "react";
import MiddleSection from "./MiddleSection";
import SearchEngine from "./SearchEngine";
import WeeklyForecast from "./WeeklyForecast";


export default function Parent() {
  return (
    <div>
      <SearchEngine />
      <MiddleSection />
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
    </div>
  );
}
