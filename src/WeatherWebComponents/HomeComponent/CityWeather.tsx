// import React from "react";
import { cloud, sunClound } from "../../assets/";
import Styles from "./weatherHome.module.css";
import { Button } from "antd";
import AddIcon from "@mui/icons-material/Add";
import Highlight from "./Highlight";
import { useDispatch, useSelector } from "react-redux";
import SelectCity from "./SelectCity";
import { setOpen } from "../../features/selectCityModal";
import { setCityIndex } from "../../features/currentWeather";
 // import { useState } from "react";
 const CityWeather = () => {
   const { cities, index } = useSelector((store: any) => store.currentWeather);
  const { isOpen } = useSelector((store: any) => store.selectCityModal);
  const dispatch = useDispatch();

  const handleClick = (ind: number) => {
    dispatch(setCityIndex(ind));
  };
 
 
  return (
    <div className=" min-w-[70%] grow p-3 ">
      <p className="text-[0.8rem] text-grey  font-semibold mb-2">
        Current Location
      </p>
      <div className="flex flex-wrap gap-3  ">
        {cities.map((d: any, ind: number) => {
        
          
          return (
            <div key={ind} className="grow">
              <h1 className="text-[1.2rem] text-Black font-semibold mb-5">
                {d.timeZone}
              </h1>
              <div
                onClick={() => handleClick(ind)}
                className={`  ${Styles.divBgImg}  ${
                  ind === index
                    ? " border-blue-500 border-2"
                    : ""
                }
                   flex p-2  justify-between min-w-1/2 h-[300px] rounded-xl  `}
              >
                <div className="flex h-[40px] items-center   gap-2 bg-transparent">
                  <img className="w-[40px]" src={sunClound} />
                  <h1 className="text-[40px] font-semibold text-[--color-white]">
                    {d.temperature}
                    <sup>
                      <sup>o</sup>c
                    </sup>{" "}
                  </h1>
                </div>
                <div className="  h-[50px]">
                  <h1 className="text-[13px] text-[--color-white]">
                    {d.day},{d.currentTime}
                  </h1>
                  <span className="flex gap-2">
                    {" "}
                    <img src={cloud} className="w-[30px]" />{" "}
                    <p className="text-[10px]">partly cloudy</p>
                  </span>
                </div>
              </div>
            </div>
          );
        })}
        {isOpen && <SelectCity />}
        <Button
          onClick={() => dispatch(setOpen())}
          className="w-full  bg-[lightgrey]   h-[200px] text-grey font-semibold  rounded-xl"
        >
          <AddIcon />
          <p>Add City</p>
        </Button>
      </div>
      <Highlight />
      {/* <Graph /> */}
    </div>
  );
};

export default CityWeather;
