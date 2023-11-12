const path = require("node:path");
const fs   = require("node:fs");
const fse  = require('fs-extra');
const marked = require("marked");
const matter = require('gray-matter');
const { ok, warn, xmark } = require("../utils");

const { 
  wdxTemplateRegexes,
  getInclude,
  replaceInclude,
  parseWdxMetaProgress,
  parseWdxMetaTests
} = require("./utils");

const { 
  ATTRIBUTIONS,
  EXERCISES,
  EXTRA_RESOURCES,
  GITHUB_BLOB_URL,
  MODULES_FOLDER, 
  SCHEDULE,
  STUDY_PLAN, SUMMARY
} = require("./constants");

const { parseTokenForMediaAssets, parseTokenForLiveCoding } = require("./utils");

function replaceSectionFromObject({ section, contentObject, day, numOfWeek }){

  return function( match ){

    const { 
      assetsDir,
      exercisesDir,
      weekRegex,
      weekNumRegex,
      assetsAsCodeRegex,
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
    .replace(assetsAsCodeRegex, (string, match, group)=>{
      return `${GITHUB_BLOB_URL}curriculum/week${numOfWeek}/assets`;
    })
    .replace(assetsDir, (string, match, group)=>{
      return `curriculum/week${numOfWeek}/assets`;
    })
    .replace(exercisesDir, (string, match, group)=>{
      return `curriculum/week${numOfWeek}/exercises`;
    })
    .replace(weekRegex, `Week ${numOfWeek}`)
    .replace(weekNumRegex, `${numOfWeek}`)
    .replace(dayNumRegex, `${String(day).padStart(2,"0")}`)
    .replace(dayRegex, `Day ${day}`);

    return dailyScheduleSection;
  }

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

  // Boolean variable to check if at least one daily content has live coding feature
  let liveCodeEnabled = false;
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

    if (!liveCodeEnabled) {
      liveCodeEnabled = parseTokenForLiveCoding(token);
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
    media: hasDailyMediaAssets ? dailyMediaAssets : null,
    liveCodeEnabled
  };

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

// Copies module/FOLDER/exercises/ => curriculum/weekXX/exercises/
function copyDailyExercises({ weeklyFolder, dailyModuleFolder }){

  const sourceDailyAssetsPath = path.join( MODULES_FOLDER, dailyModuleFolder, "exercises" ); 
  const targetCurriculumAssetsPath = path.join( weeklyFolder, "exercises" );

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

module.exports = { 
  parseDailyContent,
  copyDailyExercises,
  copyDailyMediaAssets
}