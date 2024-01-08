import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const initialState = {
  
};
const currentWeather = createSlice({
  initialState,
  name: "currentWeather",
  reducers: {
    setCurrentDetails: (state, action) => {
      state = action.payload;
      console.log(state,'stteeee:');
      
    },
  },
});
export const { setCurrentDetails } = currentWeather.actions;
export default currentWeather.reducer;
