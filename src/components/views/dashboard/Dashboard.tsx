import React, { useEffect } from "react";
import { useAppDispatch } from "../../../store/hooks";
import { loadUser } from "../../../store/slices/userSlice";
import Nav from "../../elements/Nav";
import DashHeader from "./elements/DashHeader";
import DashTransactions from "./elements/DashTransactions";

const Dashboard = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, []);

  return (
    <main>
      <DashHeader />
      <DashTransactions />
      <Nav />
    </main>
  );
};

export default Dashboard;
