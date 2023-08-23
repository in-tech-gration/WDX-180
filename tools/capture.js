/*
  Used to capture important sections of a markdown lesson or tutorial.

  Looks for ** strong text **. 

  These segments should be added to the Summary or Conclusion section of the document.

*/ 

const fs = require("node:fs");
const { findBoldTextMatches, findYouTubeMarkdownLinks } = require("./utils");

const fileName = process.argv[2];

if ( !fileName ){
  process.exit();
}

const file = fs.readFileSync(fileName, "utf-8");

const boldTextMatches = findBoldTextMatches(file);
const ytLinks = findYouTubeMarkdownLinks(file);

console.log(
  { ytLinks },
  `${boldTextMatches.length} sections in bold found:`,
  // { boldTextMatches }
);