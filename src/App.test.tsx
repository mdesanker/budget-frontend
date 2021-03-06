import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "./store/store";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

test.skip("full app rendering/navigating", () => {
  const { getByText } = render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  );

  expect(getByText(/Welcome back/i)).toBeInTheDocument();
});
