import React from 'react';
import { shallow } from 'enzyme';
import Slider from '../../components/Slider';

test('Slider should render correctly', () => {
  const wrapper = shallow(<Slider />);
  expect(wrapper).toMatchSnapshot();
});

test('value is set correctly by prop', () => {
  const value = "2";
  const wrapper = shallow(<Slider value={value} />);
  expect(wrapper.find('input').render().attr('value')).toBe(value);
});

test('onChange is assigned and called correctly', () => {
  const onChange = jest.fn();
  const value = "2";
  const wrapper = shallow(<Slider value={value} onChange={onChange} />);

  wrapper.find('input').simulate('change');
  expect(onChange).toHaveBeenCalled();
});
