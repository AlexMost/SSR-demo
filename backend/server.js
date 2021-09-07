import express from 'express';
import { getPosts } from '../shared/api';
import { isMainThread, Worker } from 'worker_threads';
import { workerThreadMiddleware, handleThreadRender  } from './workerThreadMiddleware';
// import { createPool, workerPoolThreadMiddleware, handleWorkerPoolRenderer } from './nodeThreadWorkerPoolMiddleware';

if (isMainThread) {
  const worker = new Worker(__filename, {workerData: {num: 5}});
  // const pool = createPool();
  const app = express()

  app.use(workerThreadMiddleware(worker));
  // app.use(workerPoolThreadMiddleware(pool));

  app.use('/static', express.static('dist'));

  app.get('*', async (req, res) => {
    console.log('>>> request', req.originalUrl);
    const posts = await getPosts();
    const HTML = await req.asyncRender({ posts, url: req.url });
    res.send(HTML);
  });

  app.listen(3000, () => console.log('Example app listening on port 3000!'));
} else {
  require('unix-dgram');
  // handleWorkerPoolRenderer();
  handleThreadRender();
}
