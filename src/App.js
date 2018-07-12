import React, { Component } from 'react';
import Container from './components/Container';
import Title from './components/Title';
import Generation from './components/Generation';
import Canvas from './components/Canvas';
import Buttons from './components/Buttons';
import Attribution from './components/Attribution';

import Board from './logic/Board';
import Square from './logic/Square';
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
for (let i=0; i<5; i++) {
  for (let j=0; j<5; j+=2) {
    board.add(new Square(i, j));
  }
}


new Drawer().draw(board);

export default App;
