'use strict';

// PS. study this in JS Tutor!

// RETURN VALUES allow you to send values from functions to parent scope
const findTheType = (param) => {
  return typeof param;
  console.log('nothing after a return statement is executed!');
};

// to save return values for later, assign them to a variable
const returned1 = findTheType(4.0);
console.log('returned1:', returned1);

const returned2 = findTheType('4.0');
console.log('returned2:', returned2);

const arg3 = null;
const returned3 = findTheType(arg3);
console.log('returned3:', returned3);

const arg4 = undefined;
const returned4 = findTheType(arg4);
console.log('returned4:', returned4);

const returned5 = findTheType();
console.log('returned5:', returned5);
