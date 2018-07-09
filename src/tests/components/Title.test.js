import React from 'react';
import { shallow } from 'enzyme';
import Title from '../../components/Title';

test('should render Title correctly', () => {
  const wrapper = shallow(<Title title="Test title" />);
  expect(wrapper).toMatchSnapshot();
});

test('title prop should appear in rendered component', () => {
  const value = "test title";
  const wrapper = shallow(<Title title={value} />);
  expect(wrapper.find('#title').text()).toBe(value);
});
