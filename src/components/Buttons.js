import React from 'react'
import Button from './Button';

const Buttons = (props) => {
  let text;
  let onClick;
  if (props.isRunning) {
    text = 'Pause';
    onClick = props.onPauseClick;
  } else {
    text = 'Run';
    onClick = props.onRunClick;
  }
  return (
    <div className="button-container">
      <Button text={text} onClick={onClick} />
      <Button text="Clear" onClick={props.onClearClick}/>
      <Button text="Reset" onClick={props.onResetClick}/>
    </div>
  );
};

export default Buttons;
