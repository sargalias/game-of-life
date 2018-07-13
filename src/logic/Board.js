
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

  _addArray = (squareArr) => {
    squareArr.forEach((square) => this._addSquare(square));
  };

  _addSquare = (square) => {
    if (this.exists(square))
      return false;
    this.squares.push(square);
    return true;
  };

  add = (val) => {
    if (Array.isArray(val))
      this._addArray(val);
    else
      this._addSquare(val);
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
