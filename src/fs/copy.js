import fsPromise from "fs/promises";
import { join } from "path";
import { fileURLToPath, URL } from "url";

const __dirname = fileURLToPath(new URL('.', import.meta.url));

const copy = async () => {
  const dirContent = await fsPromise.readdir(__dirname);
  if (!dirContent.includes("files") || dirContent.includes("files_copy")){
    throw new Error("FS operation failed");
  }
  await fsPromise.mkdir(join(__dirname, "files_copy"));
  await fsPromise.cp(join(__dirname, "files"), join(__dirname, "files_copy"), { recursive: true });
};

await copy();
