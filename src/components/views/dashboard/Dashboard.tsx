import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { getUserTransactions } from "../../../store/slices/transactionSlice";
import { loadUser } from "../../../store/slices/userSlice";
import Nav from "../../elements/Nav";
import DashHeader from "./elements/DashHeader";
import DashTransactions from "./elements/DashTransactions";

const Dashboard = () => {
  const dispatch = useAppDispatch();

  const { user } = useAppSelector((state) => state.user);

  // Load user data
  useEffect(() => {
    dispatch(loadUser());
  }, []);

  // Load transactions as user changes
  useEffect(() => {
    dispatch(getUserTransactions());
  }, [user]);

  return (
    <main className="mb-16">
      <DashHeader />
      <DashTransactions />
      <Nav />
    </main>
  );
};

export default Dashboard;
