import React, { Component } from 'react';
import Container from './components/Container';
import Title from './components/Title';
import Generation from './components/Generation';
import Canvas from './components/Canvas';
import Buttons from './components/Buttons';
import Attribution from './components/Attribution';

import './App.css';

import Board from './logic/Board';
import Rules from './logic/GameOfLifeRules';
import Drawer from './logic/Drawer';
import Square from './logic/Square';

const squares = [];
for (let x=0; x<500; x++) {
  for (let y=0; y<500; y++) {
    if (Math.random() < 0.05) {
      squares.push(new Square(x, y));
    }
  }
}
let board = new Board(squares);
const rules = new Rules();
const drawer = new Drawer();
drawer.draw(board);
// setInterval(() => {
//   board = rules.run(board);
//   drawer.draw(board);
// }, 500);

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


export default App;
