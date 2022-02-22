import React from "react";
import DashHeader from "./elements/DashHeader";
import DashTransactions from "./elements/DashTransactions";

const Dashboard = () => {
  return (
    <main>
      <DashHeader />
      <DashTransactions />
    </main>
  );
};

export default Dashboard;
