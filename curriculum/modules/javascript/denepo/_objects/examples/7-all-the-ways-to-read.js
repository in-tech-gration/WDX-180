'use strict';

console.log('-- begin --');

/*
  hint: use JS Tutor
*/

// the many ways to read values from an object

const lukesFather = {
  firstName: 'Darth',
  lastName: 'Vader',
};

// using dot notation
const firstNameDot = lukesFather.firstName;
const lastNameDot = lukesFather.lastName;

// using bracket notation
const findFirst = 'firstName';
const findLast = 'lastName';

const firstNameBracket = lukesFather[findFirst];
const lastNameBracket = lukesFather[findLast];

console.log('-- end --');
