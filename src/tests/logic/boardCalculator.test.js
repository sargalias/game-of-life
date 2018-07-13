import {
  getAllSquaresWithNeighbours,
  getAdjacentSquares,
  getNeighbours,
  getNumNeighbours
} from '../../logic/boardCalculator';
import Board from '../../logic/Board';
import Square from '../../logic/Square';


test('getNumNeighbours works correctly with 8 neighbours', () => {
  const board = new Board();
  for (let x=0; x<3; x++) {
    for (let y=0; y<3; y++) {
      board.add(new Square(x, y));
    }
  }
  const square = new Square(1, 1);
  expect(getNumNeighbours(board, square)).toBe(8);
});

test('getNumNeighbours works correctly with 0 squares', () => {
  const board = new Board();
  const square = new Square(1, 1);
  expect(getNumNeighbours(board, square)).toBe(0);
});

test('getNumNeighbours works correctly with 1 neighbour', () => {
  const board = new Board();
  board.add(new Square(1, 0));
  board.add(new Square(5, 5));
  const square = new Square(2, 1);
  expect(getNumNeighbours(board, square)).toBe(1);
});

test('getNeighbours works correctly with 8 neighbours', () => {
  const board = new Board();
  for (let x=0; x<3; x++) {
    for (let y=0; y<3; y++) {
      board.add(new Square(x, y));
    }
  }
  const square = new Square(1, 1);
  expect(getNeighbours(board, square).length).toBe(8);
});

test('getNeighbours works correctly with 0 squares', () => {
  const board = new Board();
  const square = new Square(1, 1);
  expect(getNeighbours(board, square).length).toBe(0);
});

test('getNeighbours works correctly with 1 square as the root and 0 neighbours', () => {
  const board = new Board();
  const square = new Square(1, 0);
  board.add(square);
  board.add(new Square(5, 5));
  expect(getNeighbours(board, square).length).toBe(0);
});

test('getNeighbours works correctly with 1 neighbour', () => {
  const board = new Board();
  board.add(new Square(1, 0));
  board.add(new Square(5, 5));
  const square = new Square(2, 1);
  expect(getNeighbours(board, square).length).toBe(1);
});

test('getAllSquaresWithNeighbours works correctly', () => {
  const square = new Square(2, 1);
  const board = new Board();
  board.add(square);
  const allSquaresWithNeighbours = getAllSquaresWithNeighbours(board);
  expect(allSquaresWithNeighbours.length).toBe(9);
});

