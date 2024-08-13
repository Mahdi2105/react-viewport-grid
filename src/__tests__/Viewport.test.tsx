import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Viewport } from "../Viewport";
import userEvent from "@testing-library/user-event";

const ViewportPropsTemplate = {
  vpHeight: 20,
  vpWidth: 50,
};

describe("Tests for Viewport", () => {
  test("Viewport height is dependant on the vpHeight prop", () => {
    const { getByTestId } = render(<Viewport {...ViewportPropsTemplate} />);
    const viewport = getByTestId("Viewport");

    expect(viewport.getAttribute("style")).toEqual(
      `height: calc(${ViewportPropsTemplate.vpHeight}% - 2px);`
    );
  });

  test("Viewport size is adjusted when changing window size", () => {
    const { getByTestId } = render(<Viewport {...ViewportPropsTemplate} />);

    expect(getByTestId("Viewport")).toHaveClass("viewport");
  });
});
