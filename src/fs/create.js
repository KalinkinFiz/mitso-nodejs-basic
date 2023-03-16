import * as fs from "fs";
import * as path from "path";
import * as process from "process";

const create = async () => {
    let str = "I am fresh and young";
    let tempPath = path.join(process.cwd(), "src", "fs", "files", "fresh.txt");
    fs.writeFile(tempPath, str, (err) => {
        if (err){
            throw new Error("FS operation failed");
        }
    })
};

await create();