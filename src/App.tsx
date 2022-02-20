import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/views/auth/Login";
import Register from "./components/views/auth/Register";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
};

export default App;
