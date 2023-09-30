// DESCRIPTION: Script to parse text documents and estimate reading time

// 0) IMPORTS: =================================================================
const path                      = require("node:path");
const fs                        = require("node:fs");
const {
  warn, 
  ok, 
  info, 
  xmark
} = require("./utils");

// 1) OUR FUNCTIONS: ===========================================================

function extractTextFromMarkdown(markdownText, tagsToExclude) {

  // Remove Markdown headings (#), emphasis (* or _), links ([text](link)), and inline code (`code`)
  let cleanedText = markdownText.replace(/(^#.*$|\*{1,2}|_|\[.*?\]\(.*?\)|`.*?`)/gm, '');

  // Remove the specified HTML tags
  for (const tagName of tagsToExclude) {
    const regex = new RegExp(`<${tagName}[^>]*>[\\s\\S]*?<\\/${tagName}>`, 'gi');
    cleanedText = cleanedText.replace(regex, '');
  }

  return cleanedText.trim();
}

function countWords(text) {
  // Use a regular expression to split the text by spaces
  const words = text.split(/\s+/);
  return words.length;
}

function calculateReadingTime(text, wordsPerMinute) {
  const wordCount = countWords(text);
  const readingTimeMinutes = wordCount / wordsPerMinute;

  // You can round the reading time to the nearest minute or use Math.ceil for a more conservative estimate.
  return Math.round(readingTimeMinutes);
}

// 2) OUR VARIABLES: ===========================================================

const averageReadingSpeed = 200; // Adjust this value based on your target audience.
const tagsToExclude = ['iframe', 'blockquote', 'p', 'a'];

// 3) ACTION!!! ================================================================

if (require.main === module) {
  // console.log("This script was executed directly.");
  init();
} else {
  // console.log("This script was imported as a module.");
}

function init() {

  const fileName = process.argv[2];

  if (!fileName) {
    warn("No filename.");
    process.exit();
  }

  try {
    
    info(`Processing ${fileName}`);
    const file = fs.readFileSync(fileName, "utf-8");
    const extractedText = extractTextFromMarkdown(file, tagsToExclude);
    console.log(extractedText);

    info(`Calculating Reading Time with Reading Speed: ${averageReadingSpeed} Words Per Minute.`)
    const estimatedReadingTime = calculateReadingTime(extractedText, averageReadingSpeed);

    ok(`Estimated Reading Time: ${estimatedReadingTime} minutes`);


  } catch (error) {

    warn(error.message);
    
  }
}

// 4) EXPORT SECTION: ==========================================================

module.exports = {
  countWords,
  calculateReadingTime
};
