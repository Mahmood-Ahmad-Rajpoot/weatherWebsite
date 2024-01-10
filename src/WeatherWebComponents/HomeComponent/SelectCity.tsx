import React, { useState } from "react";
import { Button, Modal, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setOpen } from "../../features/selectCityModal";
import { pakistanCities } from "./citiesData";
import axios from "axios";
import { convertTimestampToTime } from "../getWeatherData/convertTimeStamp";
import { setCurrentDetails } from "../../features/currentWeather";

const SelectCity = () => {
  const { isOpen } = useSelector((store: any) => store.selectCityModal);
  const dispatch = useDispatch();
  const [city, setCity] = useState<null | string>(null);

  const onChange = (value: string) => {
    setCity(value);
  };

  const onSearch = (value: string) => {
    console.log("search:", value);
  };

  const handleAdd = () => {
    if (city) {
      fetchWeatherData(74, 31, city);
      dispatch(setOpen());
    }
  };

  const filterOption = (
    input: string,
    option?: { label: string; value: string }
  ) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

  const handleCancel = () => {
    dispatch(setOpen());
  };

  const modalFooter = (
    <Button
      onClick={handleAdd}
      className="w-full  bg-[--weather-primary-color] !text-white"
    >
      <p>Add City</p>
    </Button>
  );

  const fetchWeatherData = async (
    longi: number,
    lati: number,
    timeZone: string
  ) => {
    try {
      const url = `https://api.open-meteo.com/v1/forecast?current=temperature_2m,
relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,showers,weather_code,wind_speed_10m,
wind_direction_10m&hourly=temperature_2m,
precipitation,rain,showers,snowfall,weather_code,visibility,
wind_speed_10m&daily=weather_code&timeformat=unixtime&past_days=1&forecast_days=3&daily=sunrise,sunset`;
      const response = await axios.get(url, {
        params: {
          latitude: lati,
          longitude: longi,
          timeZone,
        },
      });

      const data = response.data;
      console.log(data, ":dattatatatta");
// dispatch actions

    
  const { current, daily, hourly } = data;
  const {time:cityCurrentTime} = current
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
      sunRiseTime: sunRiseTime,
      sunSetTime: sunSetTime,
      hourlyRain: hourlyRain,
      hourlyTime: hourlyTime,
      hourlyTemperature: hourlyTemperature,
    })
  );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal
      className="pt-5  !bg-[weather-secondary-color]"
      open={isOpen}
      footer={modalFooter}
      onCancel={handleCancel}
    >
      <Select
        className=" w-full h-[50px]   mt-8"
        showSearch
        placeholder="Select City"
        optionFilterProp="children"
        onChange={onChange}
        onSearch={onSearch}
        filterOption={filterOption}
        options={pakistanCities}
      />
    </Modal>
  );
};

export default SelectCity;
