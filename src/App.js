import React, { Component } from 'react';
import Container from './components/Container';
import Title from './components/Title';
import Generation from './components/Generation';
import Buttons from './components/Buttons';
import Attribution from './components/Attribution';

import Row from './components/Row';

import './App.css';


class App extends Component {
  render() {
    return (
      <Container>
        <Title title="Game Of Life" />
        <Generation />
        <Buttons />
        <Row rowId={7} colData={[0, 0, 1, 1, 0]} />
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
