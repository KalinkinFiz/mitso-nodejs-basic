import * as crypto from "crypto";
import * as path from "path";
import * as process from "process";
import * as fs from "fs";

const calculateHash = async () => {
  let tempPath = path.join(process.cwd(), "src", "hash", "files");
  const hash = crypto.createHash("SHA256");
  const readable = fs.createReadStream(
    path.join(tempPath, "fileToCalculateHashFor.txt")
  );
  readable.on("readable", () => {
    const data = readable.read();
    if (data) hash.update(data);
    else {
      console.log(`${hash.digest("hex")}`);
    }
  });
};

await calculateHash();
