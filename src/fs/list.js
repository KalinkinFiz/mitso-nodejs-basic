import * as fs from "fs";
import * as path from "path";

const list = async () => {
  let tempPath = path.join(process.cwd(), "src", "fs", "files");
  if (!fs.existsSync(tempPath)) {
    throw new Error("FS operation failed");
  }
  fs.readdir(tempPath, (err, items) => {
    if (err) {
      throw new Error("Something is wrong");
    }
    items.map((val) => {
      console.log(val);
    });
  });
};

await list();
