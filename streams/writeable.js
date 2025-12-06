import fs from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __fileName = fileURLToPath(import.meta.url);

const __dirname = dirname(__fileName);

const inputFilePath = path.join(__dirname, "input.txt");

const outputFilePath = path.join(__dirname, "output.txt");

const readStream = fs.createReadStream(inputFilePath, "utf-8");

const writeStream = fs.createWriteStream(outputFilePath);

readStream.pipe(writeStream);

writeStream.on("finish", () => {
  console.log("File finished");
});
