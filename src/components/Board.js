import React from 'react';
import Row from './Row';
import generateGradient from "../logic/color";

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    if (props.color)
      this.state.colors  = generateGradient();
  }

  render() {
    return (
      <div className="board">
        {this.props.boardData.map((rowData, index) => (
          <Row
            key={index}
            rowId={index}
            rowData={rowData}
            onCellClick={this.props.onCellClick}
          />
        ))}
      </div>
    );
  }
}

export default Board;
