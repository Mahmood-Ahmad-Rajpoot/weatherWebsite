// import React from "react";
import { Progress } from "antd";
import ForeCastThreeDays from "./ForeCastThreeDays";
const Chances = () => {
  const rainChances : any[] = [
    { time: "09am", v: 30 },
    { time: "12am", v: 10 },
    { time: "09am", v: 40 },
    { time: "09am", v: 50 },
    { time: "09am", v: 90 },
    { time: "09am", v: 20 },
    { time: "09am", v: 95 },
  ];
  return (
    <div className="bg-[#f5f4fc] w-full   h-[100vh] px-0 py-3">
      <h1 className="text-black text-[1rem] px-2 mb-3 font-semibold">
        Chances of Rain
      </h1>
      {rainChances.map((d, ind) => {
        return (
          <span key={ind} className="flex px-3 items-baseline gap-3 w-full mb-2">
            <p className="text-[0.8rem] text-black font-semibold ">{d.time}</p>
            <Progress
              key={ind}
              showInfo={false}
              strokeColor={"var(--weather-primary-color)"}
              trailColor={'transparent'}
              percent={d.v}
            />
          </span>
        );
      })}
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
