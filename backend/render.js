import React from 'react';
import ReactDS from 'react-dom/server';
import App from '../frontend/App';

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
  
export function renderAppHTML({ posts, url }) {
    const HTML = ReactDS.renderToString(<App posts={posts} location={url} />);
    return renderHTML(HTML, posts);
}
