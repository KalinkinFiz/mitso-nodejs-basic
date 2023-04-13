import url from "url";
import zlib from "zlib";
import fs from "fs";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const decompress = async () => {
    const unzip = zlib.createUnzip();
    const r = fs.createReadStream(__dirname + "files" + '/archive.gz');
    const w = fs.createWriteStream(__dirname + "files" + '/fileFromDecompress.txt');
    r.pipe(unzip).pipe(w);
};

await decompress();
