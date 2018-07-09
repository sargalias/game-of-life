import React, { Component } from 'react';
import Title from './components/Title';
import Generation from './components/Generation';
import Canvas from './components/Canvas';
import Buttons from './components/Buttons';
import Attribution from './components/Attribution';

import './App.css';


class App extends Component {
  render() {
    return (
      <div>
        <Title title="Game Of Life" />
        <Generation />
        <Canvas />
        <Buttons />
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
