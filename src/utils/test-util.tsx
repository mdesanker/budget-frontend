import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import { store } from "../store/store";
import { BrowserRouter as Router } from "react-router-dom";
import React from "react";

export const renderWithStateMgmtAndRouter = (children: React.ReactNode) => {
  const renderResult = render(
    <Provider store={store}>
      <Router>{children}</Router>
    </Provider>
  );

  return { renderResult };
};
