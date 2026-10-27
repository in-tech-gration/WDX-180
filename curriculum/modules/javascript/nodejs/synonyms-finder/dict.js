#!/usr/bin/env node
import json from "./db.js";
import chalk from "chalk";
import { select, text } from '@clack/prompts';

// Source - https://stackoverflow.com/a/36566052
// Posted by overlord1234, modified by community. See post 'Timeline' for change history
// Retrieved 2026-10-14, License - CC BY-SA 3.0
function similarity(s1, s2) {
  var longer = s1;
  var shorter = s2;
  if (s1.length < s2.length) {
    longer = s2;
    shorter = s1;
  }
  var longerLength = longer.length;
  if (longerLength == 0) {
    return 1.0;
  }
  return (longerLength - editDistance(longer, shorter)) / parseFloat(longerLength);
}

function editDistance(s1, s2) {
  s1 = s1.toLowerCase();
  s2 = s2.toLowerCase();

  var costs = new Array();
  for (var i = 0; i <= s1.length; i++) {
    var lastValue = i;
    for (var j = 0; j <= s2.length; j++) {
      if (i == 0)
        costs[j] = j;
      else {
        if (j > 0) {
          var newValue = costs[j - 1];
          if (s1.charAt(i - 1) != s2.charAt(j - 1))
            newValue = Math.min(Math.min(newValue, lastValue),
              costs[j]) + 1;
          costs[j - 1] = lastValue;
          lastValue = newValue;
        }
      }
    }
    if (i > 0)
      costs[s2.length] = lastValue;
  }
  return costs[s2.length];
}

const selection = await select({
  message: 'Select an option:',
  options: [
    { value: 'synonyms', label: 'Find a synonym', hint: 'similar words' },
    { value: 'antonyms', label: 'Find an antonym', hint: 'opposite words' },
  ],
  maxItems: 5, // Maximum number of items to display at once
});

const word = await text({
  message: 'Enter a word to find ' + selection + " for:",
});

// console.log({selection, word}); // "synonyms" || "antonyms"
const firstLetter = word[0]
  .toUpperCase()
  .normalize("NFD")
  .replace(/\p{Diacritic}/gu, "");
// https://stackoverflow.com/a/37511463

// console.log(word, firstLetter); 
// ωδή -> Ω -> 
const synonyms = json[firstLetter][word];

if (!synonyms) {

  // ωδές -> similarity( Ω, ωδές ) -> 0, 0.5, 1, 0.54, 0.333
  // Loop over all words that start with Ω (firstLetter), do a similarity check
  const options = [];

  for (const w in json[firstLetter]) {
    const sd = similarity(w, word);

    if (sd > 0.49) {
      // console.log(word, w, Math.round(sd * 100) + "%");
      options.push({
        value: w,
        label: `${w} (${Math.round(sd * 100) + "%"})`
      })
    }

  }

  const selection = await select({
    message: 'Select an option:',
    options,
    maxItems: 5, // Maximum number of items to display at once
  });

  // console.log(selection);

  // console.log(chalk.redBright(`Error: could not find synonyms for the word '${word}'`));
  const synonyms = json[firstLetter][selection];

  console.log(
    `Found synonyms for word '${chalk.yellowBright(selection)}' => ${chalk.greenBright(synonyms)}`
  );

  process.exit(1);
}

console.log(
  `Found synonyms for word '${chalk.yellowBright(word)}' => ${chalk.greenBright(synonyms)}`
);

// console.log(json);
