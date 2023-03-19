import { createReadStream, createWriteStream } from "fs";
import { join } from "path";
import { fileURLToPath, URL } from "url";
import { createGzip } from "zlib";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

const compress = async () => {
  const streamReadable = createReadStream(
    join(__dirname, "files", "fileToCompress.txt")
  );
  const streamWritable = createWriteStream(
    join(__dirname, "files", "archive.gz")
  );
  streamReadable.pipe(createGzip()).pipe(streamWritable);
};

await compress();
