import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Tooltip,
} from "chart.js";
import { Chart } from "react-chartjs-2";
import { useAppSelector } from "../../../../store/hooks";
import { RootState } from "../../../../store/store";
import {
  dayTransactionTotal,
  dayTrasanctionCount,
} from "../../../../utils/utilFunctions";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Tooltip
);

export const options = {
  responsive: true,
  interaction: {
    mode: "index" as const,
    intersect: false,
  },
  stacked: false,
  plugins: {
    legend: {
      display: true,
      usePointStyle: true,
      reverse: true,
    },
    title: {
      display: true,
      text: "Weekly Expenses",
    },
  },
  scales: {
    y: {
      type: "linear" as const,
      display: true,
      position: "left" as const,
      grid: {
        drawBorder: true,
        borderColor: "#0891b2",
        borderWidth: 2,
        tickColor: "#0891b2",
        tickWidth: 2,
      },
      title: {
        display: true,
        text: "Amount Spent ($)",
        color: "#0891b2",
        font: {
          size: 16,
          weight: "bold",
        },
      },
    },
    y1: {
      type: "linear" as const,
      display: true,
      position: "right" as const,
      grid: {
        drawOnChartArea: false,
        drawBorder: true,
        borderColor: "#b91c1c",
        borderWidth: 2,
        tickColor: "#b91c1c",
        tickWidth: 2,
      },
      title: {
        display: true,
        text: "Number of Transactions",
        color: "#b91c1c",
        font: {
          size: 16,
          weight: "bold",
        },
      },
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

const DailyChart = () => {
  const { weekTransactions } = useAppSelector(
    (state: RootState) => state.transactions
  );

  const data = {
    labels,
    datasets: [
      {
        type: "line" as const,
        label: "Number of Transactions",
        data: labels.map((_, i) => dayTrasanctionCount(i, weekTransactions)),
        borderColor: "#b91c1c",
        borderWidth: 4,
        fill: true,
        yAxisID: "y1",
      },
      {
        type: "bar" as const,
        label: "Amount Spent",
        data: labels.map((_, i) => dayTransactionTotal(i, weekTransactions)),
        backgroundColor: "#0891b2",
        yAxisID: "y",
      },
    ],
  };

  return (
    <div className="relative w-9/10 max-w-2xl">
      <h2 className="text-center font-semibold text-xl">Daily Expenses</h2>
      <Chart type="bar" options={options} data={data} className="mb-16" />
    </div>
  );
};

export default DailyChart;
