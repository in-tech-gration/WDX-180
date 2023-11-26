// #todo

'use strict';

console.log('-- begin --');

/*
  all variables used inside this function's body are declared locally
  the variables get their value from a local initialization
*/

const usesLocals = () => {
  const local1 = 'town';
  const local2 = 'ship';
  return `${local1}, ${local2}`;
};

const fromLocals1 = usesLocals();
console.log('fromLocals1:', fromLocals1);

const fromLocals2 = usesLocals();
console.log('fromLocals2:', fromLocals2);

console.log('-- end --');
