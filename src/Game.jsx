import React, { useState, useEffect } from "react";
import GameGrid from "./GameGrid";
import GameInput from "./GameInput";
import GameNextPlayer from "./GameNextPlayer";
import { addToken, getWinner, isFull } from "./class/GameGridStructure";

function Game() {
  const initialGrid = [
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
  ];
  const [nextPlayer, setNextPlayer] = useState("Y");
  const [chosenColumn, setChosenColumn] = useState(0);
  const [gameState, setGameState] = useState(initialGrid);
  const [winner, setWinner] = useState("");

  useEffect(() => {
    setWinner(getWinner(gameState));
  }, [gameState]);

  const onClick = () => {
    // setGameState(addToken(gameState, "Y", 0));
  };

  const onChange = (event) => {
    setChosenColumn(event.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (isFull(gameState, chosenColumn)) return;

    if (!winner) {
      setGameState(addToken(gameState, nextPlayer, chosenColumn));
      setChosenColumn(0);
      setNextPlayer(nextPlayer === "Y" ? "R" : "Y");
    }
  };

  return (
    <>
      <div className="flex flex-col justify-center">
        <GameGrid gameState={gameState} onClick={onClick} />
        <GameNextPlayer nextPlayer={nextPlayer} winner={winner} />
        <GameInput
          chosenColumn={chosenColumn}
          onSubmit={onSubmit}
          onChange={onChange}
        />
      </div>
    </>
  );
}

export default Game;
