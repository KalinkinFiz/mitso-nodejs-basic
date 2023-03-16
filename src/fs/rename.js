import * as fs from "fs";
import * as path from "path";
import * as process from "process";

const rename = async () => {
  let tempPath = path.join(process.cwd(), "src", "fs", "files");
  if (fs.existsSync(path.join(tempPath, "properFilename.md"))) {
    throw new Error("FS operation failed");
  }
  fs.rename(
    path.join(tempPath, "wrongFilename.txt"),
    path.join(tempPath, "properFilename.md"),
    (err) => {
      if (err) {
        throw new Error("Something is wrong");
      }
    }
  );
};

await rename();
