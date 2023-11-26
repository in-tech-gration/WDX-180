// #todo

'use strict';

console.log('-- begin --');

/*
  all variables used inside this function's body are declared as parameters
  the variables get their value from arguments when the function is called
*/

const usesParameters = (param1, param2) => {
  return `${param1} -> ${param2}`;
};

const fromParams1 = usesParameters('hi', 'bye');
console.log('fromParams1:', fromParams1);

const fromParams2 = usesParameters('a', 'b');
console.log('fromParams2:', fromParams2);

console.log('-- end --');
