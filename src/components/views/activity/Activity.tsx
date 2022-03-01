import Nav from "../../elements/Nav";
import CategoryDonut from "./elements/CategoryDonut";
import DailyChart from "./elements/DailyChart";
import MonthlyChart from "./elements/MonthlyChart";

const Activity = () => {
  return (
    <main className="flex flex-col items-center mb-16 bg-white">
      <h1 className="w-full text-center font-bold text-2xl mb-8 p-4 border-b border-gray-200">
        Activity Tracker
      </h1>
      <DailyChart />
      <MonthlyChart />
      <CategoryDonut />
      <Nav />
    </main>
  );
};

export default Activity;
