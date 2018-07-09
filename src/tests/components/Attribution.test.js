import React from 'react';
import { shallow } from 'enzyme';
import Attribution from '../../components/Attribution';


test('Attribution should render correctly', () => {
  const wrapper = shallow(<Attribution
    authorName="testName"
    authorUrl="https://test.com"
    codeRepositoryUrl="https://test-code.com"
  />);
  expect(wrapper).toMatchSnapshot();
});

test('Attribution should correctly use its authorName prop', () => {
  const authorName = 'test name';
  const wrapper = shallow(<Attribution authorName={authorName} />);
  expect(wrapper.find('#author').text()).toContain(authorName);
});

test('Attribution should correctly use its authorUrl prop', () => {
  const authorUrl = 'https://test.com';
  const wrapper = shallow(<Attribution authorUrl={authorUrl} />);
  expect(wrapper.find('#author a').render().attr('href')).toBe('https://test.com');
});

test('Attribution should correctly use its codeRepositoryUrl prop', () => {
  const codeRepositoryUrl = 'https://test.com';
  const wrapper = shallow(<Attribution codeRepositoryUrl={codeRepositoryUrl} />);
  expect(wrapper.find('#code-repository a').render().attr('href')).toBe(codeRepositoryUrl);
});
