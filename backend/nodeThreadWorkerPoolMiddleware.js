const { StaticPool } = require('node-worker-threads-pool');
import { parentPort } from 'worker_threads';
import { renderAppHTML } from './render';

export function createPool() {
    return new StaticPool({
        size: 4,
        task: __filename,
    })
}

export function handleWorkerPoolRenderer() {
    parentPort.on('message', ({ data: { posts, url} }) => {
        const HTML = renderAppHTML({ posts, url });
        // TODO: handle errors
        parentPort.postMessage(HTML);
    })
}

export function workerPoolThreadMiddleware(pool) {

    async function asyncRender(data) {
        const HTML = await pool.exec({ data });
        return HTML;
    };

    return (req, res, next) => {
        req.asyncRender = asyncRender;
        next();
    };
}
