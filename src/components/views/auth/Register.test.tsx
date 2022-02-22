import React from "react";
import { fireEvent, screen } from "@testing-library/react";
import Register from "./Register";
import { renderWithStateMgmtAndRouter } from "../../../utils/test-util";

beforeEach(() => {
  renderWithStateMgmtAndRouter(<Register />);
});

describe.skip("register form", () => {
  it("render inputs and submit btn", () => {
    const firstNameInput = screen.getByLabelText(
      "First name"
    ) as HTMLInputElement;
    const lastNameInput = screen.getByLabelText(
      "Last name"
    ) as HTMLInputElement;
    const emailInput = screen.getByLabelText("Email") as HTMLInputElement;
    const passwordInput = screen.getByLabelText("Password") as HTMLInputElement;
    const passwordConfirmInput = screen.getByLabelText(
      "Confirm password"
    ) as HTMLInputElement;
    const submitBtn = screen.getByRole("button");

    expect(firstNameInput).toHaveTextContent("");
    expect(lastNameInput).toHaveTextContent("");
    expect(emailInput).toHaveTextContent("");
    expect(passwordInput).toHaveTextContent("");
    expect(passwordConfirmInput).toHaveTextContent("");
    expect(submitBtn).toBeInTheDocument();
  });

  it("can input email and password", () => {
    const firstNameInput = screen.getByLabelText(
      "First name"
    ) as HTMLInputElement;
    const lastNameInput = screen.getByLabelText(
      "Last name"
    ) as HTMLInputElement;
    const emailInput = screen.getByLabelText("Email") as HTMLInputElement;
    const passwordInput = screen.getByLabelText("Password") as HTMLInputElement;
    const passwordConfirmInput = screen.getByLabelText(
      "Confirm password"
    ) as HTMLInputElement;

    fireEvent.change(firstNameInput, { target: { value: "Test" } });
    fireEvent.change(lastNameInput, { target: { value: "User" } });
    fireEvent.change(emailInput, { target: { value: "test@gmail.com" } });
    fireEvent.change(passwordInput, { target: { value: "password" } });
    fireEvent.change(passwordConfirmInput, { target: { value: "password" } });

    expect(firstNameInput.value).toEqual("Test");
    expect(lastNameInput.value).toEqual("User");
    expect(emailInput.value).toEqual("test@gmail.com");
    expect(passwordInput.value).toEqual("password");
    expect(passwordConfirmInput.value).toEqual("password");
  });
});
