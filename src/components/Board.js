import React from 'react';
import Row from './Row';

class Board extends React.Component {
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
