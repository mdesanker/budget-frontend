import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
} from "chart.js";
import { Chart } from "react-chartjs-2";
import { useAppSelector } from "../../../../store/hooks";
import { RootState } from "../../../../store/store";
import {
  monthTransactionTotal,
  monthTrasanctionCount,
} from "../../../../utils/utilFunctions";
import { barLineOptions } from "../../../../utils/chartOptions";

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
  "Jan.",
  "Feb.",
  "Mar.",
  "Apr.",
  "May",
  "Jun.",
  "Jul.",
  "Aug.",
  "Sep.",
  "Oct.",
  "Nov.",
  "Dec.",
];

const MonthlyChart = () => {
  const { yearTransactions } = useAppSelector(
    (state: RootState) => state.transactions
  );

  const data = {
    labels,
    datasets: [
      {
        type: "line" as const,
        label: "Transactions",
        data: labels.map((_, i) => monthTrasanctionCount(i, yearTransactions)),
        borderColor: "#b91c1c",
        borderWidth: 4,
        fill: true,
        yAxisID: "y1",
      },
      {
        type: "bar" as const,
        label: "Amount",
        data: labels.map((_, i) => monthTransactionTotal(i, yearTransactions)),
        backgroundColor: "#0891b2",
        yAxisID: "y",
      },
    ],
  };

  return (
    <div className="relative w-9/10 max-w-3xl mb-8">
      <h2 className="text-center font-semibold text-xl">Expenses by Month</h2>
      <p className="text-center text-gray-500">(Year to date)</p>
      <Chart type="bar" options={barLineOptions} data={data} />
    </div>
  );
};

export default MonthlyChart;
