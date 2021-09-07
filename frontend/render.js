import React from 'react';
import ReactDS from 'react-dom/server';
import App from './App';
import posts from '../shared/posts';

const HTML = ReactDS.renderToString(<App posts={posts} location="/speaker/2d049e10-0fb4-11ec-8f1a-6b159bd815ca" />);
console.log(HTML);