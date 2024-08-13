import React from "react";
import { Viewport } from "./Viewport";
import "./main.scss";

interface MainProps {
  rows: number;
  columns: number;
}

export const Main: React.FC<MainProps> = ({ rows, columns }) => {
  let vpHeight = 100 / columns;
  let vpWidth = 100 / rows;

  let vpArray: number[][] = [];
  let vpArrayRows: number = rows;
  let vpArrayColumns: number = columns;

  for (let i: number = 0; i < vpArrayRows; i++) {
    vpArray[i] = [];
    for (let j: number = 0; j < vpArrayColumns; j++) {
      vpArray[i][j] = j;
    }
  }

  // Due to the 2D vpArrayays being in the format [row][column]
  // the columns end up displaying in the rows section and vice versa
  return (
    <div className="main">
      {vpArray.map((row, rowIndex) => (
        <div key={`row-${rowIndex}`} className="viewport-column">
          {row.map((columnIndex) => (
            <Viewport
              key={`viewport-${columnIndex}-${rowIndex}`}
              vpWidth={vpWidth}
              vpHeight={vpHeight}
            />
          ))}
        </div>
      ))}
    </div>
  );
};
