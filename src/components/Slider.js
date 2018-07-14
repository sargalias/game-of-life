import React from 'react';

const Slider = ({value, onChange}) => (
  <div className="slider" >
    <div>
      <label htmlFor="speed">Step speed</label>
    </div>
    <div>
      Min
      <input
        name="speed"
        type="range"
        min="2"
        max="50"
        value={value}
        onChange={onChange}
      />
      Max
    </div>
  </div>
);

export default Slider;
