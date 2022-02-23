import React from "react";
import { fireEvent, screen } from "@testing-library/react";
import Dashboard from "./Dashboard";
import { renderWithStateMgmtAndRouter } from "../../../utils/test-util";

beforeEach(() => {
  renderWithStateMgmtAndRouter(<Dashboard />);
});

describe("dashboard", () => {
  it("render header", () => {
    const heading = screen.getByRole("heading", { level: 1 });
    const options = screen.getAllByRole("option");

    expect(heading).toBeInTheDocument();
    expect(options.length).toEqual(2);
  });

  it("render transactions", () => {
    const transactionHeader = screen.getByRole("heading", { level: 2 });

    expect(transactionHeader).toBeInTheDocument();
  });

  it("render nav menu", () => {
    const navItems = screen.getAllByRole("link");
    const dashboard = screen.getByRole("link", { name: /dashboard/i });
    const account = screen.getByRole("link", { name: /account/i });

    expect(navItems.length).toEqual(4);
    expect(dashboard).toBeInTheDocument();
    expect(account).toBeInTheDocument();
  });
});
