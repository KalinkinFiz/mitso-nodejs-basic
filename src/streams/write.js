import * as process from "process";
import * as fs from "fs";
import * as path from "path";

const write = async () => {
  let tempPath = path.join(process.cwd(), "src", "streams", "files");
  const streamWritable = fs.createWriteStream(
    path.join(tempPath, "fileToWrite.txt"),
    "utf-8"
  );
  process.stdin.on("data", (data) => {
    streamWritable.write(data);
    process.exit();
  });
};

await write();
