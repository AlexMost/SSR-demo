import { parentPort } from 'worker_threads';
import { v4 } from 'uuid';

export function handleThreadRender() {
    parentPort.on('message', ({ uuid, data }) => {
        parentPort.postMessage({ uuid, data });
    })
}

export function asyncRenderMiddleware(worker) {

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