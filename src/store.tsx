import { configureStore } from "@reduxjs/toolkit";
import NavController from "./features/NavController";
import currentWeather from "./features/currentWeather";
import addCities from "./features/addCities";

export const store = configureStore({
    reducer:{
        navController:NavController,
        currentWeather:currentWeather,
        addCities:addCities,
    }
}
     
);