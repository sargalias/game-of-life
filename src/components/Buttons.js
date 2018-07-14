import React from 'react'
import Button from './Button';

const Buttons = (props) => (
  <div className="button-container">
    <Button text="Run" onClick={props.onRunClick} />
    <Button text="Pause" onClick={props.onPauseClick} />
    <Button text="Clear" onClick={props.onClearClick} />
    <Button text="Reset" onClick={props.onResetClick} />
  </div>
);

export default Buttons;
