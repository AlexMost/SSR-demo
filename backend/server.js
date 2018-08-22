import path from 'path';
import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../frontend/App';
import { Store } from '../frontend/Store';
import { getPosts } from '../shared/api';

const app = express()

const renderHTML = (componentHTML, store) => (
  `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8">
      <title>SSR - demo</title>
      <link rel="stylesheet" type="text/css" href="/static/reset.css" />
      <link rel="stylesheet" type="text/css" href="/static/style.css" />
    </head>
    <body>
    <script id='state' type="text/json">
      ${JSON.stringify(store)}
    </script>
    <div id="container">${componentHTML}</div>
    <script src="/static/main.js"></script>
    </body>
  </html>
  `
);

app.use('/static', express.static('dist'));

app.get('*', async (req, res) => {

  const posts = await getPosts();

  const compHTML = ReactDOMServer.renderToString(
    <Store posts={posts}>
      <App location={req.url}/>
    </Store>
  );

  res.send(renderHTML(compHTML, { posts }));
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));
