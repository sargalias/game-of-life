import React from 'react';
import Cell from './Cell';

const Row = (props) => (
  <div
    className="row"
  >
    {props.colData.map((cell, index) => (
      <Cell key={index} rowId={props.rowId} colId={index} value={cell} />
    ))}
  </div>
);

export default Row;
