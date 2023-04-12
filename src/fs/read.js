import * as fs from "fs/promises";
import url from 'url'
import path from 'path'

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const filePath = path.join(__dirname, "files", "fileToRead.txt");

const read = async () => {
    try {
        const files = await fs.readdir(path.join(__dirname, "files"));

        if (!files.includes("fileToRead.txt")) throw new Error("FS operation failed");

        const data = await fs.readFile(filePath)
        console.log('Content:', data.toString());
        console.log('Finished reading file');

    }
     catch (err) {
         console.error('Error reading file data', err);
   }
};

await read();