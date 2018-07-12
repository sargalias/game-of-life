import Square from '../../logic/Square';

test('square works properly', () => {
  const square = new Square(5, 7);
  expect(square.getX()).toBe(5);
  expect(square.getY()).toBe(7);
});
