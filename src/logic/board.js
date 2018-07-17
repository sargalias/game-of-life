
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

export const copyBoard = (board) => {
  const newBoard = [];
  for (let x of board) {
    const arr = [];
    for (let y of x) {
      arr.push(y);
    }
    newBoard.push(arr);
  }
  return newBoard;
};
