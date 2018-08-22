import ReactDOM from 'react-dom';
import React from 'react';
import App from './App.js';
import { Store } from './Store';

ReactDOM.render(
  <Store>
    <App/>
  </Store>,
  document.getElementById('container'));
