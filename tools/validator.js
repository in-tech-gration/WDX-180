// DESCRIPTION: Script to validate Markdown structure for educational material

// 0) IMPORTS: =================================================================
const fs         = require("node:fs");
const path       = require("node:path");

const chalk      = require('chalk'); 
const MarkdownIt = require('markdown-it'); // TODO: Deprecate `markdown-it` and replace it with `marked` module
const marked     = require("marked");
const matter     = require('gray-matter');
const yaml       = require('yaml');

const {
  checkmark,
  xmark, 
  warn, 
  getYouTubeResources,
  ok, 
  info,
  ytRegex,
  decodeYouTubeURL, 
  getYouTubeListIdParts 
} = require("./utils");

// SOME CONSTANTS:
const WEEKEND_FILENAME = "WEEKEND";

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
  try {
    
    const parsedFrontmatter = yaml.parse(frontmatter)
    return parsedFrontmatter;

  } catch (error) {

    return null;
    
  }

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

  return decodeYouTubeURL(markdownBody)
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
      // console.log(line);
      continue; // Skip the heading itself
    }
  
    // If already in the desired section
    if ( isInSection ) {
      // Check if a new section is starting
      if ( line.startsWith("## ") && !line.match(weekDayRegex) ) {
        break; // Exit the loop if a new section starts
      }
  
      if ( line.trim().length === 0 ){
        continue;
      }
  
      // Add the line to the section content
      if ( sectionContent[day] ){
        sectionContent[day].push(line.trim());
      } else {
        sectionContent[day] = [line.trim()];
      }
    }
  }

  return sectionContent;

}

function checkForDailyContent( dailyContentLength ){
  if ( dailyContentLength < 5 ){
    warn("Daily Content (## Week X - Day Y) requires 5 sections. Found: " + dailyContentLength );
    info("See /teaching/WEEKLY-TEMPLATE.md file for the required structure.")
    process.exit();
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

/**
 * Description: Parses a week's content structure and checks whether the correct daily structure (appropriate headings) is in place.
 * @param {Array} Array of length (5) for each day, which in turn contains an array of all the section headings.
 */
function getHeadingsFromDailyContent( dailyContent ){
  return dailyContent.map( day =>{
    return day.filter( line =>{
      const heading = line.startsWith("### ");
      if ( heading ){
        return dailySections.some( dailySection =>{
          return line.startsWith( dailySection );
        });
      }
      return false;
    });
  })
}

function checkForDailyStructure( dailyHeadings ){

  // console.log({ dailyHeadings });

  dailyHeadings.forEach(( headings, idx ) =>{
    if ( headings.length < dailySections.length ){

      console.log("");
      warn("Daily structure for day " + (idx + 1) + " is missing some sections.")
      warn(dailySections.length + " required. Found " + headings.length + ".", false);
      console.log("");
      warn("Required sections:", false);
      console.log("");
      dailySections.forEach( d => warn(d, false) )
      process.exit();

    } else {

      ok(`${checkmark} Daily structure check: day ${idx + 1} looks good.`)

    }
  });  
}

function checkYouTubeVideosInResources( markdownBody ){

  const found = {}
  const foundPlaylists = {}
  const ytLinks = decodeYouTubeURL(markdownBody)
  .reduce((acc, link)=>{

    const yt = ytRegex(link);
    if ( yt.playlist ){
      foundPlaylists[yt.playlist] = false;
      return acc;
    } else {
      const { vid } = yt;
      found[vid] = false;
      acc.push(vid);
    }
    return acc;

  }, []);

  getYouTubeResources().forEach(([slug, value]) =>{
    const idx = ytLinks.indexOf(value.youtube.id);
    if ( idx > -1 ){
      found[value.youtube.id] = true;
    } 
  });

  // WARN ABOUT MISSING YOUTUBE LINKS
  Object.entries(found).forEach(( [slug, status], i) =>{
    if ( !status ){
      warn(`YouTube link with videoID: ${slug} was not found in the 'resources.json'`
      );
      info(`Consider running: node tools/yt.js -i ${slug} to get video metadata.\n`)
    }
  })

  // WARN ABOUT MISSING YOUTUBE PLAYLISTS
  Object.entries(foundPlaylists).forEach(( [slug, status], i) =>{
    if ( !status ){
      warn(`YouTube playlist with ID: ${slug} was not found in the 'resources.json'`
      );
      // TODO: Update yt.js to parse playlist URLs also.
      // info(`Consider running: node tools/yt.js -i ${slug} to get video metadata.\n`)
    }
  })

  // TODO: Fix
  // if ( ytLinks.length !== Object.keys(found).length ){
  //   warn("Mismatch between YouTube videos found in the file and resource.json.");
  // } else {
  //   ok("All YouTube videos are found in the resources.json")
  // }

}

function checkProgressRefs( markdown, filePath, isWeeklyREADME ){

  const progressRegex = /progress\.draft\.(60|120|180)\.csv/g;
  const progressMatch = markdown.match(progressRegex);
  if ( !progressMatch ){
    if ( isWeeklyREADME ){
      warn("No references to 'progress.draft.60|120|180.csv' found. Each week needs at least 5 references in the Exercises section.");
    } else {
      warn("No references to 'progress.draft.60|120|180.csv' found. Perhaps you need to remind the student to update their progress sheet?");
    }
  } else {
    if ( progressMatch.length < 5 && isWeeklyREADME ){
      warn( `${progressMatch.length} references to a 'progress.draft.60|120|180.csv' file found. Each week needs at least 5 references in the Exercises section.` )
    }
    if ( progressMatch && progressMatch.length >= 5 ){
      ok(`${checkmark} Found (at least) 5 references to the 'progress.draft.60|120|180.csv' file.`)
      // CHECK: IF PROGRESS NUMBER IS CORRECT
      const dirname = path.dirname(filePath);
      const filename = path.basename(filePath);
      const match = dirname.match(/curriculum\/week(\d\d)$/);
      if ( filename === "README.md" && match ){
        const week = parseInt(match[1]);
        let csvNumber;
        const hasMismatch = progressMatch.some( m =>{
          const match = m.match(/progress\.draft\.(60|120|180)\.csv/); 
          csvNumber = parseInt(match[1]); 
          if ( csvNumber === 60 ){
            return week > 12;
          }
          if ( csvNumber === 120 ){
            return ( week < 13 || week > 24 );
          }
          if ( csvNumber === 180 ){
            return week < 25;      
          }
        });
        if ( hasMismatch ){
          warn(`Found mismatch between week ${week} and progress.draft.${csvNumber}.csv`);
        }
      }
    }
  }
}

function checkHeadingStructure( markdownHeadings ){
  const regex = /Week \d{1,2} - Day \d/;
  const weeklyHeadings = markdownHeadings.filter( heading =>{
    return ( heading.depth === 2 && regex.test(heading.text) )
  });
  const regexCheck = /Week \d{1,2} - Day \d \| .*/;
  let foundErrors = false;
  weeklyHeadings.map( h =>{
    const passTheTest = regexCheck.test(h.text);
    if ( !passTheTest ){
      foundErrors = true;
      warn(`Found a daily title that does not include proper description: ${h.text}`);
    }
  })
  if ( foundErrors ){
    info("Proper daily title syntax is as follows: Week WW Day DD | Title Here")
  }
}

// 2) OUR VARIABLES: ===========================================================

const markdownFilePath     = process.argv[2];
// Initialize markdown-it parser
const updatedRegex         = /_\(Updated: (\d{2}\/\d{2}\/\d{4})\)_/;
const md                   = new MarkdownIt();
const headingTokens        = [];
const dailySections = [
  "### Schedule",
  "### Study Plan",
  "### Summary",
  "### Exercises",
  "### [Extra Resources]",
  "### Sources and Attributions"
];

// 3) ACTION!!! ================================================================

function initializeChecks(){

  // Parsing input
  if ( !markdownFilePath || !markdownFilePath.endsWith(".md") ){
    warn("No markdown file passed as argument.")
    process.exit();
  }

  info(`Validating ${markdownFilePath}`);

  const isWeekendFile = path.parse(path.basename(markdownFilePath)).name === WEEKEND_FILENAME;

  const isInCurriculumFolder  = isCurriculumFolder( markdownFilePath );
  const markdownContent       = fs.readFileSync(markdownFilePath, 'utf8');
  const frontmatter           = getFrontmatterFromMarkdown( markdownContent );
  const markdownBody          = getMarkdownBody( markdownContent );
  // TODO: This line should replace `markdownBody` with `content` and `frontmatter` with `fm`
  const { content, data: fm } = matter( markdownContent );
  // TODO: replace `headingTokens` with `markdownHeadings`
  const markdownTokens       = marked.lexer(content);
  const markdownHeadings     = markdownTokens
  .filter( token => token.type === "heading" )
  .map( token =>{
    return {
      type: token.type,
      text: token.text,
      depth: token.depth
    }
  });

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

  // ✅ CHECK: FOR PROPER HEADING STRUCTURE
  checkHeadingStructure( markdownHeadings );
  
  // ✅ CHECK: HAS AT LEAST ONE LEVEL 1 HEADING
  checkForHeadingLevel1(headingTokens);
  
  // ✅ CHECK: HAS YOUTUBE URLs CONTAINING &list QUERY STRING
  checkForYouTubePlaylistLinks( markdownBody );
  
  // ✅ CHECK: HAS AN UPDATED SECTION
  checkForUpdatedSection( inlineTokens );
  
  // ✅ CHECK: THAT EACH DAY HAS THE BOILERPLATE SKELETON
  let dailyContent;
  if ( isInCurriculumFolder ){
    dailyContent = getDailyContent( lines );
    checkForDailyContent( dailyContent.length );
  }

  // ✅ CHECK: HAS ATTRIBUTIONS SECTION [ DEPRECATED DUE TO NEXT CHECK ]
  // checkForAttributionsSection( headingTokens, isInCurriculumFolder );

  // ✅ CHECK: THAT ALL DAYS CONTAIN THE SAME STRUCTURE
  if ( isInCurriculumFolder ){
    const dailyHeadings = getHeadingsFromDailyContent(dailyContent);
    checkForDailyStructure( dailyHeadings );
  }

  // ✅ CHECK: YOUTUBE LINKS THAT ARE NOT FOUND IN THE RESOURCES
  checkYouTubeVideosInResources( markdownBody );

  // ✅ CHECK: FOR CORRECT PROGRESS SHEET SYNTAX
  // progress.draft.[60|120|180].csv
  checkProgressRefs( markdownBody, markdownFilePath, isInCurriculumFolder );

  // TODO: Check that all `<details>` contain the markdown="1" attribute
  
  // TODO: CHECK: LINKS INSIDE TABLES: https://github.com/mdn/content/edit/main/files/en-us/learn/css/building_blocks/values_and_units/index.md
  // https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units

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