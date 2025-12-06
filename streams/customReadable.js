import { Readable } from "stream";

class CustomReadableStream extends Readable {
  constructor(options) {
    super(options);
    this.maxNumbers = 10;
    this.generatedNumbers = 0;
  }

  _read() {
    if (this.generatedNumbers >= this.maxNumbers) {
      this.push(null);
    } else {
      const randomNumber = Math.floor(Math.random() * 10);
      const buffer = Buffer.from(randomNumber.toString(), "utf-8");
      this.push(buffer);
      this.generatedNumbers++;
    }
  }
}

const randomNumberStream = new CustomReadableStream();

randomNumberStream.on("data", (chunk) => {
  console.log(chunk.toString());
});

randomNumberStream.on("end", () => {
  console.log("Stream finished");
});
