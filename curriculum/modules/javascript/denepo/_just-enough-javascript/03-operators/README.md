# Operators

Operators are what you use to process or change the data in your programs.
Operators take in values, do something, and return a new value. Each operator
has it's own rules about what it does and how it does it. To understand an
operator you need to understand these things:

- **Syntax**: how do you write the operator in your code?
- **Input(s)**: how many inputs does the operator take? what type are they? what
  are their values?
- **Output**: What does the operator evaluate to? What type does it return?
- **Behavior**: How does the operator use it's inputs to create an output?

Here are a few of the operators you will learn about in Welcome to JS, you will
learn more about operators as you need them:

<details>
<summary>🥚 <code>typeof</code> (type of)</summary>

```js
'use strict';
console.log('-> type of: typeof');

/* the typeof operator will tell you the type of a value

  syntax: the typeof operator takes in only one value
    -> typeof _
  inputs: you can pass any value to typeof
  output: a string saying what type the value is
  behavior: typeof returns the name of a value's type
    in Welcome to JS the important types will be:
    -> 'boolean'
    -> 'string'
    -> 'undefined'
    -> 'object' (null, confusing but that's the way it is)
    -> 'number'
*/

console.log(typeof true); // 'boolean'
console.log(typeof 'hello'); // 'string'
console.log(typeof undefined); // 'undefined'
console.log(typeof null); // 'object'
console.log(typeof 12); // 'number'
```

</details>
<details>
<summary>🥚 <code>===</code> (strict equality)</summary>

```js
'use strict';
console.log('-> strict equality: ===');

/* the strict comparison operator will tell you if two primitives are the same

  syntax: the === operator takes in two values
    -> _ === _
  inputs: you can pass any value to ===
  output: a boolean value saying if the two values are the same
  behavior: === checks the type AND the value
    if the types are different, it returns false
    if the values are different, it returns false
    if the type and value are the same, it returns true
*/

// true comparisons: same type, same value
console.log(true === true); // true
console.log(12 === 12); // true
console.log('hello' === 'hello'); // true
console.log(undefined === undefined); // true
console.log(null === null); // true

// false comparisons: same type, different value
console.log(12 === 1); // false
console.log('hello' === 'Hello'); // false
console.log(true === false); // false

// false comparisons: different type, different value
console.log('12' === 12); // false
console.log('undefined' === undefined); // false
console.log(true === 'true'); // false
console.log(100 === 'true'); // false
console.log(true === 1); // false
```

</details>
<details>
<summary>🥚 <code>+</code> (concatenation or addition)</summary>

```js
'use strict';
/*
  the plus operator is more complex
  it behaves differently depending on the types passed in
  it is also called something different depending on the types used
  (but the syntax is always the same)
*/

console.log('-> concatenation: +');

/* string concatenation

  syntax: the + operator takes in two values
    -> _ + _
  inputs: two strings are passed in for concatenation
  output: a new string created by combining the first two
  behavior: when both arguments are a string, they are combined
    'a string' + 'another string'
    becomes
    'a stringanother string'

*/

console.log('hello ' + 'goode bye'); // 'hello good bye'
console.log('hello ' + 'goode ' + 'bye'); // 'hello good bye'

console.log('-> addition: +');
/* number addition

  syntax: the + operator takes in two values
    -> _ + _
  inputs: two numbers are passed in for addition
  output: a new number created by adding both arguments
  behavior: like normal math (for now)
    5 + 3 --> 8
    1 + 1 --> 2
    -1 + -1 --> 0

*/

console.log(5 + 8); // 13
console.log(3 + 3 + 3); // 9
```

</details>
