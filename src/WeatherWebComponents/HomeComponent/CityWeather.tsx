// import React from "react";
import { cloud, sunClound } from "../../assets/";
import Styles from "./weatherHome.module.css";
import { Button } from "antd";
import AddIcon from "@mui/icons-material/Add";
import Highlight from "./Highlight";
import Graph from "./Graph";
const CityWeather = () => {
  return (
   
      <div className=" w-[720px] p-3 ">
        <p className="text-[0.8rem] text-grey  font-semibold mb-2">
          Current Location
        </p>
        <h1 className="text-[1.2rem] text-Black font-semibold mb-5">
          Pakistan, Islamabad
        </h1>
        <div className="flex gap-3 h-[200px] w-[650px]">
        <div
          className={
            Styles.divBgImg +
            " flex p-2  justify-between w-[380px] h-full rounded-xl  "
          }
        >
          <div className="flex h-[40px] items-center   gap-2 bg-transparent">
            <img className="w-[40px]" src={sunClound} />
            <h1 className="text-[40px] font-semibold text-[--color-white]">
              21 
              <sup>
                <sup>o</sup>c
              </sup>{" "}
            </h1>
          </div>
          <div className="  h-[50px]">
            <h1 className="text-[13px] text-[--color-white]">
              Monday , 7:30AM
            </h1>
            <span className="flex gap-2">
              {" "}
              <img src={cloud} className="w-[30px]" />{" "}
              <p className="text-[10px]">partly cloudy</p>
            </span>
          </div>
        </div>
        <Button className="w-[250px] bg-[lightgrey] h-full text-grey font-semibold  rounded-xl">
        <AddIcon />
       <p>Add City</p> 
      </Button>
      </div>
      <Highlight/>
      {/* <Graph /> */}
      </div>
     
    
  );
};

export default CityWeather;
