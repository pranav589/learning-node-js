// Transform is a case of duplex

import fs from "fs";
import path from "path";
import { Transform } from "stream";
import { fileURLToPath } from "url";

const __fileName = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__fileName);

const inputFilePath = path.join(__dirname, "input.txt");

const transformOutputFilePath = path.join(__dirname, "transformOutput.txt");

const readStream = fs.createReadStream(inputFilePath, "utf-8");

const writeStream = fs.createWriteStream(transformOutputFilePath);

const upperCaseTransform = new Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
  },
});

readStream.pipe(upperCaseTransform).pipe(writeStream);
