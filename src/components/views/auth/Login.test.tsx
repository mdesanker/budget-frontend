import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../../store/store";
import { BrowserRouter as Router } from "react-router-dom";
import Login from "./Login";

test("full app rendering/navigating", () => {
  const { getByText } = render(
    <Provider store={store}>
      <Router>
        <Login />
      </Router>
    </Provider>
  );

  const title = screen.getAllByText(/Log in/i)[0] as HTMLHeadingElement;

  expect(title).toBeInTheDocument();

  expect(getByText(/Welcome back/i)).toBeInTheDocument();
});
