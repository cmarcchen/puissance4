import React from "react";

function GameNextPlayer({ nextPlayer, winner }) {
  if (winner) {
    return <div className="">The Winner is {winner}</div>;
  } else {
    return <div className="">The Next Player is {nextPlayer}</div>;
  }
}

export default GameNextPlayer;
