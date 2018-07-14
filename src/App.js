import React, { Component } from 'react';
import Title from './components/Title';
import Generation from './components/Generation';
import Button from './components/Button';
import Attribution from './components/Attribution';
import Board from './components/Board';
import {generateRandomBoard} from './logic/generateBoard';
import rules from './logic/rules';
import Slider from './components/Slider';

import './App.css';


class App extends Component {
  state = {
    generation: 0,
    boardData: [],
    timer: null,
    isRunning: this.props.isRunning
  };

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
      const timer = setInterval(this.update, this.props.interval);
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

  reset = () => {
    this.clear();
    this._initialize();
  };

  componentWillUnmount() {
    console.log('component will unmount');
    this.pause();
  }

  handleCellClick = (row, col) => {
    this.setState((prevState) => {
      const newBoardData = prevState.boardData.map((nestedArr) => nestedArr.slice());
      newBoardData[row][col] = newBoardData[row][col] === 0 ? 1 : 0;
      return {
        boardData: newBoardData
      };
    });
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
          <Button text="Step" onClick={this.step} />
          <Button text="Clear" onClick={this.clear} />
          <Button text="Reset" onClick={this.reset} />
        </div>
        <Slider />
        <Board boardData={this.state.boardData} onCellClick={this.handleCellClick} />
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
