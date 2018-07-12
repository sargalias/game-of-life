
class Board {
  constructor(squares=[]) {
    this.squares = squares.slice();
  }

  getAll = () => {
    return this.squares.slice();
  };

  exists = (newSquare) => {
    for (let square of this.squares) {
      if (newSquare.equals(square))
        return true;
    }
    return false;
  };

  add = (newSquare) => {
    if (this.exists(newSquare))
      return false;
    this.squares.push(newSquare);
    return true;
  };

  remove = (squareToRemove) => {
    this.squares = this.squares.filter((square) => {
      return !square.equals(squareToRemove);
    });
  };
}


export default Board;
