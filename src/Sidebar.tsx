import { useState } from "react";
import "./sidebar.scss";
import { Burger } from "./icons";

interface SidebarProps {
  rows: number;
  columns: number;
  handleRows: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleColumns: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  rows,
  columns,
  handleRows,
  handleColumns,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const toggle = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
    console.log(`clicked ${isOpen}`);
  };
  return (
    <div
      data-testid="Sidebar"
      className={isOpen ? "sidebar" : "collapsedSideBar"}
    >
      <div className="burger" data-testid="BurgerClick">
        <Burger onClick={toggle} />
      </div>

      {/* names for rows and columns have been 
      switched intentionally, see Main.tsx */}
      <label htmlFor="columnInput">Columns</label>
      <input
        id="columnInput"
        type="number"
        value={rows}
        onChange={handleRows}
      />

      <label htmlFor="rowInput">Rows</label>
      <input
        id="rowInput"
        type="number"
        value={columns}
        onChange={handleColumns}
      />
    </div>
  );
};
