import React from 'react';
import Buttons from '../../components/Buttons';
import { shallow } from 'enzyme';

test('should render Buttons correctly without props', () => {
  const wrapper = shallow(<Buttons />);
  expect(wrapper).toMatchSnapshot();
});

/*
test('should render Buttons correctly with props', () => {
  const wrapper = shallow(<Buttons
    onRunClick={'a'}
    onPauseClick={'b'}
    onClearClick={'c'}
    onResetClick={'d'}
  />);
  expect(wrapper).toMatchSnapshot();
});
*/

test('should render buttons correctly with prop.isRunning=true', () => {
  const wrapper = shallow(<Buttons
    onRunClick={'a'}
    onPauseClick={'b'}
    onClearClick={'c'}
    onResetClick={'d'}
    isRunning={true}
  />);
  expect(wrapper).toMatchSnapshot();
});

test('should render buttons correctly with prop.isRunning=false', () => {
  const wrapper = shallow(<Buttons
    onRunClick={'a'}
    onPauseClick={'b'}
    onClearClick={'c'}
    onResetClick={'d'}
    isRunning={false}
  />);
  expect(wrapper).toMatchSnapshot();
});

