// #todo

'use strict';

// use `const` for every variable that is never reassigned

let input = null;
while (input === null) {
  input = prompt('enter some text, all the spaces will be removed');
  console.log(input);
}

let spaceless = '';
for (let character of input) {
  if (character !== ' ') {
    spaceless = spaceless + character;
    console.log(spaceless);
  }
}

let message = 'before: ' + input + '\nafter: ' + spaceless;
console.log(message);

alert(message);
