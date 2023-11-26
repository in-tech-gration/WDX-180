// #todo

'use strict';

console.log('-- begin --');

/*
  hint: use JS Tutor
*/

// do you find yourself doing this?
const coach1 = 'luis';
const coach2 = 'mateus';
const coach3 = 'gregory';

// maybe it's time for this:
const coaches = ['luis', 'mateus', 'gregory'];

// you can access individual entries with square brackes:
//  (confusingly, the first entry is actually 0!)
console.assert(coaches[0] === 'luis', 'Test 1: Luis');
console.assert(coaches[1] === 'mateus', 'Test 2: Mateus');
console.assert(coaches[2] === 'gregory', 'Test 3: Gregory');

// you can find the length of an array like so:
console.assert(coaches.length === 3, 'Test 4: length');

// beware!  array indices & array lengths are off by 1:
console.assert(coaches[3] === undefined, 'Test 5: too far!');
console.assert(coaches[2] === 'gregory', 'Test 6: just right');

console.log('-- end --');
