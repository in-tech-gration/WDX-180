// DESCRIPTION: Script to dynamically generate Syllabus and related content in Markdown format
// USAGE: WDX-180/> node tools/sgen.js curriculum/curriculum.yaml
/**
 * REPLACES: {{ WDX:Syllabus }} => curriculum.yaml
 * REPLACES: {{ WDX:WEEK }}     => weekly.yaml
 */

// 0) IMPORTS: =================================================================
const path = require("node:path");
const fs = require("node:fs");
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

  weekRegex:          /\{\{\s?WDX:\s?WEEK\s?\}\}/gi,
  titleRegex:         /\{\{\s?WDX:\s?TITLE\s?\}\}/gi,
  dayRegex:           /\{\{\s?WDX:\s?DAY\s?\}\}/gi,
  scheduleRegex:      /\{\{\s?WDX:\s?DAILY_SCHEDULE\s?\}\}/gi,
  studyPlanRegex:     /\{\{\s?WDX:\s?STUDY_PLAN\s?\}\}/gi,
  summaryRegex:       /\{\{\s?WDX:\s?SUMMARY\s?\}\}/gi,
  exercisesRegex:     /\{\{\s?WDX:\s?EXERCISES\s?\}\}/gi,
  extrasRegex:        /\{\{\s?WDX:\s?EXTRAS\s?\}\}/gi,
  attributionsRegex:  /\{\{\s?WDX:\s?ATTRIBUTIONS\s?\}\}/gi,
  includesRegex:      /\{\{\s?WDX:\s?INCLUDES:(.*)\s?\}\}/gi,
  dateUpdatedRegex:   /\{\{\s?WDX:\s?DATE_UPDATED\s?\}\}/gi,
  weeklyContentRegex: /\{\{\s?WDX:\s?WEEKLY_CONTENT\s?\}\}/gi

}
const modulesFolder  = path.join("curriculum", "modules");
const includesFolder = path.join("curriculum", "schedule", "includes");

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

function replaceInclude({ day, numOfWeek }){

  const {

    weekRegex,
    dayRegex

  } = wdxTemplateRegexes;

  return function( match, group1, string){

    const includeFile = path.join( includesFolder, group1.trim() + ".md" );
    try {

      const contents = fs.readFileSync(includeFile, "utf-8");
      return contents
      .replace(weekRegex,String(numOfWeek).padStart(2,"0"))
      .replace(dayRegex, String(day).padStart(2,"0"));

    } catch(e) {

      console.log(e);
      return `<!-- Missing include file: ${group1.trim()}.md -->`

    }

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

// Generate progress.draft.*.csv files from weekly content object
function generateWeeklyProgressSheetFromWeeklyData({ weeklyData, title }){

  const csvHeaders = `Week,Day,Concept,Task,Level,Confidence,Completed,Instructions`;
  let csv = csvHeaders;

  weeklyData.forEach( dailyData =>{

    let dailyCSV = csvHeaders;

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
        dailyCSV += `\n${upPaddedWeek},${day},${title},${extras ? "EXTRAS: " + task : task},${level},0-10,FALSE,${instructions}`;

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
      console.log("Writing to file " + progressFilename + ":");
      printColoredCSV(dailyCSV);
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

// Search for WDX:META patterns:
function parseWdxMeta({ token }){

  const wdxMetaRegex = /<!-- WDX:META:PROGRESS:(?<params>.*) -->\n/i;
  const entryDefault = {
    task: null,
    instructions: "Update FALSE to TRUE in the COMPLETED column",
    level: "Beginner"
  }
  const output = { hasMeta: null, meta: null, raw: null }
  const hasWdxMeta = token.raw.match(wdxMetaRegex); 
  if ( hasWdxMeta ){

    output.hasMeta = true;
    const raw = token.raw.replace(wdxMetaRegex, "");
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

function replaceSectionFromObject( section, contentObject ){

  return function( match ){

    let dailyScheduleSection = "";

    if (contentObject[section].nextSection){

      dailyScheduleSection = contentObject[section].heading + contentObject[section].nextSection;

    } else {

      dailyScheduleSection = `<!-- ${contentObject[section].text.trim()} -->`

    }

    return dailyScheduleSection;
  }

}

function parseDailyContent({ entry, dailyMarkdownTokens, numOfWeek }){

  const [ day, dayMeta ] = entry;

  if ( !dayMeta.module ){
    return;
  }

  const dailyModule    = path.join( modulesFolder, dayMeta.module, "index.md" ); 
  const moduleMarkdown = fs.readFileSync(dailyModule, "utf-8");
  const { content, data: fm, orig } = matter(moduleMarkdown);
  const moduleMarkdownTokens = marked.lexer(content);

  const dailyProgressObject = {
    week: numOfWeek,
    day,
    entries: []
  }
  // Create Object that contains content that will replace the {{ WDX }} patterns inside the template:
  let headingCursor;
  const dailyContentObject = moduleMarkdownTokens
  .filter( t => t.type !== "space" )
  .reduce((acc,token,idx,tokens)=>{

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

          const wdxMeta = parseWdxMeta({ token: nextToken });

          if ( wdxMeta.hasMeta ){

            nextToken.raw = wdxMeta.raw;
            dailyProgressObject.entries.push({ 
              ...wdxMeta.meta,
              extras: headingCursor.text === EXTRA_RESOURCES 
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

    // if ( day === "1" ) console.log(token);

    dailyContent += token.raw
    .replace(weekRegex, `Week ${numOfWeek}`)
    .replace(titleRegex, fm.title)
    .replace(dayRegex, `Day ${day}`)
    .replace(scheduleRegex, replaceSectionFromObject(SCHEDULE, dailyContentObject))
    .replace(studyPlanRegex, replaceSectionFromObject(STUDY_PLAN, dailyContentObject))
    .replace(summaryRegex, replaceSectionFromObject(SUMMARY, dailyContentObject))
    .replace(exercisesRegex, replaceSectionFromObject(EXERCISES, dailyContentObject))
    .replace(extrasRegex, replaceSectionFromObject(EXTRA_RESOURCES, dailyContentObject))
    .replace(attributionsRegex, replaceSectionFromObject(ATTRIBUTIONS, dailyContentObject))
    .replace(includesRegex, replaceInclude({ day, numOfWeek }));

    if ( (idx === (tokens.length - 1)) && (day !== "5") ){
      dailyContent += "\n";
    }

  });

  return { content: dailyContent, progress: dailyProgressObject };

}

function createWeeklyContentFromYaml({ configYaml, filename }) {

  const { input, daily_input, schedule, title } = yaml.parse(configYaml);
  const weeklyFolder       = path.join("curriculum", filename);
  const weeklyFolderExists = fs.existsSync(weeklyFolder)

  if ( weeklyFolderExists ) {

    warn(`Folder '${filename}' already exists.`);
    
  } else {
    
    fs.mkdirSync(weeklyFolder);
    console.log(`Folder '${filename}' created.`);
    
  }

  const textContent = fs.readFileSync(input, "utf-8");

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

    // Generate progress sheets:
    const csv = generateWeeklyProgressSheetFromWeeklyData({ 
      weeklyData, title 
    });

  } catch(e) {

    console.log(e);

  }

}

function init() {

  /* eslint-disable-next-line no-undef */
  const configYamlPath = process.argv[2];
  
  if (!configYamlPath) {
    warn("No configYamlPath.")
    /* eslint-disable-next-line no-undef */
    process.exit();
  }

  
  try {
    
    const configYaml = fs.readFileSync(path.join(configYamlPath), "utf-8");

    if ( configYaml.length === 0 ){
      throw new Error("YAML file seems to be empty.");
    }

    const { input, output, Syllabus } = yaml.parse(configYaml);
    const textContent = fs.readFileSync(input, "utf-8");

    if (Syllabus) {  // e.g. curriculum/curriculum.yaml

      console.log(`Processing Syllabus: ${input}`);
      const outputContent = createSyllabusFromMarkdownText({ textContent, configYaml });
      fs.writeFileSync(output, outputContent, "utf-8");
      // TODO: (Optionally) read all weeks (e.g. week01.yaml, week02.yaml, etc.) and generate all the content along with the curriculum/index.md

    } else {  // e.g. curriculum/schedule/week04.yaml

      console.log(`Processing Weekly Content: ${configYamlPath}`);
      const filename = path.basename(configYamlPath, path.extname(configYamlPath));
      if ( filename.indexOf("week") !== 0 ){
        return warn("Weekly YAML requires the following format: 'weeklyDD.yaml'")
      } else {
        createWeeklyContentFromYaml({ configYaml, filename });
      }

    }

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
  getFrontMatterStringFromObject,
  createSyllabusFromMarkdownText
}