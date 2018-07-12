import Drawer from '../../logic/Drawer';


test('should initialize Drawer with default values', () => {
  const drawer = new Drawer();
  expect(drawer.getWidth()).toBe(700);
  expect(drawer.getHeight()).toBe(500);
  expect(drawer.getStep()).toBe(10);
  expect(drawer.getBackgroundColor()).toBe('#000000');
  expect(drawer.getPrimaryColor()).toBe('#ffffff');
  expect(drawer.getBorderColor()).toBe('#000000');
});

test('should initialize Drawer with provided values', () => {
  const width = 1000;
  const height = 100;
  const step = 50;
  const backgroundColor = '#000000';
  const primaryColor = '#ffffff';
  const borderColor = '#000000';
  const drawer = new Drawer(width, height, step, backgroundColor, primaryColor, borderColor);
  expect(drawer.getWidth()).toBe(width);
  expect(drawer.getHeight()).toBe(height);
  expect(drawer.getStep()).toBe(step);
  expect(drawer.getBackgroundColor()).toBe(backgroundColor);
  expect(drawer.getPrimaryColor()).toBe(primaryColor);
  expect(drawer.getBackgroundColor()).toBe(borderColor);
});

test('setWidth works properly', () => {
  const drawer = new Drawer();
  const width = 500;
  drawer.setWidth(width);
  expect(drawer.getWidth()).toBe(width);
});

test('setHeight works properly', () => {
  const drawer = new Drawer();
  const height = 900;
  drawer.setHeight(height);
  expect(drawer.getHeight()).toBe(height);
});

test('setStep works properly', () => {
  const drawer = new Drawer();
  const step = 90;
  drawer.setStep(step);
  expect(drawer.getStep()).toBe(step);
});

test('setBackgroundColor works properly', () => {
  const drawer = new Drawer();
  const backgroundColor = '#222222';
  drawer.setBackgroundColor(backgroundColor);
  expect(drawer.getBackgroundColor()).toBe(backgroundColor);
});

test('setPrimaryColor works properly', () => {
  const drawer = new Drawer();
  const primaryColor = '#222222';
  drawer.setPrimaryColor(primaryColor);
  expect(drawer.getPrimaryColor()).toBe(primaryColor);
});

test('setBorderColor works properly', () => {
  const drawer = new Drawer();
  const borderColor = '#222222';
  drawer.setBorderColor(borderColor);
  expect(drawer.getBorderColor()).toBe(borderColor);
});
