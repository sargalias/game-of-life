import Board from '../../logic/Board';
import { xyCoordsList, boardCoordsList } from "../fixtures/boardData";

let board;

beforeEach(() => {
  board = new Board();
});

// Tests for private methods
test('covertXYtoBoardCoords works correctly', () => {
  expect(board._convertXYtoBoardCoords(-1000, 50)).toBe('-1000,50');
  for (let i=0; i<xyCoordsList.length; i++) {
    expect(board._convertXYtoBoardCoords(...xyCoordsList[i])).toBe(boardCoordsList[i]);
  }
});

test('_convertBoardCoordsToXY works correctly', () => {
  expect(board._convertBoardCoordsToXY('5,-10')).toEqual([5, -10]);
  for (let i=0; i<boardCoordsList.length; i++) {
    expect(board._convertBoardCoordsToXY(boardCoordsList[i])).toEqual(xyCoordsList[i]);
  }
});

// Tests for public methods
test('getAll should return empty array when Board is empty', () => {
  expect(board.getAll()).toEqual([]);
});

test('getAll should return correctly on non-empty board', () => {
  board.add(...xyCoordsList[3]);
  board.add(...xyCoordsList[7]);
  expect(board.getAll()).toEqual([xyCoordsList[3], xyCoordsList[7]]);
});

test('should add items correctly', () => {
  board.add(...xyCoordsList[3]);
  board.add(...xyCoordsList[7]);
  expect(board.getAll()).toEqual([xyCoordsList[3], xyCoordsList[7]]);
});

test('adding a duplicate items should have no effect', () => {
  board.add(...xyCoordsList[3]);
  expect(board.getAll()).toEqual([xyCoordsList[3]]);
  board.add(...xyCoordsList[3]);
  expect(board.getAll()).toEqual([xyCoordsList[3]]);
  board.add(...xyCoordsList[7]);
  expect(board.getAll()).toEqual([xyCoordsList[3], xyCoordsList[7]]);
  board.add(...xyCoordsList[3]);
  expect(board.getAll()).toEqual([xyCoordsList[3], xyCoordsList[7]]);
});

test('exists works correctly', () => {
  // Add item 2
  board.add(...xyCoordsList[2]);
  expect(board.exists(...xyCoordsList[1])).toBe(false);
  expect(board.exists(...xyCoordsList[2])).toBe(true);

  // Add item 500
  board.add(...xyCoordsList[500]);
  expect(board.exists(...xyCoordsList[1])).toBe(false);
  expect(board.exists(...xyCoordsList[2])).toBe(true);
  expect(board.exists(...xyCoordsList[500])).toBe(true);

  // Remove item 2
  board.remove(...xyCoordsList[2]);
  expect(board.exists(...xyCoordsList[2])).toBe(false);
  expect(board.exists(...xyCoordsList[500])).toBe(true);
});

test('removing lone item should work correctly', () => {
  board.add(...xyCoordsList[2]);
  board.remove(...xyCoordsList[2]);
  expect(board.getAll()).toEqual([]);
});

test('removing one of many items should work correctly', () => {
  board.add(...xyCoordsList[2]);
  board.add(...xyCoordsList[5]);
  board.add(...xyCoordsList[8]);
  board.remove(...xyCoordsList[5]);
  expect(board.getAll()).toEqual([xyCoordsList[2], xyCoordsList[8]]);
});
