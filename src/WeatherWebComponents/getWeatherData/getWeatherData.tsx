// `https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=weather_code,wind_speed_10m&timeformat=unixtime&timezone=Asia%2FSingapore&past_days=1&forecast_days=3`

const url = `https://api.open-meteo.com/v1/forecast?current=temperature_2m,
relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,showers,weather_code,wind_speed_10m,
wind_direction_10m&hourly=temperature_2m,
precipitation,rain,showers,snowfall,weather_code,visibility,
wind_speed_10m&daily=weather_code&timeformat=unixtime&past_days=1&forecast_days=3`;
import axios from "axios";
import { useDispatch } from "react-redux";
import { setCurrentDetails } from "../../features/currentWeather";
export const getWeather = async (
  longi: number,
  lati: number,
  timeZone: string
) => {
  const dispatch = useDispatch();
  
  const data = await axios
    .get(url, {
      params: {
        latitude: lati,
        longitude: longi,
        timeZone,
      },
    })
    .then((r) => r.data).catch((err) =>console.log(err));
    ;

  const { current, daily, hourly } = data;
  console.log(current);
  const {
    apparent_temperature: apparentTemp,
    is_day: isDay,
    precipitation,
    rain,
    relative_humidity_2m: humidity,
    showers,
    temperature_2m: temp,
    time,
    weather_code: weatherCode,
    wind_speed_10m: windSpeed,
  } = current;
  dispatch(setCurrentDetails({
    apparentTemp,
    temp,
    precipitation,
    rain,
    humidity,
    showers,
    time,
    weatherCode,
    windSpeed,
  }))
   
  // console.log(apparentTemp, temp);
};
