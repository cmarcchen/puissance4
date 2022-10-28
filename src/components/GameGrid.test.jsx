import { render, screen } from "@testing-library/react";

import GameGrid from "./GameGrid";

describe("Render the current state of the game", () => {
  it("should render the current number of placeholders", () => {
    const gameState = [
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
    ];
    render(<GameGrid gameState={gameState} />);

    const gameBoxes = screen.getAllByTestId("color-box-");
    expect(gameBoxes.length).toBe(42);
  });

  it("should render correctly white, yellow and red boxes", () => {
    const gameState = [
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
      ["", "", "", "R", "", "", ""],
      ["", "", "", "R", "Y", "", "Y"],
    ];
    render(<GameGrid gameState={gameState} />);
    const gameWhiteBoxes = screen.getAllByTestId("color-box-");
    expect(gameWhiteBoxes.length).toBe(38);
    const gameRedBoxes = screen.getAllByTestId("color-box-R");
    expect(gameRedBoxes.length).toBe(2);
    const gameYellowBoxes = screen.getAllByTestId("color-box-Y");
    expect(gameYellowBoxes.length).toBe(2);
  });
});
