import React from 'react';

const Cell = (props) => (
  <div
    className={`cell ${props.value === 0 ? 'dead' : 'alive'}`}
    onClick={() => props.onCellClick(props.rowId, props.colId)}
  ></div>
);

export default Cell;
