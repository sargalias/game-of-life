import { getPattern, applyPattern } from "../../logic/patterns";
import path from 'path';
import boards from '../fixtures/boards';


test('applyPattern returns new board', () => {
  const emptyBoard = boards['empty'];
  const pattern = [];
  const x = 0;
  const y = 0;
  const newBoard = applyPattern(emptyBoard, pattern, x, y);
  newBoard[0][0] = 1;
  expect(emptyBoard).not.toEqual(newBoard);
});

test('applyPattern should work correctly with empty board, empty pattern, x=0, y=0', () => {
  const emptyBoard = boards['empty'];
  const pattern = [];
  const x = 0;
  const y = 0;
  expect(applyPattern(emptyBoard, pattern, x, y)).toEqual(emptyBoard);
});

test('applyPattern should work correctly with non-empty board and empty pattern, x=0, y=0', () => {
  const fullBoard = boards['full'];
  const pattern = [];
  const x = 0;
  const y = 0;
  expect(applyPattern(fullBoard, pattern, x, y)).toEqual(fullBoard);
});

test('applyPattern should work correctly with non-empty board and empty pattern', () => {
  const fullBoard = boards['full'];
  const pattern = [];
  const x = 0;
  const y = 0;
  expect(applyPattern(fullBoard, pattern, x, y)).toEqual(fullBoard);
});

test('applyPattern should return a new board', () => {
  const fullBoard = boards['full'];
  const pattern = [];
  const x = 0;
  const y = 0;
  const newBoard = applyPattern(fullBoard, pattern, x, y);
  newBoard[0][0] = 5;
  expect(fullBoard).not.toEqual(newBoard);
});

test('applyPattern should correctly apply pattern with x=0 y=0 1', () => {
  const emptyBoard = [
    [0, 0],
    [0, 0]
  ];
  const pattern = [
    [1, 0],
    [0, 1]
  ];
  const x = 0;
  const y = 0;
  const expected = [
    [1, 0],
    [0, 1]
  ];
  expect(applyPattern(emptyBoard, pattern, x, y)).toEqual(expected);
});

test('applyPattern should correctly apply pattern with x=0 y=0 2', () => {
  const emptyBoard = [
    [0, 0],
    [0, 0]
  ];
  const pattern = [
    [1, 0],
    [1, 0]
  ];
  const x = 0;
  const y = 0;
  const expected = [
    [1, 0],
    [1, 0]
  ];
  expect(applyPattern(emptyBoard, pattern, x, y)).toEqual(expected);
});

test('applyPattern should correctly apply pattern with x=0 y=0 3', () => {
  const emptyBoard = boards['empty'];
  const pattern = [
    [1, 0],
    [0, 1]
  ];
  const x = 0;
  const y = 0;
  const expected = [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ];
  const newBoard = applyPattern(emptyBoard, pattern, x, y);
  expect(newBoard).toEqual(expected);
});

test('applyPattern should correctly apply pattern on non-empty board', () => {
  const emptyBoard = boards['full'];
  const pattern = [
    [1, 0],
    [0, 1]
  ];
  const x = 0;
  const y = 0;
  const expected = [
    [0, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ];
  const newBoard = applyPattern(emptyBoard, pattern, x, y);
  expect(newBoard).toEqual(expected);
});

test('applyPattern should correctly apply pattern with non-0 x and y', () => {
  const emptyBoard = boards['empty'];
  const pattern = [
    [1, 0],
    [0, 1]
  ];
  const x = 1;
  const y = 1;
  const expected = [
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 1]
  ];
  expect(applyPattern(emptyBoard, pattern, x, y)).toEqual(expected);
});

test('applyPattern should ignore out of range elements 1', () => {
  const emptyBoard = boards['empty'];
  const pattern = [
    [1, 0],
    [0, 1]
  ];
  const x = 5;
  const y = 5;
  expect(applyPattern(emptyBoard, pattern, x, y)).toEqual(emptyBoard);
});

test('applyPattern should ignore out of range elements 2', () => {
  const emptyBoard = boards['empty'];
  const pattern = [
    [1, 0],
    [0, 1]
  ];
  const x = 2;
  const y = 2;
  const expected = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 1]
  ];
  expect(applyPattern(emptyBoard, pattern, x, y)).toEqual(expected);
});
