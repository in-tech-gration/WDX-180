// #todo

"use strict";

/* 2. Zooming In

  Understanding what each line of code does and how it works, without taking a
  step back to understand the whole program.

  - what language features are used in each line?
  - what data types and operators are in the program?
  - what does the variable name(s) tell you about the code?
  - what control flow do you see?
  - ... what else do you notice about each line?

  if a line is important you can use `!`
  if a line is not clear you you can use `?`
  if you want to return to a line later, maybe use `#`

  anything else?  up to you! These notes are to help you understand

  */

/* Frogopedia (program behavior)

  A user can share cool facts about frogs.
  - given the user cancels, they will be prompted again
  - given the input does not contain "frog", the user is told so and prompted for new input
  - given the input contains "frog" (case-insensitive), the program learns something cool

  test cases
  - given the user cancels
    (no output, the input is invalid)
  - given the input does not contain "frog"
    (no output, the input is invalid)
  - fiven the input does contain "frog"
    'frog' -> 'i just learned something cool about frogs!\n\n- "frog"'
    'FROGZZ' -> 'i just learned something cool about frogs!\n\n- "FROGZZ"'
    'green frogs do not exist.'
      -> 'i just learned something cool about frogs!\n\n- "green frogs do not exist."'
 */

// declare, init: empty string (implementation)
let userInput = "";

// declare, init: false
let inputIsAboutFrogs = false;

// check: the opposite of inputIsAboutFrogs (a boolean variable)
while (!inputIsAboutFrogs) {
  // call prompt: ask for something about frogs
  // write: the value returned from the prompt
  userInput = prompt("tell me something about frogs");

  // check: check if `userInput` is an empty string or null
  if (userInput === "" || userInput === null) {
    // call alert: the cancel message
    alert("that is not something");
    // continue: to the beginning of the I/O loop
    continue;
  }

  // check: check if "frog" (case insensitive) exists in the `userInput`
  if (userInput.toLowerCase().includes("frog")) {
    // write: inputIsAboutFrogs to true
    inputIsAboutFrogs = true;
    // continue: to the beginning of the I/O loop
    continue;
  }

  // call alert: the invalid input message
  alert("nope, not about frogs.  try again.");
}

// call alert: the success message
alert('i just learned something cool about frogs!\n\n- "' + userInput + '"');
