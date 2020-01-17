import path from 'path';
import React from 'react';
import ReactDS from 'react-dom/server';
import App from '../frontend/App';
import express from 'express';
import { getPosts } from '../shared/api';
import { ChunkExtractor } from '@loadable/server'
const statsFile = path.resolve('./dist/loadable-stats.json')

const app = express()

const renderHTML = (compHTML, posts, styles, links, scripts) => {
  return `
  <!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>SSR - demo</title>
    ${links}
    <link rel="stylesheet" type="text/css" href="/static/reset.css" />
    <link rel="stylesheet" type="text/css" href="/static/style.css" />
    ${styles}
  </head>
  <body>
  <script type="application/json" id='posts'>${JSON.stringify(posts)}</script>
  <div id="container">${compHTML}</div>
  ${scripts}
  <script src="/static/main.js"></script>
  </body>
</html>
  `
}

app.use('/static', express.static('dist'));

app.get('*', async (req, res) => {
  const extractor = new ChunkExtractor({ statsFile });
  const posts = await getPosts();
  const HTML = ReactDS.renderToString(
    extractor.collectChunks(<App posts={posts} location={req.url} />)
  );
  const scriptTags = extractor.getScriptTags() // or extractor.getScriptElements();
  // You can also collect your "preload/prefetch" links
  const linkTags = extractor.getLinkTags() // or extractor.getLinkElements();
  // And you can even collect your style tags (if you use "mini-css-extract-plugin")
  const styleTags = extractor.getStyleTags() // or extractor.getStyleElements();
  res.send(renderHTML(HTML, posts, styleTags, linkTags, scriptTags));
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));
