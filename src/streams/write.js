import fs from 'fs';
const write = async () => {
    const stream = fs.createWriteStream('files/fileToWrite.txt');
    process.stdin.pipe(stream);
    await new Promise((resolve) => process.stdin.on('end', resolve));
}
await write();