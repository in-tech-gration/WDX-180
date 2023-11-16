// these are the only functions you will need
import {
  whenFormDataChanges,
  readString,
  readNumber,
  readBoolean,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('values', () => {
  // debugger;
  console.log('\n--- form data changed ---');

  // --- read user input ---

  let strValue = readString('str');
  let numValue = readNumber('num');
  let boolValue = readBoolean('bool');

  console.log(strValue, numValue, boolValue);

  // --- find the types of each value ---

  let strType = typeof strValue;
  let numType = typeof numValue;
  let boolType = typeof boolValue;

  console.log(strType, numType, boolType);

  // --- create a message ---

  let strOut = strType + ' === typeof "' + strValue + '"';
  let numOut = numType + ' === typeof ' + numValue;
  let boolOut = boolType + ' === typeof ' + boolValue;

  let output = strOut + '\n' + numOut + '\n' + boolOut + '\n';

  // --- display the message ---

  displayString('types', output);
});
