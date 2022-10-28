import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Game from "./Game";

it("should push a correct token in the game board", () => {
  render(<Game />);

  userEvent.click(screen.getAllByTestId("color-box-")[0]);
  userEvent.click(screen.getAllByTestId("color-box-")[0]);
  userEvent.click(screen.getAllByTestId("color-box-")[0]);
  userEvent.click(screen.getAllByTestId("color-box-")[0]);

  const gameWhiteBoxes = screen.getAllByTestId("color-box-");
  expect(gameWhiteBoxes.length).toBe(38);
  const gameRedBoxes = screen.getAllByTestId("color-box-R");
  expect(gameRedBoxes.length).toBe(2);
  const gameYellowBoxes = screen.getAllByTestId("color-box-Y");
  expect(gameYellowBoxes.length).toBe(2);
});
