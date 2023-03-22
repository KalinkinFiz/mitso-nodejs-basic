import * as fs from "fs/promises";
import url from 'url'
import path from 'path'

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const filePath = path.join(__dirname, "files", "fresh.txt");

const CONTENT = "I am"

const create = async () => {
     try {
          const files = await fs.readdir(path.join(__dirname, "files"));

          if (files.includes("fresh.txt")) throw new Error("FS operation failed");

          await fs.writeFile(filePath, CONTENT, {
               flag: "wx",
          });

          console.log("Completed");
     } catch (err) {
          console.log(err.message);
     }
};

await create();
