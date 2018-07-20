import React from 'react';
import { shallow } from 'enzyme';
import Row from '../../components/Row';

test('row should render correctly', () => {
  const foo = () => {};
  const rowData = [0, 0, 1, 1];
  const wrapper = shallow(<Row rowData={rowData} rowId={5} onCellClick={foo} />);
  expect(wrapper).toMatchSnapshot();
});

test('row should render correctly with rowColorData', () => {
  const foo = () => {};
  const rowData = [0, 0, 1, 1];
  const rowColorData = ['white', 'yellow', 'red', 'orange'];
  const wrapper = shallow(<Row rowData={rowData} rowId={5} onCellClick={foo} rowColorData={rowColorData} />);
  expect(wrapper).toMatchSnapshot();
});
