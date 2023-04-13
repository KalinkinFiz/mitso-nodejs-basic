import process from "process";
import fs from "fs";
import url from "url";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const write = async () => {
    let inputString = '';

    process.stdin.resume();
    process.stdin.setEncoding('utf-8');
    process.stdin.on("data", data => {
        inputString = data.toString();
    })

    const myWriteStream = fs.createWriteStream(__dirname + "files" + "/fileToWrite.txt", "UTF8");
    myWriteStream.write(inputString, "UTF8");
};

await write();
