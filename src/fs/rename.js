import fsPromise from "fs/promises";
import { join } from "path";
import { fileURLToPath, URL } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

const rename = async () => {
  const dirContent = await fsPromise.readdir(join(__dirname, "files"));
  if (dirContent.includes("properFilename.md"))
    throw new Error("FS operation failed");
  fsPromise.rename(
    join(__dirname, "files", "wrongFilename.txt"),
    join(__dirname, "files", "properFilename.md")
  );
};

await rename();
