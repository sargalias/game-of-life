

class Board {
  // [x, y] to "x,y"
  constructor(coordsList=[]) {
    this.board = {};
  }

  _convertBoardCoordsToXY = (boardCoords) => {
    // '5,5' => [5, 5];
    return boardCoords.split(',').map((el) => parseInt(el));
  };

  _convertXYtoBoardCoords = (x, y) => {
    return `${x},${y}`;
  };

  getAll = () => {
    const xyCoordsList = [];
    for (const boardCoords in this.board) {
      const xyCoords = this._convertBoardCoordsToXY(boardCoords);
      xyCoordsList.push(xyCoords);
    }
    return xyCoordsList;
  };

  exists = (x, y) => {
    const boardCoords = this._convertXYtoBoardCoords(x, y);
    return Boolean(this.board[boardCoords]);
  };

  add = (x, y) => {
    const boardCoords = this._convertXYtoBoardCoords(x, y);
    this.board[boardCoords] = true;
  };

  remove = (x, y) => {
    const boardCoords = this._convertXYtoBoardCoords(x, y);
    delete this.board[boardCoords];
  };
}


export default Board;
