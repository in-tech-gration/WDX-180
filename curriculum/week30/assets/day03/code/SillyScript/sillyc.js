const fs = require("node:fs"); // Import the Node FileSystem (native)
// Usage: npm install sillyc
// node sillyc app.silly => app.js

// Read the input:
const input = process.argv[2]; // input === app.silly, or whatever the 3rd argument is
if (!input){
  console.log("Not valid file path");
  process.exit();
}

// Read the file:
const textContent = fs.readFileSync(input,"utf8");
// console.log(textContent);

// Transpile to .js
const jsContent = textContent
.replaceAll("def","function")
.replaceAll("print","console.log");
// console.log(jsContent);

// Write to a file:
// TODO: get rid of the .silly suffix, and have app.js NOT app.silly.js
fs.writeFileSync(input + ".js", jsContent, "utf8");