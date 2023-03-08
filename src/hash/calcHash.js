import {createHash} from "crypto";
import fs from "fs/promises";
import path from "path";
import * as url from "url";

const dirname = url.fileURLToPath(new URL(".", import.meta.url));

const calculateHash = async () => {
    const data = await fs.readFile(path.resolve(dirname, "files","fileToCalculateHashFor.txt"));
    console.log(createHash('sha256').update(data).digest('hex'));
};

await calculateHash(); 