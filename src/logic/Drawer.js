
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

  draw = (board) => {
    // fill board with background-color
    // for every square, calculate top-left. Then fill rectangle step by step with primaryColor.
    // then fill lines with border color.
  };
}

export default Drawer;
