import React from "react";
import "./ChessBoard.css";

const Board = () => {
  const Squares = () => {
    const squares = [];
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        const color = (i + j) % 2 === 0;
        squares.push(
          <div
            key={`${i}${j}`}
            className={`square ${color ? "white" : "black"}`}
          />
        );
      }
    }
    return squares;
  };

  return <div className="chess-board">{Squares()}</div>;
};

export default Board;
