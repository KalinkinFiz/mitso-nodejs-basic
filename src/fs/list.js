import { readdir } from "fs/promises";
import { join } from "path";
import { fileURLToPath, URL } from "url";

const __dirname = fileURLToPath(new URL('.', import.meta.url));

const list = async () => {
  let dirContent = await readdir(__dirname);
  if (!dirContent.includes("files")) throw new Error("FS operation failed");
  dirContent = await readdir(join(__dirname, "files"));
  dirContent.map((val) => console.log(val));
};

await list();
