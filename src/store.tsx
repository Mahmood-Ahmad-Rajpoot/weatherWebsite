import { configureStore } from "@reduxjs/toolkit";
import NavController from "./features/NavController";
import currentWeather from "./features/currentWeather";
 import selectCityModal from "./features/selectCityModal";
 export const store = configureStore({
    reducer:{
        navController:NavController,
        currentWeather:currentWeather,
         selectCityModal:selectCityModal,
     }
}
     
);