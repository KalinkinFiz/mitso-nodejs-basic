import * as path from "path";
import { release, version } from "os";
import { createServer, createServerHttp } from "http";
import("./files/c");

const random = Math.random();

export let unknownObject;

if (random > 0.5) {
  unknownObject = import("./files/a.json");
} else {
  unknownObject = import("./files/b.json");
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${path.__filename}`);
console.log(`Path to current directory is ${path.__dirname}`);

export const myServer = createServerHttp((_, res) => {
  res.end("Request accepted");
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log("To terminate it, use Ctrl+C combination");
});
