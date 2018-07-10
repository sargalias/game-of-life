import React from 'react';

const PlainComponent = () => (
  <div>Plain Component</div>
);

const TextComponent = (props) => (
  <div>{props.text}</div>
);

const ClassnameComponent = (props) => (
  <div className={props.className}>{props.text}</div>
);

export { PlainComponent, TextComponent, ClassnameComponent }
