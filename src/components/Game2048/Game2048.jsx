import React, { useState, useEffect } from "react";
import classes from "./Game2048.module.css";
import Button from "../ui/Button";
import { BackButton } from "../ui/BackButton";
import Node from "./Game2048Node";
import { getGame2048 } from "./getGame2048";

const Game2048 = () => {
  const TOTAL_ROW = 6;
  const TOTAL_COL = 6;

  const [grid, setGrid] = useState([]);
  const [score, setScore] = useState(0);

  const createNode = (row, col) => {
    return {
      row,
      col,
      value: "",
    };
  };

  const generate_two_randam_number = () => {
    const Row_position = Math.floor(Math.random() * TOTAL_ROW);
    const Col_Position = Math.floor(Math.random() * TOTAL_COL);
    return { Row_position, Col_Position };
  };

  const getInitialGrid = () => {
    const grid = [];
    for (let row = 0; row < TOTAL_ROW; row++) {
      const currentRow = [];
      for (let col = 0; col < TOTAL_COL; col++) {
        currentRow.push(createNode(row, col));
      }
      grid.push(currentRow);
    }
    const { Row_position, Col_Position } = generate_two_randam_number();
    grid[Row_position][Col_Position].value = 2;
    setGrid([...grid]);
  };

  useEffect(() => {
    getInitialGrid();
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.keyCode) {
        case 37:
          handleKeyEnter("left");
          break;
        case 38:
          handleKeyEnter("up");
          break;
        case 39:
          handleKeyEnter("right");
          break;
        case 40:
          handleKeyEnter("down");
          break;
        default:
          break;
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [grid]);

  const handleKeyEnter = (direction) => {
    const { board, count, Final_Score } = getGame2048(grid, score, direction);
    if (count == 0) return;
    var { Row_position, Col_Position } = generate_two_randam_number();
    while (grid[Row_position][Col_Position].value != "") {
      var { Row_position, Col_Position } = generate_two_randam_number();
      Row_position = Row_position;
      Col_Position = Col_Position;
    }
    grid[Row_position][Col_Position].value =
      Math.floor(Math.random() * 100) > 80 ? 4 : 2;
    console.log(count, Final_Score, board);
    setScore(Final_Score);
    setGrid([...board]);
  };

  return (
    <div className={classes.container}>
      <BackButton />
      <div className={classes.heading}>Game2048 Game </div>
      <div className={classes.grid}>
        <div>
          {grid.map((row, rowIdx) => {
            return (
              <div
                key={rowIdx}
                className={classes.row}
                style={{
                  height: `${window.innerWidth / 20}px`,
                }}
              >
                {row.map((node, nodeIdx) => {
                  const { row, col, value } = node;
                  return (
                    <Node
                      key={nodeIdx}
                      col={col}
                      row={row}
                      value={value}
                    ></Node>
                  );
                })}
              </div>
            );
          })}
        </div>
        <div className={classes.score}>Total score : {score}</div>
      </div>
      <div className={classes.button}>
        <Button
          onClick={() => {
            getInitialGrid();
          }}
        >
          Generate grid
        </Button>
      </div>
    </div>
  );
};

export default Game2048;
