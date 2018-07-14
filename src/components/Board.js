import React from 'react';
import Row from './Row';

const Board = (props) => (
  <div className="board">
    {props.boardData.map((rowData, index) => (
      <Row
        key={index}
        rowId={index}
        rowData={rowData}
        onCellClick={props.onCellClick}
      />
    ))}
  </div>
);

export default Board;
