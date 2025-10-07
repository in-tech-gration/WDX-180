// #todo

'use strict';

/*
  modify the program to ask the user about horses instead of frogs.

  you can make this change by modifying only 1 line
*/

const animal = 'frog';

let userInput = '';
let inputIsAboutAnimal = false;

while (!inputIsAboutAnimal) {
  userInput = prompt('tell me something about ' + animal + 's');

  if (userInput === '' || userInput === null) {
    alert('that is not something');
    continue;
  }

  if (userInput.toLowerCase().includes(animal)) {
    inputIsAboutAnimal = true;
    continue;
  }

  alert('nope, not about ' + animal + 's.  try again.');
}

alert(
  'i just learned something cool about ' +
    animal +
    's!\n\n- "' +
    userInput +
    '"',
);
