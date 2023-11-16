# Undefined

A primitive type used to show that there is no value.

```js
'use strict';
console.log('-- undefined --');

// just this, nothing more to it
console.log(undefined);
```

<details>
<summary>🥚 typeof</summary>

```js
'use strict';
console.log('-- typeof undefined --');

console.log(typeof undefined); // 'undefined'
```

</details>
<details>
<summary>🥚 strict equality</summary>

```js
'use strict';
console.log('-- undefined: strict equality --');

// undefined is only strictly equal to undefined
console.log(undefined === undefined); // true

// any other strict equality is false
console.log(undefined === 'undefined'); // false
console.log(undefined === 0); // false
console.log(undefined === null); // false
```

</details>
<details>
<summary>🥚  strict inequality</summary>

```js
'use strict';
console.log('-- undefined: strict inequality --');
// this will always be the opposite of strict equality

console.log(undefined !== undefined); // false

// any other strict inequality is true
console.log(undefined !== 'undefined'); // true
console.log(undefined !== 0); // true
console.log(undefined !== null); // true
```

</details>

This is the default value for all variables that have not been assigned, more
about that in the next folder.
