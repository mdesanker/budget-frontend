import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useAppSelector } from "../../../../store/hooks";
import { RootState } from "../../../../store/store";
import { categoryTotal } from "../../../../utils/utilFunctions";
import { categories } from "../../../../utils/transactionCategories";
import { donutOptions } from "../../../../utils/chartOptions";

ChartJS.register(ArcElement, Tooltip, Legend);

const CategoryDonut = () => {
  const { yearTransactions } = useAppSelector(
    (state: RootState) => state.transactions
  );

  const data = {
    labels: categories,
    datasets: [
      {
        label: "Expenses by Category",
        data: categories.map((category) =>
          categoryTotal(category, yearTransactions)
        ),
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
    <div className="relative w-9/10 max-w-2xl">
      <h2 className="text-center font-semibold text-xl">
        Expenses by Category
      </h2>
      <Doughnut options={donutOptions} data={data} />
    </div>
  );
};

export default CategoryDonut;
