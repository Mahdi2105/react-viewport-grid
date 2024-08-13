import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Sidebar } from "../Sidebar";
import userEvent from "@testing-library/user-event";

const SidebarPropsTemplate = {
  rows: 2,
  columns: 3,
  handleRows: jest.fn(),
  handleColumns: jest.fn(),
};

describe("Tests for Sidebar", () => {
  test("Sidebar renders correctly", () => {
    const { getByLabelText, getByText } = render(
      <Sidebar {...SidebarPropsTemplate} />
    );

    expect(getByLabelText("Columns")).toBeInTheDocument();
    expect(getByLabelText("Rows")).toBeInTheDocument();
    expect(getByText("Columns")).toBeInTheDocument();
    expect(getByText("Rows")).toBeInTheDocument();
  });

  test("Sidebar toggle onClick", () => {
    const { getByTestId } = render(<Sidebar {...SidebarPropsTemplate} />);

    // SIdebar open
    expect(getByTestId("Sidebar")).toHaveClass("sidebar");

    // Sidebar closed
    userEvent.click(getByTestId("BurgerClick"));

    expect(getByTestId("Sidebar")).toHaveClass("collapsedSideBar");
  });
});
