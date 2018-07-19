import generateGradient from '../../logic/color';

test('color', () => {
  const gradient = generateGradient();
  expect(gradient).toMatchSnapshot();
});
