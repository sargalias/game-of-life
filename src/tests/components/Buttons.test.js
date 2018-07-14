import React from 'react';
import Buttons from '../../components/Buttons';
import { shallow } from 'enzyme';

test('should render Buttons correctly without props', () => {
  const wrapper = shallow(<Buttons />);
  expect(wrapper).toMatchSnapshot();
});

test('should render Buttons correctly with props', () => {
  const wrapper = shallow(<Buttons
    onRunClick={'a'}
    onPauseClick={'b'}
    onClearClick={'c'}
    onResetClick={'d'}
  />);
  expect(wrapper).toMatchSnapshot();
});
