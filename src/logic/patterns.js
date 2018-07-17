import { copyBoard } from "./board";

export const applyPattern = (board, pattern, x, y) => {
  // Returns a new board.
  // board: 2D array
  // pattern: 2D array
  const newBoard = copyBoard(board);
  if (pattern.length === 0)
    return newBoard;
};

export const getPattern = (filepath) => {
  // requires absolut path?
  const patternArr = [];
};
