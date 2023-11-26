'use strict';

console.log('-- begin --');

/*
  hint: use JS Tutor
*/

// ES6 introduced a new way to add object properties
//  it's kind of like bracket notation
//  but for object literals

const firstName = 'Brendan';
const lastName = 'Eich';

// use the name of the variable for the property name
// and the variable's value for the property value
const es6shortHand = {
  firstName,
  lastName,
};

console.log(es6shortHand.firstName); // 'Brendan'
console.log(es6shortHand.lastName); // 'Eich'

// https://ui.dev/computed-property-names/

console.log('-- end --');
