import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  tension: 0.3,
  plugins: {
    legend: {
      position: "top",
    },
  },
};

const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Amount of money you spent",
      data: [10000, 20000, 15000, 16000, 13000, 15000, 10000, 18000, 16000, 8000, 8500, 10000],
      borderColor: "#FF8C8C",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

const Chart = () => {
  return <Line options={options} data={data} />;
};

export default Chart;
