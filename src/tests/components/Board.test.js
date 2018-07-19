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

test('board should initialise with a color array in state if props.color=true', () => {
  const boardData = [
    [0, 0, 0],
    [1, 0, 1],
    [0, 1, 0]
  ];
  const wrapper = shallow(<Board color={true} boardData={boardData} />);
  expect(wrapper.state('colors')).toBeTruthy();
});

test('board should not initialise with a color array in state if props.color=false', () => {
  const boardData = [
    [0, 0, 0],
    [1, 0, 1],
    [0, 1, 0]
  ];
  const wrapper = shallow(<Board boardData={boardData} />);
  expect(wrapper.state('colors')).toBeFalsy();
});
