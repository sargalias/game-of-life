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
