import { createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';

const write = async () => {
    const fileStream = createWriteStream('files/fileToWrite.txt');
    await pipeline(process.stdin, fileStream);
};

await write();
