import React from 'react';
import { Radar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
  } from "chart.js";
  
ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const RadarChart = ({ data, options }) => {
return (
    <div style={{ width: "100%", height: "100%" }}>
    <Radar data={data} options={options} />
    </div>
    );
};
  
export default RadarChart;