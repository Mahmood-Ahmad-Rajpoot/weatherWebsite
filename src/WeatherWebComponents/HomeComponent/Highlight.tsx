// import   { useState } from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

import { useSelector } from "react-redux";
// import Chart from "chart.js/auto";
//  import { DatasetLinkedOutlined, MonitorHeart, PhpRounded, RollerShadesSharp } from "@mui/icons-material";

const Highlight = () => {
  const {humidity, precipitation, windSpeed,sunRiseTime,sunSetTime} = useSelector((s:any)=>s.currentWeather)
  
  const data1 = [{name:"Humidity", unit:`${humidity}mm`},{name:"Precipation", unit:`${precipitation}mm`} ,{name:"Wind Speed", unit:`${windSpeed}Km/h`} , {name:"sunrise & Sunset ", unit:''}];
  return (
    <div className="pt-4">
      <h1 className="text-[1.2rem] text-black font-semibold mb-3">
        Today's Highlight
      </h1>
      <div className="flex flex-nowrap justify-between">
        {data1.map((d, ind) => {
          return (
            <div
              className="h-[100px] flex flex-col justify-center min-w-[120px] max-w-auto border rounded-xl"
              key={ind}
            >
              <h1 className="px-3 pb-4">{d.name}</h1>

              {ind === 3 ? (
                <div className="flex gap-2 px-2">
                  <ArrowUpwardIcon className="text-white bg-[--weather-secondary-color] rounded-full" />
                  <p className="self-center font-bold text-[1rem] mr-2">
                   {sunRiseTime}
                  </p>
                  <ArrowDownwardIcon className="text-white bg-[--weather-secondary-color] rounded-full" />
                  <p className="self-center font-bold text-[1rem]">{sunSetTime}</p>
                </div>
              ) : (
                <p className="self-center font-bold text-[1rem]">{}{d.unit}</p>
              )}
            </div>
          );
        })}
      </div>
      {/* <Graph chartData={chartData} /> */}
    </div>
  );
};

export default Highlight;
