import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App chance={0.3} rows={30} cols={50} running={true} interval={200} />, document.getElementById('root'));
registerServiceWorker();
