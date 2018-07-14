import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App chance={0.3} rows={40} cols={70} isRunning={true} interval={50} />, document.getElementById('root'));
registerServiceWorker();
