import fs from 'fs';

const list = async () => {
    let dir = 'files';
    let exists = fs.existsSync(dir)
    if (!exists) {
        throw new Error('FS operation failed');
    }
    let files = fs.readdirSync(dir);
    console.log(files);
};

await list();