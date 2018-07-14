import {_countNeighbours, gameOfLifeRules} from "../../logic/rules";

// Private functions tests
test('_countNeighbours works correctly with empty board', () => {
  const board = [];
  expect(_countNeighbours(board, 0, 0)).toBe(0);
});

test('_countNeighbours works correctly with all dead cells', () => {
  const board = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ];
  expect(_countNeighbours(board, 1, 1)).toBe(0);
});

test('_countNeighbours works correctly with single alive cell', () => {
  const board = [
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0]
  ];
  expect(_countNeighbours(board, 1, 1)).toBe(0);
  expect(_countNeighbours(board, 0, 0)).toBe(1);
});


// Public functions tests
test('gameOfLifeRules empty board results in empty board', () => {
  const board = [];
  expect(gameOfLifeRules(board)).toEqual(board);
});

test('gameOfLifeRules all dead cells results in board with all dead cells', () => {
  const board = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ];
  expect(gameOfLifeRules(board)).toEqual(board);
});

test('gameOfLifeRules works correctly with single alive cell', () => {
  const board = [
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0]
  ];
  const expected = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ];
  expect(gameOfLifeRules(board)).toEqual(expected);
});

test('gameOfLifeRules works correctly with multiple alive cells 2', () => {
  const board = [
    [0, 0, 0],
    [1, 1, 1],
    [0, 0, 0]
  ];
  const expected = [
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 0]
  ];
  expect(gameOfLifeRules(board)).toEqual(expected);
});

test('gameOfLifeRules works correctly with multiple alive cells 1', () => {
  const board = [
    [1, 1, 0],
    [0, 1, 0],
    [0, 0, 0]
  ];
  const expected = [
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 0]
  ];
  expect(gameOfLifeRules(board)).toEqual(expected);
});
