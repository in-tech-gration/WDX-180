// #todo

'use strict';

let text = null;
while (text === null) {
  text = prompt('enter some text, with or without vowels');
}

let hasAVowel = false;

let index = 0;
while (index < text.length) {
  let nextLetter = text[index];
  if ('aeiou'.includes(nextLetter)) {
    hasAVowel = true;
    break;
  }
  index = index + 1;
}

let message = '';
if (hasAVowel) {
  message = '"' + text + '" has at least one vowel';
} else {
  message = '"' + text + '" does not have any vowels';
}

alert(message);

/*
  - find all the variable declarations
  - mark each variable use with a different color (like in the ?variables lens)
  - use lines to connect each variable declaration to it's uses
  - does this program have a stepper variable?
    - if so, what does it represent? how does it step?
  - does this program have a boolean flag?
    - if so, what does it represent? how is it toggled?
  - how many while loops are in this program?
    - what is the role of each while loop?
  - what is most interesting to you about this program? or surprising? or confusing?

  done with these questions?  try "ask me" and "random line"
*/
