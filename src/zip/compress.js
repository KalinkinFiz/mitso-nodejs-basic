import fs from 'fs';
import zlib from 'zlib';

const compress = async () => {
    const readStream = fs.createReadStream('files/fileToCompress.txt');
    const writeStream = fs.createWriteStream('files/archive.gz');
    const gzip = zlib.createGzip();

    await new Promise((resolve, reject) => {
        readStream
            .pipe(gzip)
            .pipe(writeStream)
            .on('finish', resolve)
            .on('error', reject);
    });
};

await compress();
