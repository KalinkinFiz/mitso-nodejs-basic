import { createWriteStream } from "fs";
import { join } from "path";
import { fileURLToPath, URL } from "url";
import { stdin } from "process";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

const write = async () => {
  const streamWritable = createWriteStream(
    join(__dirname, "files", "fileToWrite.txt"),
    "utf-8"
  );
  stdin.on("data", (data) => {
    streamWritable.write(data);
    process.exit();
  });
};

await write();
