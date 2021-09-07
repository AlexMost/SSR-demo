import React from 'react';
import ReactDS from 'react-dom/server';
import App from '../frontend/App';
import express from 'express';
import { getPosts } from '../shared/api';

const app = express()

const renderHTML = (compHTML, posts) => {
  return `
  <!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>SSR - demo</title>
    <link rel="stylesheet" type="text/css" href="/static/reset.css" />
    <link rel="stylesheet" type="text/css" href="/static/style.css" />
  </head>
  <body>
  <script type="application/json" id='posts'>${JSON.stringify(posts)}</script>
  <div id="container">${compHTML}</div>
  <script src="/static/main.js"></script>
  </body>
</html>
  `
}

app.use('/static', express.static('dist'));
app.use('/favicon.ico', express.static('dist'));

app.get('*', async (req, res) => {
  console.log('request ->>>', req.path);
  const posts = await getPosts();
  const HTML = ReactDS.renderToString(<App posts={posts} location={req.url} />);
  res.send(renderHTML(HTML, posts));
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));
