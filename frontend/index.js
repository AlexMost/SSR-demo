import ReactDOM from 'react-dom';
import React from 'react';
import App from './App.js';

const posts = JSON.parse(document.getElementById('posts').text);

ReactDOM.hydrate(<App posts={posts} />, document.getElementById('container'));
