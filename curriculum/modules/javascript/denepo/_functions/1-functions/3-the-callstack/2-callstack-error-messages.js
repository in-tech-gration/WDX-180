'use strict';

/* error messages printed to the console log the call stack
  study this example in the debugger
  compare what you see in the "call stack" debugger tab to what's logged
*/

let callStackRoot = 0;

const func1 = (depth) => {
  console.log('entering func 1');
  if (depth === 3) {
    throw new Error('read the call stack!');
  }
  console.log('leaving func 1');
};

console.log('this call stack will be 1 call deep');
func1(callStackRoot + 1);

const func2 = (depth) => {
  console.log('entering func 2');
  func1(depth + 1);
  console.log('leaving func 2');
};

// it's backwards from what you might expect
//  2 will open first, but 1 will close first
console.log('this call stack will be 2 calls deep');
func2(callStackRoot + 1);

const func3 = (depth) => {
  console.log('entering func 3');
  func2(depth + 1);
  console.log('leaving func 3');
};

console.log('this call stack will be 3 calls deep');
func3(callStackRoot + 1);
