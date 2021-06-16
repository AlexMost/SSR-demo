import express from 'express';
import { getPosts } from '../shared/api';
import { isMainThread, Worker } from 'worker_threads';
import { asyncRenderMiddleware  } from './asyncRenderMiddleware';
import { handleThreadRender } from './asyncRenderMiddleware';

if (isMainThread) {
  const worker = new Worker(__filename, {workerData: {num: 5}});
  const app = express()

  app.use(asyncRenderMiddleware(worker));

  app.use('/static', express.static('dist'));

  app.get('*', async (req, res) => {
    console.log('>>> request', req.originalUrl);
    const posts = await getPosts();
    const HTML = await req.asyncRender({ posts, url: req.url });
    res.send(HTML);
  });

  app.listen(3000, () => console.log('Example app listening on port 3000!'));
} else {
  handleThreadRender();
}
