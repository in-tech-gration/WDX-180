# Block Scope

Curly braces create a new _block scope_. There are lots of great explanations of
block scope out there, but let's see if you can come up with your own after
studying these examples.

```js
'use strict';
console.log('-- block scope --');

{
  let innerVariable = 'not available outside the curly braces';
}

innerVariable; // ReferenceError
```

<details>
<summary>🥚 inner and outer scope</summary>

```js
'use strict';
console.log('-- block scope: inner and outer scope --');

let outerVariable = 'declared outside';
console.log(outerVariable); // 'declared outside'

// begin a new block scope
{
  // variables declared outside of curly are available inside the curly braces
  outerVariable = 'assigned inside';
  console.log(outerVariable); // 'assigned inside'

  let innerVariable = 'declared inside';
  console.log(innerVariable); // 'declared inside'
}

// changes made inside the scope stay when you leave the scope
console.log(outerVariable); // 'assigned inside'
```

</details>
<details>
<summary>🥚 shadowing</summary>

```js
'use strict';
console.log('-- block scope: shadowing --');

// shadowing is when you declare a variable inside a scope
//  that has the same name as a variable in the outer scope

// you should avoid variable shadowing
//  it makes your code harder to understand

let favoriteTree = 'palm';
console.log(favoriteTree); // 'palm'
{
  // the outer variable is "replaced" inside by the new variable
  // it's no longer possible to modify the outer variable from the inner scope
  let favoriteTree = 'date'; // no error!
  console.log(favoriteTree); // 'date'

  favoriteTree = 'cedar';
  console.log(favoriteTree); // 'cedar'
}
console.log(favoriteTree); // 'palm'
```

</details>

---

## Block Scope Errors

Scopes are useful for making your programs easy to read, understand and debug,
but now you can make some mistakes that weren't possible before:

<details>
<summary>🥚 declaring in a scope, using out of scope</summary>

```js
'use strict';
console.log('-- declaring in a scope, using out of scope --');

// begin a new block scope
{
  let innerVariable = 'declared inside';
  console.log(innerVariable); // 'declared inside'
}

// variables declared in the inner scope are NOT available outside the scope
console.log(innerVariable); // ReferenceError
```

## </details>

## Nested Scopes

You can create scopes inside of scopes. This is common in control flow, for
example when you nest conditionals inside loops (more on this in the coming
chapters).

<details>
<summary>🥚 nested scopes</summary>

```js
'use strict';
// hint: try the 'variables' button
console.log('-- nested scopes --');

let outer = 'a';
{
  let inner = '-';
  {
    let innerInner = 'b';
    outer = outer + inner + innerInner;
  }
  {
    let innerInner = 'c';
    outer = outer + inner + innerInner;
  }
  outer = inner + outer + inner;
}
console.log(outer); // '-a-b-c-'
```

</details>

---

## Tracing Blocks

When you trace code with block scopes you need to pay extra attention to when a
scope begins and when a scope ends.

The _steps_ trace table has an option for "enter scope" and "leave scope", you
can use these without a name to to show that when a new scope has opened or
closed. Any variable that was declared inside the block is _scoped_ to that
block.
