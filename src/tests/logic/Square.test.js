import Square from '../../logic/Square';

test('square initializes properly', () => {
  const square = new Square(5, 7);
  expect(square.getX()).toBe(5);
  expect(square.getY()).toBe(7);
});

test('square getX works properly', () => {
  const square = new Square(5, 7);
  expect(square.getX()).toBe(5);
});

test('square getY works properly', () => {
  const square = new Square(5, 7);
  expect(square.getY()).toBe(7);
});

test('square getXY works properly', () => {
  const square = new Square(5, 7);
  expect(square.getXY()).toEqual([5, 7]);
});

test('square equals works correctly', () => {
  const square1 = new Square(5, 7);
  const square2 = new Square(8, 8);
  const square3 = new Square(5, 7);
  expect(square1.equals(square2)).toBe(false);
  expect(square1.equals(square3)).toBe(true);
});

test('square setValue and getValue work correctly', () => {
  const square1 = new Square(5, 7);
  expect(square1.getValue()).toBe(0); // default
  square1.setValue(1);
  expect(square1.getValue()).toBe(1);
});
