import { createHash } from "crypto";
import { createReadStream } from "fs";
import { join } from "path";
import { fileURLToPath, URL } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

const calculateHash = async () => {
  const hash = createHash("SHA256");
  const readable = createReadStream(
    join(__dirname, "files", "fileToCalculateHashFor.txt")
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
