import fs from "fs";

// Sync write
// fs.writeFileSync("./test.txt", "Hello world!!!");

// async write
// fs.writeFile("./test.text", "Hellooo", () => {});

// sync read
// fs.readFileSync("./test.txt", "utf-8");

//async read
// fs.readFile("./test.txt", "utf-8", (err, data) => {
//   console.log(data);
// });

// Sync folder creation
// fs.mkdirSync("my-docs1/a", { recursive: true });

// Sync statistics of the file
// console.log(fs.statSync("./test.txt"));

// Sync Delete file
// fs.unlinkSync("./test.text");

setTimeout(() => console.log("Timer"), 0);
setImmediate(() => console.log("Immediate"));
