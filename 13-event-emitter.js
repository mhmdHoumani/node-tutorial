const { EventEmitter } = require("stream");

const customerEmitter = new EventEmitter();

customerEmitter.on("response", (name, id) => {
  console.log(`User: ${name} with id : ${id}`);
});

customerEmitter.on("response", () => {
  console.log(`Some other logic here`);
});

customerEmitter.emit("response", "John", 234);
