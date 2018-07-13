import Board from './board';
import BoardCalculator from './BoardCalculator';


class GameOfLifeRules {

  run = (board) => {
    // get all relevant squares
    // apply the rules on each square.
    // If the square is empty, it springs to life with 3 neighbours.
    // If the square is alive, it stays alive with 2 or 3 neighbours, otherwise dies.
    const newBoard = new Board();
    const relevantSquares = boardCalculator.getAllSquaresWithNeighbours();
    relevantSquares.forEach((square) => {
      this._handleSquare(square);
    });
    return newBoard;
  };

  _handleSquare = (square, board, newBoard) => {
    const numNeighbours = boardCalculator.numNeighbours(square);
    if (square.isAlive() && numNeighbours === 2 || numNeighbours === 3) {
      if (numNeighbours === 2 || numNeighbours === 3)
        newBoard.push(square);
    } else {
      if (numNeighbours === 3)
        newBoard.push(square);
    }
  };
}

export default GameOfLifeRules;