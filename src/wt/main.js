import { Worker } from 'worker_threads';
import os from 'os';

function sendDataToWorker(worker, data) {
    worker.postMessage(data);
}

function handleWorkerResult(worker) {
    return new Promise((resolve, reject) => {
        worker.on('message', (message) => resolve(message));
        worker.on('error', () => reject({ status: 'error', data: null }));
        worker.on('exit', (code) => {
            if (code !== 0) {
                reject({ status: 'error', data: null });
            }
        });
    });
}

const performCalculations = async () => {
    const numCores = os.cpus().length;
    const workerPromises = [];

    for (let i = 0; i < numCores; i++) {
        const worker = new Worker(new URL('./worker.js', import.meta.url));
        const n = 10 + i;
        sendDataToWorker(worker, n);
        workerPromises.push(handleWorkerResult(worker));
    }

    try {
        const results = await Promise.allSettled(workerPromises);
        const processedResults = results.map(result => result.status === 'fulfilled' ? result.value : { status: 'error', data: null });
        console.log(processedResults);
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

performCalculations().then(() => console.log('All calculations completed.'));
