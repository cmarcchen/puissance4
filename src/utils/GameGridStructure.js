export const NB_COLUMNS = 7;
export const NB_ROWS = 6;
export const NB_TOKENS_TO_WIN = 4;
export const CORRECT_TOKEN = ["Y", "R"];

export const addToken = (grid, tokenColor, column) => {
  let newGrid = [...grid];
  if (CORRECT_TOKEN.includes(tokenColor) && column < NB_COLUMNS) {
    for (let i = 0; i < NB_ROWS; i++) {
      if (grid[column][i] === "") {
        newGrid[column][i] = tokenColor;
        break;
      }
    }
  }
  return newGrid;
};

export const isFull = (grid, column) => {
  return !grid[column].includes("");
};

export const getWinner = (grid) => {
  for (let i = 0; i < NB_ROWS; i++) {
    for (let j = 0; j < NB_COLUMNS; j++) {
      const tokenColor = grid[j][i];
      let nbConsecutiveTokens = {
        top: 0,
        topLeft: 0,
        left: 0,
        bottomLeft: 0,
        bottom: 0,
        bottomRight: 0,
        right: 0,
        topRight: 0,
      };
      if (tokenColor !== "") {
        for (let k = 0; k < NB_TOKENS_TO_WIN; k++) {
          try {
            if (grid[j + k][i] === tokenColor) nbConsecutiveTokens.top++;
          } catch (error) {}
          try {
            if (grid[j + k][i - k] === tokenColor)
              nbConsecutiveTokens.topLeft++;
          } catch (error) {}
          try {
            if (grid[j][i - k] === tokenColor) nbConsecutiveTokens.left++;
          } catch (error) {}
          try {
            if (grid[j - k][i - k] === tokenColor)
              nbConsecutiveTokens.bottomLeft++;
          } catch (error) {}
          try {
            if (grid[j - k][i] === tokenColor) nbConsecutiveTokens.bottom++;
          } catch (error) {}
          try {
            if (grid[j - k][i + k] === tokenColor)
              nbConsecutiveTokens.bottomRight++;
          } catch (error) {}
          try {
            if (grid[j][i + k] === tokenColor) nbConsecutiveTokens.right++;
          } catch (error) {}
          try {
            if (grid[j + k][i + k] === tokenColor)
              nbConsecutiveTokens.topRight++;
          } catch (error) {}
        }
      }
      if (Object.values(nbConsecutiveTokens).includes(NB_TOKENS_TO_WIN))
        return tokenColor;
    }
  }
};
