/*
  hint. the step numbers in this file are for JS Tutor
  the debugger and trace button will be a little different
  the program works the same everywhere
    each tool just visualizes things differently
*/

// 1: use strict
'use strict';

// 2: declare variable flipper and declare the function assigned to it
const flipper = (param1, param2) => {
  // 4, 11: a return value is generated
  return param2 + param1;
  // 5, 12: parent result variable is declared & assigned
};

// 3: flipper is executed, creating a new frame
//    parameters are assigned values using 'a' & 'b'
const result1 = flipper('a', 'b');
// 6: the value of result1 is compared to the expected value
const test1 = result1 === 'ba';
// 7: the first assertion is evaluated
console.assert(test1, 'Test 1');

// 8: variable is declared & assigned
const arg1 = 'x';
// 9: variable is declared & assigned
const arg2 = 'y';

// 10: flipper is executed, creating a new frame
//    parameters are assigned values from arg1 & arg2
const result2 = flipper(arg1, arg2);

// 13: the value of result2 is compared to the expected value
const test2 = result2 === 'yx';
// 14: the second assertion is evaluated
console.assert(test2, 'Test 2');
