// #todo

"use strict";

/* 4. Goals

  So you know what the program does, and how the lines of code work, it's time to
  start zooming out again!

  A "goal" an important step in the program, it can be a single line of code or
  many lines of code. What's important is that a goal achieves one important step
  along the way from the program's initial input to it's final output. One way to
  decide which lines belong to the same goal is to look at your _connections_
  comments. If you see a group of lines that seem to be closely connected, you may
  be looking at a goal:

  - How does each line of code contribute to the program's overall behavior?
  - Which line(s) of code seem the most important?
  - How does the program's data change from before to after a goal?

  You can label goals with commented line dividers and a short title describe what
  important step happens in those lines

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

/* ----- declare variables to store program data ----- */

// declare, init: empty string (implementation)
//   (strategy)
//   this is used to capture user input from the prompt
//   once the input is valid, this variable is used by the final alert
let userInput = "";

/* ----- gather user input ----- */

// declare, init: false
//   a boolean flag variable used to determine when the I/O loop is finished
let inputIsAboutFrogs = false;

// check: the opposite of inputIsAboutFrogs (a boolean variable)
//   this is the Input/Output loop where user input is validated
//   it will continue looping until the user enters something about frogs
while (!inputIsAboutFrogs) {
  // call prompt: ask for something about frogs
  // write: the value returned from the prompt
  //   ask the user to input something about frogs
  //   this input will be validated
  //   when it's valid, the loop will end and it will be used in the final alert
  userInput = prompt("tell me something about frogs");

  /* -- did the user input nothing? -- */

  // check: check if `userInput` is an empty string or null
  //   if the user input nothing, it can't be about frogs
  if (userInput === "" || userInput === null) {
    // call alert: the cancel message
    //   let the user know their input was empty, fix it!
    alert("that is not something");
    // continue: to the beginning of the I/O loop
    //   skip the rest of this loop
    //   there's no point checking nothing to see if it's about frogs
    //   and also to avoid errors, null will cause an error if you search it
    continue;
  }

  /* -- does the input include 'frog'? -- */

  // check: check if "frog" (case insensitive) exists in the `userInput`
  //   if the user's input includes "frog", then it's valid!
  if (userInput.toLowerCase().includes("frog")) {
    // write: inputIsAboutFrogs to true
    //   this variable is our boolean flag
    //   setting it to true will end the while loop
    inputIsAboutFrogs = true;
    // continue: to the beginning of the I/O loop
    //   skip the final alert in this loop, the input was about frogs
    //   let the while loop evaluate the flag and finish
    continue;
  }

  // call alert: the invalid input message
  //   if we make it here, then the input was not about frogs
  //   so let the user know, then continue prompting them for new input
  alert("nope, not about frogs.  try again.");
}

/* ----- generate and alert the final output ----- */

// call alert: the success message
//   by the time we're here, the I/O loop has ended so the input must be about frogs
//   insert the user's frog info into a formatted string to alert
//   let the user know that they have entered a cool fact about frogs
alert('i just learned something cool about frogs!\n\n- "' + userInput + '"');
