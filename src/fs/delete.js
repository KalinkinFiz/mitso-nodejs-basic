import { readdir, unlink } from "fs/promises";
import { join } from "path";
import { fileURLToPath, URL } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

const remove = async () => {
  const dirContent = await readdir(join(__dirname, "files"));
  if (!dirContent.includes("fileToRemove.txt"))
    throw new Error("FS operation failed");
  await unlink(join(__dirname, "files", "fileToRemove.txt"));
};

await remove();
