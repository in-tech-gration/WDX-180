# Strings

A primitive type used for saving and working with text. A string is anything
wrapped in quotes: `'something'` or `"something"`:

```js
'use strict';
console.log('-- strings --');

console.log('this is a string');
console.log('so is this');

// use \n to make a string print on more than one line
console.log('first line\nsecond line\nthird line');

// use ' and " to put quotes inside your strings
console.log('strings can use "double quotes"');
console.log("strings can use 'single quotes'");

// the empty string: quotes with nothing in them
// it's still a string!
console.log('');
```

<details>
<summary>🥚 typeof</summary>

```js
'use strict';
console.log('-- typeof strings --');

// strings are anything wrapped in quotations, ' or "
console.log('hello!'); // 'hello!'
console.log('you say "hello", i say "good bye"'); // 'you say "hello", i say "good bye"'
console.log("you say 'hello', i say 'good bye'"); // "you say 'hello', i say 'good bye'"

// this is the empty string. it is a string, but with no characters
console.log(''); // ''

// you can check if something is a string with typeof
console.log(typeof ''); // 'string'
console.log(typeof 'trees'); // 'string'
console.log(typeof 'apple "the green" fruit'); // 'string'
```

</details>
<details>
<summary>🥚 strict equality</summary>

```js
'use strict';
console.log('-- strings: strict equality --');

// two strings are the same thing if they have exactly the same characters
console.log('' === ''); // true
console.log('asdf' === 'asdf'); // true
console.log('12D' === '12D'); // true

// two strings with different characters are not the same string
console.log('' === ' '); // false
console.log('asdf' === 'Asdf'); // false
console.log('cow' === 'horse'); // false

// strings are never the same as different types
console.log('' === true); // false
console.log('true' === true); // false
console.log('12' === 12); // false
console.log('null' === null); // false
console.log('hello' === 100); // false
```

</details>
<details>
<summary>🥚 strict unequality</summary>

```js
'use strict';
console.log('-- strings: strict inequality --');
// the opposite of strict equality

// two strings are not unequal if they have exactly the same characters
console.log('' !== ''); // false
console.log('asdf' !== 'asdf'); // false
console.log('12D' !== '12D'); // false

// two strings with different characters are unequal
console.log('' !== ' '); // true
console.log('asdf' !== 'Asdf'); // true
console.log('cow' !== 'horse'); // true

// strings are always unequal to different types
console.log('' !== true); // true
console.log('true' !== true); // true
console.log('12' !== 12); // true
console.log('null' !== null); // true
console.log('hello' !== 100); // true
```

</details>
<details>
<summary>🥚 string concatenation</summary>

```js
'use strict';
console.log('-- string concatenation --');

// you can combine strings using +
console.log('abc' + '123'); // 'abc123'
console.log('a' + 'bc1' + '23'); // 'abc123'
```

</details>

---

## String Methods

_String methods_ come built into JavaScript and are very useful for modifying
your data. There are many string methods in JS, but you'll only need these for
Welcome to JS:

<details>
<summary>🥚 .toLowerCase and .toUpperCase</summary>

```js
'use strict';
console.log('-- .toLowerCase and .toUpperCase --');

// returns a new string with all lower case letters
console.log('HackYourFuture'.toLowerCase()); // 'hackyourfuture'

// returns a new string with all upper case letters
console.log('HackYourFuture'.toUpperCase()); // 'HACKYOURFUTURE'
```

</details>
<details>
<summary>🥚 .includes</summary>

```js
'use strict';
console.log('-- .includes --');

// returns true or false
//  true: if the string includes the argument
//  false: if it does not
// upper/lower case matters
console.log('Abc'.includes('Ab')); // true
console.log('Abc'.includes('bc')); // true
console.log('Abc'.includes('ab')); // false
console.log('Abc'.includes('BC')); // false
```

</details>
<details>
<summary>🥚 .replaceAll</summary>

```js
'use strict';
console.log('-- .replaceAll --');

// returns a new string with the first argument replaced by the second
console.log('abc'.replaceAll('b', '')); // 'ac'
console.log('computers'.replaceAll('z', '!')); // 'computers'
console.log('hi from me, hi to you'.replaceAll('hi', 'bye')); // 'bye from me, bye to you'
```

</details>
<details>
<summary>🥚 .trim</summary>

```js
'use strict';
console.log('-- .trim --');

// returns a new string with all the white space removed from the ends
console.log('  hello  '.trim()); // 'hello'
console.log('  hello'.trim()); // 'hello'
console.log('hello  '.trim()); // 'hello'
```

</details>

---

## Characters in a String

A string is made up of individual characters. You can find out how many
characters are in a string, or access each character individually.

<details>
<summary>🥚 .length</summary>

```js
'use strict';
console.log('-- .length --');

// out how many characters are in a string
console.log(''.length); // 0
console.log('a'.length); // 1
console.log('ab'.length); // 2
console.log('abc'.length); // 3
```

</details>
<details>
<summary>🥚 character indexes</summary>

```js
'use strict';
console.log('-- character indexes --');

// get a specific character from a string
//  careful, the first character is [0]!
console.log('abc'[-1]); // undefined
console.log('abc'[0]); // 'a'
console.log('abc'[1]); // 'b'
console.log('abc'[2]); // 'c'
console.log('abc'[3]); // undefined
```

</details>
<details>
<summary>🐣 .indexOf</summary>

```js
'use strict';
console.log('-- strings: .indexOf --');

console.log('single characters');
// returns the index of a substring inside a string
console.log('abc'.indexOf('a')); // 0
console.log('abc'.indexOf('b')); // 1
console.log('abc'.indexOf('c')); // 2

console.log('the empty string');
// everything contains the empty string at index 0
console.log(''.indexOf('')); // 0
console.log('abc'.indexOf('')); // 0
console.log('abc...xyz'.indexOf('')); // 0

console.log('multiple characters');
// you can search for more than one character
console.log('toads'.indexOf('ds')); // 3
console.log('abc'.indexOf('abc')); // 0

console.log('does not exist');
// if the search does not exist, indexOf returns -1
console.log('asdf'.indexOf('x')); // -1
console.log('JavaScript'.indexOf('Python')); // -1
console.log(''.indexOf('hello')); // -1
```

</details>
<details>
<summary>🐣 .slice</summary>

```js
'use strict';
console.log('-- strings: .slice --');

console.log('one argument');
// when you pass in only one number
//  .slice returns the rest of the string from that index
console.log('abcd'.slice(0)); // 'abcd'
console.log('abcd'.slice(1)); //  'bcd'
console.log('abcd'.slice(2)); //   'cd'
console.log('abcd'.slice(3)); //    'd'
console.log('abcd'.slice(5)); // undefined

console.log('two arguments');
// when you pass in two numbers
//  .slice returns the characters from the first index to the second
console.log('abcd'.slice(0, 4)); // 'abcd'
console.log('abcd'.slice(1, 4)); //  'bcd'
console.log('abcd'.slice(1, 3)); //  'bc'
console.log('abcd'.slice(2, 3)); //   'c'
console.log('abcd'.slice(2, 2)); // undefined

console.log('negative arguments');
// when you pass negative numbers
//  the array indexes are counted backwards from the end of the string
console.log('abcd'.slice(-1)); //   'd'
console.log('abcd'.slice(-2)); //  'cd'
console.log('abcd'.slice(-3)); // 'bcd'
console.log('abcd'.slice(-4, -1)); // 'abc'
console.log('abcd'.slice(-3, -1)); //  'bc'
console.log('abcd'.slice(-3, -2)); //  'b'
```

</details>

---

## References

- [launchcode](https://education.launchcode.org/intro-to-professional-web-dev/chapters/data-and-variables/values-and-data-types.html#more-on-strings)
- [javascript.info](https://javascript.info/string#accessing-characters)
