import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useAppSelector } from "../../../../store/hooks";
import { RootState } from "../../../../store/store";
import { monthTransactionTotal } from "../../../../utils/utilFunctions";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
);

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

const MonthlyChart = () => {
  const { yearTransactions } = useAppSelector(
    (state: RootState) => state.transactions
  );

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: labels.map((_, i) => monthTransactionTotal(i, yearTransactions)),
        backgroundColor: "#0891b2",
      },
    ],
  };

  return (
    <div className="relative w-9/10 max-w-2xl">
      <h2 className="text-center font-semibold text-xl">Monthly Expenses</h2>
      <Line options={options} data={data} className="mb-16" />
    </div>
  );
};

export default MonthlyChart;
