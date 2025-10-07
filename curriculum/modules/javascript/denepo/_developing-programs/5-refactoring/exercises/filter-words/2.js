// #todo

'use strict';

/*
  refactor this program to use `break`/`continue` in the `for-of` loop
*/

let sentence = '';

let isValid = false;
while (!isValid) {
  sentence = prompt('enter a sentence with at least 2 words');

  if (sentence === null) {
    alert('there is no escape');
    continue;
  }

  sentence = sentence.trim();
  if (sentence.length < 3) {
    alert('"' + sentence + '" is too short to have two words');
  } else if (!sentence.includes(' ')) {
    alert('there is only one word');
  } else {
    isValid = true;
  }
}

sentence = sentence + ' ';

let newSentence = '';

let nextWord = '';
for (const character of sentence) {
  if (character === ' ') {
    const keep = confirm(
      'do you want to keep this word:\n\n"' + nextWord + '"',
    );
    if (keep) {
      newSentence = newSentence + character + nextWord;
    }
    nextWord = '';
  } else {
    nextWord = nextWord + character;
  }
}

alert(newSentence);
