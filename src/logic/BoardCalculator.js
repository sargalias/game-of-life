import Square from './Square';


class BoardCalculator {
  constructor(board) {
    this.board = board;
  }

  getNeighbours = (square) => {
    let neighbours = [];
    let [rootX, rootY] = square.getXY();
    for (let x=rootX-1; x<=rootX+1; x++) {
      for (let y=rootY-1; y<=rootY+1; y++) {
        if (x !== rootX || y !== rootY) { // different square to the one we're comparing against
          const currentSquare = new Square(x, y);
          if (this.board.get(currentSquare)) {
            neighbours.push(currentSquare);
          }
        }
      }
    }
    return neighbours;
  };

  numNeighbours = (square) => {
    return this.getNeighbours(square).length;
  };
}

export default BoardCalculator;
