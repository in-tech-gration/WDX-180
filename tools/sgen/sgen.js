// DESCRIPTION: Script to dynamically generate Syllabus and related content in Markdown format
// USAGE: WDX-180/> node tools/sgen.js curriculum/curriculum.yaml
/**
 * REPLACES: {{ WDX:Syllabus }} => curriculum.yaml
 * REPLACES: {{ WDX:WEEK }}     => weekly.yaml
 */

// 0) IMPORTS: =================================================================
const path = require("node:path");
const fs   = require("node:fs");
const matter = require('gray-matter');
const yaml = require('yaml');
const {
  warn
} = require("../utils");

const { 
  wdxTemplateRegexes,
  getFrontMatterStringFromObject,
} = require("./utils");

const {
  MODULES_FOLDER 
} = require("./constants");

const { createWeeklyContentFromYaml } = require("./weekly");
const { createSyllabusFromMarkdownText } = require("./syllabus");

// TODO:
// 1) Warn about #### inside the ### Module sections. Use **Bold** instead.
// 2) Add a `--no-user` flag to run the sgen tool without creating the user/ folder and subsequent subfolders


// 1) OUR FUNCTIONS: ===========================================================

// TODO: WiP
function getModule({}){

}

// TODO: WiP
function createContentFromYaml({ configYaml, filename }) {

  const { input, output, daily_input, schedule, title } = yaml.parse(configYaml);
  const textContent        = fs.readFileSync(input, "utf-8");

  // Parse markdown and separate Frontmatter and main content:
  const { content, data: fm, orig } = matter(textContent);

  try {

    const {

      // weekRegex,
      titleRegex,
      moduleRegex,
      // dateUpdatedRegex,
      // weeklyContentRegex,
      // includesRegex
  
    } = wdxTemplateRegexes;
  
    // const date = new Date();
    // const DDMMYYYY = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}` 
  
    let newRaw = textContent
    .replace(titleRegex, title)
    
    // .replace(dateUpdatedRegex, DDMMYYYY)
    // .replace(includesRegex, replaceInclude());
    .replace(moduleRegex, function( match, modulePath, offset, string ){

      const fullPath = path.join(MODULES_FOLDER, modulePath.trim());
      const textContent = fs.readFileSync(fullPath, "utf-8");
      return textContent;

    });
  
    
  // const dailyMarkdownTokens = marked.lexer(dailyDraftTemplate);
  fs.writeFileSync(output, newRaw, "utf-8");

  //   const daysEntries = Object.entries(schedule.days);
  //   const weeklyData = daysEntries
  //   .map( entry =>{
  //     return parseDailyContent({ entry, dailyMarkdownTokens, numOfWeek });
  //   });
    
  //   let weeklyContent = weeklyData
  //   .filter(Boolean)
  //   .map( data => data.content )
  //   .join("");
  //   // Parse markdown tokens:
  //   const markdownTokens = marked.lexer(content);
  //   let outputContent = "";
  //   markdownTokens.forEach( token =>{

  //     if ( token.raw ){

  //       const parsedTokenRaw = parseWeeklyPatterns({ 
  //         raw: token.raw, 
  //         numOfWeek,
  //         weeklyContent,
  //         title
  //       }); 

  //       outputContent += parsedTokenRaw;

  //     } else {

  //       outputContent += token.raw;

  //     }
  //   });
  
  //   const fmString = getFrontMatterStringFromObject(fm);
  
  //   outputContent = parseWeeklyPatterns({ raw: fmString, numOfWeek, title }) + outputContent;
  
  //   const weeklyIndexMarkdown = path.join( weeklyFolder, "index.md" );
  //   fs.writeFileSync(weeklyIndexMarkdown, outputContent, "utf-8");

  //   // Copy Media Assets from Module folder to curriculum/
  //   copyWeeklyMediaAssets({ weeklyData, title });

  //   // Generate /user/weekXX/exercises/... folders
  //   createExerciseFolders({
  //     weeklyData, title, numOfWeek
  //   }); 

  //   // Generate progress sheets:
  //   const csv = generateWeeklyProgressSheetFromWeeklyData({ 
  //     weeklyData, title 
  //   });

  //   // Generate yaml tests:
  //   const test = generateWeeklyTestsFromWeeklyData({
  //     weeklyData, title
  //   });

  } catch(e) {

    console.log(e);

  }

}

function init() {

  /* eslint-disable-next-line no-undef */
  const pathOrNumber = process.argv[2]; // Either curriculum/schedule/week04.yaml or 4
  const weekNum = parseInt(pathOrNumber, 10);
  let configYamlPath = pathOrNumber;

  // Handle alternative syntax: npm run sgen 5
  if ( typeof weekNum === "number" && !Number.isNaN(weekNum) ){
    configYamlPath = path.join(
      "curriculum", 
      "schedule", 
      `week${String(weekNum).padStart(2,"0")}.yaml`
    );
  }

  if (!configYamlPath) {
    warn("No configYamlPath.")
    /* eslint-disable-next-line no-undef */
    process.exit();
  }

  const configYaml = fs.readFileSync(configYamlPath, "utf-8");
  const { input, output, Syllabus } = yaml.parse(configYaml);

  try {

    // e.g. curriculum/curriculum.yaml
    if ( Syllabus ) {  
      
      const textContent = fs.readFileSync(input, "utf-8");
      console.log(`Processing Syllabus: ${input}`);
      const outputContent = createSyllabusFromMarkdownText({ textContent, configYaml });
      return fs.writeFileSync(output, outputContent, "utf-8");
      // TODO: (Optionally) read all weeks (e.g. week01.yaml, week02.yaml, etc.) and generate all the content along with the curriculum/index.md

    }  

    const filename = path.basename(configYamlPath, path.extname(configYamlPath));

    // e.g. curriculum/schedule/week04.yaml
    if ( filename.indexOf("week") === 0 ){

      console.log(`Processing Weekly Content: ${configYamlPath}`);
      return createWeeklyContentFromYaml({ configYaml, filename });

    }

    // All the rest...
    createContentFromYaml({ configYaml, filename });

  } catch (e) {

    console.log(e);

  }

}

// 2) OUR VARIABLES: ===========================================================

// 3) ACTION!!! ================================================================

if (require.main === module) {
  // console.log("This script was executed directly.");
  init();
} else {
  // console.log("This script was imported as a module.");
}

// 4) EXPORT SECTION: ==========================================================

module.exports = {
  wdxTemplateRegexes, // This export is for testing purposes.
  getFrontMatterStringFromObject,
  createSyllabusFromMarkdownText
}