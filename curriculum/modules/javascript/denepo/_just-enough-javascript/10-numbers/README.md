# Numbers

A primitive type used to represent numbers. The programs in this module used
mostly strings, but there will be few numbers.

Numbers in JavaScript are challenging to work with and understand, even for
experienced developers. You will take a deeper look into numbers in the next
module - Debugging. For now you just need to know this:

<details>
<summary>🥚 typeof</summary>

```js
'use strict';
console.log('-- typeof numbers --');

// you write numbers in JS by writing numbers. without quotes
console.log(-1); // -1
console.log(0); // 0
console.log(1); // 1

// the type of numbers is 'number'
console.log(typeof 100); // 'number'
console.log(typeof -100); // 'number'
console.log(typeof 12.3); // 'number'
```

</details>
<details>
<summary>🐣  strict equality</summary>

```js
'use strict';
console.log('-- numbers: strict equality --');

// are two numbers the same?
console.log(1 === 1.0); // true
console.log(12 === 12); // true
console.log(-3.0 === -3); // true

console.log(1 === 1.1); // false
console.log(-12 === 12); // false
console.log(0.3 === 3.0); // false

// comparing with any other type will always be false
console.log(1 === true); // false
console.log(12 === '12'); // false
console.log(0 === null); // false
```

</details>
<details>
<summary>🐣  strict inequality</summary>

```js
'use strict';
console.log('-- numbers: strict inequality --');
// this will always be the opposite of strict equality

// are two numbers different?
console.log(1 !== 1.0); // false
console.log(12 !== 12); // false
console.log(-3.0 !== -3); // false

console.log(1 !== 1.1); // true
console.log(-12 !== 12); // true
console.log(0.3 !== 3.0); // true

// comparing with any other type will always be true
console.log(1 !== true); // true
console.log(12 !== '12'); // true
console.log(0 !== null); // true
```

</details>
<details>
<summary>🐣 arithmetic</summary>

```js
'use strict';
console.log('-- numbers: arithmetic --');

console.log(' +');
// adding numbers
console.log(1 + 1); // 2
console.log(-1 + 1); // 0

console.log(' -');
// subtracting numbers
console.log(3 - 2); // 1
console.log(2 - 3); // -1

console.log(' *');
// multiplying numbers
console.log(3 * 2); // 6
console.log(3 * 5); // 15

console.log(' /');
// dividing numbers
console.log(30 / 2); // 15
console.log(12 * 3); // 4

console.log(' %');
// finding the remainder
console.log(3 % 2); // 1
console.log(3 % 3); // 0
```

</details>

<details>
<summary>🐣  comparisons</summary>

```js
'use strict';
console.log('-- relational operators --');

console.log(' >');
// is the left number bigger than the right one?
console.log(3 > 22); // false
console.log(22 > 3); // true
console.log(1 > 1); // false

console.log(' <');
// is the left number smaller than the right one?
console.log(3 < 22); // true
console.log(22 < 3); // false
console.log(1 < 1); // false

console.log(' >=');
// is the left number bigger than OR equal to the right one?
console.log(3 >= 22); // false
console.log(22 >= 3); // true
console.log(1 >= 1); // true

console.log(' <=');
// is the left number smaller than OR equal to the right one?
console.log(3 <= 22); // true
console.log(22 <= 3); // false
console.log(1 <= 1); // true
```

</details>
