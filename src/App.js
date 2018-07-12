import React, { Component } from 'react';
import Container from './components/Container';
import Title from './components/Title';
import Generation from './components/Generation';
import Canvas from './components/Canvas';
import Buttons from './components/Buttons';
import Attribution from './components/Attribution';

import Board from './logic/Board';
import Drawer from './logic/Drawer';

import './App.css';


class App extends Component {
  state = {
    generation: 0
  };

  render() {
    return (
      <Container>
        <Title title="Game Of Life" />
        <Generation />
        <Canvas />
        <Buttons />
        <Attribution
          authorName="Spyros Argalias"
          authorUrl="https://sargalias.com"
          codeRepositoryUrl="https://github.com/sargalias/game-of-life"
        />
      </Container>
    );
  }
}

const board = new Board();
board.add(0, 0);
board.add(1, 0);
board.add(2, 0);
board.add(1, 3);
board.add(1, 4);

new Drawer().draw(board);

export default App;
