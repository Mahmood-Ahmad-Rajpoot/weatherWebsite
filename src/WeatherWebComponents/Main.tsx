// import React from "react";
import SideNavigation from "./SideNavigation/SideNavigation";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="flex w-full h-[100vh]   ">
         <SideNavigation />
      
      <div className="sm:pl-[200px]   grow">
        
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
