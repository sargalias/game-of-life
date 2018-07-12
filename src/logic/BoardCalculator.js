
class BoardCalculator {
  constructor(board) {
    this.board = board;
  }

  getNeighbours = (square) => {
    let numNeighbours = 0;
    let [rootX, rootY] = square.getXY();
    for (let x=rootX-1; x<=rootX+1; x++) {
      for (let y=rootY-1; y<=rootY+1; y++) {
        if (x !== rootX && y !== rootY) { // different square to the one we're comparing against
          if (this.board.get(new Square(x, y))) {
            numNeighbours++;
          }

        }
      }
    }
    return numNeighbours;
  };

  numNeighbours = (square) => {
    return null;
  };
}

export default BoardCalculator;
