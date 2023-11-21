// #todo

'use strict';

/*
  the original program for reference
  and in case you need to start over in an exercise ;)
*/

let mayHaveDuplicates = null;
while (mayHaveDuplicates === null) {
  mayHaveDuplicates = prompt('enter something with no duplicate characters');
}

let hasNoDuplicates = '';
for (let char of mayHaveDuplicates) {
  let isDuplicate = hasNoDuplicates.includes(char);
  if (isDuplicate) {
    break;
  }
  hasNoDuplicates = hasNoDuplicates + char;
}

if (hasNoDuplicates.length === mayHaveDuplicates.length) {
  alert('well done!');
} else {
  alert('too bad, try again');
}
