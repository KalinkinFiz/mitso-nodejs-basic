import fs from "fs/promises";
import path from "path";
import * as url from "url";

const dirname = url.fileURLToPath(new URL(".", import.meta.url));

const list = async () => {
    try{
        const files = await fs.readdir(path.resolve(dirname, "files"));
        console.log(files);
    }
    catch(err){
        console.log("FS operation failed");
    }
};

await list();