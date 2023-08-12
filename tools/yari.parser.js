const fs = require("node:fs");
const { parseArgs } = require("node:util");
// https://pawelgrzybek.com/til-node-js-18-3-comes-with-command-line-arguments-parser/
const { warn, ok, info } = require("./utils");

/* 
  Description: this script parses MDN markdown files and replaces the following patterns:

  Search and remove:

  {{LearnSidebar}}

  {{PreviousMenuNext("Learn/Getting_started_with_the_web/HTML_basics", "Learn/Getting_started_with_the_web/JavaScript_basics", "Learn/Getting_started_with_the_web")}}

  Search and replace {{Glossary}} links:

  ...

  Search and replace links:

  ...

*/

/**
 * TODO: ADD TESTS
 * @param {string} textContent 
 * @returns string
 */
function removeTemplateContent( textContent ){

  // Thank you ChatGPT! 
  const templateRegex = /{{LearnSidebar}}|{{(?:LearnSidebar)?(?:PreviousMenuNext|NextMenuPrevious)\(["'][^"']*["'],\s*["'][^"']*["'],\s*["'][^"']*["']\)}}\s*\n/g;

  const templateMatches = textContent.match(templateRegex); 

  if ( templateMatches ){
    console.log( templateMatches )
    ok("Substituted {{Template}} matches successfully");
    return textContent.replace(templateRegex, "");
  }

  return textContent;

}

function replaceGlossaryLinks( textContent ){

    // Thank you ChatGPT! 
    const glossaryRegex = /\{\{[Gg]lossary\("([^"]+)"(?:, "([^"]+)")?\)\}\}/g;

    function replaceGlossary(match, p1, p2) {
      const baseLink = "https://developer.mozilla.org/en-US/docs/Glossary/";
      const link = `${baseLink}${p1[0].toUpperCase() + p1.slice(1).replace(/\s+/g, "_")}`;
      const output = p2 ? `[${p2}](${link})` : `[${p1}](${link})`;
      // console.log(match, p1, p2);
      console.log(output);
      return output;
    }

    if ( textContent.match(glossaryRegex) ){
      ok("Substituted {{Glossary}} matches successfully");
      return textContent.replace(glossaryRegex, replaceGlossary);
    } 

    info("\n No {{Glossary}} matches found on this file");
    return textContent;
  
}

function parseMDNLinks( textContent ){
  const domain = "https://developer.mozilla.org"
  const regex = /\[([^\]]+)\]\((\/en-US\/docs\/[^\)]+)\)/g;
  const matches = textContent.match(regex);
  if ( matches ){
    console.log( matches );
    // return textContent.replace( regex )
    return textContent.replace(regex, (match, linkText, url) => {
      // console.log( match ); // [...](...)
      // console.log( linkText); // Link label
      // console.log( url ); // Link URL: /en-us/docs/...
      const newUrl = domain + url;
      return `[${linkText}](${newUrl})`;
    });
  }

  return textContent;
}

function parseImages( textContent ){

  const regex = /!\[([^\]]*)]\(((?!https?:\/\/)[^\)]+)\)/g;
  
  const matches = textContent.match(regex);
  
  if (matches) {
    return textContent.replace( regex, (match, altText, imgSrc)=>{
      if ( imgSrc.startsWith("assets") ){
        return match;
      }
      return `![${altText}](assets/${imgSrc})`
    })
  }
  
  return textContent;
}

function parseElementTerm( textContent ){

  const URL = "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/";
  const pattern = /{{(htmlelement|HTMLElement)\("(.*?)"(?:, "(.*?)")?\)}}/g;
  return textContent.replace(pattern, ( match, _, termA, termB )=>{
    const link = `${URL}${termA}`;
    return `[\`<${termB ? termB : termA}>\`](${link})`;
  })
}

// Orchestrate Parsing & Modifications
function parseYariDynamicContent( textContent ){

  let updatedContents = textContent;
  
  updatedContents = replaceGlossaryLinks(updatedContents);
  updatedContents = removeTemplateContent(updatedContents);
  updatedContents = parseMDNLinks(updatedContents);
  updatedContents = parseImages(updatedContents);
  updatedContents = parseElementTerm(updatedContents);

  return updatedContents;

}

if (require.main === module) {
  // console.log("This script was executed directly.");
  init();
} else {
  // console.log("This script was imported as a module.");
}

function init(){

  const fileName = process.argv[2];

  if ( !fileName ){
    warn("No filename.")
    process.exit();
  }

  try {
  
    console.log(`Processing ${fileName}`);
    
    const file = fs.readFileSync(fileName, "utf-8");
    fs.writeFileSync( fileName, parseYariDynamicContent(file), "utf8" );
  
  } catch(e){
  
    warn(e.message);
  
  }

}


module.exports = {
  parseYariDynamicContent,
  parseMDNLinks,
  parseImages,
  parseElementTerm
};