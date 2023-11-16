// #todo

'use strict';

let letters = null;
while (letters === null) {
  letters = prompt('enter some letters');
}

let noVowels = '';
for (let character of letters) {
  if ('aeiouAEIOU'.includes(character)) {
    continue;
  }
  noVowels = noVowels + character;
}

alert(letters + ' -> ' + noVowels);
