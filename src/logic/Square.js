

class Square {
  constructor(x, y, value=true) {
    this.x = x;
    this.y = y;
    this.value = value;
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

  setValue = (value) => {
    this.value = value;
  };

  getValue = () => {
    return this.value;
  };
}

export default Square;
