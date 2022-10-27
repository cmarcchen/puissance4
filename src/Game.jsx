import React, { useState, useEffect } from "react";
import GameGrid from "./GameGrid";

import GameNextPlayer from "./GameNextPlayer";
import { addToken, getWinner, isFull } from "./utils/GameGridStructure";

function Game() {
  const initialGrid = [
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
  ];
  const [nextPlayer, setNextPlayer] = useState("Y");

  const [gameState, setGameState] = useState(initialGrid);
  const [winner, setWinner] = useState("");

  useEffect(() => {
    setWinner(getWinner(gameState));
  }, [gameState]);

  const onClick = (event) => {
    const numColumn = event.target.parentElement.id;
    const inputColumn = parseInt(numColumn.match(/col-(\d)/)[1]);

    if (isFull(gameState, inputColumn)) return;
    if (winner) return;

    setGameState(addToken(gameState, nextPlayer, inputColumn));
    setNextPlayer(nextPlayer === "Y" ? "R" : "Y");
  };

  const restart = () => {
    setGameState(initialGrid);
  };

  return (
    <>
      <div className="flex flex-col justify-center m-24">
        <GameGrid gameState={gameState} onClick={onClick} />
        <GameNextPlayer
          nextPlayer={nextPlayer}
          winner={winner}
          restart={restart}
        />
      </div>
    </>
  );
}

export default Game;
