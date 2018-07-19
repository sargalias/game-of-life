import React from 'react';

const Cell = (props) => (
  <div
    className={`cell ${props.value === 0 ? 'dead' : 'alive'}`}
    style={props.value !== 0 ? {backgroundColor: props.bgColor} : {}}
    onClick={() => props.onCellClick(props.rowId, props.colId)}
  ></div>
);

export default Cell;
