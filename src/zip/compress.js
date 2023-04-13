import * as zlib from "zlib";
import fs from "fs";
import url from "url";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const compress = async () => {
    const gzip = zlib.createGzip();
    const r = fs.createReadStream(__dirname + "files" + '/fileToCompress.txt');
    const w = fs.createWriteStream(__dirname + "files" + '/archive.gz');
    r.pipe(gzip).pipe(w);
    // Write your code here 
};

await compress();
