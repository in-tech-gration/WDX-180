'use strict';

/* console.trace

  this is a handy console method for debugging
  it works just like console.log except:

    it also logs the current call stack

*/

let callStackRoot = 0;

const func1 = (depth) => {
  console.trace('entering func 1');
  console.log('depth:', depth);
  console.trace('leaving func 1');
};

console.trace('the next call stack will be 1 deep');
func1(callStackRoot + 1);

const func2 = (depth) => {
  console.trace('entering func 2');
  func1(depth + 1);
  console.trace('leaving func 2');
};

// it's backwards from what you might expect
//  2 will open first, but 1 will close first
console.trace('the next call stack will be 2 deep');
func2(callStackRoot + 1);

const func3 = (depth) => {
  console.trace('entering func 3');
  func2(depth + 1);
  console.trace('leaving func 3');
};

console.trace('the next call stack will be 3 deep');
func3(callStackRoot + 1);
