'use strict';

console.log('-- begin --');

const trees = ['birch', 'larch', 'oak'];

// this is iterating through the items in an array with a normal for loop:
console.log('normal for loop');

for (let i = 0; i < trees.length; i++) {
  const tree = trees[i];
  console.log('- ' + tree);
}

// for ... of lets you do the same thing with simpler syntax
//  this makes code easier to read
//  and helps to avoid small mistakes
console.log('for ... of loop');

for (const tree of trees) {
  console.log('- ' + tree);
}

// there are some things you can't do with a for ... of loop
//  but these things are less common
console.log('print elements in reverse order');

for (let i = trees.length - 1; i >= 0; i--) {
  const tree = trees[i];
  console.log('- ' + tree);
}

console.log('infinite loops are still possible with for-of');
// this happens with arrays but not with strings

const allNumbers = [0];
for (const number of allNumbers) {
  allNumbers.push(number + 1);
  console.log(allNumbers);
}

console.log('-- end --');
