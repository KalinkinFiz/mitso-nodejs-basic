import * as fs from "fs/promises";
import url from 'url'
import path from 'path'

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const filePath = path.join(__dirname, "files", "fileToRemove.txt");


const remove = async () => {
    try {
        const files = await fs.readdir(path.join(__dirname, "files"));

        if (!files.includes("fileToRemove.txt")) throw new Error("FS operation failed");

        await fs.unlink(filePath, (err) => {
            if (err) {
                throw err;
            }
        
            console.log("Delete File successfully.");
        });

   } catch (err) {
        console.log(err.message);
   }
};

await remove();