import * as fs from "fs";
import * as path from "path";
import * as process from "process";

const read = async () => {
  let tempPath = path.join(process.cwd(), "src", "fs", "files");
  if (!fs.existsSync(path.join(tempPath, "fileToRead.txt"))) {
    throw new Error("FS operation failed");
  }
  fs.readFile(path.join(tempPath, "fileToRead.txt"), "utf-8", (err, data) => {
    if (err) {
      throw new Error("Something is wrong");
    }
    console.log(data);
  });
};

await read();
