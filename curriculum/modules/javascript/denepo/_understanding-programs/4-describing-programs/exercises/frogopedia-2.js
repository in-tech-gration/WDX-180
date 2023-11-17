// #todo

'use strict';

const animalName = 'frog';

let userInput = '';

let isNotFroggy = true;
while (isNotFroggy === true) {
  userInput = prompt('tell me something about frogs');

  if (userInput === '' || userInput === null) {
    alert('that is not something');
  } else if (userInput.toLowerCase().includes(animalName)) {
    isNotFroggy = false;
  } else {
    alert('nope, not about frogs.  try again.');
  }
}

alert('i just learned something cool about frogs!\n\n- "' + userInput + '"');
