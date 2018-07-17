import React from 'react';

const PatternPicker = ({patterns=[], onChange, value}) => (
  <div className="pattern-picker-container">
    <select name="" id="" onChange={onChange} value={value}>
      {patterns.map((pattern) => (
        <option value={pattern} key={pattern}>{pattern}</option>))
      }
    </select>
  </div>
);

export default PatternPicker;
