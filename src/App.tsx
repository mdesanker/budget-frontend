import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/views/auth/Login";
import Register from "./components/views/auth/Register";
import axios from "axios";
import Dashboard from "./components/views/dashboard/Dashboard";
import ProtectedRoute from "./utils/ProtectedRoute";

axios.defaults.baseURL = "http://localhost:5000";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard"
          element={
            // <ProtectedRoute>
            <Dashboard />
            // </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
};

export default App;
