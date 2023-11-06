// DESCRIPTION: Script to dynamically generate Syllabus and related content in Markdown format
// USAGE: WDX-180/> node tools/sgen.js curriculum/curriculum.yaml
/**
 * REPLACES: {{ WDX:Syllabus }} => curriculum.yaml
 * REPLACES: {{ WDX:WEEK }}     => weekly.yaml
 */

// 0) IMPORTS: =================================================================
const path = require("node:path");
const fs   = require("node:fs");
const fse  = require('fs-extra');
const { parseArgs } = require("node:util");
const marked = require("marked");
const chalk  = require("chalk");
const matter = require('gray-matter');
const yaml = require('yaml');
const { parse, stringify } = require("csv/sync");
const {
  warn,
  ok,
  info,
  xmark,
  checkmark
} = require("./utils");
const wdxTemplateRegexes = {

  // TODO: weekRegex will be replaced by weekFullRegex and weekNumRegex
  weekRegex:          /\{\{\s?WDX:\s?WEEK\s?\}\}/gi,
  weekNumRegex:       /\{\{\s?WDX:\s?WEEK_NUM\s?\}\}/gi,
  weekFullRegex:      /\{\{\s?WDX:\s?WEEK_FULL\s?\}\}/gi,
  titleRegex:         /\{\{\s?WDX:\s?TITLE\s?\}\}/gi,
  // TODO: dayRegex will be replaced by dayFullRegex and dayNumRegex
  dayRegex:           /\{\{\s?WDX:\s?DAY\s?\}\}/gi,
  dayFullRegex:       /\{\{\s?WDX:\s?DAY_FULL\s?\}\}/gi,
  dayNumRegex:        /\{\{\s?WDX:\s?DAY_NUM\s?\}\}/gi,
  scheduleRegex:      /\{\{\s?WDX:\s?DAILY_SCHEDULE\s?\}\}/gi,
  studyPlanRegex:     /\{\{\s?WDX:\s?STUDY_PLAN\s?\}\}/gi,
  summaryRegex:       /\{\{\s?WDX:\s?SUMMARY\s?\}\}/gi,
  exercisesRegex:     /\{\{\s?WDX:\s?EXERCISES\s?\}\}/gi,
  extrasRegex:        /\{\{\s?WDX:\s?EXTRAS\s?\}\}/gi,
  attributionsRegex:  /\{\{\s?WDX:\s?ATTRIBUTIONS\s?\}\}/gi,
  includesRegex:      /\{\{\s?WDX:\s?INCLUDES:(.*)\s?\}\}/gi,
  moduleRegex:        /\{\{\s?WDX:\s?MODULE:(.*)\s?\}\}/gi,
  dateUpdatedRegex:   /\{\{\s?WDX:\s?DATE_UPDATED\s?\}\}/gi,
  weeklyContentRegex: /\{\{\s?WDX:\s?WEEKLY_CONTENT\s?\}\}/gi,
  wdx: {
    meta: {
      progress: /<!-- WDX:META:PROGRESS:(?<params>.*) -->\n/i,
      tests: /<!-- WDX:META:TESTS:(?<params>.*) -->\n/i,
    }
  }

}
const MODULES_FOLDER  = path.join("curriculum", "modules");
const INCLUDES_FOLDER = path.join("curriculum", "schedule", "includes");

// TODO:
// 1) Warn about #### inside the ### Module sections. Use **Bold** instead.
// 2) Add a `--no-user` flag to run the sgen tool without creating the user/ folder and subsequent subfolders

// SECTIONS CONSTANTS:
const SCHEDULE        = "Schedule";
const EXTRA_RESOURCES = "Extra Resources";
const STUDY_PLAN      = "Study Plan";
const SUMMARY         = "Summary";
const EXERCISES       = "Exercises";
const ATTRIBUTIONS    = "Sources and Attributions"

// 1) OUR FUNCTIONS: ===========================================================

// APPEND FRONTMATTER TO THE OUTPUT FILE:
function getFrontMatterStringFromObject(fm) {

  const fmEntries = Object.entries(fm);
  let fmString = "";
  if (fmEntries.length !== 0) {
    fmString += "---\n";
    fmEntries.forEach(line => {
      fmString += `${line[0]}: ${line[1]}\n`
    });
    fmString += "---\n";
  }
  return fmString;

}

function createSyllabusEntries(syllabus, messages) {

  let syllabusText = "";
  const syllabusEntries = Object.entries(syllabus);

  syllabusEntries.forEach(([key, value], i, s) => {

    syllabusText += `### ${value.title}\n\n`

    if (value.schedule) {
      const weekOrDay = Object.keys(value.schedule)[0];
      const weekOrDaySingular = weekOrDay.slice(0, -1);
      const unit = weekOrDaySingular[0].toUpperCase() + weekOrDaySingular.slice(1);
      const unitLowerCase = unit.toLowerCase();
      const scheduleEntries = Object.entries(value.schedule[weekOrDay]);

      scheduleEntries.forEach(([index, v], idx, list) => {

        const indexPadded = index.padStart(2, "0");
        const link = v.open ? `${unitLowerCase}${indexPadded}/index.md` : "#";
        if (v.no_unit) {
          syllabusText += `  - [**${v.title}**](${link})`;
        } else {
          syllabusText += `  - [**${unit} ${indexPadded}**: ${v.title}](${link})`;
        }
        if (!v.open) {
          syllabusText += ` _(${messages.MODULE_CURRENTLY_NOT_AVAILABLE})_`;
        }
        const isLastSyllabusEntry = i === (s.length - 1);
        const isLastScheduleEntry = idx === (list.length - 1);

        if (!(isLastSyllabusEntry && isLastScheduleEntry)) {
          syllabusText += "\n";
        }

        if (idx === (list.length - 1) && (i !== (s.length - 1))) {
          syllabusText += "\n";
        }
      });
    }

  });

  return syllabusText;

}

function replaceMarkdownWithSyllabus(markdownTokens, syllabusText) {

  const SYLLABUS_PATTERN = "WDX:Syllabus"

  return markdownTokens.map(token => {

    const isParagraph = token.type === "paragraph";
    const hasText = token.text;
    if (!hasText) {
      return token;
    }
    const containsSyllabusPattern = token.text.indexOf(SYLLABUS_PATTERN) > -1;

    if (isParagraph && hasText && containsSyllabusPattern) {
      token.raw = syllabusText;
    }

    return token;
  });

}

function createSyllabusFromMarkdownText({ configYaml, textContent }) {

  const { Syllabus: syllabus, messages } = yaml.parse(configYaml);

  // Parse markdown and separate Frontmatter and main content:
  const { content, data: fm, orig } = matter(textContent);
  // Parse markdown tokens:
  const markdownTokens = marked.lexer(content);

  const syllabusText = createSyllabusEntries(syllabus, messages);

  const updatedMarkdown = replaceMarkdownWithSyllabus(markdownTokens, syllabusText);

  // APPEND FRONTMATTER TO THE OUTPUT FILE:
  const fmString = getFrontMatterStringFromObject(fm);

  // WRITE MARKDOWN FILE:
  const outputText = updatedMarkdown.map(t => t.raw).join("");

  return fmString + outputText;

}

function getInclude({ file, day, numOfWeek }){

  const {

    weekRegex,
    weekFullRegex,
    dayRegex

  } = wdxTemplateRegexes;

  const includeFile = path.join( INCLUDES_FOLDER, file.trim() + ".md" );

  try {

    const contents = fs.readFileSync(includeFile, "utf-8");
    return contents
    .replace(weekRegex,String(numOfWeek).padStart(2,"0"))
    .replace(weekFullRegex, `Week ${numOfWeek}`)
    .replace(dayRegex, String(day).padStart(2,"0"));

  } catch(e) {

    console.log(e);
    return `<!-- Missing include file: ${file.trim()}.md -->`

  }

}

// TODO: WiP
function getModule({}){

}

function replaceInclude({ day, numOfWeek } = {}){

  return function( match, group1, string){

    return getInclude({ 
      file: group1, 
      day: String(day).padStart(2,"0"), 
      numOfWeek: String(numOfWeek).padStart(2,"0") 
    });

  }
}

function printColoredCSV( csv, SEPARATOR = "," ){
  const colors = [ "white", "magenta", "green", "yellow", "blue", "magentaBright", "red", "cyan" ];
  console.log();
  csv.split("\n").forEach( line =>{
    let str = [];
    line.split(SEPARATOR).forEach((col,index) =>{
      str.push(`${chalk[colors[index]](col)}`);
    });

    console.log(str.join(","));
  }) 
}

// Mini-parsers: (to be moved elsewhere and unit-tested)
function parseWeeklyPatterns({ raw, numOfWeek, weeklyContent, title }){

  const {

    weekRegex,
    titleRegex,
    dateUpdatedRegex,
    weeklyContentRegex,
    includesRegex

  } = wdxTemplateRegexes;

  const date = new Date();
  const DDMMYYYY = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}` 

  let newRaw = raw
  .replace(weekRegex, `Week ${numOfWeek}`)
  .replace(titleRegex, title)
  .replace(dateUpdatedRegex, DDMMYYYY)
  .replace(weeklyContentRegex, weeklyContent)
  .replace(includesRegex, replaceInclude({ numOfWeek }));

  return newRaw;
}

// Copies module/FOLDER/assets/ => curriculum/weekXX/assets/
function copyDailyMediaAssets({ weeklyFolder, dailyModuleFolder }){

  const sourceDailyAssetsPath = path.join( MODULES_FOLDER, dailyModuleFolder, "assets" ); 
  const targetCurriculumAssetsPath = path.join( weeklyFolder, "assets" );

  try {
    fse.copySync(
      sourceDailyAssetsPath,
      targetCurriculumAssetsPath,
      { overwrite: true }
    );

    console.log(
      `Successfully copied ${sourceDailyAssetsPath} => ${targetCurriculumAssetsPath}`
    );

  } catch (err) {

    warn(`${xmark} ERROR COPYING: ${sourceDailyAssetsPath} => ${targetCurriculumAssetsPath}`);

  }

}

// TODO: Simplify this, so that sgen just copies the whole assets/ folder!
function copyWeeklyMediaAssets({ weeklyData, title }){

  weeklyData.forEach( dailyData =>{

    if ( !dailyData ){
      return false;
    }

    const mediaEntries = dailyData.media;

    if ( mediaEntries ){

      for ( const entry of mediaEntries.entries ){
        const mediaPath = path.join( mediaEntries.dailyModuleDir, entry );
        const targetPath = path.join( "curriculum", `week${mediaEntries.week}` );
        const targetAssetsPath = path.join( targetPath, "assets" );
        const targetFile = path.join( targetPath, entry );

        try {

          const userFolderExists = fs.existsSync(targetAssetsPath);
      
          if ( userFolderExists ) {
        
            warn(`Folder '${targetPath}' already exists.`);
            
          } else {
            
            fs.mkdirSync(targetAssetsPath, { recursive: true });
            console.log(`Folder '${targetPath}' created.`);
            
          }

          fs.copyFile(mediaPath, targetFile, (err) => {
            if (err) {
              if ( err.code && err.code === "ENOENT" ){
                warn(`${xmark} Error copying ${err.path} => ${err.dest}`);
                console.log(`${xmark}: ${mediaPath} => ${targetFile}`);                
              }
            };
            ok(`${checkmark} MEDIA COPIED: ${mediaPath} => ${targetFile}`);
          });

        } catch (e){

          console.log(e);
          
        }

      }

      return;

    }

  });

}

// Generate progress.draft.*.csv files from weekly content object
function generateWeeklyProgressSheetFromWeeklyData({ weeklyData, title }){

  const csvHeaders = `Week,Day,Concept,Task,Level,Confidence,Completed,Instructions`;
  let csv = csvHeaders;

  weeklyData.forEach( dailyData =>{

    let dailyCSV = csvHeaders;

    if ( !dailyData || !dailyData.progress ){
      return false;
    }

    const progressEntries = dailyData.progress.entries;
    const { week, day }  = dailyData.progress;
    const upPaddedWeek   = week.indexOf("0") === 0 ? week.slice(1) : week;
    const paddedDay      = String(day).padStart(2,"0");

    if ( progressEntries.length ){

      progressEntries.forEach( entry =>{

        const { instructions: _instructions, task, level, user_folder, extras } = entry;
        let instructions = "Update FALSE to TRUE in the COMPLETED column";
        const userFolder = user_folder ? `user/week${week}/exercises/day${paddedDay}/${user_folder}/` : null;

        switch (_instructions) {
          case "UPLOAD_ASSETS":
            if ( userFolder ){
              instructions = `Upload the required assets to the ${userFolder} folder`;
            } else {
              instructions = "Upload the required assets to the corresponding user/ folder";
            }
            break;
          case "CHECK_COMPLETED":
          default:
            if ( userFolder ){
              instructions = `Upload the required assets to the ${userFolder} folder`;
            } 
            break;
        }

        const weeklyTitle = title;
        const dailyTitle  = dailyData.title;

        dailyCSV += `\n${upPaddedWeek},${day},${weeklyTitle}: ${dailyTitle},${extras ? "EXTRAS: " + task : task},${level},0-10,FALSE,${instructions}`;

      })

    }

    csv += dailyCSV;

    try {
      parse(dailyCSV);
      ok(`${checkmark} CSV Linting looks good!`);
  
      const userFolder       = path.join("user", `week${week}`, "progress");
      const userFolderExists = fs.existsSync(userFolder)
  
      if ( userFolderExists ) {
    
        warn(`Folder '${userFolder}' already exists.`);
        
      } else {
        
        fs.mkdirSync(userFolder, { recursive: true });
        console.log(`Folder '${userFolder}' created.`);
        
      }

      const progressFilename = `progress.draft.w${week}.d${paddedDay}.csv`;

      // printColoredCSV(dailyCSV);
      if ( dailyCSV === csvHeaders || dailyCSV.length === 0 ){
        return;
      }

      console.log("Writing to file " + progressFilename + ":");

      fs.writeFileSync(
        path.join( userFolder, progressFilename ),
        dailyCSV, "utf-8"
      );
      
    } catch(e){

      console.log("Error parsing generated progress CSV",e);
    }

  });

  return csv;
}

function generateWeeklyTestsFromWeeklyData({ weeklyData, title }){

  weeklyData.forEach(dailyData =>{
  
    if ( !dailyData || !dailyData.tests ){
      return false;
    }

    const { week, day } = dailyData.tests;
    const testEntries = dailyData.tests.entries;
    const upPaddedWeek   = week.indexOf("0") === 0 ? week.slice(1) : week;
    const paddedDay      = String(day).padStart(2,"0");

    if ( testEntries.length ){

      console.log(`Creating tests for exercises of Week ${week} Day ${paddedDay}.`);

      testEntries.forEach( entry =>{

        const finalFolder = `user/week${week}/exercises/day${paddedDay}/${entry.user_folder}/`;

        const testName = `Week ${week} - Day ${day} ${title} | ${entry.name}`;
        const triggerOn = `on:\n  push:\n    branches:\n      - 'main'\n    paths:\n      - ${finalFolder}**`;
        const jobs = `jobs:\n  ${entry.user_folder}:\n\n    runs-on: ubuntu-latest\n\n    `;
        let steps = 'steps:\n      - name: Checkout code\n        uses: actions/checkout@v3\n';
        if (entry.type === 'exist') {
          steps += `\n      - name: "${entry.name} > Check solution files existence"\n        uses: andstor/file-existence-action@v2\n        with:\n          files: "${entry.files.map(file => `${finalFolder}${file}`).join(", ")}"\n          fail: true`;
        } else if (entry.type === 'js') {
          // TODO: Add configuration for JS tests (maybe will need more parameters on the WDX:META:TESTS comment) plus some existence checks
          steps += ``;
        }
        const yamlContent = `name: "${testName}"\n${triggerOn}\n${jobs}${steps}`;

        const workflowsFolder = path.join(".github", "workflows");
        const workflowsFolderExists = fs.existsSync(workflowsFolder);

        try {

          yaml.parse(yamlContent);
          
          if ( workflowsFolderExists ) {

            warn(`Folder ${workflowsFolder} already exists.`);
  
          } else {
  
            fs.mkdirSync(workflowsFolder, { recursive: true });
            info(`Folder ${workflowsFolder} created.`);
  
          }
  
          const testFilename = `w${week}-d${paddedDay}-${entry.user_folder}.yaml`;
          info(`Writing to file ${testFilename}:`);
          fs.writeFileSync(
            path.join(workflowsFolder, testFilename),
            yamlContent, "utf-8"
          );

        } catch (e) {

          console.log(`Error while writing YAML test file for exercise ${entry.name}: ${e}`);
          
        }

      } );
    }
  })

}

// Search for WDX:META patterns:
function parseWdxMetaProgress({ token }){

  const wdxMetaProgressRegex = wdxTemplateRegexes.wdx.meta.progress;
  const entryDefault = {
    task: null,
    instructions: "Update FALSE to TRUE in the COMPLETED column",
    level: "Beginner"
  }
  const output = { hasMeta: null, meta: null, raw: null }
  const hasWdxMeta = token.raw.match(wdxMetaProgressRegex); 
  if ( hasWdxMeta ){

    output.hasMeta = true;
    const raw = token.raw.replace(wdxMetaProgressRegex, "");
    const params = hasWdxMeta.groups.params.split("|");
    const entry = {}
    params.forEach( param =>{
      const [ key, value ] = param.split("=");
      entry[key] = value;
    })
    output.meta = { ...entryDefault, ...entry, raw }

  }
  return output

}

// Search for WDX:META:TESTS
function parseWdxMetaTests({ token }){

  const wdxMetaTestsRegex = wdxTemplateRegexes.wdx.meta.tests;
  const output = { hasMeta: null, meta: null, raw: null };
  const hasWdxMetaTests = token.raw.match(wdxMetaTestsRegex);

  if ( hasWdxMetaTests ) {
    
    output.hasMeta = true;
    const raw = token.raw.replace(wdxMetaTestsRegex, "");
    const params = hasWdxMetaTests.groups.params.split("|");
    const entry = {};
    params.forEach( param =>{
      const [ key, value ] = param.split("=");
      if ( key === 'files' ) {

        entry[key] = value.split(",");

      } else {

        entry[key] = value;

      }
    })
    output.meta = { ...entry, raw };

  }
  return output;

}

function replaceSectionFromObject({ section, contentObject, day, numOfWeek }){

  return function( match ){

    const { 
      weekRegex,
      weekNumRegex,
      dayRegex,
      dayNumRegex 
    } = wdxTemplateRegexes;

    if ( !contentObject[section] ){

      warn(`Something's wrong with "${section}" section. Check this in the Module's markdown. Perhaps you are missing this section or the section is not using a Level 3 heading? => ###`);
      return `<!-- ${section} -->`;

    } else {

      ok(`Section "${section.toString()}" parsed correctly`);

    }

    let dailyScheduleSection = "";

    if (contentObject[section].nextSection){

      dailyScheduleSection = contentObject[section].heading + contentObject[section].nextSection;

      if ( section === EXERCISES ){

        const progress_update_reminder = getInclude({ 
          file: "progress_update_reminder",
          day,
          numOfWeek 
        });
        dailyScheduleSection += "\n\n" + progress_update_reminder;

      }

    } else {


      dailyScheduleSection = `<!-- ${contentObject[section].text.trim()} -->`

    }

    dailyScheduleSection = dailyScheduleSection
    .replace(weekRegex, `Week ${numOfWeek}`)
    .replace(weekNumRegex, `${numOfWeek}`)
    .replace(dayNumRegex, `${String(day).padStart(2,"0")}`)
    .replace(dayRegex, `Day ${day}`);

    return dailyScheduleSection;
  }

}

// Deep Markdown Token parsing for Assets (./assets/*)
function parseTokenForAssetAndPushToArray( token, hrefs ){
  
  if ( token.type === "link" ){
    if ( token.href.indexOf("./assets") === 0 ){
      hrefs.push(token.href);
    }
  }
  if ( token.tokens ){
    token.tokens.forEach( t => parseTokenForAssetAndPushToArray( t, hrefs ));
  }
  if ( token.items ){
    token.items.forEach( t => parseTokenForAssetAndPushToArray( t, hrefs ));
  }

}

// Input: Token => Output: Array(hrefs)
function parseTokenForMediaAssets( token ){

  const hrefs = [];

  // TODO: Probably this function can replace the following 2 if statements altogether as it parses all the MD Tree for links with ./assets
  parseTokenForAssetAndPushToArray( token, hrefs );

  if ( token.type === "paragraph" ){

    token.tokens.forEach( t =>{

      const isImage        = t.type === "image";
      const isInAssets     = t.href && ( t.href.indexOf("./assets") === 0 );
      const isLink         = t.type === "link";
      const hasImageToken  = t.tokens && Array.isArray(t.tokens) && ( t.tokens.length === 1) && ( t.tokens[0].type === "image" );

      if ( isImage && isInAssets ){
        hrefs.push(t.href);
      }

      if ( isLink && hasImageToken ){
        hrefs.push(t.tokens[0].href);
      }

    });

  }

  return hrefs;

}

function parseDailyContent({ entry, dailyMarkdownTokens, numOfWeek }){

  const [ day, dayMeta ] = entry;

  if ( !dayMeta.module ){
    return;
  }

  const dailyModuleDir = path.join( MODULES_FOLDER, dayMeta.module ); 
  const pathStats = fs.statSync(dailyModuleDir);
  let dailyModule = dailyModuleDir;
  // We can either pass a directory (that contains an index.md file) or a full path that includes a filename, e.g. extra_day.md
  if ( pathStats.isDirectory() ){
    dailyModule = path.join( dailyModuleDir, "index.md" ); 
  }
  let moduleMarkdown = null;
  try {
    moduleMarkdown = fs.readFileSync(dailyModule, "utf-8");
  } catch(e){
    return false;
  }
  const { content, data: fm, orig } = matter(moduleMarkdown);
  const moduleMarkdownTokens = marked.lexer(content);

  const dailyProgressObject = {
    week: numOfWeek,
    day,
    entries: []
  }
  const dailyTestsObject = {
    week: numOfWeek,
    day,
    entries: []
  }
  const dailyMediaAssets = {
    dailyModuleDir,
    week: numOfWeek,
    day,
    entries: new Set()
  }
  // Create Object that contains content that will replace the {{ WDX }} patterns inside the template:
  let headingCursor;
  const dailyContentObject = moduleMarkdownTokens
  .filter( t => t.type !== "space" )
  .reduce((acc,token,idx,tokens)=>{

    // Parse for Media Assets:
    const hrefs = parseTokenForMediaAssets(token);

    if ( hrefs.length > 0 ){
      hrefs.forEach( href => {
        dailyMediaAssets.entries.add(href);
      })
    }

    if ( token.type === "heading" && token.depth === 3 ){

      const nextToken = tokens[idx+1];
      const isNextTokenNotAHeading = nextToken && nextToken.type !== "heading";
      const isNextTokenNotAHeading3 = nextToken && nextToken.type === "heading" && nextToken.depth !== 3;
      headingCursor = token;

      if ( isNextTokenNotAHeading || isNextTokenNotAHeading3 ){

        let nextSection = [];
        let nextIdx = idx + 1;
        let nextToken = tokens[nextIdx];

        while ( 
          nextToken 
          && 
          ( nextToken.type !== "heading" 
            || ( nextToken.type === "heading" && nextToken.depth !== 3 )
          ) 
        ){

          const wdxMetaProgress = parseWdxMetaProgress({ token: nextToken });
          const wdxMetaTests = parseWdxMetaTests({ token: nextToken });

          if ( wdxMetaProgress.hasMeta ){

            nextToken.raw = wdxMetaProgress.raw;
            dailyProgressObject.entries.push({ 
              ...wdxMetaProgress.meta,
              extras: headingCursor.text === EXTRA_RESOURCES 
            });

          } else if ( wdxMetaTests.hasMeta ) {

            nextToken.raw = wdxMetaTests.raw;
            dailyTestsObject.entries.push({
              ...wdxMetaTests.meta
            });

          } else {

            nextSection.push(nextToken.raw);
            
          }
          nextToken = tokens[++nextIdx];
          
        }

        acc[token.text.trim()] = { 
          heading: token.raw,
          text: token.text,
          nextSection: nextSection.map((t,idx,array) =>{ 
            const newline = ( idx === 0 ) ? "" : "\n\n"; 
            return newline + t; 
          }).join("")

        };

      } else {

        acc[token.text.trim()] = {
          text: token.text,
          heading: token.raw
        };

      }

    }

    return acc;

  }, {});

  let dailyContent = "";

  const msg = `Parsing "${fm.title}" sections:`;
  const msgUnderline = Array.from({ length: msg.length }, _=> "=").join("");
  ok( msg );
  ok( msgUnderline );

  // Go through the Markdown and replace all {{ WDX }} with content:
  dailyMarkdownTokens.forEach((token,idx,tokens) =>{
    
    const {

      weekRegex,
      titleRegex,
      dayRegex,
      scheduleRegex,
      studyPlanRegex,
      summaryRegex,
      exercisesRegex,
      extrasRegex,
      attributionsRegex,
      includesRegex,

    } = wdxTemplateRegexes;

    dailyContent += token.raw
    .replace(weekRegex, `Week ${numOfWeek}`)
    .replace(titleRegex, fm.title)
    .replace(dayRegex, `Day ${day}`)
    .replace(scheduleRegex, replaceSectionFromObject({ 
      section: SCHEDULE, 
      contentObject: dailyContentObject,
      day,
      numOfWeek
    }))
    .replace(studyPlanRegex, replaceSectionFromObject({
      section: STUDY_PLAN, 
      contentObject: dailyContentObject,
      day,
      numOfWeek
    }))
    .replace(summaryRegex, replaceSectionFromObject({
      section: SUMMARY, 
      contentObject: dailyContentObject,
      day,
      numOfWeek
    }))
    .replace(exercisesRegex, replaceSectionFromObject({
      section: EXERCISES, 
      contentObject: dailyContentObject,
      day,
      numOfWeek
    }))
    .replace(extrasRegex, replaceSectionFromObject({
      section: EXTRA_RESOURCES, 
      contentObject: dailyContentObject,
      day,
      numOfWeek
    }))
    .replace(attributionsRegex, replaceSectionFromObject({
      section: ATTRIBUTIONS, 
      contentObject: dailyContentObject,
      day,
      numOfWeek
    }))
    .replace(includesRegex, replaceInclude({ day, numOfWeek }));

    if ( (idx === (tokens.length - 1)) && (day !== "5") ){
      dailyContent += `\n<hr class="mt-1">\n\n`;
    }

  });

  const hasDailyMediaAssets = dailyMediaAssets.entries.size > 0;

  return { 
    title: fm.title,
    content: dailyContent, 
    progress: dailyProgressObject, 
    tests: dailyTestsObject,
    media: hasDailyMediaAssets ? dailyMediaAssets : null 
  };

}

function createExerciseFolders({ weeklyData, title, numOfWeek }){

  weeklyData.forEach((dailyData, idx) =>{

    const paddedDay = String(idx+1).padStart(2,"0");
    const weeklyUserFolder = path.join(
      "user",
      `week${numOfWeek}`,
      "exercises",
      `day${paddedDay}`
    );

    const doesWeeklyUserFolderExist = fs.existsSync(weeklyUserFolder);

    if ( doesWeeklyUserFolderExist ) {
      warn(`Folder '${weeklyUserFolder}' already exists.`);
    } else {
      fs.mkdirSync(weeklyUserFolder, { recursive: true });
      console.log(`Folder '${weeklyUserFolder}' created.`);
    }
    fs.writeFileSync(
      path.join(weeklyUserFolder, ".gitkeep"), 
      "", "utf-8"
    );


  })
}

function createWeeklyContentFromYaml({ configYaml, filename }) {

  const { 
    input: markdownDraftTemplate,
    daily_input,
    schedule,
    title 
  } = yaml.parse(configYaml);
  const weeklyFolder       = path.join("curriculum", filename);
  const weeklyFolderExists = fs.existsSync(weeklyFolder);

  if ( weeklyFolderExists ) {

    warn(`Folder '${filename}' already exists.`);
    
  } else {
    
    fs.mkdirSync(weeklyFolder);
    console.log(`Folder '${filename}' created.`);
    
  }

  const textContent = fs.readFileSync( markdownDraftTemplate, "utf-8");

  // Parse markdown and separate Frontmatter and main content:
  const { content, data: fm, orig } = matter(textContent);

  const numOfWeek = filename.split("week")[1]; // 04

  try {

    const dailyDraftTemplate = fs.readFileSync(daily_input, "utf-8");
    const dailyMarkdownTokens = marked.lexer(dailyDraftTemplate);

    const daysEntries = Object.entries(schedule.days);
    const weeklyData = daysEntries
    .map( entry =>{
      return parseDailyContent({ entry, dailyMarkdownTokens, numOfWeek });
    });
    
    let weeklyContent = weeklyData
    .filter(Boolean)
    .map( data => data.content )
    .join("");
    // Parse markdown tokens:
    const markdownTokens = marked.lexer(content);
    let outputContent = "";
    markdownTokens.forEach( token =>{

      if ( token.raw ){

        const parsedTokenRaw = parseWeeklyPatterns({ 
          raw: token.raw, 
          numOfWeek,
          weeklyContent,
          title
        }); 

        outputContent += parsedTokenRaw;

      } else {

        outputContent += token.raw;

      }
    });
  
    const fmString = getFrontMatterStringFromObject(fm);
  
    outputContent = parseWeeklyPatterns({ raw: fmString, numOfWeek, title }) + outputContent;
  
    const weeklyIndexMarkdown = path.join( weeklyFolder, "index.md" );
    fs.writeFileSync(weeklyIndexMarkdown, outputContent, "utf-8");
    
    // Copy Media Assets from Module folder to curriculum/ 
    daysEntries.forEach( dailyEntry =>{
      
      const dailyModuleFolder = dailyEntry[1].module;
      copyDailyMediaAssets({ weeklyFolder, dailyModuleFolder });
      
    });
    // [DEPRECATED] IN FAVOR OF copyDailyMediaAssets()
    // copyWeeklyMediaAssets({ weeklyData, title });

    // Generate /user/weekXX/exercises/... folders
    createExerciseFolders({
      weeklyData, title, numOfWeek
    }); 

    // Generate progress sheets:
    const csv = generateWeeklyProgressSheetFromWeeklyData({ 
      weeklyData, title 
    });

    // Generate yaml tests:
    const test = generateWeeklyTestsFromWeeklyData({
      weeklyData, title
    });

  } catch(e) {

    console.log(e);

  }

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