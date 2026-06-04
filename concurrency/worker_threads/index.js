import { Worker } from "worker_threads";

const worker = new Worker("./heavy.js", { workerData: { input: 42 } });

worker.on("message", (result) => console.log({ result }));
