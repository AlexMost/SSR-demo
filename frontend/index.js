import ReactDOM from 'react-dom';
import React from 'react';
import App from './App.js';
import { Store } from './Store';

function tryReadPosts() {
  const state = document.getElementById('state');
  if (!state) return;
  try {
    return JSON.parse(state.text).posts;
  } catch(err) {
    console.log(err);
    return;
  }
}

ReactDOM.render(
  <Store posts={tryReadPosts()}>
    <App/>
  </Store>,
  document.getElementById('container'));
