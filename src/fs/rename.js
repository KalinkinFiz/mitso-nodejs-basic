import * as fs from "fs/promises";
import url from 'url'
import path from 'path'

const __dirname = url.fileURLToPath(new URL('.', import.meta.url))
const files = await fs.readdir(path.join(__dirname, "files"));


const rename = async () => {
    try {
        if (files.includes("properFilename.md")) throw new Error("FS operation failed");

        await fs.rename("files/wrongFilename.txt", "files/properFilename.md", () => {
          console.log("Successfully renamed!");
        });

   } catch (err) {
        console.log(err.message);
   }
};

await rename();