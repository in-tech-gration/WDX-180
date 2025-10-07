// #todo

'use strict';

let letters = null;
while (letters === null) {
  letters = prompt('enter some letters');
}

let noConsonants = true;
for (let letter of letters) {
  let lowerCaseLetter = letter.toLowerCase();
  if ('bcdfghjklmnpqrstvwxyz'.includes(lowerCaseLetter)) {
    noConsonants = false;
  }
}

let message = '';
if (noConsonants) {
  message = '"' + letters + '" has no consonants';
} else {
  message = '"' + letters + '" has at least one consonant';
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
