import React from 'react';

const PatternPicker = ({patterns=[], onChange, value}) => (
  <div className="pattern-picker-container">
    <div>
      <label htmlFor="pattern" className="pattern-picker-text">Pattern:</label>
      <p>(Click a cell on the board to add / remove pattern.)</p>
    </div>
    <select name="pattern" id="pattern" onChange={onChange} value={value}>
      {patterns.map((pattern) => (
        <option value={pattern} key={pattern}>{pattern}</option>))
      }
    </select>
  </div>
);

export default PatternPicker;
