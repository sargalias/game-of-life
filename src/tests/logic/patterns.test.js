import { getPattern, applyPattern } from "../../logic/patterns";
import path from 'path';
import boards from '../fixtures/boards';

const patternPath = path.join(__dirname, '..', 'patterns');
const simplePattern = path.join(patternPath, 'simple-pattern_106.lif.txt');
const normalPattern = path.join(patternPath, '34p13_106.lif.txt');

test('applyPattern returns new board', () => {
  const emptyBoard = boards['empty'];
  const pattern = [];
  const x = 0;
  const y = 0;
  const newBoard = applyPattern(emptyBoard, pattern, x, y);
  emptyBoard[0][0] = 1;
  expect(emptyBoard).not.toEqual(newBoard);
});

test('applyPattern works correctly with empty board, empty pattern, x=0, y=0', () => {
  const emptyBoard = boards['empty'];
  const pattern = [];
  const x = 0;
  const y = 0;
  expect(applyPattern(emptyBoard, pattern, x, y)).toEqual(emptyBoard);
});

test('applyPattern works correctly with non-empty board and empty pattern, x=0, y=0', () => {
  const fullBoard = boards['full'];
  const pattern = [];
  const x = 0;
  const y = 0;
  expect(applyPattern(fullBoard, pattern, x, y)).toEqual(fullBoard);
});

test('applyPattern works correctly with non-empty board and empty pattern', () => {
  const fullBoard = boards['full'];
  const pattern = [];
  const x = 0;
  const y = 0;
  expect(applyPattern(fullBoard, pattern, x, y)).toEqual(fullBoard);
});
