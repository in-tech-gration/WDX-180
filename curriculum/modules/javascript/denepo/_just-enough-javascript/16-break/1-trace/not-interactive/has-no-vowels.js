// #todo

'use strict';

let letters = 'xyz';
// let letters = 'aeiou';
// let letters = 'zaei';
// let letters = 'aeiz';
// let letters = 'xyza';
// let letters = 'axyz';
// let letters = '';

let noVowels = true;

for (let letter of letters) {
  if ('aeiou'.includes(letter)) {
    noVowels = false;
    break;
  }
}

if (noVowels) {
  console.log('"' + letters + '" has no vowels');
} else {
  console.log('"' + letters + '" has at least one vowel');
}
