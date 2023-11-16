// #todo

'use strict';

let text = null;
while (text === null) {
  text = prompt('enter some text');
}

let hasAVowel = false;
for (let letter of text) {
  if ('aeiouAEIOU'.includes(letter)) {
    hasAVowel = true;
  }
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
  - how many loops are in this program?
    - what is the role of each loop?
  - what is most interesting to you about this program? or surprising? or confusing?

  done with these questions?  try "ask me" and "random line"
*/
