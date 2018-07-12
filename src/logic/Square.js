

class Square {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  getX = () => {
    return this.x;
  };

  getY = () => {
    return this.y;
  };

  getXY = () => {
    return [this.x, this.y];
  };

  equals = (other) => {
    return this.x === other.x && this.y === other.y;
  };
}

export default Square;
