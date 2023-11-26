'use strict';

console.log('-- begin --');

/* Circular References

  Objects can store references to themselves ... !

*/

{
  // circular object
  const a = {};
  a.x = a;
  console.log(a);
  console.assert(a.x === a);
  console.assert(a.x.x === a);
  // ...
}

{
  // circular objects
  const a = {};
  const b = {};
  a.b = b;
  b.a = a;
  console.log(a);
  console.log(b);
  console.assert(a.b === b);
  console.assert(b.a === a);
  console.assert(a.b !== b.a);
}

console.log('-- end --');
