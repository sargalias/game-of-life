import React from 'react';
import { shallow } from 'enzyme';
import Cell from '../../components/Cell';

test('cell with value 0 renders correctly', () => {
  const wrapper = shallow(<Cell value={0} />);
  expect(wrapper).toMatchSnapshot();
});

test('cell with value 1 renders correctly', () => {
  const wrapper = shallow(<Cell value={1} />);
  expect(wrapper).toMatchSnapshot();
});

test('cell calls onCellClick prop when clicked with correct rowId and colId', () => {
  const mock = jest.fn();
  const wrapper = shallow(<Cell rowId={5} colId={3} value={1} onCellClick={mock} />);
  wrapper.simulate('click');
  expect(mock).toHaveBeenCalledTimes(1);
  expect(mock).toHaveBeenLastCalledWith(5, 3);
});

test('cell should render with provided background color if alive', () => {
  const wrapper = shallow(<Cell value={1} bgColor={'blue'} />);
  const html = wrapper.render();
  expect(html.attr('style')).toBe('background-color:blue');
});
