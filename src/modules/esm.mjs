import { sep } from "path";
import { release, version } from "os";
import { createServer } from "http";
import { URL, fileURLToPath } from "url";

import("./files/c.js");

const __filename = fileURLToPath(import.meta.url);
const __dirname = fileURLToPath(new URL(".", import.meta.url));

const random = Math.random();

export let unknownObject;

if (random > 0.5) {
  let a_json = import("./files/a.json", { assert: { type: "json" } });
  unknownObject = a_json;
} else {
  let b_json = import("./files/b.json", { assert: { type: "json" } });
  unknownObject = b_json;
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

export const myServer = createServer((_, res) => {
  res.end("Request accepted");
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log("To terminate it, use Ctrl+C combination");
});
