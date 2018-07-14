import React, { Component } from 'react';
import Container from './components/Container';
import Title from './components/Title';
import Generation from './components/Generation';
import Buttons from './components/Buttons';
import Attribution from './components/Attribution';
import Board from './components/Board';
import {generateRandomBoard} from './logic/generateBoard';
import rules from './logic/rules';

import './App.css';


class App extends Component {
  state = {
    generation: 0,
    boardData: [],
    timer: null,
    isRunning: this.props.running
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
    if (this.props.running)
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

  render() {
    return (
      <Container>
        <Title title="Game Of Life" />
        <Generation generation={this.state.generation} />
        <Buttons onRunClick={this.run} onPauseClick={this.pause} onClearClick={this.clear} onResetClick={this.reset} />
        <Board boardData={this.state.boardData} />
        <Attribution
          authorName="Spyros Argalias"
          authorUrl="https://sargalias.com"
          codeRepositoryUrl="https://github.com/sargalias/game-of-life"
        />
      </Container>
    );
  }
}


export default App;
