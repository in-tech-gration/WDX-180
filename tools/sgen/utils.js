const path = require("node:path");
const fs   = require("node:fs");
const chalk  = require("chalk");
const { INCLUDES_FOLDER, MODULES_FOLDER } = require("./constants");

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

// APPEND FRONTMATTER TO THE OUTPUT FILE:
function getFrontMatterStringFromObject(fm, liveCodeEnabled=false) {

  const fmEntries = Object.entries(fm);
  let fmString = "";
  if (fmEntries.length !== 0) {
    fmString += "---\n";
    fmEntries.forEach(line => {
      fmString += `${line[0]}: ${line[1]}\n`
    });
    if ( liveCodeEnabled ) {
      // Include the following content to enable live coding 
      fmString += "load_script_js_via_src:\n  - flems/flems.html\n  - flems/flems_init.js\n";
    }
    fmString += "---\n";
  }
  return fmString;

}

// PRINT COLORED CSV
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

function replaceInclude({ day, numOfWeek } = {}){

  return function( match, group1, string){

    return getInclude({ 
      file: group1, 
      day: String(day).padStart(2,"0"), 
      numOfWeek: String(numOfWeek).padStart(2,"0") 
    });

  }
}

module.exports = {
  wdxTemplateRegexes,
  getFrontMatterStringFromObject,
  getInclude,
  replaceInclude
}