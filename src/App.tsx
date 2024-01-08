import Paths from "./Routes";
import "./CSSVariables.css";
import { getWeather } from "./WeatherWebComponents/getWeatherData/getWeatherData";
import { useEffect, useState } from "react";

function App() {
  const { timeZone } = Intl.DateTimeFormat().resolvedOptions();
    getWeather(10, 12, timeZone);
  // console.log(data);

  return (
    <div className="w-[100%]">
      <Paths />
    </div>
  );
}

export default App;
