// #todo

'use strict';

console.log('-- begin --');

// determine if something is true about every entry in an array
//  this is similar to reducing, but more specific
//  you will always end up with true or false
// psst.  use the Debugger or JS Tutor
//  practice using breakpoints to skip to the lines you want to study

const _1_strings = ['char', 'boat', 'tree', 'boar'];

// is every entry 4 letters long?
let _1_allLengthFour = true;
for (const string of _1_strings) {
  _1_allLengthFour = _1_allLengthFour && string.length === 4;
}

// does every string contain an "a"?
let _1_allHaveAnA = true;
for (const string of _1_strings) {
  _1_allHaveAnA = _1_allHaveAnA && string.includes('a');
}

// are all entries true?
const _3_booleans = [true, true, true, true];
let _3_allTrue = true;
for (const boolean of _3_booleans) {
  _3_allTrue = _3_allTrue && boolean;
}

// are all entries false?
const _4_booleans = [false, false, false, true];
let _4_allFalse = true;
for (const boolean of _4_booleans) {
  _4_allFalse = _4_allFalse && !boolean;
}

console.log('-- end --');
