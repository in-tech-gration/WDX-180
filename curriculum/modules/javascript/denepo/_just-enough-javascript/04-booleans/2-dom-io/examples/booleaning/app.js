// these are the only functions you will need
import {
  whenFormDataChanges,
  readBoolean,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('bools', () => {
  // debugger;
  console.log('\n--- form data changed ---');

  // --- read user input ---

  let left = readBoolean('left-val');
  let right = readBoolean('right-val');

  console.log(left, right);

  // --- operate on the boolean values ---

  let not = !left;
  let equals = left === right;
  let notEquals = left === right;
  let and = left && right;
  let or = left || right;

  // --- create a message ---

  let notOut = '!' + left + ' -------------> ' + not;
  let equalsOut = left + ' === ' + right + ' -----> ' + equals;
  let notEqualsOut = left + ' !== ' + right + ' -----> ' + notEquals;
  let andOut = left + ' && ' + right + ' ------> ' + and;
  let orOut = left + ' || ' + right + ' ------> ' + or;

  let message =
    notOut +
    '\n' +
    equalsOut +
    '\n' +
    notEqualsOut +
    '\n' +
    andOut +
    '\n' +
    orOut;

  console.log(message);

  // --- display the message ---

  displayString('booleaned', message);
});
