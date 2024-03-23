import fs from 'fs';

const write = async () => {
    let stream = fs.createWriteStream('files/fileToWrite.txt');
    process.stdin.on('data', (chunk) => {
        if (chunk.toString().trim() === 'exit') {
            stream.end();
            process.stdin.pause();
            return;
        }
        stream.write(chunk);
    });
};

await write();