import * as fs from "fs/promises";
import url from 'url'
import path from 'path'

const __dirname = url.fileURLToPath(new URL('.', import.meta.url))
const files = await fs.readdir(path.join(__dirname, "files"));

const rename = async (files) => {
    try {

        if (files.includes("wrongFilename.txt") || files.includes("properFilename.md")){
            await fs.rename("properFilename.md", "wrongFilename.txt", function (err) {
                if (err) throw err;
                console.log('File Renamed');
              });
            throw new Error("FS operation failed");
        } 

   } catch (err) {
        console.log(err.message);
   }
};

await rename();