// require("os");
const os = require("node:os");
// console.log("machine:", os.machine());
// console.log("version:",os.version());
// console.log("uptime:", os.uptime());
// console.log("userInfo:",os.userInfo());
// console.log("totalmem:", os.totalmem());
// console.log("type:", os.type());
// console.log("platform:", os.platform());
// console.log("cpus:", os.cpus());

// TODO: Improve the code below to show the memory in MBs or GBs
os.totalmem();
os.freemem(); 
console.log( `Total Memory: ${os.totalmem()}` );
// Google for how to convert bytes into MBs or GBs

// TODO: Explore and discover: process.argv;
console.log(process.argv);
// Accept input from the terminal, e.g. node otherapp.js 2 3