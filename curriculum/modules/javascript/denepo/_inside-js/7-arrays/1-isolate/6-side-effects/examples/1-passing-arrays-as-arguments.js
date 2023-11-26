'use strict';

// passing arrays to functions actually passes a reference!
//  there is no new array created in memory
//  Psst. Use JS tutor for this example

const returnAnEntry = (array = [], index = 0) => {
  return array[index];
};

const furniture = ['table', 'chair', 'sofa'];

const firstEntry = returnAnEntry(furniture, 1);
console.assert(firstEntry === 'chair', 'Test 1');

const secondEntry = returnAnEntry(furniture, 2);
console.assert(secondEntry === 'sofa', 'Test 2');

const thirdEntryBeforePush = returnAnEntry(furniture, 3);
console.assert(thirdEntryBeforePush === undefined, 'Test 3');

furniture.push('dresser');

const thirdEntryAfterPush = returnAnEntry(furniture, 3);
console.assert(thirdEntryAfterPush === 'dresser', 'Test 4');
