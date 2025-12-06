import { Duplex } from "stream";

class CustomDuplex extends Duplex {
  constructor(options) {
    super(options);
  }

  _read() {}

  _write() {}

  _final() {}
}

const duplexStream = new CustomDuplex();
console.log(duplexStream);
