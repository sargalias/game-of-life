import React from 'react';
import { shallow } from 'enzyme';
import Container from '../../components/Container';
import { PlainComponent, ClassnameComponent } from '../fixtures/components';

test('should render container correctly with child components', () => {
  const wrapper = shallow(<Container>
    <PlainComponent/>
    <ClassnameComponent/>
  </Container>);
  expect(wrapper.children().length).toBe(2);
  expect(wrapper.contains([<PlainComponent/>, <ClassnameComponent/>]));
  expect(wrapper).toMatchSnapshot();
});
