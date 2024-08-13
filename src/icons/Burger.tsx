import React from "react";

interface BurgerProps {
  onClick: () => void;
}

export const Burger: React.FC<BurgerProps> = ({ onClick }) => {
  return (
    <svg
      data-testid="Burger"
      className="Icon"
      viewBox="0 0 100 80"
      width="20"
      height="20"
      onClick={onClick}
    >
      <rect width="100" height="20"></rect>
      <rect y="30" width="100" height="20"></rect>
      <rect y="60" width="100" height="20"></rect>
    </svg>
  );
};
