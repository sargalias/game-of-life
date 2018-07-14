import React from 'react';

const Slider = () => (
  <div className="slider" >
    <div>
      <label htmlFor="speed">Step speed</label>
    </div>
    <div>
      Min <input name="speed" type="range" min="1" max="50" /> Max
    </div>
  </div>
);

export default Slider;
