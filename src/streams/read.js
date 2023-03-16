import * as process from "process";
import * as fs from "fs";
import * as path from "path";

const read = async () => {
  let tempPath = path.join(process.cwd(), "src", "streams", "files");
  const streamReadable = fs.createReadStream(
    path.join(tempPath, "fileToRead.txt"),
    "utf-8"
  );
  streamReadable.on("data", (data) => {
    process.stdout.write(data);
  });
};

await read();
