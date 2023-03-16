import { Worker } from 'worker_threads';
import os from 'os'
import path from 'path';
import url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const performCalculations = async () => {

    const numWorkers = os.cpus().length;
    const results = [];


    for(let i = 0; i <numWorkers; i++){
        const worker = new Worker(path.join(__dirname, 'worker.js'));
        const data = 10 + i;
   
    
        worker.postMessage(data);

        worker.on('message', (result) => {
            if (result !== null) {
              results.push({ status: 'resolved', data: result });
            } else {
              results.push({ status: 'error', data: null });
            }
      
            if (results.length === numWorkers) {
              console.log(results);
            }
          });
    }
};

await performCalculations();