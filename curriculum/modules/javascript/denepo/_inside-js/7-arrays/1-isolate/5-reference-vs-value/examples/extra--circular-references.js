'use strict';

console.log('-- begin --');

/* Circular References

  Arrays can store references to themselves ... !

*/

{
  // one array
  const a = [];
  a.push(a);
  console.log(a);
  console.assert(a[0] === a);
  console.assert(a[0][0] === a);
}

{
  // two arrays
  const x = [];
  const y = [];
  x.push(y);
  y.push(x);
  console.log(x);
  console.log(y);
  console.assert(x[0] === y);
  console.assert(y[0] === x);
  console.assert(x[0] !== y[0]);
}

console.log('-- end --');
