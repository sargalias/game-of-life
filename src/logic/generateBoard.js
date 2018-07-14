
export const generateRandomBoard = (rows, cols, chance) => {
  const board = generateEmptyBoard(rows, cols);
  for (let row=0; row<rows; row++) {
    for (let col = 0; col < cols; col++) {
      const value = Math.random() < chance ? 1 : 0;
      board[row][col] = value;
    }
  }
  return board;
};

export const generateEmptyBoard = (rows, cols) => {
  const board = [];
  for (let row=0; row<rows; row++)
    board.push(new Array(cols));
  return board;
};
