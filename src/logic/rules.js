import { generateEmptyBoard } from "./generateBoard";

export const gameOfLifeRules = (board) => {
  const rows = board.length;
  const cols = rows > 0 ? board[0].length : 0;
  const newBoard = generateEmptyBoard(rows, cols);

  for (let row=0; row<rows; row++) {
    for (let col=0; col<cols; col++) {
      const newCell = _handleCell(board, row, col);
      newBoard[row][col] = newCell;
    }
  }
  return newBoard;
};

export const _handleCell = (board, row, col) => {
  let neighbourCount = _countNeighbours(board, row, col);
  const oldCell = board[row][col];
  return _applyRules(oldCell, neighbourCount);
};

export const _countNeighbours = (board, row, col) => {
  let neighbourCount = 0;
  for (let x=row-1; x<=row+1; x++) {
    for (let y=col-1; y<=col+1; y++) {
      if (board[x]) {
        if (!(x === row && y === col) && board[x][y]) {
          neighbourCount++;
        }
      }
    }
  }
  return neighbourCount;
};

const _applyRules = (oldCell, neighbourCount) => {
  let newCell = 0;

  if (oldCell !== 0) {
    if (neighbourCount === 2 || neighbourCount === 3) {
      newCell = 1;
    }
  } else {
    if (neighbourCount === 3) {
      newCell = 1;
    }
  }
  return newCell;
};

export default gameOfLifeRules;
