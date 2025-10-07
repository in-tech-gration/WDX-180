# Variables

Variables allow you to save values to use later in your program.

They're kind of like a box that can only hold one thing at a time.

```js
'use strict';

/*
  let           -> declaration
  iAm           -> variable name
  =             -> assignment operator (initialization)
  'a variable'  -> the initial value
*/

let iAm = 'a variable';
console.log(iAm);

/*
  iAm           -> variable name
  =             -> assignment operator
  'a variable'  -> the new value
*/

iAm = 'hungry';
console.log(iAm);
```

<details>
<summary>🥚 declare, initialize, assign</summary>

```js
'use strict';
console.log('-- declare, initialize, assign --');

// declare a value and initialize it's value
let favoriteTree = 'palm';
console.log(favoriteTree); // 'palm'

// assigning a different value
favoriteTree = 'oak';
console.log(favoriteTree); // 'oak'

// declare variable with an initial value
let bread = 'fresh';
console.log(bread); // 'fresh'

// re-assign the variable
bread = 'stale';
console.log(bread); // 'stale'
```

</details>
<details>
<summary>🥚 uninitialized variables</summary>

```js
'use strict';
console.log('-- uninitialized variables --');

// declaring a variable without an initial value
//  it will be initialized to undefined by default
let uninitialized;
console.log(uninitialized); // undefined

// you can assign values to uninitialized variables
uninitialized = 'something';
console.log(uninitialized); // 'something'

// initializing a variable to undefined does the same thing
let initialized = undefined;
console.log(initialized); // undefined
```

</details>

> PS. In this module you will only learn about `let`. You will cover `const` and
> `var` in later modules.

---

## Using Variables

Variables are relatively simple, they store a value and that value can change.
What becomes more challenging is understanding how to use variables in a
program.

Below are a few examples of what you can do with variables:

<details>
<summary>🥚 different types</summary>

```js
'use strict';
console.log('-- variables: different types --');
// variables can store any type
//  and you can change the types all you want

// declare and assign a boolean value
let variable = true;
console.log(typeof variable); // 'boolean'

// assign a string to the variable
variable = 'computers';
console.log(typeof variable); // 'string'

// assign undefined to the variable
variable = undefined;
console.log(typeof variable); // 'undefined'

// and another boolean
variable = false;
console.log(typeof variable); // 'boolean'
```

</details>
<details>
<summary>🥚 assigning results</summary>

```js
'use strict';
console.log('-- assigning results --');
// you can assign the result of an operation to a variable

// boolean logic
let falseOrTrue = false || true;
console.log(falseOrTrue); // true

// string concatenation
let favoriteTree = 'p' + 'a' + 'l' + 'm';
console.log(favoriteTree); // 'palm'

// replacing things in a string
let noJoy = 'enjoy life'.replaceAll('joy', '');
console.log(noJoy); // 'en life'

// searching a string with .includes
let hasAnApple = 'bananaapplemango'.includes('apple');
console.log(hasAnApple); // true
```

</details>
<details>
<summary>🥚 reading variables</summary>

```js
'use strict';
console.log('-- reading variables --');

// you can read the values stored in a variable
//  and use them anywhere you can use the value it stores

// operate on a string stored in a variable
let car = 'vrooom';
let loudCar = car.toUpperCase();
let excitedCar = loudCar.replaceAll('O', '!');
console.log(excitedCar); // 'VR!!!M'

// use a string stored in a variable as an argument
let oldLetter = 'f';
let newLetter = 'd';
let happyAnimal = 'fog'.replaceAll(oldLetter, newLetter);
console.log(happyAnimal); // 'dog'

// all together
let characterName = '  harry potter   ';
let trimmedName = characterName.trim(); // 'harry potter'

let bookTitle = 'Harry Potter and the Magical Thing';
let titleLowerCase = bookTitle.toLowerCase(); // 'harry potter and the magical thing'

let includesName = titleLowerCase.includes(trimmedName);
console.log(includesName); // true
```

</details>
<details>
<summary>🥚 swapping values</summary>

```js
'use strict';
console.log('-- swapping values --');

/*
  swapping values between two variables is a good little exericse
  it's not something you'll see much in programs
  but it's a great way to understand how variables work
*/

// declare two variables with values that need to be swapped
let a = 2;
let b = 1;
// declare a variable to store values temporarily
let temp;
console.log(a, b, temp); // 1, 2, undefined

// assign the value stored in 'a' to 'temp'
temp = a;
console.log(a, b, temp); // 2, 1, 2

// assign the value stored in 'b' to 'a'
a = b;
console.log(a, b, temp); // 1, 1, 2

// assign the value stored in 'temp' to 'b'
b = temp;
console.log(a, b, temp); // 1, 2, 2
```

</details>

---

## Three Common Errors

Programming languages have strict rules about what you can and cannot do. Here
are three errors you will make quite a bit when you start your own
[explorations](../explorations), even a spelling mistake can cause these errors!

You may get different error messages depending on which browser you are using,
but they mean the same thing. In Debugging we will go much deeper into
interpreting and correcting program errors.

<details>
<summary>🥚 not declaring a variable</summary>
<br>

Using a variable that has not been declared will throw an error (when you're in
strict mode, but that's a story for another day. All the exercises in this repo
are run in strict mode).

```js
'use strict';
console.log('-- not declaring 1 --');

// let animal; // uncomment this line to fix the error
animal = 'horse'; // ReferenceError
```

```js
'use strict';
console.log('-- not declaring 2 --');

// a common mistake is spelling your variables incorrectly
let spellingMistake = 'oops!';
console.log(spelingMistake); // ReferenceError
```

</details>
<details>
<summary>🥚 using a variable before it is declared</summary>

```js
'use strict';
console.log('-- using before declaration --');

// read the variable - will throw an error!
console.log(favoriteColor); // ReferenceError

// declare and initialize the variable
let favoriteColor = 'red';

// read the variable
console.log(favoriteColor);
```

</details>
<details>
<summary>🥚 declaring a variable twice</summary>
<br>

Declaring a variable tells JavaScript to prepare a place in memory with that
name. Trying to create two spaces in memory with the same name will cause an
error.

- Chrome & Chromium-based browsers:
  `SyntaxError: Identifier '_' has already been declared`
- Firefox: `SyntaxError: redeclaration of let _`

```js
'use strict';
// ! this log never happens !
//  syntax errors happen before the program runs
//  so no single line of code will happen
//  you will learn more about program life cycle in Debugging
console.log('-- declaring twice --');

let vegetable = 'carrot';
let vegetable = 'potato'; // SyntaxError
// vegetable = 'potato'; // no error
```

</details>

---

## Variable Names

In JavaScript there are a few rules about naming variables. There aren't too
many rules and the rules aren't very complicated, you just need to learn them:

- [javascript.info](https://javascript.info/variables#variable-naming)
- [nexTRIE](https://www.youtube.com/watch?v=O5WlRR-lEDE)
- [launchcode](https://in-tech-gration.github.io/intro-to-professional-web-dev/chapters/data-and-variables/more-on-variables.html#naming-variables)

<details>
<summary>🥚 variable names <strong>can</strong> use numbers, letters, $, or _</summary>

```js
'use strict';
console.log('-- valid variable names --');
// all of these variable names are ok

let $ = 1;
let _ = 2;
let a = 3;
let A = 4;
let b1_$ = 5;
let HackYourFuture2021_$ = 6;
let b_e_l_g_i_u_m = 7;
// ...
```

</details>
<details>
<summary>🥚 variable names <strong>are</strong> case-sensitive</summary>

```js
'use strict';
console.log('-- variable names are case-sensitive --');

// notice, there is no error.
//  JS does not consider this as declaring the same variable twice
let javascript = 'a programming language';
let JavaScript = 'upper case!';

console.log(javascript); // 'a programming language'
console.log(JavaScript); // 'upper case!'
```

</details>
<details>
<summary>🥚 variable names can <strong>not</strong> start with a number</summary>

```js
'use strict';
console.log('-- variable names cannot start with a number --')

let a1 = 'this works';

let 1a = 'will throw an error';
```

</details>
<details>
<summary>🥚 variable names can not use any other characters</summary>

```js
'use strict';
let a*a = 'will throw an error';
```

```js
'use strict';
let a-b-c = 'will throw an error';
```

```js
'use strict';
let @hyf = 'will throw an error';
```

```js
'use strict';
// spaces count as other characters
let hack your future = 'will throw an error';
```

</details>
<details>
<summary>🥚 variable names can not be <strong>reserved words</strong></summary>
<br>

In JavaScript there are some words that you cannot use as variable names. These
are called _Reserved Words_. Some of them are words which carry special meaning
in JS like `let` or `null`. Other reserved words don't have any special meaning
yet, but may in the future.

```js
'use strict';
let var = 'will throw an error';
```

```js
'use strict';
let null = 'will throw an error';
```

```js
'use strict';
let function = 'will throw an error';
```

```js
'use strict';
let public = 'will throw an error';
```

all the reserved works, in a list:

- [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#keywords)
- [w3schools](https://www.w3schools.com/js/js_reserved.asp)

</details>

### Good Variable Names

Just because a variable name doesn't throw an error doesn't mean it's a good
name.

A good variable name is easy to read and helps you understand what the program
does. You will learn more about how to choose good variable names in Debugging.
For now take a look at these two programs with the same logic. see how good
names help, and bad names can be confusing:

<details>
<summary>🐣 confusing variable names</summary>

```js
'use strict';
let thisThing = 'hello';
let thatThing = '';

for (let oneThing of thisThing) {
  thatThing = oneThing + thatThing;
}

console.log(thatThing); // 'olleh'
```

</details>

<details>
<summary>🐣 helpful variable names</summary>

```js
'use strict';
let forwards = 'hello';
let backwards = '';

for (let nextLetter of forwards) {
  backwards = nextLetter + backwards;
}

console.log(backwards); // 'olleh'
```

</details>

### Built-in Variables

Some variables already come with JavaScript, you do not need to declare them to
use them. Think of `console` - you didn't write that variable but you use it all
the time.

These a not the same as reserved words, you can use declare or reassign them!
Declaring built-in variables will almost always cause problems in your programs
because you _over-write_ the value that was stored before. There are some
advanced use-cases when this is helpful, but you won't learn about those at HYF.

Here are some examples of using built-in variable names in your programs. These
are just examples, not suggestions ;)

<details>
<summary>🐥 assigning to a built-in variable</summary>

```js
'use strict';
// this log will work because console has not been reassigned
console.log('-- assigning to console --');

console = 'hello';

// see? it's a string!
alert(console);

// this log will not work, console now stores a string
console.log('will throw an error');
```

</details>
<details>
<summary>🐥 declaring a built-in name</summary>

```js
'use strict';
console.log('-- declaring a variable named alert 1 --');

// this will not work!
//  JS treats this like using a variable before it's declaration
alert('huh?'); // ReferenceError - use before declare

let alert = 'hello';

console.log(alert);
```

```js
'use strict';
console.log('-- declaring a variable named alert 2 --');

let alert = 'hello';

console.log(alert);

alert('will throw an error'); // TypeError - not a function
```

</details>

---

## References

- [launchcode](https://in-tech-gration.github.io/intro-to-professional-web-dev/chapters/data-and-variables/variables.html)
- [javascript.info](https://javascript.info/variables)
- [programiz](https://www.programiz.com/javascript/variables-constants)
- [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)
- [HYF](https://hackyourfuture.github.io/study/#/javascript/variables)
