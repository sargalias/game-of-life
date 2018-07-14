import { generateEmptyBoard, generateRandomBoard } from '../../logic/generateBoard';

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
  const expected = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ];
  expect(generateRandomBoard(3, 3, 0)).toEqual(expected);
});

test('generateRandomBoard returns all 1s with chance 1', () => {
  const expected = [
    [1, 1, 1],
    [1, 1, 1],
  ];
  expect(generateRandomBoard(2, 3, 1)).toEqual(expected);
});
