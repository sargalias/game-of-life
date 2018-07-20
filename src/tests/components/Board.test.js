import React from 'react';
import { shallow } from 'enzyme';
import Board from '../../components/Board';

test('board should render correctly with empty boardData', () => {
  const boardData = [];
  const wrapper = shallow(<Board boardData={boardData} onCellClick={() => {}} />);
  expect(wrapper).toMatchSnapshot();
});

test('board should render correctly with boardData', () => {
  const boardData = [
    [0, 0, 0],
    [1, 0, 1],
    [0, 1, 0]
  ];
  const wrapper = shallow(<Board boardData={boardData} onCellClick={() => {}} />);
  expect(wrapper).toMatchSnapshot();
});

test('board should initialise with a color array in state if props.hasColor=true', () => {
  const boardData = [
    [0, 0, 0],
    [1, 0, 1],
    [0, 1, 0]
  ];
  const wrapper = shallow(<Board hasColor={true} boardData={boardData} />);
  expect(wrapper.state('colors')).toBeTruthy();
});

test('board should not initialise with a color array in state if props.hasColor=false', () => {
  const boardData = [
    [0, 0, 0],
    [1, 0, 1],
    [0, 1, 0]
  ];
  const wrapper = shallow(<Board boardData={boardData} />);
  expect(wrapper.state('colors')).toBeFalsy();
});

test('board color array should have length of boardData row width', () => {
  const boardData = [
    [0, 0, 0],
    [1, 0, 1]
  ];
  const wrapper = shallow(<Board hasColor={true} boardData={boardData} />);
  expect(wrapper.state('colors').length).toBe(3);
});

test('board should generate correct 2D color array', () => {
  const boardData = [
    [0, 0, 0, 10, 20, 50],
    [0, 0, 0, 10, 20, 50],
    [0, 0, 0, 10, 20, 50],
    [0, 0, 0, 10, 20, 50]
  ];
  const wrapper = shallow(<Board hasColor={true} boardData={boardData} />);
  const colorBoard = wrapper.instance()._gen2DColorArray();
  expect(colorBoard).toMatchSnapshot();
});

test('_generate2DColorArray should return [] for empty board', () => {
  const boardData = [];
  const wrapper = shallow(<Board hasColor={true} boardData={boardData} />);
  const colorBoard = wrapper.instance()._gen2DColorArray();
  expect(colorBoard).toEqual([]);
});
