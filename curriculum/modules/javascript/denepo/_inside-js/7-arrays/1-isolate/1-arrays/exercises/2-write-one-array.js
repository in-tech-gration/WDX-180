// #todo

'use strict';

console.log('-- begin --');

// write arrays to pass the assertions

const food = _;

console.assert(food.length === 5, 'Test 1: length');
console.assert(food[4] === 'carrot', 'Test 1: a');
console.assert(food[2] === 'cookie', 'Test 1: b');
console.assert(food[0] === 'grape', 'Test 1: c');
console.assert(food[1] === 'apple', 'Test 1: d');
console.assert(food[3] === 'milk', 'Test 1: e');

const animals = _;

console.assert(animals.length === 4, 'Test 2: length');
console.assert(animals[0] === 'cat', 'Test 2: a');
console.assert(animals[1] === animals[3], 'Test 2: b');
console.assert(animals[2] === 'mouse', 'Test 2: c');
console.assert(animals[3] === 'dolphin', 'Test 2: d');

const plants = _;
// leave this code as it is!
const temp = plants[2];
plants[2] = plants[0];
plants[0] = temp;

console.assert(plants.length === 4, 'Test 3: length');
console.assert(plants[0] === 'carrot', 'Test 3: a');
console.assert(plants[1] === 'tree', 'Test 3: b');
console.assert(plants[2] === 'bush', 'Test 3: c');
console.assert(plants[3] === 'grass', 'Test 3: d');

const mixed = _;
// leave this code as it is!
mixed[1] = false;
mixed[0] = mixed[1];
mixed[1] = null;

console.assert(mixed.length === 4, 'Test 4: length');
console.assert(mixed[0] === false, 'Test 4: a');
console.assert(mixed[1] === null, 'Test 4: b');
console.assert(mixed[2] === true, 'Test 4: c');
console.assert(mixed[3] === 'tall', 'Test 4: d');

console.log('-- end --');
