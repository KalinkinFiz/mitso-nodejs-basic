import * as child_process from "child_process";
import url from "url";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const spawnChildProcess = async (args) => {
    const child = child_process.fork(__dirname + '/files/script.js', args);
};

spawnChildProcess([1, 2]);
