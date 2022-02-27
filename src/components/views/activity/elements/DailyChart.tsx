import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import faker from "@faker-js/faker";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: "Weekly Expenses",
    },
  },
};

const labels = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "#0891b2",
    },
  ],
};

const DailyChart = () => {
  return (
    <div className="relative w-9/10 max-w-2xl">
      <h2 className="text-center font-semibold text-xl">Daily Expenses</h2>
      <Bar options={options} data={data} className="mb-16" />
    </div>
  );
};

export default DailyChart;
