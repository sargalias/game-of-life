import GameOfLifeRules from '../../logic/GameOfLifeRules';
import Board from '../../logic/Board';
import Square from '../../logic/Square';

const sortListOfSquares = (s1, s2) => {
  const [x1, y1] = s1.getXY();
  const [x2, y2] = s2.getXY();
  if (x1 === x2) {
    return y1 - y2;
  }
  return x1 - x2;
};

const areSquaresEqual = (arr1, arr2) => {
  if (arr1.length !== arr2.length)
    return false;
  arr1 = arr1.slice();
  arr2 = arr2.slice();
  arr1.sort(sortListOfSquares);
  arr2.sort(sortListOfSquares);
  for (let i=0; i<arr1.length; i++) {
    let [x1, y1] = arr1[i].getXY();
    let [x2, y2] = arr2[i].getXY();
    if (x1 !== x2 && y1 !== y2)
      return false;
  }
  return true;
};

test('empty board results in empty board', () => {
  const board = new Board();
  const rules = new GameOfLifeRules();
  const newBoard = rules.run(board);
  expect(newBoard.getAll()).toEqual([]);
});

test('correct results for board with line of 3 squares', () => {
  const rules = new GameOfLifeRules();
  const board = new Board();
  const y = 3;
  for (let x=3; x<=5; x++) {
    const square = new Square(x, y, true);
    board.add(square);
  }
  const newBoard = rules.run(board);
  const result = newBoard.getAll();
  const expected = [new Square(4, 2), new Square(4, 3), new Square(4, 4)];
  expect(areSquaresEqual(result, expected)).toBe(true);
});

test('correct results for board with 1 square', () => {
  const rules = new GameOfLifeRules();
  const board = new Board();
  board.add(new Square(3, 5, true));
  const newBoard = rules.run(board);
  const result = newBoard.getAll();
  expect(result).toEqual([]);
});

test('correct results for board with 2 squares', () => {
  const rules = new GameOfLifeRules();
  const board = new Board();
  board.add(new Square(3, 5, true));
  board.add(new Square(4, 5, true));
  const newBoard = rules.run(board);
  const result = newBoard.getAll();
  expect(result).toEqual([]);
});

test('correct results for board with random squares', () => {
  const rules = new GameOfLifeRules();
  const board = new Board();
  board.add(new Square(3, 5, true));
  board.add(new Square(4, 5, true));
  board.add(new Square(5, 5, true));
  board.add(new Square(8, 5, true));
  board.add(new Square(9, 5, true));
  const newBoard = rules.run(board);
  const result = newBoard.getAll();
  const expected = [new Square(4, 4), new Square(4, 5), new Square(4, 6)];
  expect(areSquaresEqual(result, expected)).toBe(true);
});
