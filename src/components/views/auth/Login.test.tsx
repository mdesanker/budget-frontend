import React from "react";
import { fireEvent, screen } from "@testing-library/react";
import Login from "./Login";
import { renderWithStateMgmtAndRouter } from "../../../utils/test-util";

const setup = () => {
  const utils = renderWithStateMgmtAndRouter(<Login />);
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
  it("renders email and password input", () => {
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
