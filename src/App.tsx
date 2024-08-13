import React, { useState } from "react";
import "./App.scss";
import { Sidebar } from "./Sidebar";
import { Main } from "./Main";

/**
 * App Component
 */
export function App() {
  const [rows, setRows] = useState<number>(1);
  const [columns, setColumns] = useState<number>(1);

  const handleRows = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRows(Math.min(10, Math.max(1, Number(e.target.value))));
  };
  const handleColumns = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColumns(Math.min(10, Math.max(1, Number(e.target.value))));
  };

  return (
    <div className="App">
      <Sidebar
        rows={rows}
        columns={columns}
        handleRows={handleRows}
        handleColumns={handleColumns}
      />
      <Main rows={rows} columns={columns} />
    </div>
  );
}
