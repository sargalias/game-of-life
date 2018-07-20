import React from 'react';
import Row from './Row';
import generateGradient from "../logic/color";
import { generateEmptyBoard } from "../logic/board";

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    const {hasColor, width} = props;
    if (hasColor) {
      this.state.colors = generateGradient(width*2);
    }
  }

  _gen2DColorArray = () => {
    const { boardData } = this.props;
    const { colors } = this.state;
    const rows = boardData.length;
    const columns = rows >= 1 ? boardData[0].length : 0;
    const colorBoard = generateEmptyBoard(rows, columns);
    for (let row=0; row<rows; row++) {
      for (let column=0; column<columns; column++) {
        const colorIndex = (column + row) % colors.length;
        colorBoard[row][column] = colors[colorIndex];
      }
    }
    return colorBoard;
  };

  render() {
    let colorBoard = this.props.hasColor ? this._gen2DColorArray() : undefined;
    return (
      <div className="board">
        {this.props.boardData.map((rowData, index) => (
          <Row
            key={index}
            rowId={index}
            rowData={rowData}
            rowColorData={colorBoard && colorBoard[index]}
            onCellClick={this.props.onCellClick}
          />
        ))}
      </div>
    );
  }
}

export default Board;
