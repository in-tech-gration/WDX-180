'use strict';

console.log('-- begin --');

/*
  for...of loops make it very easy to iterate through an array
  but there are some limitations!

  you can only go through the items from the beginning to the end
  if you want to, for example:
    access every other item
    or go backwards through the array
  you will need a normal for loop

  the two examples below are written with normal for loops
  can you figure out how to get the same logs using a for...of loop?

*/

const trees = ['birch', 'larch', 'oak', 'maple'];
console.log(trees);

console.log('-- reverse order: for ');
for (let i = trees.length - 1; i >= 0; i--) {
  const tree = trees[i];
  console.log('- ' + tree);
}

console.log('-- reverse order: for-of ');
for (const tree of trees) {
}

console.log('-- every other item: for ');
for (let i = 1; i <= trees.length - 1; i += 2) {
  const tree = trees[i];
  console.log('- ' + tree);
}

console.log('-- every other item: for-of ');
for (const tree of trees) {
}

console.log('-- end --');
