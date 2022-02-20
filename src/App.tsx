import React from "react";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <div>
        <h1>Hello, world!</h1>
      </div>
      <Routes>
        <Route path="/" element={<div />} />
      </Routes>
    </>
  );
};

export default App;
