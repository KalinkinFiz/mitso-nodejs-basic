import { join } from "path";
import { fileURLToPath, URL } from "url";
import { fork } from "child_process";
import { stdin } from "process";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

const spawnChildProcess = async (args) => {
  const forked = fork(join(__dirname, "files", "script.js"), args, {
    stdio: [0, 1, 2, "ipc"],
  });
  forked.on("message", (msg) => {
    console.log(msg.trim());
  });
  forked.on("disconnect", () => {
    process.exit(0);
  });
  stdin.on("data", (data) => {
    forked.send(data.toString());
  });
};
// Put your arguments in function call to test this functionality
spawnChildProcess(["Maksim", "Aleksandrovich", "Kalinin"]);
