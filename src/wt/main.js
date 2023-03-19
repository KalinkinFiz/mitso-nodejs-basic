import { cpus } from "os";
import { Worker } from "worker_threads";
import { fileURLToPath, URL } from "url";
import { join } from "path";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

const workers = [];
let cores = 0;

const performCalculations = async () => {
  workers.push(
    new Promise((resolve, reject) => {
      const worker = new Worker(join(__dirname, "worker.js"), {
        workerData: 10 + cores,
      });
      worker.on("error", () => {
        reject({ status: "error", data: null });
      });
      worker.on("message", (msg) => {
        resolve({ status: "resolved", data: msg });
      });
    })
  );
  if (cores < cpus().length) {
    cores++;
    await performCalculations();
  } else {
    Promise.allSettled(workers).then((promises) => {
      promises.forEach((promise) => console.log(promise.value));
    });
  }
};

await performCalculations();
