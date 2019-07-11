import ReactDOM from 'react-dom';
import React from 'react';
import App from './App.js';
import { loadableReady } from '@loadable/component'

const posts = JSON.parse(document.getElementById('posts').text);

loadableReady(() => {
  ReactDOM.hydrate(<App posts={posts} />, document.getElementById('container'));
});
