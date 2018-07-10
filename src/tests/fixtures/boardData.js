
const xyCoordsList = [];
const boardCoordsList = [];

const MIN = -1000000;
const MAX = 1000000;
const STEP = 10000;

for (let x=MIN; x<MAX; x+=STEP) {
  for (let y=MIN; y<MAX; y+=STEP) {
    xyCoordsList.push([x, y]);
    boardCoordsList.push(`${x},${y}`);
  }
}

export { xyCoordsList, boardCoordsList };
