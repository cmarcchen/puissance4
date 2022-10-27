import React from "react";

function GameNextPlayer({ nextPlayer, winner, restart }) {
  if (winner) {
    return (
      <div className="flex items-center gap-4">
        <h1>The Winner is {winner}</h1>
        <button
          onClick={restart}
          type="reset"
          className="p-2 border-2 text-white border-blue-600 bg-blue-600 hover:cursor-pointer hover:bg-blue-500 rounded-lg shadow-lg active:translate-y-1"
        >
          Restart
        </button>
      </div>
    );
  } else {
    return (
      <div className="flex justify-center gap-4">
        <div
          className={`${
            nextPlayer === "Y" ? "bg-yellow-300" : ""
          } flex flex-col border-2 w-64 border-yellow-500 rounded-lg p-4`}
        >
          <h2 className="text-yellow-500">Yellow</h2>
        </div>
        <div
          className={`${
            nextPlayer === "R" ? "bg-red-500" : ""
          } flex flex-col border-2 w-64 border-red-700 rounded-lg p-4`}
        >
          <h2 className="text-red-700">Red</h2>
        </div>
      </div>
    );
  }
}

export default GameNextPlayer;
