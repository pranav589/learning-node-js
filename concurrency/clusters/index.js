import cluster from "cluster";
import http from "http";
import os from "os";

const numCpus = os.cpus().length;
console.log(numCpus);

if (cluster.isPrimary) {
  console.log("isPrimary");
  for (let i = 0; i < numCpus.length; i++) {
    cluster.fork(); //spawns new worker processes
  }

  cluster.on("exit", (worker) => {
    cluster.fork(); //auto restart dead workers
  });
} else {
  //each worker runs this, same port , no conflict
  http.createServer((req, res) => console.log("hello")).listen(3000);
}
