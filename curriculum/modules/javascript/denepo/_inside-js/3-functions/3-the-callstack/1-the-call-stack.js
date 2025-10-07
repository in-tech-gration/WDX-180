'use strict';

/* the call stack happens when you call a function from inside a function call
  this is much easier to visualize than to describe, so try using ...
    the debugger, trace & JS Tutor!

  Colt Steele explains: https://www.youtube.com/watch?v=W8AeMrVtFLY
*/

let callStackRoot = 0;

const func1 = (depth) => {
  console.log('entering func 1');
  console.log('depth:', depth);
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
