import { cp, mkdir, readdir } from "fs/promises";
import { join } from "path";
import { fileURLToPath, URL } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

const copy = async () => {
  const dirContent = await readdir(__dirname);
  if (!dirContent.includes("files") || dirContent.includes("files_copy")) {
    throw new Error("FS operation failed");
  }
  await mkdir(join(__dirname, "files_copy"));
  await cp(join(__dirname, "files"), join(__dirname, "files_copy"), {
    recursive: true,
  });
};

await copy();
