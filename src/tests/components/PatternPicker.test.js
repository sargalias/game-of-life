import React from 'react';
import { shallow } from 'enzyme';
import PatternPicker from '../../components/PatternPicker';


test('PatternPicker should render correctly', () => {
  const wrapper = shallow(<PatternPicker />);
  expect(wrapper).toMatchSnapshot();
});

test('PatternPicker should correctly use its props.patterns', () => {
  const patterns = ['single_cell', 'test', 'test2'];
  const wrapper = shallow(<PatternPicker patterns={patterns} />);
  expect(wrapper).toMatchSnapshot();
  expect(wrapper.find('select').children().length).toBe(3);
});

test('PatternPicker should correctly make use of its props.onChange', () => {
  const onChange = jest.fn();
  const wrapper = shallow(<PatternPicker onChange={onChange} />);
  wrapper.find('select').simulate('change');
  expect(onChange).toHaveBeenCalled();
});
