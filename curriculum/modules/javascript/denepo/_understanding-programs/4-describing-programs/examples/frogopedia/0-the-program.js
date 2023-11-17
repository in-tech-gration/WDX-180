// #todo

'use strict';

/* 0. The Program

  Read and run the program a couple times to get an idea what's going on

  You don't need to go too much into detail yet
  the next steps will lead you to every detail of the program

*/

let userInput = '';

let inputIsAboutFrogs = false;
while (!inputIsAboutFrogs) {
  userInput = prompt('tell me something about frogs');

  if (userInput === '' || userInput === null) {
    alert('that is not something');
    continue;
  }

  if (userInput.toLowerCase().includes('frog')) {
    inputIsAboutFrogs = true;
    continue;
  }

  alert('nope, not about frogs.  try again.');
}

alert('i just learned something cool about frogs!\n\n- "' + userInput + '"');
