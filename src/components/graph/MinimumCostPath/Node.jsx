import React from "react";
import "../Node.css";

const Node = ({
  col,
  row,
  isFinish,
  isStart,
  isWall,
  onMouseDown,
  onMouseEnter,
  onMouseUp,
  cost,
}) => {
  const extraClassName = isFinish
    ? "node-finish"
    : isStart
    ? "node-start"
    : isWall
    ? "node-wall"
    : "";

  return (
    <div
      id={`node-${row}-${col}`}
      className={`node ${extraClassName}`}
      style={{
        width: `${window.innerWidth / 15}px`,
        height: `${window.innerWidth / 15}px`,
        fontSize: `${window.innerWidth / 800}rem`,
        textAlign: "center",
      }}
      onMouseDown={() => onMouseDown(row, col)}
      onMouseEnter={() => onMouseEnter(row, col)}
      onMouseUp={() => onMouseUp()}
    >
      <p>{cost}</p>
    </div>
  );
};
export default Node;
