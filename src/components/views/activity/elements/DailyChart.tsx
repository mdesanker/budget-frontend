import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useAppSelector } from "../../../../store/hooks";
import { RootState } from "../../../../store/store";
import {
  dayTransactionTotal,
  dayTrasanctionCount,
} from "../../../../utils/utilFunctions";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

export const options = {
  responsive: true,
  interaction: {
    mode: "index" as const,
    intersect: false,
  },
  stacked: false,
  plugins: {
    legend: {
      display: false,
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
    },
    y1: {
      type: "linear" as const,
      display: true,
      position: "right" as const,
      grid: {
        drawOnChartArea: false,
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
        label: "Transaction Amount",
        data: labels.map((_, i) => dayTransactionTotal(i, weekTransactions)),
        backgroundColor: "#0891b2",
        yAxisID: "y",
      },
      {
        label: "Number of Transactions",
        data: labels.map((_, i) => dayTrasanctionCount(i, weekTransactions)),
        backgroundColor: "#000",
        yAxisID: "y1",
      },
    ],
  };

  return (
    <div className="relative w-9/10 max-w-2xl">
      <h2 className="text-center font-semibold text-xl">Daily Expenses</h2>
      <Bar options={options} data={data} className="mb-16" />
    </div>
  );
};

export default DailyChart;
