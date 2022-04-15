const os = require("os");

// info about current user
const user = os.userInfo();
console.log(user);

// method returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`);

const currOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem() / 1073741824,
  freeMem: os.freemem() / 1073741824,
};

console.log(currOS);
