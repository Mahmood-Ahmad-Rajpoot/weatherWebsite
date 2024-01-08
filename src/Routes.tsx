import React from "react";

//  react router dom
import { BrowserRouter, Routes, Route } from "react-router-dom";
 // weather
import Main from "./WeatherWebComponents/Main";
import Home from "./WeatherWebComponents/Pages/Home";
import Calender from "./WeatherWebComponents/Pages/Calender";
import ForeCast from "./WeatherWebComponents/Pages/ForeCast";
import Location from "./WeatherWebComponents/Pages/Location";
import Settings from "./WeatherWebComponents/Pages/Settings";
import Analytics from "./WeatherWebComponents/Pages/Analytics";

const Paths = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* waether */}
        <Route path="/" element={<Main />}>
          <Route index element={<Home />} />
          <Route path="ForeCast" element={<ForeCast />} />
          <Route path="Analytics" element={<Analytics />} />
          <Route path="Calender" element={<Calender />} />
          <Route path="Location" element={<Location />} />
          <Route path="Settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Paths;
