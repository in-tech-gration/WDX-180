// #todo

'use strict';

const animalName = 'frog';

let coolThing = '';

while (true) {
  coolThing = prompt('tell me something about ' + animalName + 's');

  if (coolThing === '' || coolThing === null) {
    alert('that is not something');
    continue;
  }

  if (coolThing.toLowerCase().includes(animalName)) {
    break;
  }

  alert('nope, not about frogs.  try again.');
}

alert('i just learned something cool about frogs!\n\n- "' + coolThing + '"');
