import React from "react";
import { screen, waitFor } from "@testing-library/react";
import EditTransaction from "./EditTransaction";
import { renderWithStateMgmtAndRouter } from "../../../utils/test-util";

beforeEach(() => {
  renderWithStateMgmtAndRouter(<EditTransaction />);
});

describe("edit transaction form", () => {
  it("render form", () => {
    const header = screen.getByRole("heading", { level: 1 });
    const amountInput = screen.findByLabelText(/amount/i);
    const merchantInput = screen.findByLabelText(/to/i);
    const descriptionInput = screen.findByLabelText(/for/i);
    const categorySelect = screen.findByRole("combobox");
    const dateInput = screen.findByLabelText(/date/i);
    const spentBtn = screen.findByRole("button", { name: /spent/i });
    const earnBtn = screen.findByRole("button", { name: /earned/i });

    waitFor(() => {
      expect(header).toBeInTheDocument();
      expect(amountInput).toBeInTheDocument();
      expect(merchantInput).toBeInTheDocument();
      expect(descriptionInput).toBeInTheDocument();
      expect(categorySelect).toBeInTheDocument();
      expect(dateInput).toBeInTheDocument();
      expect(spentBtn).toBeInTheDocument();
      expect(earnBtn).toBeInTheDocument();
    });
  });
});
