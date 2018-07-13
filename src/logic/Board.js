
class Board {
  // make Board work with a map of keys of 'x,y' for faster lookup
  constructor(squares=[]) {
    // this.squares = squares.slice();
    this.squares = {};
    squares.forEach((square) => this.add(square));
  };

  _convertBoardCoordsToXY = (boardCoords) => {
    return boardCoords.split(',').map((val) => parseInt(val));
  };

  _convertXYToBoardCoords = (x, y) => {
    return `${x},${y}`;
  };

  getAll = () => {
    return Object.values(this.squares);
  };

  exists = (square) => {
    return Boolean(this.get(square));
  };

  _addArray = (squareArr) => {
    squareArr.forEach((square) => this._addSquare(square));
  };

  _addSquare = (square) => {
    const [x, y] = square.getXY();
    const boardCoords = this._convertXYToBoardCoords(x, y);
    if (this.squares[boardCoords])
      return false;
    this.squares[boardCoords] = square;
    return true;
  };

  add = (val) => {
    if (Array.isArray(val))
      this._addArray(val);
    else
      this._addSquare(val);
  };

  remove = (squareToRemove) => {
    const boardCoords = this._convertXYToBoardCoords(...squareToRemove.getXY());
    delete this.squares[boardCoords];
  };

  get = (squareToGet) => {
    const boardCoords = this._convertXYToBoardCoords(...squareToGet.getXY());
    const square = this.squares[boardCoords];
    if (square)
      return square;
    return null;
  };
}


export default Board;
