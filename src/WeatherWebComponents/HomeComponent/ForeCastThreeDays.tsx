// import React from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { rainy,  } from "../../assets";

const ForeCastThreeDays = () => {
  const foreCast = [
    { day: "Thursday", weather: "Rain" },
    { day: "Friday", weather: "Sunny" },
    { day: "Saturday", weather: "Cloudy" },
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
                <ArrowDownwardIcon className="text-[--weather-primary-color]" />{" "}
                <p>
                  20<sup>o</sup>
                </p>
                <ArrowUpwardIcon className="text-[--weather-primary-color]" />{" "}
                <p>
                  10<sup>o</sup>
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
