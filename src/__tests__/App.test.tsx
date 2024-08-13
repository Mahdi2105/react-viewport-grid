import React from "react";
import { fireEvent, render } from "@testing-library/react";

import { App } from "../App";

describe("Tests for App", () => {
  test("Min and Max values on Columns input", () => {
    const { getByLabelText } = render(<App />);
    const columnInput = getByLabelText("Columns");

    // console.log(rowInput.value);
    fireEvent.change(columnInput, { target: { value: "3" } });
    expect(columnInput.value).toBe("3");

    fireEvent.change(columnInput, { target: { value: "-3" } });
    expect(columnInput.value).toBe("1");

    fireEvent.change(columnInput, { target: { value: "17" } });
    expect(columnInput.value).toBe("10");
  });

  test("Min and Max values on Rows input", () => {
    const { getByLabelText } = render(<App />);
    const rowInput = getByLabelText("Rows");

    // console.log(rowInput.value);
    fireEvent.change(rowInput, { target: { value: "6" } });
    expect(rowInput.value).toBe("6");

    fireEvent.change(rowInput, { target: { value: "0" } });
    expect(rowInput.value).toBe("1");

    fireEvent.change(rowInput, { target: { value: "13" } });
    expect(rowInput.value).toBe("10");
    // console.log(rowInput.value);
  });
});
