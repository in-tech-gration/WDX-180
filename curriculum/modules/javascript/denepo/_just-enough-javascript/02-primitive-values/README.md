# 🥚 Primitive Values

Programming computers is all about processing _data_. Data comes into a program,
your program processes the data, and some new data comes out at the end. In
JavaScript the most basic kinds of data are **primitive values**. When talking
about a primitive value, there are two important pieces of information:

- **Type**: What type of data is it? a string? a number? a boolean? undefined?
- **Value**: Which one of it's type is it? Is it the _number_ **5**? or the
  _string_ **'5'**?

You will learn more about each of these types as you work your way through Just
Enough JavaScript:

```js
'use strict';
console.log('--- booleans: true and false ---');
console.log(true);
console.log(false);
```

```js
'use strict';
console.log('--- strings: anything wrapped in quotation marks ---');
console.log('hello');
console.log('good bye');
console.log('12'); // <- this  actually a string!
console.log(''); // an empty string
```

```js
'use strict';
console.log('--- undefined: one way to say "there is nothing here" ---');
console.log(undefined);
```

```js
'use strict';
console.log('--- null: another way to say "there is nothing here" ---');
console.log(null);
// we will later cover the difference between null and undefined
```

```js
'use strict';
console.log('--- numbers: numbers that are not wrapped in quotation marks ---');
console.log(12);
console.log(3.14);
console.log(0);
console.log(-12);
console.log(10_000_000_000);
```
