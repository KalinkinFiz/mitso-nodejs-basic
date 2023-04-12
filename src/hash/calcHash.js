import { createHash } from 'crypto'
import fs from "fs";
import url from "url";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const calculateHash = async () => {
    const text = fs.readFileSync(__dirname + "files" + '/fileToCalculateHashFor.txt');
    const hash = createHash("sha256").update(text).digest("hex")

    console.log(hash);
};

await calculateHash();
