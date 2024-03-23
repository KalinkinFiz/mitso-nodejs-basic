import { createReadStream, createWriteStream } from 'fs';
import { createGunzip } from 'zlib';

const decompress = async () => {
    let input = 'files/archive.gz';
    let output = 'files/fileToCompress.txt';
    let gunzip = createGunzip();
    let source = createReadStream(input);
    let destination = createWriteStream(output);
    source.pipe(gunzip).pipe(destination);
};

await decompress();