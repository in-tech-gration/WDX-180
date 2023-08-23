// Script to validate Markdown structure for educational material
const fs = require("node:fs");
const path = require("node:path");

const chalk      = require('chalk'); 
const MarkdownIt = require('markdown-it');
const yaml       = require('yaml');

const { warn, ok, findYouTubeMarkdownLinks, getYouTubeListIdParts } = require("./utils");

// UNICODE CHARACTERS:
const checkmark = "\u2713";
const xmark = "\u274C";

// Parsing input
const markdownFilePath = process.argv[2];

if ( !markdownFilePath || !markdownFilePath.endsWith(".md") ){
  warn("No markdown file passed as argument.")
  process.exit();
}

/**
 * Description: checks whether a file is inside the curriculum/week* folder
 * @returns {boolean} 
 */
function isCurriculumFolder( filePath ){

  const fullPath = path.resolve(filePath);
  const parentFolder = path.dirname(fullPath);
  const grandParentFolder = path.dirname(parentFolder);
  const grandParentAndParentFolder = path.join(
    path.basename(grandParentFolder),
    path.basename(parentFolder)
  );
  const isCurriculumFolderBool = grandParentAndParentFolder.indexOf("curriculum/week") === 0;
  return isCurriculumFolderBool;

}

const isInCurriculumFolder = isCurriculumFolder( markdownFilePath );
// console.log({ isInCurriculumFolder });


const markdownContent = fs.readFileSync(markdownFilePath, 'utf8');

// Initialize markdown-it parser
const md = new MarkdownIt();

const headingTokens = [];

md.use(require('markdown-it-anchor'), {
  level: 1, // Extract headings starting from level 1
  callback: (token, anchor) => {
    headingTokens.push({
      level: token.tag.slice(1), 
      title: anchor.title 
    });
  }
});

function splitMarkdownIntoFrontmatterAndContent( markdown ){

    // Find the index of the second "---" to detect the end of frontmatter
    const frontmatterEndIndex = markdownContent.indexOf('---', 3); // Start searching from index 3
    let frontmatter = null;
    let markdownBody = markdownContent;
    
    if (frontmatterEndIndex !== -1) {
        frontmatter = markdownContent.substring(0, frontmatterEndIndex).trim();
        markdownBody = markdownContent.substring(frontmatterEndIndex + 3).trim();
    }
  
    return {
      frontmatter, markdownBody
    };
  
}

function getFrontmatterFromMarkdown( markdown ){

  const { frontmatter } = splitMarkdownIntoFrontmatterAndContent( markdown );
  if ( !frontmatter ){
    return null;
  }
  const parsedFrontmatter = yaml.parse(frontmatter)
  return parsedFrontmatter;

}

function getMarkdownBody( markdown ){

  const { markdownBody } = splitMarkdownIntoFrontmatterAndContent( markdown );
  return markdownBody;

}

function hasUpdatedTokenInList( tokens ){

  const hasUpdated = inlineTokens.some( token =>{
    const tokenHasLevel1 = token.level === 1;
    const tokenPassesRegex = updatedRegex.test(token.content)
    return tokenHasLevel1 && tokenPassesRegex;
  });

  return hasUpdated;
}

function hasAttributions( headingTokens ){
  const isLevel3 = heading => heading.level === "3";
  const hasTitle = heading => heading.title === "Sources and Attributions"; 
  // If we are inside a curriculum/week* folder:
  if ( isInCurriculumFolder ) {
    return headingTokens.filter( h => isLevel3(h) && hasTitle(h) ).length === 5; 
  }
  return headingTokens.some( h => isLevel3(h) && hasTitle(h) );
}

const frontmatter = getFrontmatterFromMarkdown( markdownContent );
const markdownBody = getMarkdownBody( markdownContent );

if (frontmatter) {

  ok(`${checkmark} Frontmatter detected.`);

  // Parse frontmatter based on YAML format
  if ( !frontmatter.title || frontmatter.title.trim().length === "" ){
    warn(`
    Frontmatter sections requires a title: property:

    ---
    title: Some Title Here
    ---
    `)
  }
} else {
  warn("No frontmatter detected. A simple frontmatter section with at least a title: property is required.");
}

if ( !markdownBody ){
  warn(`No content found in the file ${markdownFilePath}`);
  process.exit();``
}

function getYouTubePlaylistURLs( markdownBody ){

  return findYouTubeMarkdownLinks(markdownBody)
  .filter( URL =>{
    // console.log(URL);
    return URL.includes("&list=") && URL.includes("watch?v=");
  })

}


// Parse the markdown content
const tokens = md.parse(markdownBody, {});
// console.log({ tokens });
// console.log({ headingTokens });

// Group them tokens:
const inlineTokens = tokens.filter( token => token.type === "inline" );

// console.log({ tokens });
// console.log({ headingTokens });

// Process the parsed tokens to extract headings [DEPRECATED]
/* 
const headings = [];
let currentLevel = 0;
tokens.forEach((token, index, array) => {

    if (token.type === 'heading_open') {
        currentLevel = token.tag.slice(1); // Extract heading level from the tag
    } else if (token.type === 'inline') {
        const text = token.content;
        headings.push({ level: currentLevel, title: text });
    }

  });
*/

if ( headingTokens.length === 0 ){
  console.log(`WARNING: No headings found in the file: ${markdownFilePath}`)
  process.exit();
}

// Print the extracted headings
headingTokens.forEach((heading, index) => {
  if ( heading.title.trim().length === 0 ){
    return warn(
      `Heading ${index + 1}: Level ${heading.level}, Title: EMPTY
    `);
  }
  // ok(`Heading ${index + 1}: Level ${heading.level}, Title: ${heading.title}`);
});

// CHECK: HAS AT LEAST ONE LEVEL 1 HEADING
const hasHeadingLevel1 = headingTokens.filter( h => h.level === "1" );
if ( hasHeadingLevel1.length === 0 ){
  warn("A Heading of level 1 must be present on the document");
} 
if ( hasHeadingLevel1.length > 1 ){
  warn("Only one Heading of level 1 must be present on the document");
} 
if ( hasHeadingLevel1.length === 1 ){
  ok(`${checkmark} Found a single Heading Level 1.`);
}

// CHECK: HAS YOUTUBE URLs CONTAINING &list QUERY STRING
const ytLinks = getYouTubePlaylistURLs(markdownBody);

if ( ytLinks.length > 0 ){

  warn(`Found the following YouTube link(s) containing a '&list=' query string. Please remove it, unless the link redirects to a Playlist page.`);

  ytLinks.forEach( URL =>{
    const ytListParts = getYouTubeListIdParts(URL);
    if ( ytListParts.length > 0 ){
      console.log(`${ytListParts[0]}${chalk.cyan(ytListParts[1])}${ytListParts[2]}`);
    }
  })
}

// CHECK: HAS ATTRIBUTIONS SECTION
const hasAttributionSection = hasAttributions( headingTokens );

if ( !hasAttributionSection ){
  warn(`No attributions section found:
  
  ### Sources and Attributions
  `);
  if ( isInCurriculumFolder ){
    warn(`It looks like you are on a markdown file describing a Weekly schedule. Weekly README.md files should contain one 'Sources and Attributions' section per day, so in total 5. There were fewer sections found on this file.`)
  }
} else {
  ok(`${checkmark} Sources and Attributions section found.`)
}

// CHECK: UPDATED SECTION
const updatedRegex = /_\(Updated: (\d{2}\/\d{2}\/\d{4})\)_/;
const hasUpdated = hasUpdatedTokenInList( inlineTokens );

if ( !hasUpdated ){
  warn("No Updated: section found.");
  warn("Syntax: _(Updated: DD/MM/YYYY)_")
  warn("Usage: must be placed right after the top most Heading 1");
}

// TODO: TASKS
// 3) Check if intermediary Headings are skipped, e.g. going from H1 to H3
// 4) Check if frontmatter is present and contains necessary key/value pairs
// 5) Husky script to ensure that UPDATED section has been updated
// 6) Check if _(Updated: 11/08/2023)_ is present right after the first Heading
// 7) Check if Sources and Attributions section contains MDN Permalinks for version control and bi-annual review

module.exports = {
  hasUpdatedTokenInList
}