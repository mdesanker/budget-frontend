import Nav from "../../elements/Nav";
import CategoryDonut from "./elements/CategoryDonut";
import DailyChart from "./elements/DailyChart";
import MonthlyChart from "./elements/MonthlyChart";

const Activity = () => {
  return (
    <main className="flex flex-col items-center">
      <h1>Activity</h1>
      <DailyChart />
      <MonthlyChart />
      <CategoryDonut />
      <Nav />
    </main>
  );
};

export default Activity;
