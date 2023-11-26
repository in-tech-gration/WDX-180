'use strict';

console.log('-- begin --');

/*
  hint: use JS Tutor
*/

// you can also use bracket notation to define key names
//  this isn't very common, but is very nice when it's needed

const key1 = 'firstName';
const value1 = 'Brendan';

const key2 = 'lastName';
const value2 = 'Eich';

const computedPropertyNames = {
  [key1]: value1,
  [key2]: value2,
};

console.log(computedPropertyNames.firstName); // 'Brendan'
console.log(computedPropertyNames.lastName); // 'Eich'

// https://ui.dev/computed-property-names/

console.log('-- end --');
