import { createReadStream, createWriteStream } from 'fs';
import { createGunzip } from 'zlib';

const decompress = async () => {
    const archivePath = 'files/archive.gz';
    const filePath = 'files/fileToCompress.txt';

    const readStream = createReadStream(archivePath);
    const writeStream = createWriteStream(filePath);

    const unzipStream = createGunzip();

    readStream.pipe(unzipStream).pipe(writeStream);

    readStream.on('error', (err) => console.error('Read error:', err));
    writeStream.on('error', (err) => console.error('Write error:', err));
    unzipStream.on('error', (err) => console.error('Unzip error:', err));

    await new Promise((resolve, reject) => {
        writeStream.on('finish', resolve);
        writeStream.on('error', reject);
    });
};

await decompress();
