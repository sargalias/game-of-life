import React from 'react';

const Attribution = (props) => (
  <div id="attribution">
    <p id="author">
      By <a href={props.authorUrl} target="_blank">{props.authorName}</a>
    </p>
    <p id="code-repository">
      View code on <a href={props.codeRepositoryUrl} target="_blank">GitHub</a>
    </p>
  </div>
);

export default Attribution;