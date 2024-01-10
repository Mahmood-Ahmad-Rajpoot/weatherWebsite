// import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Styles from "./sidenav.module.css";
import ExploreIcon from "@mui/icons-material/Explore";
import HomeIcon from "@mui/icons-material/Home";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import SettingsIcon from "@mui/icons-material/Settings";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import {   useSelector } from "react-redux";
 

const SideNavigation = () => {
  const { show } = useSelector((s: any) => s.navController);
  // const dispatch = useDispatch();

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
      
    
      <div
        className={`w-[200px] z-50   fixed   flex-col ${
          show ? "flex": "hidden  sm:flex" 
        }  justify-center items-center h-[100vh]  bg-[--weather-primary-color] min-h-100vh  gap-[100px]   `}
      >
       
       
        <ul className={Styles.ulStyles}>
          <NavLink
            to={"/"}
            className={Styles.navLinksStyles}
            style={linkStyles}
          >
            <span className={Styles.span1 + " flex gap-2 "}>
              <HomeIcon /> <li className={Styles.li1}>Home</li>
            </span>
          </NavLink>
          <NavLink
            className={Styles.navLinksStyles}
            style={linkStyles}
            to={"./Forecast"}
          >
            <span  className={Styles.span1 + " flex gap-2 "}>
              <ExploreIcon /> <li className={Styles.li1}>Forecast</li>
            </span>
          </NavLink>
          <NavLink
            className={Styles.navLinksStyles}
            style={linkStyles}
            to={"./Calender"}
          >
              <span  className={Styles.span1 + " flex gap-2 "}>
              <CalendarTodayIcon />
              <li className={Styles.li1}>Calentender</li>
            </span>
          </NavLink>
          <NavLink
            className={Styles.navLinksStyles}
            style={linkStyles}
            to={"./Analytics"}
          >
              <span  className={Styles.span1 + " flex gap-2 "}>
              <TrackChangesIcon /> <li className={Styles.li1}>Analytics</li>
            </span>
          </NavLink>
          <NavLink
            className={Styles.navLinksStyles}
            style={linkStyles}
            to={"./Location"}
          >
              <span  className={Styles.span1 + " flex gap-2 "}>
              <LocationOnIcon />
              <li className={Styles.li1}>Locations</li>
            </span>
          </NavLink>
          <NavLink
            className={Styles.navLinksStyles}
            style={linkStyles}
            to={"./Settings"}
          >
              <span  className={Styles.span1 + " flex gap-2 "}>
              <SettingsIcon />
              <li className={Styles.li1}>Settings</li>
            </span>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default SideNavigation;
