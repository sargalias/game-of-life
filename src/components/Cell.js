import React from 'react';

const Cell = (props) => (
  <div
    className={`cell ${props.value === 0 ? 'dead' : 'alive'}`}
  ></div>
);

export default Cell;
