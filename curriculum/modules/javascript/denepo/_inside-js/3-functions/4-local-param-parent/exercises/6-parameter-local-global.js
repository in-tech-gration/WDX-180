// #todo

'use strict';

console.log('-- begin --');

let global = '.';

const funk = (parameter) => {
  const local = `funky ${global}`;
  global = `${global} ${global}`;
  return `${parameter} ${local} ${global}`;
};

const globalTest1 = global === _;
console.assert(globalTest1, 'Test 1: global');

const funkReturn1 = funk('hello');
const funkTest1 = funkReturn1 === _;
console.assert(funkTest1, 'Test 2: funk');

const globalTest2 = global === _;
console.assert(globalTest2, 'Test 3: global');

global = `${global} hi`;

const globalTest3 = global === _;
console.assert(globalTest3, 'Test 4: global');

const funkReturn2 = funk('boat');
const funkTest2 = funkReturn2 === _;
console.assert(funkTest2, 'Test 5: funk');

const globalTest4 = global === _;
console.assert(globalTest4, 'Test 6: global');

global = `${global} bye.`;

const globalTest5 = global === _;
console.assert(globalTest5, 'Test 7: global');

console.log('-- end --');
