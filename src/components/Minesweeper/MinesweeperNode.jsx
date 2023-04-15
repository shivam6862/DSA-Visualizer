import React from "react";
import "./MinesweeperNode.css";

const Node = ({ col, row, distance, isRevealed, isMine, onClick }) => {
  const extraClassName =
    isMine && isRevealed
      ? "node-mine"
      : isRevealed
      ? "node-revealed"
      : "node-notrevealed";

  return (
    <div
      id={`node-${row}-${col}`}
      className={`node-Minesweeper ${extraClassName} `}
      style={{
        width: `${window.innerWidth / 50}px`,
        height: `${window.innerWidth / 50}px`,
      }}
      onClick={onClick}
    >
      {isRevealed ? (distance != 0 ? distance : "") : ""}
    </div>
  );
};

export default Node;
