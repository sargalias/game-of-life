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
