import React, {useEffect,useRef} from "react";
import { Line } from "react-chartjs-2";
interface getProp{
  chartData:any,
}
const Graph:React.FC<getProp> = ({ chartData }) => {

  const chartRef = useRef();

  useEffect(() => {
    if (chartRef && chartRef.current && chartRef.current.chartInstance) {
      // Destroy the previous chart instance
      chartRef.current.chartInstance.destroy();
    }
  }, [chartData]); // Make sure to include all dependencies that could change the chartData

  return <Line ref={chartRef} data={chartData}  options={{
       
    plugins: {
      title: {
        display: true,
        text: "Users Gained between 2016-2020"
      },
      legend: {
        display: false
      }
    }
  }} />;
 

  return (
    <div className="chart-container">
    {/* <h2 style={{ textAlign: "center" }}>Line Chart</h2>
    <Line
      data={chartData}
      
      options={{
       
        plugins: {
          title: {
            display: true,
            text: "Users Gained between 2016-2020"
          },
          legend: {
            display: false
          }
        }
      }}
    /> */}
  </div>
  );
};

export default Graph;
