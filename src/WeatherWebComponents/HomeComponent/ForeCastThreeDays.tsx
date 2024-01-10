// import React from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { rainy } from "../../assets";
import { useSelector } from "react-redux";
import { findMax, findMin } from "../getWeatherData/returnMaxMin";

const ForeCastThreeDays = () => {
   const { cities, index } = useSelector((store: any) => store.currentWeather);
  // const { hourlyTemperature: temperature }
  const today = new Date();
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const foreCast = [
    {
      day: daysOfWeek[today.getDay() + 1],
      weather: "Rain",
      max: findMax(cities[index].hourlyTemperature.slice(0, 23)),
      min: findMin(cities[index].hourlyTemperature.slice(0, 23)),
    },
    {
      day: daysOfWeek[today.getDay() + 2],
      weather: "Sunny",
      max: findMax(cities[index].hourlyTemperature.slice(24, 47)),
      min: findMin(cities[index].hourlyTemperature.slice(24, 47)),
    },
    {
      day: daysOfWeek[today.getDay() + 3],
      weather: "Cloudy",
      max: findMax(cities[index].hourlyTemperature.slice(48, 71)),
      min: findMin(cities[index].hourlyTemperature.slice(48, 71)),
    },
  ];
  return (
    <div className="p-3">
      <h1 className="text-[1rem] text-black font-semibold"> 3 Days Forecast</h1>
      {foreCast.map((d, ind) => {
        return (
          <div className="mt-3" key={ind}>
            <div
              className={`${
                ind === 1 ? "flex-row-reverse" : ""
              } flex  border rounded-lg w-full h-[50px]`}
            >
              <span className=" flex items-center justify-center bg-[--weather-secondary-color] gap-1 rounded-lg w-1/2">
                <ArrowDownwardIcon className="text-[--weather-primary-color]" />
                <p>
                  {d.min}
                  <sup>o</sup>
                </p>
                <ArrowUpwardIcon className="text-[--weather-primary-color]" />{" "}
                <p>
                  {d.max}
                  <sup>o</sup>
                </p>
              </span>
              <div className="flex w-1/2 justify-center items-center  gap-2">
                <img className="w-[40px]" src={rainy} />
                <span className="text-center">
                  <h1 className="text-black text-[1rem] font-semibold">
                    {d.day}
                  </h1>
                  <p className="text-[grey] text-[0.8rem] font-semibold">
                    {d.weather}
                  </p>
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ForeCastThreeDays;
