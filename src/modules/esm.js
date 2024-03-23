import path from 'path';
import os from 'os';
import http from 'http';
import { promises as fs } from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

import './files/c.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const random = Math.random();

async function loadUnknownObject() {
    const filePath = path.join(__dirname, 'files', random > 0.5 ? 'a.json' : 'b.json');
    const fileContents = await fs.readFile(filePath, 'utf8');
    return JSON.parse(fileContents);
}

console.log(`Release ${os.release()}`);
console.log(`Version ${os.version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const myServer = http.createServer((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;

loadUnknownObject().then(unknownObject => {
    console.log(unknownObject);

    myServer.listen(PORT, () => {
        console.log(`Server is listening on port ${PORT}`);
        console.log('To terminate it, use Ctrl+C combination');
    });
});
