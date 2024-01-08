import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Styles from "./sidenav.module.css";
import ExploreIcon from "@mui/icons-material/Explore";
import HomeIcon from "@mui/icons-material/Home";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import SettingsIcon from "@mui/icons-material/Settings";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "antd";
import CloseIcon from "@mui/icons-material/Close";
import { setNav } from "../../features/NavController";

const SideNavigation = () => {
  const { show } = useSelector((s: any) => s.navController);
  const dispatch = useDispatch();

  // links styles
  const linkStyles = ({ isActive }: any) => {
    return {
      textDecoration: "none",
      color: isActive
        ? "var(--color-white) "
        : "var(--weather-secondary-color)",
      borderLeft: isActive ? "5px solid var(--color-white)" : "",
      backgroundColor: isActive ? "var(--weather-secondary-color) " : "",
    };
  };

  return (
    <div className=" ">
      {show &&
      <Button
          onClick={() => dispatch(setNav())}
          
           className="w-[200px] bg-[--weather-primary-color] flex sm:hidden hover:text-[--weather-secondary-color]  text-[--color-white] justify-center items-center"
        >
          <CloseIcon className="sm:hidden flex " />
        </Button>}  
      <div
        className={`w-[200px] z-50   fixed hidden sm:flex  flex-col ${
          show ? "!flex": "!hidden" 
        } justify-center items-center h-[100vh]  bg-[--weather-primary-color] min-h-100vh w-[200px]  gap-[100px]   `}
      >
       
       
        <ul className={Styles.ulStyles}>
          <NavLink
            to={"/"}
            className={Styles.navLinksStyles}
            style={linkStyles}
          >
            <span className="flex gap-2 ">
              <HomeIcon /> <li>Home</li>
            </span>
          </NavLink>
          <NavLink
            className={Styles.navLinksStyles}
            style={linkStyles}
            to={"./Forecast"}
          >
            <span className="flex gap-2">
              <ExploreIcon /> <li>Forecast</li>
            </span>
          </NavLink>
          <NavLink
            className={Styles.navLinksStyles}
            style={linkStyles}
            to={"./Calender"}
          >
            <span className="flex gap-2">
              <CalendarTodayIcon />
              <li>Calentender</li>
            </span>
          </NavLink>
          <NavLink
            className={Styles.navLinksStyles}
            style={linkStyles}
            to={"./Analytics"}
          >
            <span className="flex gap-2">
              <TrackChangesIcon /> <li>Analytics</li>
            </span>
          </NavLink>
          <NavLink
            className={Styles.navLinksStyles}
            style={linkStyles}
            to={"./Location"}
          >
            <span className="flex gap-2">
              <LocationOnIcon />
              <li>Locations</li>
            </span>
          </NavLink>
          <NavLink
            className={Styles.navLinksStyles}
            style={linkStyles}
            to={"./Settings"}
          >
            <span className="flex gap-2">
              <SettingsIcon />
              <li>Settings</li>
            </span>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default SideNavigation;
