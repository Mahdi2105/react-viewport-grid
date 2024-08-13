import React, { useEffect, useRef, useState } from "react";
import "./viewport.scss";

interface ViewportProps {
  vpHeight: number;
  vpWidth: number;
}

export const Viewport: React.FC<ViewportProps> = ({ vpWidth, vpHeight }) => {
  // export const Viewport = () => {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      if (viewportRef.current) {
        const element = viewportRef.current;

        setWidth(element.offsetWidth);
        setHeight(element.offsetHeight);
      }
    };

    // have to call initially otherwise it
    // would only work when the window is resized
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [vpWidth, vpHeight]);

  return (
    <div
      data-testid="Viewport"
      className="viewport"
      ref={viewportRef}
      style={{ height: `calc(${vpHeight}% - 2px)` }}
    >
      <div className="size">{`${width} X ${height}`}</div>
    </div>
  );
};
