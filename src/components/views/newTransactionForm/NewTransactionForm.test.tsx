import React from "react";
import { fireEvent, screen } from "@testing-library/react";
import NewTransactionForm from "./NewTransactionForm";
import { renderWithStateMgmtAndRouter } from "../../../utils/test-util";
import { DateTime } from "luxon";

beforeEach(() => {
  renderWithStateMgmtAndRouter(<NewTransactionForm />);
});

describe.skip("add transaction form", () => {
  it("render form", () => {
    const header = screen.getByRole("heading", { level: 1 });
    const amountInput = screen.getByLabelText(/amount/i);
    const merchantInput = screen.getByLabelText(/to/i);
    const descriptionInput = screen.getByLabelText(/for/i);
    const categorySelect = screen.getByRole("combobox");
    const dateInput = screen.getByLabelText(/date/i);
    const spentBtn = screen.getByRole("button", { name: /spent/i });
    const earnBtn = screen.getByRole("button", { name: /earned/i });

    expect(header).toBeInTheDocument();
    expect(amountInput).toBeInTheDocument();
    expect(merchantInput).toBeInTheDocument();
    expect(descriptionInput).toBeInTheDocument();
    expect(categorySelect).toBeInTheDocument();
    expect(dateInput).toBeInTheDocument();
    expect(spentBtn).toBeInTheDocument();
    expect(earnBtn).toBeInTheDocument();
  });

  it("can type in input fields", () => {
    const amountInput = screen.getByLabelText(/amount/i) as HTMLInputElement;
    const merchantInput = screen.getByLabelText(/to/i) as HTMLInputElement;
    const descriptionInput = screen.getByLabelText(/for/i) as HTMLInputElement;

    fireEvent.change(amountInput, { target: { value: 23 } });
    fireEvent.change(merchantInput, { target: { value: "Iza" } });
    fireEvent.change(descriptionInput, { target: { value: "Food" } });

    expect(amountInput.value).toEqual("23");
    expect(merchantInput.value).toEqual("Iza");
    expect(descriptionInput.value).toEqual("Food");
  });

  it("can change category field", () => {
    const categorySelect = screen.getByRole("combobox") as HTMLSelectElement;

    fireEvent.change(categorySelect, { target: { value: "Automotive" } });

    expect(categorySelect.value).toEqual("auto");
  });

  it("date input shows today's date", () => {
    const dateInput = screen.getByLabelText(/date/i) as HTMLInputElement;

    expect(dateInput.value).toEqual(DateTime.now().toISODate());

    fireEvent.change(dateInput, { target: { value: "1995-12-17" } });

    expect(dateInput.value).toEqual(DateTime.fromISO("1995-12-17").toISODate());
  });
});
