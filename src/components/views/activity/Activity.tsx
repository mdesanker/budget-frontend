import Nav from "../../elements/Nav";
import CategoryDonut from "./elements/CategoryDonut";
import DailyChart from "./elements/DailyChart";
import MonthlyChart from "./elements/MonthlyChart";

const Activity = () => {
  return (
    <main className="flex flex-col items-center mb-16">
      <h1 className="font-bold text-2xl p-2 mb-4">Activity</h1>
      <DailyChart />
      <MonthlyChart />
      <CategoryDonut />
      <Nav />
    </main>
  );
};

export default Activity;
