import React, { useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useAppSelector } from "../../../../store/hooks";
import { RootState } from "../../../../store/store";
import { categoryTotal } from "../../../../utils/utilFunctions";
import { categories } from "../../../../utils/transactionCategories";
import { donutOptions } from "../../../../utils/chartOptions";
import "../Activity.css";

ChartJS.register(ArcElement, Tooltip, Legend);

const CategoryDonut = () => {
  const [timePeriod, setTimePeriod] = useState("year");

  const setTimePeriodHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    setTimePeriod((e.target as HTMLElement).id);
  };

  const { weekTransactions, monthTransactions, yearTransactions } =
    useAppSelector((state: RootState) => state.transactions);

  let chartData = yearTransactions;
  if (timePeriod === "week") chartData = weekTransactions;
  if (timePeriod === "month") chartData = monthTransactions;
  if (timePeriod === "year") chartData = yearTransactions;

  const data = {
    labels: categories,
    datasets: [
      {
        label: "Expenses by Category",
        data: categories.map((category) => categoryTotal(category, chartData)),
        backgroundColor: [
          "#94a3b8",
          "#fca5a5",
          "#1e40af",
          "#93c5fd",
          "#0e7490",
          "#86efac",
          "#a21caf",
          "#fde047",
          "#6b21a8",
          "#b91c1c",
          "#155e75",
        ],
      },
    ],
  };

  return (
    <div className="relative w-9/10 max-w-xl mb-8">
      <h2 className="text-center font-semibold text-xl">
        Spending by Category
      </h2>
      <div className="flex justify-center items-center font-medium gap-2 pt-4">
        <button
          id="week"
          onClick={setTimePeriodHandler}
          className={`donut-btn text-blue-500 ${
            timePeriod === "week"
              ? "bg-blue-500 text-white hover:bg-blue-500 hover:text-white"
              : ""
          }`}
        >
          Week
        </button>
        <button
          id="month"
          onClick={setTimePeriodHandler}
          className={`donut-btn text-blue-500 ${
            timePeriod === "month"
              ? "bg-blue-500 text-white hover:bg-blue-500 hover:text-white"
              : ""
          }`}
        >
          Month
        </button>
        <button
          id="year"
          onClick={setTimePeriodHandler}
          className={`donut-btn text-blue-500 ${
            timePeriod === "year"
              ? "bg-blue-500 text-white hover:bg-blue-500 hover:text-white"
              : ""
          }`}
        >
          Year
        </button>
      </div>
      <Doughnut options={donutOptions} data={data} />
    </div>
  );
};

export default CategoryDonut;
