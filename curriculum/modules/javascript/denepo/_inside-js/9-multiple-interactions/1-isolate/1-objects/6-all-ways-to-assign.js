'use strict';

console.log('-- begin --');

/*
  hint: use JS Tutor
*/

// the many ways to declare or assign values to an object

// write the object exactly as you want it in memory
const explicitObjectLiteral = {
  firstName: 'Brendan',
  lastName: 'Eich',
};

// variables to use for key names and values
const key1 = 'firstName';
const value1 = 'Brendan';

const key2 = 'lastName';
const value2 = 'Eich';

// add properties after declaration with bracket notation
const bracketNotation = {};
bracketNotation[key1] = value1;
bracketNotation[key2] = value2;

// compute property names using brackets
const computedPropertyNames = {
  [key1]: value1,
  [key2]: value2,
};

// variables for ES6 shorthand
const firstName = 'Brendan';
const lastName = 'Eich';

// use variable name for property key, and variable value for property value
const es6Shorthand = {
  firstName,
  lastName,
};

console.log('-- end --');
