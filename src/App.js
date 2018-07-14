import React, { Component } from 'react';
import Container from './components/Container';
import Title from './components/Title';
import Generation from './components/Generation';
import Buttons from './components/Buttons';
import Attribution from './components/Attribution';
import Board from './components/Board';
import { generateRandomBoard } from "./logic/generateBoard";

import './App.css';


class App extends Component {
  state = {
    generation: 0,
    boardData: []
  };

  componentDidMount() {
    const boardData = generateRandomBoard(30, 50, 0.3);
    console.table(boardData);
    this.setState(() => ({
      boardData
    }));
  }

  componentWillUnmount() {
    console.log('component did unmount');
    console.log(this.state.generation);
  }

  render() {
    return (
      <Container>
        <Title title="Game Of Life" />
        <Generation />
        <Buttons />
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
