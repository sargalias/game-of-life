import { copyBoard } from "./board";

export const applyPattern = (board, pattern, xBoard, yBoard) => {
  // Returns a new board.
  // board: 2D array
  // pattern: 2D array
  const newBoard = copyBoard(board);
  for (let xPattern=0; xPattern<pattern.length; xPattern++) {
    for (let yPattern=0; yPattern<pattern[xPattern].length; yPattern++) {
      handleVal(newBoard, board, pattern, xBoard, yBoard, xPattern, yPattern);
    }
  }
  return newBoard
};

const handleVal = (newBoard, board, pattern, xBoard, yBoard, xPattern, yPattern) => {
  const patternVal = pattern[xPattern][yPattern];
  if (patternVal !== 0) {
    // index range check
    if (newBoard.length > xBoard + xPattern && newBoard[xBoard+xPattern].length > yBoard+yPattern) {
      const curVal = newBoard[xBoard+xPattern][yBoard+yPattern];
      const newVal = curVal === 0 ? pattern[xPattern][yPattern] : 0;
      newBoard[xBoard+xPattern][yBoard+yPattern] = newVal;
    }
  }
};
