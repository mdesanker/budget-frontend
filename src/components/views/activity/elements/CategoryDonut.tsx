import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useAppSelector } from "../../../../store/hooks";
import { RootState } from "../../../../store/store";
import { categoryTotal } from "../../../../utils/utilFunctions";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: [
    "housing",
    "transportation",
    "food",
    "utilities",
    "healthcare",
    "personal",
  ],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 7],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
      ],
      borderWidth: 2,
    },
  ],
};

const CategoryDonut = () => {
  const { yearTransactions } = useAppSelector(
    (state: RootState) => state.transactions
  );

  // console.log(yearTransactions);

  console.log(yearTransactions && categoryTotal("groceries", yearTransactions));

  return (
    <div className="mb-16">
      <h2 className="text-center font-semibold text-xl">
        Expenses by Category
      </h2>
      <Doughnut data={data} />
    </div>
  );
};

export default CategoryDonut;
