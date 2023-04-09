import {Worker} from "worker_threads"
import os from 'os'

const performCalculations = async () => {
    const numCores = os.cpus().length;
    const result = []
    for (let i = 10; i < 10 + numCores; i++) {
        const worker = new Worker("./worker.js", {
            workerData: i
        })
        worker.on('message', msg => {
            result[i - 10] = {status: 'resolved', data: msg}
        })
        worker.on('error', () => {
            result[i - 10] = {status: 'error', data: null}
        })
    }
    setTimeout(() => {
        console.log(result)
    }, 200)
};

await performCalculations();
