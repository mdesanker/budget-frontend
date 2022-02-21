import React from "react";
import { fireEvent, screen } from "@testing-library/react";
import Login from "./Login";
import { renderWithStateMgmtAndRouter } from "../../../utils/test-util";

beforeEach(() => {
  renderWithStateMgmtAndRouter(<Login />);
});

describe("log in form", () => {
  it("render inputs and submit btn", () => {
    const emailInput = screen.getByLabelText("Email") as HTMLInputElement;
    const passwordInput = screen.getByLabelText("Password") as HTMLInputElement;
    const submitBtn = screen.getByRole("button");

    expect(emailInput).toHaveTextContent("");
    expect(passwordInput).toHaveTextContent("");
    expect(submitBtn).toBeInTheDocument();
  });

  it("can input email and password", () => {
    const emailInput = screen.getByLabelText("Email") as HTMLInputElement;
    const passwordInput = screen.getByLabelText("Password") as HTMLInputElement;

    fireEvent.change(emailInput, { target: { value: "test@gmail.com" } });
    fireEvent.change(passwordInput, { target: { value: "password" } });

    expect(emailInput.value).toEqual("test@gmail.com");
    expect(passwordInput.value).toEqual("password");
  });
});
