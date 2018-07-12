
class Board {
  // make Board work with a map of keys of 'x,y' for faster lookup
  constructor(squares=[]) {
    this.squares = squares.slice();
  }

  getAll = () => {
    return this.squares.slice();
  };

  exists = (newSquare) => {
    return Boolean(this.get(newSquare));
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

  get = (squareToGet) => {
    for (let square of this.squares) {
      if (squareToGet.equals(square))
        return square;
    }
    return null;
  };
}


export default Board;
