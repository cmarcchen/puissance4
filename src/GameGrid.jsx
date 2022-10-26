import React from "react";
import { useState } from "react";

function GameGrid({ initialGameState }) {
  const [gameState, setGameState] = useState(initialGameState);
  return (
    <div className="grid grid-cols-7 m-8 w-80">
      {gameState.map((row, rowIndex) => {
        return row.map((value, colIndex) => {
          return (
            <div
              className="placeholder border border-blue-600  w-8 h-8"
              key={`${colIndex}:${rowIndex}`}
            >
              {value}
            </div>
          );
        });
      })}
    </div>
  );
}

export default GameGrid;
