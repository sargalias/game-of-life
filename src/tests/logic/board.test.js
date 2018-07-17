import { generateEmptyBoard, generateRandomBoard, copyBoard } from '../../logic/board';
import boards from '../fixtures/boards';

test('generateEmptyBoard creates empty array with rows=0, cols=0', () => {
  expect(generateEmptyBoard(0, 0)).toEqual([]);
});

test('generateEmptyBoard returns correctly with non-0 provided values', () => {
  const expected = [
    [],
    [],
    [],
  ];
  expect(generateEmptyBoard(3, 0)).toEqual(expected);
});

test('generateRandomBoard returns all 0s with chance 0', () => {
  const emptyBoard = boards['empty'];
  expect(generateRandomBoard(3, 3, 0)).toEqual(emptyBoard);
});

test('generateRandomBoard returns all 1s with chance 1', () => {
  const expected = [
    [1, 1, 1],
    [1, 1, 1],
  ];
  expect(generateRandomBoard(2, 3, 1)).toEqual(expected);
});

test('generateRandomBoard returns between 40% and 60% 1s with chance 0.5', () => {
  const rows = 1000;
  const cols = 1000;
  const chance = 0.5;
  const total = rows * cols;
  let count1s = 0;
  const board = generateRandomBoard(rows, cols, chance);
  for (let row of board) {
    for (let col of row) {
      if (col === 1) {
        count1s++;
      }
    }
  }
  expect(count1s).toBeGreaterThan(total * 0.4);
  expect(count1s).toBeLessThan(total * 0.6);
});

test('copyBoard should copy empty board correctly', () => {
  const empty = [];
  expect(copyBoard(empty)).toEqual([]);
});

test('copyBoard should copy values correctly', () => {
  const board1 = boards['1'];
  expect(copyBoard(board1)).toEqual(board1);
});

test('copyBoard should return a new board which does not affect the original board when changed', () => {
  const board = boards['full'];
  const newBoard = copyBoard(board);
  newBoard[0][0] = 5;
  expect(board).not.toEqual(newBoard);
  expect(board[0]).not.toBe(newBoard[0]);
});

test('copyBoard should correctly copy boards with a different number of columns and rows', () => {
  const rectBoard = boards['rect1'];
  expect(copyBoard(rectBoard)).toEqual(rectBoard);
});
