# Null

Another primitive type used to represent nothing.

```js
'use strict';
console.log('-- null --');

// that's it, plain and simple
console.log(null);
```

<details>
<summary>🥚 typeof</summary>

```js
'use strict';
console.log('-- typeof null --');

// this is not intuitive, you just need to memorize it
console.log(null); // null
console.log(typeof null); // 'object'
```

</details>
<details>
<summary>🥚 strict equality</summary>

```js
'use strict';
console.log('-- null: strict equality --');

// null is only strictly equal to null
console.log(null === null); // true

// any other comparison is false
console.log(null === 'null'); // false
console.log(null === 0); // false
console.log(null === undefined); // false
```

</details>
<details>
<summary>🥚  strict inequality</summary>

```js
'use strict';
console.log('-- null: strict inequality --');
// this will always be the opposite of strict equality

console.log(null !== null); // false

// any other strict inequality with null will be true
console.log(null !== 'null'); // true
console.log(null !== 0); // true
console.log(null !== undefined); // true
```

</details>

## `null` vs. `undefined`

> The ECMAScript language specification describes them as follows:
>
> - `undefined` is “used when a variable has not been assigned a value”
> - `null` “represents the intentional absence of any object value”
>
> [2ality](https://2ality.com/2021/01/undefined-null-revisited.html)

The practical difference between `null` and `undefined` is that `null` will not
appear in your program by accident. `undefined` can appear in your program if
you forgot to assign a value, but `null` always need to be assigned.

If a variable stores `null` it was put there on purpose.

```js
'use strict';
console.log('-- variables with null --');

// you need to assign null to a variable
//  a variable cannot store null by accident
let variable;
console.log(variable); // undefined
console.log(typeof variable); // 'undefined'

variable = null;
console.log(variable); // null
console.log(typeof variable); // 'object'

// you can also initialize a variable to null
let breakfast = null;
console.log(breakfast);
console.log(typeof breakfast);
```
