// #todo

'use strict';

console.log('-- begin --');

/*
  hint: use JS Tutor
*/

// you can also change the entries in an array after declaring it

const colors = ['red', 'orange', 'blue'];

// remember how .length and indexes are off by 1?
console.assert(colors.length === 3, 'Test 1: colors.length');
console.assert(colors[3] === undefined, 'Test 2: too far!');
console.assert(colors[2] === 'blue', 'Test 3: just right');

// you can add values to an array after creating them
colors[3] = 'purple';
console.assert(colors.length === 4, 'Test 4: new length');
console.assert(colors[3] === 'purple', 'Test 5: new item');

// you can also change values after creating an array
colors[0] = 'green';
console.assert(colors.length === 4, 'Test 5: same length');
console.assert(colors[0] === 'green', 'Test 6: new item');

console.log('-- end --');
