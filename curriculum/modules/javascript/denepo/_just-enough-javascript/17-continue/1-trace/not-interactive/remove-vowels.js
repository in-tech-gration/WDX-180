// #todo

'use strict';

let letters = 'xyz';
// let letters = 'aeiou';
// let letters = 'zaei';
// let letters = 'aeiz';
// let letters = 'xyza';
// let letters = 'axyz';
// let letters = '';

let noVowels = '';
for (let character of letters) {
  if ('aeiouAEIOU'.includes(character)) {
    continue;
  }
  noVowels = noVowels + character;
}

console.log(letters + ' -> ' + noVowels);
