// import React from "react";
import { Progress } from "antd";
import ForeCastThreeDays from "./ForeCastThreeDays";
import { useSelector } from "react-redux";
import { convertTimestampToTime } from "../getWeatherData/convertTimeStamp";
const Chances = () => {
  let pre =0;

  const {hourlyRain,hourlyTime} = useSelector((store:any) => store.currentWeather);
  return (
    <div className="bg-[#f5f4fc] w-full   h-[100vh] px-0 py-3">
      <h1 className="text-black text-[1rem] px-2 mb-3 font-semibold">
        Chances of Rain
      </h1>
      {
      hourlyRain.slice(0, 8).map((d: number, ind: number) => {
        pre +=ind
        const time = convertTimestampToTime(hourlyTime[pre+3 ]);
        return (
          <div key={ind} className="flex px-3 items-baseline gap-3 w-full mb-2">
            <span className="text-[0.8rem] text-black font-semibold w-[100px] ">{time}</span>
            <Progress
              key={ind}
              showInfo
              strokeColor={"var(--weather-primary-color)"}
              trailColor={'transparent'}
              percent={d * 100}
            />
          </div>
        );
      })
        }
      <span className="flex pr-3 justify-between w-full mb-4 pl-[60px]"> 
        <p className="text-black text-[0.8rem] font-semibold">Sunny</p>
        <p className="text-black text-[0.8rem] font-semibold">Rainy</p>
        <p className="text-black text-[0.8rem] font-semibold">Heavy Rain</p>
      
      </span>
      <hr className="border-2"/>
      <ForeCastThreeDays />
    </div>
  );
};

export default Chances;
