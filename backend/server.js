import React from 'react';
import ReactDS from 'react-dom/server';
import App from '../frontend/App';
import express from 'express';
import { getPosts } from '../shared/api';
import { isMainThread, Worker, workerData, parentPort } from 'worker_threads';

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

if (isMainThread) {
  console.log(__filename);
  console.log(process.cwd());
  const worker = new Worker(__filename, {workerData: {num: 5}});
    worker.once('message', (result) => {console.log('square of 5 is :', result);
  })

  const app = express()

  app.use('/static', express.static('dist'));

  app.get('*', async (req, res) => {
    const posts = await getPosts();
    const HTML = ReactDS.renderToString(<App posts={posts} location={req.url} />);
    res.send(renderHTML(HTML, posts));
  });

  app.listen(3000, () => console.log('Example app listening on port 3000!'));
} else {
  parentPort.postMessage(workerData.num * workerData.num)
}
