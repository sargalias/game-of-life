import React from 'react';
import { shallow } from 'enzyme';
import Row from '../../components/Row';

test('row should render correctly', () => {
  const colData = [0, 0, 1, 1];
  const wrapper = shallow(<Row colData={colData} rowId={5} />);
  expect(wrapper).toMatchSnapshot();
});
