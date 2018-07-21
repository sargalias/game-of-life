import React from 'react';

const Slider = ({value, onChange}) => (
  <div className="slider" >
    <div>
      <label htmlFor="speed" className="slider__title">Speed</label>
    </div>
    <div>
      <span className="slider__text">
        Min
      </span>
      <input
        name="speed"
        type="range"
        min="2"
        max="50"
        value={value}
        onChange={onChange}
      />
      <span className="slider__text">
        Max
      </span>
    </div>
  </div>
);

export default Slider;
