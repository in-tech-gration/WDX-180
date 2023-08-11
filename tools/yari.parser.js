const fs = require("node:fs");
const { parseArgs } = require("node:util");
// https://pawelgrzybek.com/til-node-js-18-3-comes-with-command-line-arguments-parser/
const { warn, ok } = require("./utils");


const fileName = process.argv[2];

if ( !fileName ){
  warn("No filename.")
  process.exit();
}

function parseYariDynamicContent( textContent ){

  function replaceGlossary(match, p1, p2) {
    const baseLink = "https://developer.mozilla.org/en-US/docs/Glossary/";
    const link = `${baseLink}${p1[0].toUpperCase() + p1.slice(1).replace(/\s+/g, "_")}`;
    const output = p2 ? `[${p2}](${link})` : `[${p1}](${link})`;
    // console.log(match, p1, p2);
    console.log(output);
    return output;
  }
  
  const regex = /\{\{[Gg]lossary\("([^"]+)"(?:, "([^"]+)")?\)\}\}/g;
  const updatedContents = file.replace(regex, replaceGlossary);
  return updatedContents;

}

try {

  console.log(`Processing ${fileName}`);
  
  const file = fs.readFileSync(fileName, "utf-8");
  fs.writeFileSync( fileName, parseYariDynamicContent(file), "utf8" );

} catch(e){

  warn(e.message);

}

module.exports = parseYariDynamicContent;