import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/views/auth/Login";
import Register from "./components/views/auth/Register";
import axios from "axios";
import Dashboard from "./components/views/dashboard/Dashboard";

axios.defaults.baseURL = "http://localhost:5000";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
};

export default App;
