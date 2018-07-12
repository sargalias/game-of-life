import BoardCalculator from '../../logic/BoardCalculator';
import Board from '../../logic/Board';
import Square from '../../logic/Square';


test('getNeighbours works correctly with 8 neighbours', () => {
  const board = new Board();
  for (let x=0; x<3; x++) {
    for (let y=0; y<3; y++) {
      board.add(new Square(x, y));
    }
  }
  const boardCalculator = new BoardCalculator(board);
  const square = new Square(1, 1);
  expect(boardCalculator.getNeighbours(square)).toBe(8);
});

test('getNeighbours works correctly with 0 squares', () => {
  const board = new Board();
  const boardCalculator = new BoardCalculator(board);
  const square = new Square(1, 1);
  expect(boardCalculator.getNeighbours(square)).toBe(0);
});

test('getNeighbours works correctly with 1 neighbour', () => {
  const board = new Board();
  board.add(new Square(1, 0));
  board.add(new Square(5, 5));
  const boardCalculator = new BoardCalculator(board);
  const square = new Square(2, 1);
  expect(boardCalculator.getNeighbours(square)).toBe(1);
});
