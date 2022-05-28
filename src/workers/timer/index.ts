import { Worker } from "worker_threads";

const createTimer = (milliseconds: any) => {
  return new Promise((resolve, reject) => {
    const worker = new Worker("./src/workers/timer/timer.js", {
      workerData: milliseconds,
    });
    worker.on("message", (message: any) => {
      console.log(message);
      resolve(message);
    });
    worker.on("error", reject);
    worker.on("exit", (code) => {
      if (code !== 0)
        reject(new Error(`Worker stopped with exit code ${code}`));
    });
  });
};

export const runTimer = async () => {
  console.log("\n runTimer");
  const result = await createTimer("world");
  console.log(result);
};
