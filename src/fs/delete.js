import fs from 'fs/promises';

const remove = async () => {
    let file = 'files/fileToRemove.txt';
    let exists = await fs.access(file).then(() => true).catch(() => false);
    if (!exists) {
        throw new Error('FS operation failed');
    }
    await fs.unlink(file);
    console.log('File removed');
};

await remove();