import fs from "fs/promises";
import path from "path";
import * as url from "url";

const dirname = url.fileURLToPath(new URL(".", import.meta.url));
const filePath = path.resolve(dirname, "files", "fresh.txt");
const content = "I am fresh and young"
const create = async () => {
    try{
        const files = await fs.readdir(path.resolve(dirname, "files"));
        if(files.includes("fresh.txt")) throw new Error("FS operation failed");
        await fs.writeFile(filePath, content, {
            flag: "wx"
        });
        console.log("The file has been successfully created, the information has been entered");
    }
    catch(err){
        console.log(err.message);
    }
};

await create();