// DESCRIPTION: Script to validate Markdown structure for educational material

// 0) IMPORTS: =================================================================
const fs         = require("node:fs");
const path       = require("node:path");

const chalk      = require('chalk'); 
const MarkdownIt = require('markdown-it');
const yaml       = require('yaml');

const { 
  warn, 
  ok, 
  findYouTubeMarkdownLinks, 
  getYouTubeListIdParts 
} = require("./utils");

// 1) OUR FUNCTIONS: ===========================================================

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

function splitMarkdownIntoFrontmatterAndContent( markdownContent ){

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

function hasUpdatedTokenInList( inlineTokens ){

  const hasUpdated = inlineTokens.some( token =>{
    const tokenHasLevel1 = token.level === 1;
    const tokenPassesRegex = updatedRegex.test(token.content)
    return tokenHasLevel1 && tokenPassesRegex;
  });

  return hasUpdated;
}

function hasAttributions( headingTokens, isInCurriculumFolder ){
  const isLevel3 = heading => heading.level === "3";
  const hasTitle = heading => heading.title === "Sources and Attributions"; 
  // If we are inside a curriculum/week* folder:
  if ( isInCurriculumFolder ) {
    return headingTokens.filter( h => isLevel3(h) && hasTitle(h) ).length === 5; 
  }
  return headingTokens.some( h => isLevel3(h) && hasTitle(h) );
}

function getYouTubePlaylistURLs( markdownBody ){

  return findYouTubeMarkdownLinks(markdownBody)
  .filter( URL =>{
    // console.log(URL);
    return URL.includes("&list=") && URL.includes("watch?v=");
  })

}

function checkForHeadings( headingTokens ){
  if ( headingTokens.length === 0 ){
    console.log(`WARNING: No headings found in the file: ${markdownFilePath}`)
    process.exit();
  }
}

function checkForEmptyHeadings( headingTokens ){

  headingTokens.forEach((heading, index) => {
    if ( heading.title.trim().length === 0 ){
      return warn(
        `Heading ${index + 1}: Level ${heading.level}, Title: EMPTY
      `);
    }
    // ok(`Heading ${index + 1}: Level ${heading.level}, Title: ${heading.title}`);
  });

}

function checkForHeadingLevel1( headingTokens ){

  const hasHeadingLevel1 = headingTokens.filter( h => h.level === "1" );

  if ( hasHeadingLevel1.length === 0 ){
    warn("A Heading of level 1 must be present on the document");
    process.exit();
  } 
  if ( hasHeadingLevel1.length > 1 ){
    warn("Only one Heading of level 1 must be present on the document");
    process.exit();
  } 
  if ( hasHeadingLevel1.length === 1 ){
    ok(`${checkmark} Found a single Heading Level 1.`);
  }

}

function checkForYouTubePlaylistLinks( markdownBody ){

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

}

function checkForAttributionsSection( headingTokens, isInCurriculumFolder ){

  const hasAttributionSection = hasAttributions( headingTokens, isInCurriculumFolder );
  
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

}

function checkForUpdatedSection( inlineTokens ){

  const hasUpdated = hasUpdatedTokenInList( inlineTokens );
  
  if ( !hasUpdated ){
    warn("No Updated: section found.");
    warn("Syntax: _(Updated: DD/MM/YYYY)_")
    warn("Usage: must be placed right after the top most Heading 1");
    process.exit();
  }

}

function getDailyContent( lines ){
  
  let isInSection = false;
  let sectionContent = [];
  let day = -1;
  let weekDayRegex = /^## Week \d\d? \- Day \d\d?/
  
  for ( const line of lines ) {
  
    if ( line.match(weekDayRegex) ) {
      day++;
      isInSection = true;
      continue; // Skip the heading itself
    }
  
    // If already in the desired section
    if ( isInSection ) {
      // Check if a new section is starting
      if ( line.startsWith("##") && !line.match(weekDayRegex) ) {
        break; // Exit the loop if a new section starts
      }
  
      if ( line.trim().length === 0 ){
        continue;
      }
  
      // Add the line to the section content
      if ( sectionContent[day] ){
        sectionContent[day] += line + "\n"
      } else {
        sectionContent[day] = line + "\n";
      }
    }
  }

  return sectionContent;

}

// 2) OUR VARIABLES: ===========================================================

const markdownFilePath     = process.argv[2];
// UNICODE CHARACTERS:
const checkmark            = "\u2713"; // ✅ 
const xmark                = "\u274C"; // ❌
// Initialize markdown-it parser
const updatedRegex         = /_\(Updated: (\d{2}\/\d{2}\/\d{4})\)_/;
const md                   = new MarkdownIt();
const headingTokens        = [];

// 3) ACTION!!! ================================================================

function initializeChecks(){

  // Parsing input
  if ( !markdownFilePath || !markdownFilePath.endsWith(".md") ){
    warn("No markdown file passed as argument.")
    process.exit();
  }
  
  const isInCurriculumFolder = isCurriculumFolder( markdownFilePath );
  // console.log({ isInCurriculumFolder });
  const markdownContent      = fs.readFileSync(markdownFilePath, 'utf8');
  const frontmatter          = getFrontmatterFromMarkdown( markdownContent );
  const markdownBody         = getMarkdownBody( markdownContent );
  
  // Get all Headings from Markdown AST:
  md.use(require('markdown-it-anchor'), {
    level: 1, // Extract headings starting from level 1
    callback: (token, anchor) => {
      headingTokens.push({
        level: token.tag.slice(1), 
        title: anchor.title 
      });
    }
  });
  
  // ✅ CHECK IF FRONTMATTER EXISTS AND IF ITS VALID:
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
  
  // Parse the markdown content
  const tokens = md.parse(markdownBody, {});
  
  // Group them tokens:
  const inlineTokens = tokens.filter( token => token.type === "inline" );
  
  // Split markdown content by lines
  const lines = markdownContent.split('\n');
  
  // ✅ CHECK: FOR NO HEADINGS
  checkForHeadings( headingTokens );
  
  // ✅ CHECK: PRINT THE EXTRACTED HEADINGS AND WARN FOR EMPTY TITLES
  checkForEmptyHeadings( headingTokens );
  
  // ✅ CHECK: HAS AT LEAST ONE LEVEL 1 HEADING
  checkForHeadingLevel1(headingTokens);
  
  // ✅ CHECK: HAS YOUTUBE URLs CONTAINING &list QUERY STRING
  checkForYouTubePlaylistLinks( markdownBody );
  
  // ✅ CHECK: HAS ATTRIBUTIONS SECTION
  checkForAttributionsSection( headingTokens, isInCurriculumFolder );
  
  // ✅ CHECK: HAS AN UPDATED SECTION
  checkForUpdatedSection( inlineTokens );
  
  // CHECK: THAT EACH DAY HAS THE BOILERPLATE SKELETON
  const dailyContent = getDailyContent( lines );
  
  // console.log(dailyContent);
  // console.log(dailyContent.length);

}

if (require.main === module) {
  // console.log("This script was executed directly.");
  initializeChecks();
} 

// 4) EXPORT SECTION: ==========================================================

module.exports = {
  hasUpdatedTokenInList,
  getDailyContent
}