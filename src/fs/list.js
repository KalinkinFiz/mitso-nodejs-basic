import * as fs from "fs/promises";
import url from 'url'
import path from 'path'

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const filePath = path.join(__dirname);
const list = async () => {
    try {

        if (filePath.includes("files")) throw new Error("FS operation failed");

        let filenames = await fs.readdir(filePath);
        console.log(filenames);
        console.log("Completed");
   } catch (err) {
        console.log(err.message);
   }
};

await list();