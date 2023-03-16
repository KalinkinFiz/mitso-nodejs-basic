import * as fs from "fs";
import * as path from "path";
import * as process from "process";

const remove = async () => {
  let tempPath = path.join(process.cwd(), "src", "fs", "files");
  if (!fs.existsSync(path.join(tempPath, "fileToRemove.txt"))) {
    throw new Error("FS operation failed");
  }
  fs.unlink(path.join(tempPath, "fileToRemove.txt"), (err) => {
    if (err) {
      throw new Error("Something is wrong");
    }
  });
};

await remove();
