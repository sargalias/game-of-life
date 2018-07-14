import React from 'react';
import Cell from './Cell';

const Row = (props) => (
  <div
    className="row"
  >
    {props.rowData.map((cell, index) => (
      <Cell
        key={index}
        rowId={props.rowId}
        colId={index}
        value={cell}
        onCellClick={props.onCellClick}
      />
    ))}
  </div>
);

export default Row;