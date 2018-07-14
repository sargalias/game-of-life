import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';


test('app renders correctly', () => {
  const wrapper = shallow(<App chance={0} rows={30} cols={50} running={false} />);
  expect(wrapper).toMatchSnapshot();
});

test('app state.boardData is correct upon mounting', () => {
  const rows = 10;
  const cols = 20;
  const wrapper = shallow(<App chance={0.3} rows={rows} cols={cols} running={false} />);
  const boardData = wrapper.state('boardData');
  expect(boardData.length).toBe(rows);
  expect(boardData[0].length).toBe(cols);
});

test('app state.timer is correct upon mounting', () => {
  const rows = 10;
  const cols = 20;
  const wrapper = shallow(<App chance={0.3} rows={rows} cols={cols} running={false} />);
  const timer = wrapper.state('timer');
  expect(timer).toBe(null);
});

test('app state.generation is correct upon mounting', () => {
  const rows = 10;
  const cols = 20;
  const wrapper = shallow(<App chance={0.3} rows={rows} cols={cols} running={false} />);
  const generation = wrapper.state('generation');
  expect(generation).toBe(0);
});

test('app state.isRunning is correct upon mounting', () => {
  const wrapper1 = shallow(<App chance={0} rows={10} cols={10} running={false} />);
  expect(wrapper1.state('isRunning')).toBe(false);

  const wrapper2 = shallow(<App chance={0} rows={10} cols={10} running={true} />);
  expect(wrapper2.state('isRunning')).toBe(true);
});

test('update works correctly', () => {
  const rows = 5;
  const cols = 3;
  const expectedBoardData = [
    [1, 0, 1],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [1, 0, 1]
  ];
  const wrapper = shallow(<App chance={1} rows={rows} cols={cols} running={false} />);
  wrapper.instance().update();
  const state = wrapper.state();
  expect(state.generation).toBe(1);
  expect(state.boardData).toEqual(expectedBoardData);
});

test('run works correctly with no current timer', () => {
  const wrapper = shallow(<App chance={1} rows={10} cols={10} running={false} />);
  expect(wrapper.state('timer')).toBe(null);
  expect(wrapper.state('isRunning')).toBe(false);
  wrapper.instance().run();
  expect(wrapper.state('timer')).toBeTruthy();
  expect(wrapper.state('isRunning')).toBe(true);
});

test('run has no effect with already existing timer', () => {
  const wrapper = shallow(<App chance={1} rows={10} cols={10} running={true} />);
  const currentTimer = wrapper.state('timer');
  expect(currentTimer).toBeTruthy();
  wrapper.instance().run();
  expect(wrapper.state('timer')).toBe(currentTimer);
});

test('pause works correctly', () => {
  const wrapper = shallow(<App chance={1} rows={10} cols={10} running={true} />);
  expect(wrapper.state('timer')).toBeTruthy();
  expect(wrapper.state('isRunning')).toBe(true);
  wrapper.instance().pause();
  expect(wrapper.state('timer')).toBe(null);
  expect(wrapper.state('isRunning')).toBe(false);
});

test('clear works correctly', () => {
  const wrapper = shallow(<App chance={0} rows={3} cols={3} running={true} />);
  wrapper.setState({
    boardData: [
      [1, 1, 0],
      [1, 1, 0],
      [0, 0, 0]
    ]
  });
  expect(wrapper.state('timer')).toBeTruthy();

  wrapper.instance().clear();
  expect(wrapper.state('timer')).toBe(null);
  expect(wrapper.state('boardData')).toEqual([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ]);
  expect(wrapper.state('generation')).toBe(0);
});

test('reset works correctly', () => {
  const wrapper = shallow(<App chance={1} rows={2} cols={2} running={false} />);
  wrapper.setState({
    boardData: [],
    generation: 0,
    timer: null,
    isRunning: null
  });
  expect(wrapper.state('boardData')).toEqual([]);
  wrapper.instance().reset();
  const state = wrapper.state();
  expect(state.boardData).toEqual([[1, 1], [1, 1]]);
  expect(state.generation).toBe(0);
});
