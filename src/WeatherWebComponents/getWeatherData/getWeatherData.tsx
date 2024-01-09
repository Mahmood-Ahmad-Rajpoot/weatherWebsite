const url = `https://api.open-meteo.com/v1/forecast?current=temperature_2m,
relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,showers,weather_code,wind_speed_10m,
wind_direction_10m&hourly=temperature_2m,
precipitation,rain,showers,snowfall,weather_code,visibility,
wind_speed_10m&daily=weather_code&timeformat=unixtime&past_days=1&forecast_days=3&daily=sunrise,sunset`;
import axios from "axios";
import { useDispatch } from "react-redux";
import { setCurrentDetails } from "../../features/currentWeather";
import { convertTimestampToTime } from "./convertTimeStamp";
import { currentCity } from "../../features/addCities";
export const getWeather = async (
  longi: number,
  lati: number,
  timeZone: string
) => {
  // redux action dispatch
  const dispatch = useDispatch();

  // fetcher axios method
  const data = await axios
    .get(url, {
      params: {
        latitude: lati,
        longitude: longi,
        timeZone,
      },
    })
    .then((r) => r.data)
    .catch((err) => console.log(err));

  console.log(data);

  const { current, daily, hourly } = data;

  // rain and time hourly
  const {
    rain: hourlyRain,
    time: hourlyTime,
    temperature_2m: hourlyTemperature,
  } = hourly;

  // const { current, daily } = data;
  // console.log(daily);

  // destructuring the object
  const { sunrise, sunset } = daily;
  // covert timestamp to time format
  const sunRiseTime = convertTimestampToTime(sunrise[0]);
  const sunSetTime = convertTimestampToTime(sunset[0]);

  const {
    apparent_temperature: apparentTemperature,
    // is_day: isDay,
    precipitation,
    rain,
    relative_humidity_2m: humidity,
    showers,
    temperature_2m: temperature,
    time,
    weather_code: weatherCode,
    wind_speed_10m: windSpeed,
  } = current;
  dispatch(
    setCurrentDetails({
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
      sunRiseTime: sunRiseTime,
      sunSetTime: sunSetTime,
      hourlyRain: hourlyRain,
      hourlyTime: hourlyTime,
      hourlyTemperature: hourlyTemperature,
    })
  );
  dispatch(currentCity(timeZone));
};
