'use strict';

// PS. study this in JS Tutor!

// variables declared in a function body are SCOPED to that function
//  this includes parameters and locally declared variables
const findTheType = (param) => {
  const result = typeof param;
  return result;
};

// what happens if you uncomment the extra console.logs below?

console.log('-- example 1 --');
const arg1 = 5;
const returned1 = findTheType(arg1);
console.log(typeof returned1, returned1);
// console.log(typeof param, param);
// console.log(typeof result, result);

console.log('-- example 2 --');
const arg2 = 'hi!';
const returned2 = findTheType(arg2);
console.log(typeof returned2, returned2);
// console.log(typeof param, param);
// console.log(typeof result, result);

console.log('-- example 3 --');
const arg3 = null;
const returned3 = findTheType(arg3);
console.log(typeof returned3, returned3);
// console.log(typeof param, param);
// console.log(typeof result, result);
