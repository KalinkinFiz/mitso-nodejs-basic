import process from 'process';
import * as url from "url";
import fs from "fs";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const read = async () => {
    const myReadStream = fs.createReadStream(__dirname + "files" + "/fileToRead.txt", "UTF8");
    myReadStream.on("data", function (text) {
        process.stdout.write(text);
    });
};

await read();
