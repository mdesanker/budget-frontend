import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../../store/store";
import { BrowserRouter as Router } from "react-router-dom";
import Login from "./Login";
import { debug } from "console";

const setup = () => {
  const utils = render(
    <Provider store={store}>
      <Router>
        <Login />
      </Router>
    </Provider>
  );
  const emailInput = screen.getByPlaceholderText("Email") as HTMLInputElement;
  const passwordInput = screen.getByPlaceholderText(
    "Password"
  ) as HTMLInputElement;
  const form = screen.getByTestId("form");
  return {
    emailInput,
    passwordInput,
    form,
    utils,
  };
};

describe("log in form", () => {
  it("allows email and password to be submitted", () => {
    const { emailInput, passwordInput, form } = setup();

    fireEvent.change(emailInput, { target: { value: "test@gmail.com" } });
    fireEvent.change(passwordInput, { target: { value: "password" } });

    expect(emailInput.value).toEqual("test@gmail.com");
    expect(passwordInput.value).toEqual("password");

    fireEvent.submit(form);

    expect(emailInput.value).toEqual("");
    expect(passwordInput.value).toEqual("");
  });
});
