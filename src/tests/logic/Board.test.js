import Board from '../../logic/Board';
import Square from '../../logic/Square';
import { xyCoordsList, boardCoordsList } from "../fixtures/boardData";

let board;

beforeEach(() => {
  board = new Board();
});

test('getAll should return empty array when Board is empty', () => {
  expect(board.getAll()).toEqual([]);
});

test('board should initialize with provided list of squares', () => {
  const square1 = new Square(0, 0);
  const square2 = new Square(1, 1);
  const squareList = [square1, square2];
  board = new Board(squareList);
  expect(board.getAll()).toEqual(squareList);
});

test('getAll should return correctly on non-empty board', () => {
  const square1 = new Square(0, 0);
  const square2 = new Square(1, 1);
  board.add(square1);
  expect(board.getAll()).toEqual([square1]);
  board.add(square2);
  expect(board.getAll()).toEqual([square1, square2]);
});

test('should add items correctly', () => {
  const square1 = new Square(0, 0);
  const square2 = new Square(1, 1);
  board.add(square1);
  expect(board.getAll()).toEqual([square1]);
  board.add(square2);
  expect(board.getAll()).toEqual([square1, square2]);
});

test('adding a duplicate item should have no effect', () => {
  const square1 = new Square(0, 0);
  const square2 = new Square(1, 1);
  board.add(square1);
  expect(board.getAll().length).toBe(1);
  board.add(square2);
  expect(board.getAll().length).toBe(2);
  board.add(square1);
  expect(board.getAll().length).toBe(2);
});

test('exists works correctly', () => {
  const square1 = new Square(0, 0);
  const square2 = new Square(1, 1);

  expect(board.exists(square1)).toBe(false);

  board.add(square1);
  expect(board.exists(square1)).toBe(true);
  expect(board.exists(square2)).toBe(false);

  board.add(square2);
  expect(board.exists(square1)).toBe(true);
  expect(board.exists(square2)).toBe(true);
});

test('removing lone item should work correctly', () => {
  const square1 = new Square(0, 0);
  board = new Board([square1]);
  board.remove(square1);
  expect(board.getAll()).toEqual([]);
});

test('removing one of many items should work correctly', () => {
  const square1 = new Square(0, 0);
  const square2 = new Square(2, 1);
  board = new Board([square1, square2]);
  board.remove(square1);
  expect(board.getAll()).toEqual([square2]);
});
