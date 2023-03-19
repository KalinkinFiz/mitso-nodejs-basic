import { access, writeFile } from "fs";
import { join } from "path";
import { fileURLToPath, URL } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

const str = "I am fresh and young";

const writeFilePromise = function () {
  return new Promise((_resolve, reject) => {
    access(join(__dirname, "files", "fresh.txt"), (err) => {
      if (!err) reject();
    });
    writeFile(join(__dirname, "files", "fresh.txt"), str, (err) => {
      if (err) reject("Something wrong with writing a file");
    });
  });
};

const create = async () => {
  await writeFilePromise().catch((err) => {
    throw new Error("FS operation failed");
  });
};

await create();
