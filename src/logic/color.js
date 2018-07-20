
const generateGradient = (steps=360, saturation=100, value=50) => {
  const gradient = [];
  for (let i=0; i<steps; i++) {
    const hue = _calculateHue(i, steps);
    const color = _createColorStr(hue, saturation, value);
    gradient.push(color);
  }
  return gradient;
};


const _calculateHue = (step, totalSteps) => {
  return step / totalSteps * 360;
};

const _createColorStr = (hue, saturation, value) => {
  return `hsl(${hue}, ${saturation}%, ${value}%)`;
};

export default generateGradient;
