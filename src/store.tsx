import { configureStore } from "@reduxjs/toolkit";
import NavController from "./features/NavController";

export const store:any = configureStore({
    reducer:{
        navController:NavController,
    }
}
     
);