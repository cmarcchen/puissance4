import React, { useState } from "react";
import GameGrid from "./GameGrid";
import GameInput from "./GameInput";
import GameNextPlayer from "./GameNextPlayer";

const initialGameState = [
  ["", "", "", "", "", "", ""],
  ["", "", "", "", "", "", ""],
  ["", "", "", "", "", "", ""],
  ["", "", "", "", "", "", ""],
  ["", "", "", "", "", "", ""],
  ["", "", "", "", "", "", ""],
];

function Game() {
  return (
    <>
      <div className="flex flex-col justify-center">
        <GameGrid initialGameState={initialGameState} />
        <GameNextPlayer />
        <GameInput />
      </div>
    </>
  );
}

export default Game;
