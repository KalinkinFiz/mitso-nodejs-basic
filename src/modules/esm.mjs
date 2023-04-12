import sep from "path";
import { release, version } from 'os'
import { createServer as createServerHttp } from 'http'
import url from "url";
import './files/c.js'
import firstUnknownObject from "./files/a.json" assert { type: "json" };
import secondUnknownObject from "./files/b.json" assert { type: "json" };

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
const __filename = url.fileURLToPath(new URL(import.meta.url));

const random = Math.random();

let unknownObject;

if (random > 0.5) {
    unknownObject = firstUnknownObject;
} else {
    unknownObject = secondUnknownObject;
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const myServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});

export default {
    unknownObject,
    myServer,
};
