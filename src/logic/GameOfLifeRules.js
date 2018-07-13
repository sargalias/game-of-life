import Board from './Board';
import { getAllSquaresWithNeighbours, getNumNeighbours } from "./boardCalculator";


class GameOfLifeRules {

  run = (board) => {
    // get all relevant squares
    // apply the rules on each square.
    // If the square is empty, it springs to life with 3 neighbours.
    // If the square is alive, it stays alive with 2 or 3 neighbours, otherwise dies.
    const newBoard = new Board();
    const relevantSquares = getAllSquaresWithNeighbours(board);
    relevantSquares.forEach((square) => {
      this._handleSquare(square, board, newBoard);
    });
    return newBoard;
  };

  _handleSquare = (square, board, newBoard) => {
    const numNeighbours = getNumNeighbours(board, square);
    if (square.getValue() === 0) {
      if (numNeighbours === 3) {
        square.setValue(1);
        newBoard.add(square);
      }
    } else {
      if (numNeighbours === 2 || numNeighbours === 3) {
        newBoard.add(square);
      }
    }
  };
}

export default GameOfLifeRules;