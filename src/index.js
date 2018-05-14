import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import RootContainer from './rootContainer.js';

ReactDOM.render(<RootContainer />, document.getElementById('root'));
registerServiceWorker();
