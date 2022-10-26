import React, { useState } from "react";

function GameNextPlayer() {
  const [nextPlayer, setNextPlayer] = useState("Y");
  return <div className="">The Next Player is {nextPlayer}</div>;
}

export default GameNextPlayer;
