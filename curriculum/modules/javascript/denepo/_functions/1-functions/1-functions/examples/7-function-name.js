// #todo

'use strict';
console.log('-- begin --');

/* function name

  fun fact: all functions have a name
  - you can find the name with the .name property
  - and the name will appear in the callstack

  all you need to think about for now is using the name in the callstack
    this can help find and fix your errors

*/

const throwsAnError = () => {
  throw new Error("find this function's name in the callstack");
};

console.log(throwsAnError.name);

throwsAnError();

/*

  extra: you can sometimes have anonymous functions
    don't worry about that just yet

*/

console.log('-- end --');
