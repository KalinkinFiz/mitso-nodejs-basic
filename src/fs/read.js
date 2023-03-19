import { readdir, readFile } from "fs/promises";
import { join } from "path";
import { fileURLToPath, URL } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

const read = async () => {
  const dirContent = await readdir(join(__dirname, "files"));
  if (!dirContent.includes("fileToRead.txt"))
    throw new Error("FS operation failed");
  const fileContent = await readFile(
    join(__dirname, "files", "fileToRead.txt"),
    "utf-8"
  );
  console.log(fileContent);
};

await read();
