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
      text: "Monthly Expenses",
    },
  },
};

const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
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

const MonthlyChart = () => {
  return (
    <div className="relative w-9/10 max-w-2xl">
      <h1 className="text-center font-semibold text-xl">Monthly Expenses</h1>
      <Bar options={options} data={data} className="mb-16" />
    </div>
  );
};

export default MonthlyChart;
