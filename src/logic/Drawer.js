import Konva from 'konva';

class Drawer {
  constructor(width=700,
              height=500,
              step=10,
              backgroundColor='#000000',
              primaryColor='#ffffff',
              borderColor='#000000'
  ) {
    this.width = width;
    this.height = height;
    this.step = step;
    this.backgroundColor = backgroundColor;
    this.primaryColor = primaryColor;
    this.borderColor = borderColor;
  }

  setWidth = (width) => {
    this.width = width;
  };

  setHeight = (height) => {
    this.height = height;
  };

  setStep = (step) => {
    this.step = step;
  };

  setBackgroundColor = (color) => {
    this.backgroundColor = color;
  };

  setPrimaryColor = (color) => {
    this.primaryColor = color;
  };

  setBorderColor = (color) => {
    this.borderColor = color;
  };

  getWidth = () => {
    return this.width;
  };

  getStep = () => {
    return this.step;
  };

  getHeight = () => {
    return this.height;
  };

  getBackgroundColor = () => {
    return this.backgroundColor;
  };

  getPrimaryColor = () => {
    return this.primaryColor;
  };

  getBorderColor = () => {
    return this.borderColor;
  };

  _createBackgroundLayer = () => {
    const bgLayer = new Konva.Layer();
    const bgRect = new Konva.Rect({
      x: 0,
      y: 0,
      width: this.width,
      height: this.height,
      fill: this.backgroundColor
    });
    bgLayer.add(bgRect);
    return bgLayer;
  };

  _calculateDrawPosition = (num) => {
    return num * this.step;
  };

  _createPrimaryLayer = (board) => {
    const layer = new Konva.Layer();
    board.getAll().forEach(([x, y]) => {
      const rect = new Konva.Rect({
        x: this._calculateDrawPosition(x),
        y: this._calculateDrawPosition(y),
        width: this.step,
        height: this.step,
        fill: this.primaryColor,
        stroke: this.borderColor,
        strokeWidth: 1
      });
      layer.add(rect);
    });
    return layer;
  };

  draw = (board) => {
    const stage = new Konva.Stage({
      container: 'my-canvas',
      width: this.width,
      height: this.height
    });
    const bgLayer = this._createBackgroundLayer();
    const primaryLayer = this._createPrimaryLayer(board);
    stage.add(bgLayer);
    stage.add(primaryLayer);
  };
}

export default Drawer;
