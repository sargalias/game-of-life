import React from 'react';

const PatternPicker = ({patterns=[], onChange}) => (
  <div className="pattern-picker-container">
    <select name="" id="" onChange={onChange}>
      {patterns.map((pattern) => <option value={pattern} key={pattern}>{pattern}</option>)}
    </select>
  </div>
);

export default PatternPicker;
