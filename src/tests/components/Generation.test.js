import React from 'react';
import { shallow } from 'enzyme';
import Generation from '../../components/Generation';

test('should render Generation correctly', () => {
  const wrapper = shallow(<Generation />);
  expect(wrapper).toMatchSnapshot();
});

test('Generation should contain correct initial text', () => {
  const initialText = "Generation: ";
  const wrapper = shallow(<Generation />);
  expect(wrapper.text()).toBe(initialText);
});

test('Generation should make use of its prop.generation', () => {
  const expected = "Generation: 5";
  const wrapper = shallow(<Generation generation={5} />);
  expect(wrapper.text()).toBe(expected);
});
