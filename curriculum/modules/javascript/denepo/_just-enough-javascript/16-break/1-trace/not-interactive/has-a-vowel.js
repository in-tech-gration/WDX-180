// #todo

'use strict';

let letters = 'xyz';
// let letters = 'aeiou';
// let letters = 'zaei';
// let letters = 'aeiz';
// let letters = 'xyza';
// let letters = 'axyz';
// let letters = '';

let hasAVowel = false;

for (let letter of letters) {
  if ('aeiou'.includes(letter)) {
    hasAVowel = true;
    break;
  }
}

if (hasAVowel) {
  console.log('"' + letters + '" has at least one vowel');
} else {
  console.log('"' + letters + '" does not have any vowels');
}
