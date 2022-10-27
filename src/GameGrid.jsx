import React from "react";

function GameGrid({ gameState, onClick }) {
  return (
    <div className="flex justify-center m-16 ">
      <div className=" grid grid-cols-7 m-8 w-[448px] border-2 border-blue-600  -rotate-180 shadow-lg">
        {gameState.map((column, columnIndex) => {
          return (
            <div
              className={`flex flex-col hover:bg-slate-300 hover:cursor-pointer`}
              key={`col-${columnIndex}`}
              id={`col-${columnIndex}`}
              onClick={onClick}
            >
              {column.map((value, rowIndex) => {
                let backgroundColor = "";
                if (value === "") backgroundColor = "";
                if (value === "Y") backgroundColor = "bg-yellow-400";
                if (value === "R") backgroundColor = "bg-red-700";
                return (
                  <div
                    className={`placeholder border-2 border-blue-600 w-16 h-16 ${backgroundColor}`}
                    key={`${columnIndex}:${rowIndex}`}
                  ></div>
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
