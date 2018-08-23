import React from 'react';
import ReactDS from 'react-dom/server';
import App from './App';
import posts from '../shared/posts';

const HTML = ReactDS.renderToString(<App posts={posts} location="/speaker/9a1a7e40-a642-11e8-9704-d5f1cbfc11d3" />);
console.log(HTML);