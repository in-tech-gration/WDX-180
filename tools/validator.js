// Script to validate Markdown structure for educational material
const fs = require("node:fs");
const MarkdownIt = require('markdown-it');
const yaml = require('yaml');
const chalk = require('chalk'); 

const warn = (text)=> console.log(chalk.bold.red("WARNING:"), chalk.bold.red(text));
const ok = (text)=> console.log(chalk.bold.green(text));

// Parsing input
const markdownFilePath = process.argv[2];

if ( !markdownFilePath ){
  process.exit();
}

const markdownContent = fs.readFileSync(markdownFilePath, 'utf8');

// Initialize markdown-it parser
const md = new MarkdownIt();

// Find the index of the second "---" to detect the end of frontmatter
const frontmatterEndIndex = markdownContent.indexOf('---', 3); // Start searching from index 3
let frontmatter = '';
let markdownBody = markdownContent;

if (frontmatterEndIndex !== -1) {
    frontmatter = markdownContent.substring(0, frontmatterEndIndex).trim();
    markdownBody = markdownContent.substring(frontmatterEndIndex + 3).trim();
}

console.log({ frontmatter, markdownBody })

if (frontmatter) {
  console.log("Frontmatter detected:");
  // Parse frontmatter based on YAML format
  const parsedFrontmatter = yaml.parse(frontmatter);
  console.log(parsedFrontmatter);
}

if ( !markdownBody ){
  warn(`WARNING: No content found in the file ${markdownFilePath}`);
  process.exit();``
}


// Parse the markdown content
const tokens = md.parse(markdownBody, {});

// Process the parsed tokens to extract headings
const headings = [];
let currentLevel = 0;

tokens.forEach(token => {
    if (token.type === 'heading_open') {
        currentLevel = token.tag.slice(1); // Extract heading level from the tag
    } else if (token.type === 'inline') {
        const text = token.content;
        headings.push({ level: currentLevel, title: text });
    }
});

if ( headings.length === 0 ){
  console.log(`WARNING: No headings found in the file: ${markdownFilePath}`)
  process.exit();
}

// Print the extracted headings
headings.forEach((heading, index) => {
  if ( heading.title.trim().length === 0 ){
    return warn(
      `Heading ${index + 1}: Level ${heading.level}, Title: EMPTY
    `);
  }
  ok(
    `Heading ${index + 1}: Level ${heading.level}, Title: ${heading.title}
  `);
});

// TODO: TASKS
// 1) Check if a Heading 1 is present
// 2) Check if there's only 1 Heading 1 present
// 3) Check if intermediary Headings are skipped, e.g. going from H1 to H3
// 4) Check if frontmatter is present and contains necessary key/value pairs
// 5) Husky script to ensure that UPDATED section has been updated