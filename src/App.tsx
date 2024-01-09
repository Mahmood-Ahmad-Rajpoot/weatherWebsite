import Paths from "./Routes";
import "./CSSVariables.css";
import { getWeather } from "./WeatherWebComponents/getWeatherData/getWeatherData";
import { useEffect } from "react";

function App() {
  const { timeZone } = Intl.DateTimeFormat().resolvedOptions();
 console.log('Timezone:', timeZone);
 
  getWeather(74, 31, 'Asia/Karachi')
  useEffect(() => { 
    }
  ,[])
  // console.log(data);

  return (
    <div className="w-[100%]">
      <Paths />
    </div>
  );
}

export default App;
