import Board from './Board';
import Rules from './GameOfLifeRules';
import Drawer from './Drawer';

class Controller {
  constructor() {
    const squares = [new Square(3, 4), new Square(4, 4), new Square(5, 4)];
    let board = new Board(squares);
    const rules = new Rules();
    const drawer = new Drawer();
    setInterval(() => {
      board = rules.run(board);
      drawer.draw(board);
    }, 1000);
  }
}

export default Controller;
