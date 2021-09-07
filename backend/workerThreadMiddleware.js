import { parentPort } from 'worker_threads';
import { renderAppHTML } from './render';
import { v4 } from 'uuid';

export function handleThreadRender() {
    parentPort.on('message', ({ uuid, data: { posts, url} }) => {
        const HTML = renderAppHTML({ posts, url });
        parentPort.postMessage({ uuid, data: HTML });
    })
}

export function workerThreadMiddleware(worker) {

    async function asyncRender(reqId, data) {
        return new Promise((res, rej) => {
            worker.on('message', ({ uuid, data }) => {
                if (uuid === reqId) {
                    res(data);
                }
            });
            worker.postMessage({ uuid: reqId, data});
        });
    };

    return (req, res, next) => {
        const reqId = v4();
        req.asyncRender = (data) => asyncRender(reqId, data);
        next();
    };
}