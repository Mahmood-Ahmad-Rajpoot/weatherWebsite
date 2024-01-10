import { createSlice } from "@reduxjs/toolkit";
 import { convertTimestampToTime } from "../WeatherWebComponents/getWeatherData/convertTimeStamp";

// interface OptionType {
//   timeZone: string;
//   hour: "numeric" | "2-digit";
//   minute: "numeric" | "2-digit";
//   hour12: boolean;
// }
// interface ObjectTypes{
//   apparentTemperature: number;
//   temperature: number;
//   precipitation: number;
//   rain: number;
//   humidity: number;
//   showers: number;
//   time: string;
//   weatherCode: number;
//   windSpeed: number;
//   timeZone: string;
//   currentTime: string;
//   day: string;
//   sunRiseTime: string;
//   sunSetTime: string;
//   hourlyRain: number[],
//   hourlyTime:number[],
//   hourlyTemperature:number[],
// }
// interface ObjectTypes {
//   size:number,
//   cities:ObjectArray[]

// }

const initialState = {
  index: 0,
  size: 0,
  cities: [
    {
      timeZone: "",
      apparentTemperature: 0,
      temperature: 0,
      precipitation: 0,
      rain: 0,
      humidity: 0,
      showers: 0,
      time: "",
      weatherCode: 0,
      windSpeed: 0,
      currentTime: "",
      day: "",
      sunRiseTime: "",
      sunSetTime: "",
      hourlyRain: [],
      hourlyTime: [],
      hourlyTemperature: [],
    },
  ],
  //   currentTime:,
};
const currentWeather:any = createSlice({
  initialState,
  name: "currentWeather",
  reducers: {
    setCityIndex: (state, action) => {
      state.index = action.payload;
    },

    setCurrentDetails: (state, action) => {
      const today = new Date();
      const {
        cityCurrentTime,
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
        hourlyTemperature,
      } = action.payload;
       
      // city date time
      
      // const cityTime = new Date().toLocaleTimeString("en-US", options);
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

      if (state.size === 0) {
        state.size = 1;
        state.cities[0].apparentTemperature = apparentTemperature;
        state.cities[0].temperature = temperature;
        state.cities[0].humidity = humidity;
        state.cities[0].showers = showers;
        state.cities[0].weatherCode = weatherCode;
        state.cities[0].windSpeed = windSpeed;
        state.cities[0].timeZone = timeZone;
        state.cities[0].time = time;
        (state.cities[0].currentTime = convertTimestampToTime(cityCurrentTime)),
          (state.cities[0].day = currentDayOfWeek),
          (state.cities[0].precipitation = precipitation);
        state.cities[0].rain = rain;
        state.cities[0].sunRiseTime = sunRiseTime;
        state.cities[0].sunSetTime = sunSetTime;
        state.cities[0].hourlyRain = hourlyRain;
        state.cities[0].hourlyTime = hourlyTime;
        state.cities[0].hourlyTemperature = hourlyTemperature;
      } else {
        const pushData = {
          ...action.payload,
          ...{ currentTime:  convertTimestampToTime(cityCurrentTime), day: currentDayOfWeek }
        };

        state.cities.push(pushData);
      }
      //   state = action.payload;

     },
  },
});
export const { setCurrentDetails, setCityIndex } =
  currentWeather.actions;
export default currentWeather.reducer;
