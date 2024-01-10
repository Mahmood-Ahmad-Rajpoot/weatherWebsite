// import React from "react";
import SideNavigation from "./SideNavigation/SideNavigation";
import { Outlet } from "react-router-dom";
import { getWeather } from "./getWeatherData/getWeatherData";

const Main = () => {
  const { timeZone } = Intl.DateTimeFormat().resolvedOptions();
  console.log(timeZone);

   getWeather(74, 31, timeZone)
  return (
    <div className="flex w-full h-[100vh]   ">
         <SideNavigation />
      
      <div className="md:pl-[200px] w-[100%]  grow">
        
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
