import   { useState } from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
 import { Data } from "./ChartData";
import Graph from "./Graph";
// import Chart from "chart.js/auto";
//  import { DatasetLinkedOutlined, MonitorHeart, PhpRounded, RollerShadesSharp } from "@mui/icons-material";

const Highlight = () => {
  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.year),

    datasets: [
      {
        label: "Users Gained ",
        fill:true,
        data: Data.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#f0331a",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,

       
      },
    ],
  });
  const data1 = ["Humidity", "Precipation", "Wind", "Sunrise & Sunset"];
  return (
    <div className="pt-4">
      <h1 className="text-[1.2rem] text-black font-semibold mb-3">
        Today's Highlight
      </h1>
      <div className="flex flex-nowrap justify-between">
        {data1.map((d, ind) => {
          return (
            <div
              className="h-[100px] flex flex-col justify-center min-w-[120px] max-w-auto border rounded-xl"
              key={ind}
            >
              <h1 className="px-3 pb-4">{d}</h1>

              {ind === 3 ? (
                <div className="flex gap-2 px-2">
                  <ArrowDownwardIcon className="text-white bg-[--weather-secondary-color] rounded-full" />
                  <p className="self-center font-bold text-[1rem] mr-2">
                    6:20AM
                  </p>
                  <ArrowUpwardIcon className="text-white bg-[--weather-secondary-color] rounded-full" />
                  <p className="self-center font-bold text-[1rem]">7:20PM</p>
                </div>
              ) : (
                <p className="self-center font-bold text-[1rem]">5%</p>
              )}
            </div>
          );
        })}
      </div>
      <Graph chartData={chartData} />
    </div>
  );
};

export default Highlight;
