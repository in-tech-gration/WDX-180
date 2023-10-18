// DESCRIPTION: Script to dynamically generate Syllabus and related content in Markdown format
// USAGE: WDX-180/> node tools/sgen.js curriculum/curriculum.yaml

// 0) IMPORTS: =================================================================
const path = require("node:path");
const fs = require("node:fs");
const { parseArgs } = require("node:util");
const marked = require("marked");
const matter = require('gray-matter');
const yaml = require('yaml');
const {
  warn,
  ok,
  info,
  xmark
} = require("./utils");

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

function createSyllabusEntries(syllabus, messages){

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

function init() {

  const configYamlPath = process.argv[2];

  if (!configYamlPath) {
    warn("No configYamlPath.")
    process.exit();
  }

  const configYaml = fs.readFileSync(path.join(configYamlPath), "utf-8");
  const { input, output } = yaml.parse(configYaml);

  try {

    console.log(`Processing ${input}`);

    const textContent = fs.readFileSync(input, "utf-8");

    const outputContent = createSyllabusFromMarkdownText({ textContent, configYaml });

    fs.writeFileSync(output, outputContent, "utf-8");


  } catch (e) {

    warn(e.message);

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