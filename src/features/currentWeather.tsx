import { createSlice } from "@reduxjs/toolkit";
interface OptionType {
    hour: "numeric" | "2-digit",
    minute: "numeric" | "2-digit",
    hour12: boolean,
  }
const today = new Date();

const options: OptionType = { hour: "numeric", minute: "2-digit", hour12: true };
const time = new Date().toLocaleTimeString("en-US", options);
const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];


const currentDayOfWeek = daysOfWeek[today.getDay()];
interface ObjectType {
  apparentTemperature: number;
  temperature: number;
  precipitation: number;
  rain: number;
  humidity: number;
  showers: number;
  time: string;
  weatherCode: number;
  windSpeed: number;
  timeZone: string;
  currentTime: string;
  day: string;
  sunRiseTime: string;
  sunSetTime: string;
  hourlyRain: number[],
  hourlyTime:number[],
  hourlyTemperature:number[],
}
const initialState: ObjectType = {
  apparentTemperature: 0,
  temperature: 0,
  precipitation: 0,
  rain: 0,
  humidity: 0,
  showers: 0,
  time: "",
  weatherCode: 0,
  windSpeed: 0,
  timeZone: "",
  currentTime: time,
  day: currentDayOfWeek,
  sunRiseTime: "",
  sunSetTime: "",
  hourlyRain:[],
  hourlyTime:[],
  hourlyTemperature:[]
  //   currentTime:,
};
const currentWeather = createSlice({
  initialState,
  name: "currentWeather",
  reducers: {
    setCurrentDetails: (state, action) => {
      const {
        apparentTemperature,
        temperature,
        precipitation,
        rain,
        humidity,
        showers,
        time,
        weatherCode,
        windSpeed,
        timeZone,
        sunRiseTime,
        sunSetTime,
        hourlyRain,
        hourlyTime,
        hourlyTemperature 
      } = action.payload;
      //   state = action.payload;
      state.apparentTemperature = apparentTemperature;
      state.temperature = temperature;
      state.humidity = humidity;
      state.showers = showers;
      state.weatherCode = weatherCode;
      state.windSpeed = windSpeed;
      state.timeZone = timeZone;
      state.time = time;
      state.precipitation = precipitation;
      state.rain = rain;
      state.sunRiseTime = sunRiseTime;
      state.sunSetTime = sunSetTime;
      state.hourlyRain = hourlyRain;
      state.hourlyTime = hourlyTime;
      state.hourlyTemperature = hourlyTemperature;

      //   console.log('apparent:',typeof (weatherCode));
    },
  },
});
export const { setCurrentDetails } = currentWeather.actions;
export default currentWeather.reducer;
