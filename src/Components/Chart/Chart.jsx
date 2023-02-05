import React from "react";
import "./Chart.css";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";
import { ChartData, ChartOptions } from "../../Data/Data";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const Chart = () => {
  return (
    <div
      className="bar-chart"
      style={{
        width: "413px",
        backgroundColor: "white",
        padding: "0px",

        height: "355px",
        borderRadius: "12px",
        background: "#FFFFFF",
        boxshadow: "0px 13px 18px rgba(57, 84, 255, 0.04)",
        borderradius: "12px",
      }}
    >
      <Bar
        style={{
          width: "370px",
          display: "flex",
          padding: "5px",
          height: "341px",
        }}
        data={ChartData}
        options={ChartOptions}
      ></Bar>
    </div>
  );
};

export default Chart;
