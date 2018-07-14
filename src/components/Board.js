import React from 'react';
import Row from './Row';

const Board = (props) => (
  <div className="board">
    {props.boardData.map((row, index) => (
      <Row key={index} rowId={index} colData={row} />
    ))}
  </div>
);

export default Board;
