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

test('should have onClick attribute with value of prop.onClick', () => {
  const mock = jest.fn();
  const wrapper = shallow(<Button onClick={mock} />);
  wrapper.simulate('click');
  expect(mock).toHaveBeenCalledTimes(1);
});
