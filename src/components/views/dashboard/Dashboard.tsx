import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import {
  clearTransaction,
  getUserTransactions,
} from "../../../store/slices/transactionSlice";
import { loadUser } from "../../../store/slices/userSlice";
import Nav from "../../elements/Nav";
import DashHeader from "./elements/DashHeader";
import DashTransactions from "./elements/DashTransactions";

const Dashboard = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.user);

  // State for transactions to display
  const [timespan, setTimespan] = useState(30);

  const setTimespanHandler = (value: number) => {
    setTimespan(value);
  };

  // Load user data
  useEffect(() => {
    dispatch(loadUser());
    dispatch(clearTransaction());
  }, []);

  // Load transactions as user changes
  useEffect(() => {
    dispatch(getUserTransactions());
  }, [user]);

  return (
    <main className="mb-16">
      <DashHeader timespan={timespan} setTimespan={setTimespanHandler} />
      <DashTransactions timespan={timespan} />
      <Nav />
    </main>
  );
};

export default Dashboard;
