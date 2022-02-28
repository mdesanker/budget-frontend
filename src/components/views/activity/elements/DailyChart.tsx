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
        type: "line" as const,
        label: "Transaction Amount",
        data: labels.map((_, i) => dayTransactionTotal(i, weekTransactions)),
        borderColor: "#0891b2",
        borderWidth: 2,
        fill: false,
        yAxisID: "y",
      },
      {
        type: "bar" as const,
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
      <Chart type="bar" options={options} data={data} className="mb-16" />
    </div>
  );
};

export default DailyChart;
