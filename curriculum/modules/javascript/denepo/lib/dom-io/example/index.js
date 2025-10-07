import {
  whenFormDataChanges,
  readString,
  readBoolean,
  readNumber,
  displayString,
} from '../index.js';

whenFormDataChanges('repeaty', () => {
  // debugger;

  // --- read user input ---

  const text = readString('to-repeat');
  const repetitions = readNumber('repeats');
  const screaming = readBoolean('loud');

  // --- repeat the string input ---

  let repeated = '';
  while (repeated.length < text.length * repetitions) {
    repeated = repeated + text;
  }

  // --- set to upper or lower case ---

  let finalText = '';
  if (screaming) {
    finalText = repeated.toUpperCase();
  } else {
    finalText = repeated.toLowerCase();
  }

  // --- display the final text ---

  displayString('out', finalText);
});
