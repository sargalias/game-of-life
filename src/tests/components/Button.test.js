import React from 'react';
import { shallow } from 'enzyme';
import Button from '../../components/Button';

test('should render Button correctly', () => {
  const wrapper = shallow(<Button text="Test" />);
  expect(wrapper).toMatchSnapshot();
});

test('should contain text passed in props', () => {
  const text = 'test text';
  const wrapper = shallow(<Button text={text} />);
  expect(wrapper.text()).toBe(text);
});
