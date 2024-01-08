import { configureStore } from "@reduxjs/toolkit";
import NavController from "./features/NavController";
import currentWeather from "./features/currentWeather";

export const store:any = configureStore({
    reducer:{
        navController:NavController,
        currentWeather:currentWeather,
    }
}
     
);