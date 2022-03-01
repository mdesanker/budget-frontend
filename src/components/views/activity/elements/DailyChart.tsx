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
import { barLineOptions } from "../../../../utils/chartOptions";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Tooltip
);

const labels = ["Sun.", "Mon.", "Tue.", "Wed.", "Thu.", "Fri.", "Sat."];

const DailyChart = () => {
  const { weekTransactions } = useAppSelector(
    (state: RootState) => state.transactions
  );

  const data = {
    labels,
    datasets: [
      {
        type: "line" as const,
        label: "Transactions",
        data: labels.map((_, i) => dayTrasanctionCount(i, weekTransactions)),
        borderColor: "#b91c1c",
        borderWidth: 4,
        fill: true,
        yAxisID: "y1",
      },
      {
        type: "bar" as const,
        label: "Amount",
        data: labels.map((_, i) => dayTransactionTotal(i, weekTransactions)),
        backgroundColor: "#0891b2",
        yAxisID: "y",
      },
    ],
  };

  return (
    <div className="relative w-9/10 max-w-3xl mb-8">
      <h2 className="text-center font-semibold text-xl">Expenses by Day</h2>
      <p className="text-center text-gray-500">(Week to date)</p>
      <Chart type="bar" options={barLineOptions} data={data} />
    </div>
  );
};

export default DailyChart;
