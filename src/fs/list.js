import { readdir } from 'fs/promises';

const list = async () => {
    const dir = "files"
    try {
        const files = await readdir(dir);
        console.log(files);
    } catch (e) {
        console.error("FS operation failed");
    }
};

await list();
