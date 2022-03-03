import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/views/auth/Login";
import Register from "./components/views/auth/Register";
import axios from "axios";
import Dashboard from "./components/views/dashboard/Dashboard";
import ProtectedRoute from "./utils/ProtectedRoute";
import AddTransaction from "./components/views/transactionForm/AddTransaction";
import EditTransaction from "./components/views/transactionForm/EditTransaction";
import Account from "./components/views/account/Account";
import Activity from "./components/views/activity/Activity";
import ScrollToTop from "./utils/scrollToTop";

// axios.defaults.baseURL = "http://localhost:5000";
axios.defaults.baseURL = "https://budgettracker-api.herokuapp.com";

const App = () => {
  return (
    <>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/transaction"
            element={
              <ProtectedRoute>
                <AddTransaction />
              </ProtectedRoute>
            }
          />
          <Route
            path="/transaction/:id/edit"
            element={
              <ProtectedRoute>
                <EditTransaction />
              </ProtectedRoute>
            }
          />
          <Route
            path="/account"
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />
          <Route
            path="/activity"
            element={
              <ProtectedRoute>
                <Activity />
              </ProtectedRoute>
            }
          />
        </Routes>
      </ScrollToTop>
    </>
  );
};

export default App;
