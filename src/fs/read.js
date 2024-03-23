import fs from 'fs';

const read = async () => {
    let file = 'files/fileToRead.txt';
    let exists = fs.existsSync(file);
    if (!exists) {
        throw new Error('FS operation failed');
    }
    let data = fs.readFileSync(file, 'utf8');
    console.log(data);
};

await read();