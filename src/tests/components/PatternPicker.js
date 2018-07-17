import React from 'react';
import { shallow } from 'enzyme';
import PatternPicker from '../../components/PatternPicker';


test('pattern picker should render correctly', () => {
  const wrapper = shallow(<PatternPicker/>);
  expect(wrapper).toMatchSnapshot();
});

