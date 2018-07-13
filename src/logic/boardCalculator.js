import Square from './Square';
import Board from './Board';


export const getAllSquaresWithNeighbours = (board) => {
  const aliveSquares = board.getAll();
  // Create a new board
  // The new board is used to filter duplicate squares, as the Board add method doesn't add duplicates.
  const newBoard = new Board(aliveSquares);
  aliveSquares.forEach((square) => {
    const neighbours = getAdjacentSquares(square);
    newBoard.add(neighbours);
  });
  return newBoard.getAll();
};

export const getAdjacentSquares = (square) => {
  const adjacentSquares = [];
  let [rootX, rootY] = square.getXY();
  for (let x=rootX-1; x<=rootX+1; x++) {
    for (let y=rootY-1; y<=rootY+1; y++) {
      if (x !== rootX || y !== rootY) { // different square to the one we're comparing against
        const currentSquare = new Square(x, y);
        adjacentSquares.push(currentSquare);
      }
    }
  }
  return adjacentSquares;
};

export const getNeighbours = (board, square) => {
  const adjacentSquares = getAdjacentSquares(square);
  const neighbours = adjacentSquares.filter((square) => {
    return board.get(square);
  });
  return neighbours;
};

export const numNeighbours = (board, square) => {
  return getNeighbours(board, square).length;
};


