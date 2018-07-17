import React, { Component } from 'react';
import Title from './components/Title';
import Generation from './components/Generation';
import Button from './components/Button';
import Attribution from './components/Attribution';
import Board from './components/Board';
import {generateRandomBoard} from './logic/board';
import rules from './logic/rules';
import Slider from './components/Slider';
import PatternPicker from './components/PatternPicker';

import { applyPattern } from "./logic/patterns";
import patterns from './patterns/patterns';

import './App.css';


class App extends Component {
  constructor({ chance=0.3, rows=3, cols=2, isRunning=true, interval=200, ...rest }) {
    const props = {
      chance,
      rows,
      cols,
      isRunning,
      interval,
      ...rest
    };
    super(props);
    this.state = {
      generation: 0,
      boardData: [],
      timer: null,
      isRunning: isRunning,
      interval: interval,
      pattern: 'Single Cell'
    }
  }

  componentDidMount() {
    this._initialize();
  }

  update = () => {
    const newBoardData = rules(this.state.boardData);
    this.setState((prevState) => ({
      boardData: newBoardData,
      generation: prevState.generation + 1
    }));
  };

  run = () => {
    this.setState((prevState) => {
      if (prevState.timer)
        return {};
      const timer = setInterval(this.update, prevState.interval);
      return {
        timer,
        isRunning: true
      }
    });
  };

  pause = () => {
    clearInterval(this.state.timer);
    this.setState(() => ({
      timer: null,
      isRunning: false
    }));
  };

  clear = () => {
    this.pause();
    this.setState(() => ({
      boardData: generateRandomBoard(this.props.rows, this.props.cols, 0),
      generation: 0
    }));
  };

  _initialize = () => {
    const boardData = generateRandomBoard(this.props.rows, this.props.cols, this.props.chance);
    this.setState(() => ({
      boardData
    }));
    if (this.props.isRunning)
      this.run();
  };

  convertIntervalFrequency = (val) => {
    return 1000 / val
  };

  onIntervalChange = (e) => {
    const isRunning = this.state.isRunning;
    this.pause();
    const frequency = parseInt(e.target.value);
    const interval = this.convertIntervalFrequency(frequency);
    this.setState(() => ({
      interval
    }));
    if (isRunning)
      this.run();
  };

  reset = () => {
    this.clear();
    this._initialize();
  };

  componentWillUnmount() {
    this.pause();
  }

  onCellClick = (row, col) => {
    this.setState((prevState) => {
      const newBoardData = applyPattern(prevState.boardData, patterns[prevState.pattern], row, col);
      return {
        boardData: newBoardData
      };
    });
  };

  onPatternChange = (e) => {
    const pattern = e.target.value;
    if (patterns[pattern] === undefined)
      throw ReferenceError('Invalid pattern name');
    this.setState(() => ({
      pattern
    }));
  };

  render() {
    return (
      <div className="container">
        <Title title="Game Of Life" />
        <Generation generation={this.state.generation} />
        <div className="button-container">
          { this.state.isRunning ? (
            <Button text="Pause" onClick={this.pause} />
          ) : (
            <Button text="Run" onClick={this.run} />
          )}
          <Button text="Step" onClick={this.update} />
          <Button text="Clear" onClick={this.clear} />
          <Button text="Reset" onClick={this.reset} />
        </div>
        <Slider value={`${this.convertIntervalFrequency(this.state.interval)}`} onChange={this.onIntervalChange} />
        <Board boardData={this.state.boardData} onCellClick={this.onCellClick} />
        <PatternPicker value={this.state.pattern} onChange={this.onPatternChange} patterns={Object.keys(patterns)} />
        <Attribution
          authorName="Spyros Argalias"
          authorUrl="https://sargalias.com"
          codeRepositoryUrl="https://github.com/sargalias/game-of-life"
        />
      </div>
    );
  }
}


export default App;
