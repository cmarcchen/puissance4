import { ColorBox } from "./ColorBox";
import React from "react";

function GameGrid({ gameState, onClick }) {
  return (
    <div className="flex justify-center m-16 ">
      <div className=" grid grid-cols-7 m-8 w-[448px] border-2 border-blue-600 bg-blue-600 -rotate-180 shadow-lg">
        {gameState.map((column, columnIndex) => {
          return (
            <div
              className={`flex flex-col hover:bg-slate-100 hover:cursor-pointer`}
              key={`col-${columnIndex}`}
              id={`col-${columnIndex}`}
              onClick={onClick}
            >
              {column.map((color, rowIndex) => {
                return (
                  <ColorBox color={color} key={`${columnIndex}:${rowIndex}`} />
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default GameGrid;
