'use strict';

// a side effect is when the function scope modifies data used somewhere else
//  modifying an array argument does exactly this!
//  the variable referencing this array outside the function will be effected
// Psst. Use JS tutor for this example

const modifyTheArray = (array = [], index = 0, value = '') => {
  array[index] = value;
};

const furniture = ['table', 'chair', 'sofa'];

modifyTheArray(furniture, 1, '');
console.assert(furniture[1] === '', 'Test 1');

modifyTheArray(furniture, 2, 'carpet');
console.assert(furniture[2] === 'carpet', 'Test 2');

console.assert(furniture[3] === undefined, 'Test 3');

modifyTheArray(furniture, 3, 'lamp');

console.assert(furniture[3] === 'lamp', 'Test 4');
