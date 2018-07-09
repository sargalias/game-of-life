import React from 'react';
import { shallow } from 'enzyme';
import Generation from '../../components/Generation';

test('should render Generation correctly', () => {
  const wrapper = shallow(<Generation />);
  expect(wrapper).toMatchSnapshot();
});

test('Generation should contain correct initial text', () => {
  const initialText = "Generation: 0";
  const wrapper = shallow(<Generation />);
  expect(wrapper.text()).toBe(initialText);
});
