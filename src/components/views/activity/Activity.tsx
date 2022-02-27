import Nav from "../../elements/Nav";
import DailyChart from "./elements/DailyChart";
import MonthlyChart from "./elements/MonthlyChart";

const Activity = () => {
  return (
    <main className="flex flex-col items-center">
      <h1>Activity</h1>
      <DailyChart />
      <MonthlyChart />
      <Nav />
    </main>
  );
};

export default Activity;
