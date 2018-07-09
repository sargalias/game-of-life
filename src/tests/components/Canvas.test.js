import React from 'react';
import { shallow } from 'enzyme';
import Canvas from '../../components/Canvas';

test('should render Canvas correctly', () => {
  const wrapper = shallow(<Canvas />);
  expect(wrapper).toMatchSnapshot();
});
