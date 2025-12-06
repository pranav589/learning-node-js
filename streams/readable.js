import fs from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __fileName = fileURLToPath(import.meta.url);

const __dirname = dirname(__fileName);

const inputFilePath = path.join(__dirname, "input.txt");

const readStream = fs.createReadStream(inputFilePath);

readStream.on("data", (chunk) => {
  console.log(`Received a chunk- ${chunk}`);
});
 
readStream.on("end", () => {
  console.log("File finished");
});

readStream.on("error", (err) => {
  console.log("error", err);
});
