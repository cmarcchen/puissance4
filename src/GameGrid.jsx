import React from "react";

function GameGrid({ gameState, onClick }) {
  return (
    <div
      className="container grid grid-cols-6 m-8 w-80 -rotate-90"
      onClick={onClick}
    >
      {gameState.map((column, columnIndex) => {
        return column.map((value, rowIndex) => {
          if (value === "") {
            return (
              <div
                className="placeholder border border-blue-600  w-8 h-8"
                key={`${columnIndex}:${rowIndex}`}
              ></div>
            );
          }
          if (value === "Y") {
            return (
              <div
                className="placeholder border border-blue-600  w-8 h-8 bg-yellow-400"
                key={`${columnIndex}:${rowIndex}`}
              ></div>
            );
          }

          if (value === "R") {
            return (
              <div
                className="placeholder border border-blue-600  w-8 h-8 bg-red-700"
                key={`${columnIndex}:${rowIndex}`}
              ></div>
            );
          }
          return <div className=""></div>;
        });
      })}
    </div>
  );
}

export default GameGrid;
