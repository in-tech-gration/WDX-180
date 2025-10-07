// #todo

import { shiftCharacters } from './utils/shift-characters.js';

let userInput = '';
let unicodeShift = NaN;

let userConfirmed = false;
while (!userConfirmed) {
  /* gather a string from the user */
  userInput = prompt(
    'enter a phrase, each character will be shifted by character code:',
  );

  /* make sure the user input something */
  if (userInput === '' || userInput === null) {
    alert('nope, enter something');
    continue;
  }

  /* ask the user for a number */
  while (true) {
    const unicodeShiftInput = prompt(
      'how many unicode numbers do you want the characters to shift?',
    );

    /* make sure the user input something */
    if (unicodeShiftInput === null || unicodeShiftInput === '') {
      alert('enter something');
      continue;
    }

    /* convert their string to a number */
    unicodeShift = Number(unicodeShiftInput);

    /* make sure the user input a valid number */
    if (Number.isNaN(unicodeShift)) {
      alert('"' + unicodeShiftInput + '" is not a number');
    } else {
      break;
    }
  }
  const confirmMessage =
    'is this correct?\n\n' + '- "' + userInput + '"\n' + '- ' + unicodeShift;
  userConfirmed = confirm(confirmMessage);
}

// BEGIN: refactor to use `shiftCharacter`
let encodedString = '';
for (const character of userInput) {
  const characterCode = character.charCodeAt();
  const newCharCode = characterCode + unicodeShift;
  const encodedCharacter = String.fromCharCode(newCharCode);
  encodedString += encodedCharacter;
}
// END: refactor

// use the return value
const finalMessage = `"${userInput}" -> "${encodedString}"`;
alert(finalMessage);
