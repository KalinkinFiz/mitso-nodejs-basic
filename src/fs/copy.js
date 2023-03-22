import * as fs from "fs/promises";
import url from 'url'
import path from 'path'

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const filesCopy = path.join(__dirname, "files_copy");

const copy = async () => {
    try {
        const files = await fs.readdir(path.join(__dirname));

        if (!files.includes("files") || files.includes("files_copy")) throw new Error("FS operation failed");

        await fs.cp(path.join(__dirname, "files"), filesCopy, {
            force: false,
            errorOnExist: true,
            recursive: true
        });

        console.log("Completed");
    } catch (err) {
        console.log(err.message);
    }
};

await copy();
