const EventEmitter = require("events");

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on("customEvent", (val) => {
  console.log(val);
});

myEmitter.emit("customEvent", { name: "Pranav" });
