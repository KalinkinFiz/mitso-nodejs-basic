import * as fs from "fs";
import * as path from "path";
import * as process from "process";

const copy = async () => {
  let tempPath = path.join(process.cwd(), "src", "fs");
  fs.stat(path.join(tempPath, "files_copy"), (err) => {
    if (!err) {
      throw new Error("FS operation failed");
    }
  });
  fs.stat(path.join(tempPath, "files"), (err) => {
    if (err) {
      throw new Error("FS operation failed");
    }
  });
  fs.mkdir(path.join(tempPath, "files_copy"), (err) => {
    if (err) {
      throw new Error("It already exists");
    }
  });
  fs.readdir(path.join(tempPath, "files"), (err, items) => {
    for (let i = 0; i < items.length; i++) {
      fs.stat(path.join(tempPath, "files", items[i]), (err, status) => {
        if (err) {
          throw new Error("Something is wrong");
        }
        if (status.isFile()) {
          fs.copyFile(
            path.join(tempPath, "files", items[i]),
            path.join(tempPath, "files_copy", items[i]),
            (err) => {
              if (err) {
                throw new Error("Something is wrong");
              }
            }
          );
        }
      });
    }
  });
};

await copy();
