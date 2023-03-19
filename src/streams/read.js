import { createReadStream } from "fs";
import { join } from "path";
import { fileURLToPath, URL } from "url";
import { stdout } from "process";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

const read = async () => {
  const streamReadable = createReadStream(
    join(__dirname, "files", "fileToRead.txt"),
    "utf-8"
  );
  streamReadable.pipe(stdout);
};

await read();
