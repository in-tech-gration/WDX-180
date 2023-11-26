'use strict';

// to avoid side effects:
//  1. create a new array
//  3. read from the old array
//  4. write values to a new array

const createModifiedCopy = (oldArray = [], index = 0, newValue = '') => {
  const newArray = [];
  for (const item of oldArray) {
    newArray.push(item);
  }
  newArray[index] = newValue;
  return newArray;
};

const furniture = ['table', 'chair', 'sofa'];

const copy1 = createModifiedCopy(furniture, 1, '');
console.assert(copy1[1] === '', 'Test 1 a');
console.assert(furniture[1] === 'chair', 'Test 1 b');

const copy2 = createModifiedCopy(furniture, 2, 'carpet');
console.assert(copy2[2] === 'carpet', 'Test 2 a');
console.assert(furniture[2] === 'sofa', 'Test 2 b');

const copy3 = createModifiedCopy(furniture, 3, 'lamp');
console.assert(copy3[3] === 'lamp', 'Test 3 a');
console.assert(furniture[3] === undefined, 'Test 3 b');

// PS. there are many ways to copy an array in JS.
// we chose a loop to show the idea of creating and filling a new array
//  https://www.samanthaming.com/tidbits/35-es6-way-to-clone-an-array/
//  https://futurestud.io/tutorials/clone-copy-an-array-in-javascript-and-node-js
