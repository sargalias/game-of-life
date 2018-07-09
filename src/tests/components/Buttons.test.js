import React from 'react';
import Buttons from '../../components/Buttons';
import { shallow } from 'enzyme';

test('should render Buttons correctly', () => {
  const wrapper = shallow(<Buttons />);
  expect(wrapper).toMatchSnapshot();
});
