import fs from "fs/promises";
import path from "path";
import url from "url";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const copy = async () => {
  const files = await fs.readdir(path.join(__dirname));
  const files_copy = await fs.readdir(path.join(__dirname));

  try {
    if (files.includes("files")) {
      if (files_copy.includes("files_copy"))
        throw new Error("Такая папка уже существует");

      fs.mkdir(path.join(__dirname, "files_copy"), {});

      await fs.cp(
        path.join(__dirname, "files"),
        path.join(__dirname, "files_copy"),
        {
          errorOnExist: true,
          force: true,
          recursive: true,
        }
      );

      console.log("Файлы скопированы");
    } else throw new Error("Такой папки не существует");
  } catch (err) {
    console.log(err.message);
  }
};

await copy();
