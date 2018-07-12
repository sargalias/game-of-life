import Board from './Board';
import Rules from './GameOfLifeRules';

class Controller {
  constructor() {
    let board = new Board();
    const rules = new Rules();
    setInterval(() => {
      board = rules.run(board);
    }, 1000);
  }
}

export default Controller;
