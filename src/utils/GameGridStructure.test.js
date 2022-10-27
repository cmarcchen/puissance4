import { NB_COLUMNS, addToken, isFull, getWinner } from "./GameGridStructure";

describe("Column correct behavior", () => {
  it("should add a token with correct color and stack properly", () => {
    const grid = [
      ["", "", "", "", "", ""],
      ["", "", "", "", "", ""],
      ["", "", "", "", "", ""],
      ["", "", "", "", "", ""],
      ["", "", "", "", "", ""],
      ["", "", "", "", "", ""],
      ["", "", "", "", "", ""],
      ["", "", "", "", "", ""],
    ];

    const newGrid = addToken(grid, "R", 0);
    expect(newGrid).toEqual([
      ["R", "", "", "", "", ""],
      ["", "", "", "", "", ""],
      ["", "", "", "", "", ""],
      ["", "", "", "", "", ""],
      ["", "", "", "", "", ""],
      ["", "", "", "", "", ""],
      ["", "", "", "", "", ""],
      ["", "", "", "", "", ""],
    ]);
  });

  it("should reject tokens other than 'R' and 'Y' tokens", () => {
    const grid = [
      ["R", "", "", "", "", ""],
      ["", "", "", "", "", ""],
      ["", "", "", "", "", ""],
      ["", "", "", "", "", ""],
      ["", "", "", "", "", ""],
      ["", "", "", "", "", ""],
      ["", "", "", "", "", ""],
      ["", "", "", "", "", ""],
    ];

    const newGrid = addToken(grid, "A", 0);

    expect(newGrid.includes("A")).toBe(false);
  });

  it("should reject tokens on incorrect column", () => {
    const grid = [
      ["", "", "", "", "", ""],
      ["", "", "", "", "", ""],
      ["", "", "", "", "", ""],
      ["", "", "", "", "", ""],
      ["", "", "", "", "", ""],
      ["", "", "", "", "", ""],
      ["", "", "", "", "", ""],
      ["", "", "", "", "", ""],
    ];

    const newGrid = addToken(grid, "Y", NB_COLUMNS + 1);

    expect(newGrid.includes("Y")).toBe(false);
  });

  it("should reject token when column is full", () => {
    const grid = [
      ["Y", "Y", "Y", "Y", "Y", "Y"],
      ["", "", "", "", "", ""],
      ["", "", "", "", "", ""],
      ["", "", "", "", "", ""],
      ["", "", "", "", "", ""],
      ["", "", "", "", "", ""],
      ["", "", "", "", "", ""],
      ["", "", "", "", "", ""],
    ];

    const newGrid = addToken(grid, "Y", 0);

    expect(newGrid).toEqual(grid);
  });

  it("should check if the column is full when full", () => {
    const grid = [
      ["Y", "Y", "Y", "Y", "Y", "Y"],
      ["", "", "", "", "", ""],
      ["", "", "", "", "", ""],
      ["", "", "", "", "", ""],
      ["", "", "", "", "", ""],
      ["", "", "", "", "", ""],
      ["", "", "", "", "", ""],
      ["", "", "", "", "", ""],
    ];

    expect(isFull(grid, 0)).toBe(true);
  });

  it("should check if the column is not full when not full", () => {
    const grid = [
      ["Y", "Y", "Y", "Y", "", ""],
      ["", "", "", "", "", ""],
      ["", "", "", "", "", ""],
      ["", "", "", "", "", ""],
      ["", "", "", "", "", ""],
      ["", "", "", "", "", ""],
      ["", "", "", "", "", ""],
      ["", "", "", "", "", ""],
    ];

    expect(isFull(grid, 0)).toBe(false);
  });

  it("should detect a winner on a column", () => {
    const grid = [
      ["Y", "Y", "Y", "Y", "", ""],
      ["", "", "", "", "", ""],
      ["", "", "", "", "", ""],
      ["", "", "", "", "", ""],
      ["", "", "", "", "", ""],
      ["", "", "", "", "", ""],
      ["", "", "", "", "", ""],
      ["", "", "", "", "", ""],
    ];

    expect(getWinner(grid)).toBe("Y");
  });

  it("should detect a winner on a column when R", () => {
    const grid = [
      ["", "", "", "", "", ""],
      ["Y", "R", "R", "R", "R", ""],
      ["", "", "", "", "", ""],
      ["", "", "", "", "", ""],
      ["", "", "", "", "", ""],
      ["", "", "", "", "", ""],
      ["", "", "", "", "", ""],
      ["", "", "", "", "", ""],
    ];

    expect(getWinner(grid)).toBe("R");
  });

  it("should detect a winner on a row", () => {
    const grid = [
      ["Y", "", "", "", "", ""],
      ["Y", "", "", "", "", ""],
      ["Y", "", "", "", "", ""],
      ["Y", "", "", "", "", ""],
      ["", "", "", "", "", ""],
      ["", "", "", "", "", ""],
      ["", "", "", "", "", ""],
      ["", "", "", "", "", ""],
    ];

    expect(getWinner(grid)).toBe("Y");
  });

  it("should detect a winner on a diagonal", () => {
    const grid = [
      ["Y", "", "", "", "", ""],
      ["R", "Y", "", "", "", ""],
      ["Y", "R", "Y", "", "", ""],
      ["R", "Y", "R", "Y", "", ""],
      ["R", "", "", "", "", ""],
      ["", "", "", "", "", ""],
      ["", "", "", "", "", ""],
      ["", "", "", "", "", ""],
    ];

    expect(getWinner(grid)).toBe("Y");
  });

  it("should return undefined when no winner", () => {
    const grid = [
      ["Y", "", "", "", "", ""],
      ["R", "Y", "", "", "", ""],
      ["Y", "R", "Y", "", "", ""],
      ["R", "Y", "R", "R", "", ""],
      ["R", "Y", "", "", "", ""],
      ["", "", "", "", "", ""],
      ["", "", "", "", "", ""],
      ["", "", "", "", "", ""],
    ];

    expect(getWinner(grid)).toBe(undefined);
  });
});
