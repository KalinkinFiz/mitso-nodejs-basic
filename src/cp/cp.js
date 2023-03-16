import { spawn } from "child_process";
import fs from "fs/promises";
import path from "path";
import url from "url";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const spawnChildProcess = async (args) => {
  const script = await fs.readFile(path.join(__dirname, "files", "script.js"));
  const child = spawn("node", [script, ...args]);

  process.stdin.pipe(child.stdin);
  child.stdout.pipe(process.stdout);

  child.on("exit", (code) => {
    console.log(`Child process exited with code ${code}`);
  });
};

spawnChildProcess(["arg1", "arg2"]);