import React from "react";
import "./AreaChart.css";
import Chart from "react-apexcharts";
import { AreaChart } from "../../Data/Data";
const AreaChartL = () => {
  return (
    <div className="ApexChartContainer">
      <Chart
        series={AreaChart.series}
        type="area"
        options={AreaChart.options}
      ></Chart>
    </div>
  );
};

export default AreaChartL;
