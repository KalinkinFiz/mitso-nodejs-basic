import fs from 'fs';

const read = async () => {
    let stream = fs.createReadStream('files/fileToRead.txt');
    stream.pipe(process.stdout);
};

await read();