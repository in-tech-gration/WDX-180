# Booleans

A primitive type with two values: `true` and `false`.

These are helpful for making decisions in your programs, it's like asking `yes`
or `no`.

```js
'use strict';
console.log('-- booleans --');

// there are only two boolean values:
console.log(true); // true
console.log(false); // false
```

<details>
<summary>🥚 typeof</summary>

```js
'use strict';
console.log('-- typeof booleans --');

// they both have the type "boolean"
console.log(typeof true); // 'boolean'
console.log(typeof false); // 'boolean'
```

</details>
<details>
<summary>🥚 strict equality</summary>

```js
'use strict';
console.log('-- booleans: strict equality --');

// boolean values are only strictly equal to themselves
console.log(true === true); // true
console.log(false === false); // true

// they are not equal to each other
console.log(true === false); // false
console.log(false === true); // false

// booleans are not equal to any other type
console.log(true === 'true'); // false
console.log(false === ''); // false
console.log(true === 12); // false
console.log(false === undefined); // false
```

</details>
<details>
<summary>🥚 strict inequality</summary>

```js
'use strict';
console.log('-- booleans: strict inequality --');

// boolean values are strictly inequal to everything but themselves
console.log(true !== true); // false
console.log(false !== false); // false

// they are not equal to each other
console.log(true !== false); // true
console.log(false !== true); // true

// booleans are not equal to everything else
console.log(true !== 'true'); // true
console.log(false !== ''); // true
console.log(true !== 12); // true
console.log(false !== undefined); // true
```

</details>
<details>
<summary>🥚 not</summary>

```js
'use strict';
console.log('-- not --');

// you can use ! to reverse true and false
console.log(!true); // false
console.log(!false); // true
```

</details>
<details>
<summary>🐣 and</summary>

```js
'use strict';
console.log('-- and --');

console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false
```

</details>
<details>
<summary>🐣 or</summary>

```js
'use strict';
console.log('-- or --');

console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false
```

</details>

---

## 🐣 Truthiness

Truthiness is a tricky but _very_ important concept in JavaScript, it has to do
with whether a value becomes `true` or `false` when you convert it to the
`"boolean"` type. You do not need to understand everything about truthiness in
this module, but understanding the basic idea will make logical operators and
control flow more clear.

To convert a value to type `"boolean"` you just need to pass it to the `Boolean`
function that comes built into JS. Maybe the easiest way to begin learning
truthiness is to learn the _falsy_ values, there are not very many values that
convert to `false`. All the rest become `true`!

These are the falsy values you will come across in this module:

```js
'use strict';

// the boolean value `false`
console.log(Boolean(false)); // false

// the empty string, no matter what type of quotes you use
console.log(Boolean('')); // false

// null
console.log(Boolean(null)); // false

// undefined
console.log(Boolean(undefined)); // false

// the number `0`
console.log(Boolean(0)); // false
console.log(Boolean(0.0)); // false
// and the number NaN, but you'll learn more about this in the next module
console.log(Boolean(NaN)); // false
```

> You will study _truthiness_ and _type casting_ in depth with the Debugging
> module.
