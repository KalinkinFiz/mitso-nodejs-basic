import { createReadStream, createWriteStream } from "fs";
import { join } from "path";
import { fileURLToPath, URL } from "url";
import { createUnzip } from "zlib";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

const decompress = async () => {
  const streamReadable = createReadStream(
    join(__dirname, "files", "archive.gz")
  );
  const streamWritable = createWriteStream(
    join(__dirname, "files", "fileToCompress.txt")
  );
  streamReadable.pipe(createUnzip()).pipe(streamWritable);
};

await decompress();
