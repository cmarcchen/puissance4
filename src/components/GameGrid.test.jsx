import { render, screen } from "@testing-library/react";
import GameGrid from "./GameGrid";

describe("Render the current state of the game", () => {
  // it("should render the current number of placeholders", () => {
  //   render(<GameGrid />);
  //   const gamePlaceholders = screen.getAllByText("");
  //   expect(gamePlaceholders.length).toBe(42);
  // });
  // it("should render correctly case 1", () => {
  //   const gameState = [
  //     [0, 0, 0, 0, 0, 0, 0],
  //     [0, 0, 0, 0, 0, 0, 0],
  //     [0, 0, 0, 0, 0, 0, 0],
  //     [0, 0, 0, 0, 0, 0, 0],
  //     [0, 0, 0, "R", 0, 0, 0],
  //     [0, 0, 0, "R", "Y", 0, "Y"],
  //   ];
  //   render(<GameGrid initialGameState={gameState} />);
  //   const gameEmptyPlaceholders = screen.getAllByText(/""/);
  //   expect(gameEmptyPlaceholders.length).toBe(38);
  //   const gameYellowTokens = screen.getAllByText(/Y/);
  //   expect(gameYellowTokens.length).toBe(2);
  //   const gameRedTokens = screen.getAllByText(/R/);
  //   expect(gameRedTokens.length).toBe(2);
  //   // const gameLetters = screen.getAllByText(/[^0YR]/);
  //   // expect(gameLetters.length).toBe(0);
  // });
});

// it("should push a correct token in the game board", () => {
//   render(<App />);
// });

it.todo("should detect a victory");
it.todo("should detect the next player");
it.todo("should prevent unauthorized move");
it.todo("should save the state in case of reload");
