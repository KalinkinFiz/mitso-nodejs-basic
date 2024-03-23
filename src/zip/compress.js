import { createGzip } from 'zlib';
import { createWriteStream, createReadStream } from 'fs';
const compress = async () => {
    let input = 'files/fileToCompress.txt';
    let output = 'files/archive.gz';
    let gzip = createGzip();
    let source = createReadStream(input);
    let destination = createWriteStream(output);
    source.pipe(gzip).pipe(destination);
};

await compress();