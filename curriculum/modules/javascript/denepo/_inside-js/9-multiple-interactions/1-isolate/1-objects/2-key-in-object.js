'use strict';

console.log('-- begin --');

/*
  the best way for now to check if a key exists in an object is to use `in`
  there are other ways to check for keys in an object, but this works well and is easy to read

*/

const fridge = {
  milk: 'fresh',
  bread: 'old',
  potatoes: 'fresh',
  carrots: 'old',
};

const carrotsInFridge = 'carrots' in fridge;
console.log('carrots in fridge:', carrotsInFridge);

const applesInFridge = 'apples' in fridge;
console.log('apples in fridge:', applesInFridge);

// but wait, why not just check if a value is `undefined`?

fridge.rice = undefined;

// because a key can exist and have the value `undefined`
// which is not the same as a key not existing
//  even if both of them give the value `undefined`

const riceInFridge = 'rice' in fridge;
console.log('rice:', fridge.rice, 'rice in fridge:', riceInFridge);

const pastaInFridge = 'pasta' in fridge;
console.log('pasta:', fridge.pasta, 'pasta in fridge:', pastaInFridge);

console.log('-- end --');
