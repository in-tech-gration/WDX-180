/*
  Used to capture important sections of a markdown lesson or tutorial.

  Looks for ** strong text **. 

  These segments should be added to the Summary or Conclusion section of the document.

*/ 

const fs = require("node:fs");

const fileName = process.argv[2];

if ( !fileName ){
  process.exit();
}

const file = fs.readFileSync(fileName, "utf-8");
const regex = /\*\*(.*?)\*\*/g;
const matches = file.match( regex );

console.log( matches );