# The Cat Detector

Time to study one program in depth, learning to understand a single program from
many different perspectives. This quiz will guide you through studying the
`./cat-detector.js` by zooming in on each language feature used in the program.

Each numbered markdown file in this folder is a quiz question, you can find all
the answers in this README if you look carefully. After finding the answer to a
question you should take some time to find that feature in The Cat Detector and
study how it was used.

A good way to take this quiz is in small groups using 3 computers:

1. one computer to open the quiz questions
2. one computer with this README open as a reference
3. a third computer with the `./cat-detector.js`

Here are all the language features used in The Cat Detector:

- [Strict Mode](#strict-mode)
- [Comments](#comments)
- [Logs](#logs)
- [Primitives](#primitives)
  - [Strings](#strings)
  - [Booleans](#booleans)
  - [Null](#null)
- [Operators](#operators)
  - [Strict Equality](#strict-equality)
  - [Strict Inequality](#strict-inequality)
  - [String Concatenation](#string-concatenation)
  - [Assignment Operator](#assignment-operator)
- [Variables](#variables)
  - [Declaring and Initializing](#declaring-and-initializing)
  - [Reading](#reading)
  - [Assigning](#assigning)
  - [Built-In Global Variables](#built-in-global-variables)
- [User Interactions](#user-interactions)
  - [Alert](#alert)
  - [Prompt](#prompt)
  - [Interactions vs. Logs](#interactions-vs-logs)
- [Control Flow](#control-flow)
  - [`if`/`else`](#ifelse)
  - [`while`](#while)
- [That's all!](#thats-all)

---

## Strict Mode

This will be at the top of every program, just ignore it for now. you'll learn
more about it later.

<details>
<summary>example code</summary>
<br>

```js
'use strict';
```

</details>

---

## Comments

Comments are there to leave notes in the source code for a developer to read.
The computer will ignore comments and the user won't know they're there.

You will come across two kinds of comments:

<details>
<summary>example code</summary>
<br>

```js
'use strict';

// a single-line (inline) comment

/*
  a multi-line comment
  also called a "block comment"
*/
```

</details>

---

## Logs

logs print information in the console to help developers understand what
happened in the program:

<details>
<summary>example code</summary>
<br>

```js
'use strict';

// you can log one thing at a time
console.log('hello');
console.log('...');
console.log('good bye');

// or you log more than one thing using commas
console.log('hello', '...', 'good bye');
```

</details>

---

## Primitives

Programs are all about data: storing it, changing it, showing it to users,
getting it from users. Primitives are the basic pieces of data in a JavaScript
program. Each primitive has two important aspects:

- **Type**: There are multiple types, each primitive belongs to only one type.
  You can think of _types_ as a category like "fruits" or "vegetables".
- **Value**: There can be more than one value within each type, just like there
  are different fruits or different vegetables. (You won't cover these in this
  module.)

This diagram might help to see the big picture:

<details>
<summary>data types diagram</summary>
<br>

- **Primitive Types**: The basic units of data in a program, like the individual
  fruits and vegetables when you go shopping.
- **Composite/Non-Primitive Types**: Structures that _store_ and _organize_
  data, like the basket you use to carry your groceries.

![data types diagram](../../0-printables/data-types.jpeg)

</details>

These are the three primitives you will find in The Cat Detector:

---

### Strings

Strings are the type used to store text, every string value must begin and end
with quotes:

<details>
<summary>example code</summary>
<br>

```js
'use strict';

console.log('this is a string');
console.log('this IS ALSO a "string" !!!');

// you can use '\n' to make a new line inside a string
console.log('line 1 \nline 2 \nline 3');

// an empty string, but still a string!
console.log('');
```

</details>

---

### Booleans

Booleans are used the type for yes/no or on/off. There are only two boolean
values, `true` and `false`:

<details>
<summary>example code</summary>
<br>

```js
'use strict';

console.log(true);
console.log(false);

// true/false and the strings 'true'/'false' are not the same thing!
console.log('true');
console.log('false');
```

</details>

---

### Null

Null is a strange thing that you will learn more about later. For now you can
think of `null` as the only value in it's own type.

In The Cat Detector `null` is just used to mean "nothing", the user did not
provide any data for the program:

<details>
<summary>example code</summary>
<br>

```js
'use strict';

console.log(null);

// null and the string 'null' are not the same thing!
console.log('null');
```

</details>

---

## Operators

Operators combine values to produce a new value. There are many operators in JS,
but these are the only ones you need for The Cat Detector:

---

### Strict Equality

The `_ === _` operator checks if two values have **the same** type _and_ value:

<details>
<summary>example code</summary>
<br>

```js
'use strict';

console.log('-> strict equality:  ===  ');
//  checks if two values have the same type AND value
//  it will evaluate to either true or false

// comparing booleans
console.log(true === true); // true
console.log(true === false); // false
console.log(false === true); // false
console.log(false === false); // true

// strings must be exactly the same for a comparison to be true
console.log('hello' === 'hello'); // true
console.log('hello' === 'HELLO'); // false

// comparing across types is always false
//  even if they look like they might be the same thing
console.log(null === 'null'); // false
console.log(true === 'true'); // false
console.log(false === 'false'); // false

// it does not matter on which side you put the values
console.log('HELLO' === 'hello'); // false
console.log(null === 'null'); // false
console.log(true === 'true'); // false
console.log(false === 'false'); // false
```

</details>

---

### Strict Inequality

The `_ !== _` operator checks if two values have **different** types _or_
values:

<details>
<summary>example code</summary>
<br>

```js
'use strict';

console.log('-> strict inequality:  !==  ');
//  checks if two values have different types or value
//  it will evaluate to either true or false
//  it's the opposite of strict equality

// comparing booleans
console.log(true !== true); // false
console.log(true !== false); // true
console.log(false !== true); // true
console.log(false !== false); // false

// strings must be exactly the same for a comparison to be true
console.log('hello' !== 'hello'); // false
console.log('hello' !== 'HELLO'); // true

// comparing across types is always false
console.log(null !== 'null'); // true
console.log(true !== 'true'); // true
console.log(false !== 'false'); // true

// it does not matter on which side you put the values
console.log('HELLO' !== 'hello'); // true
console.log('null' !== null); // true
console.log('true' !== true); // true
console.log('false' !== false); // true
```

</details>

---

### String Concatenation

The `_ + _` operator combines two string values into one string value:

<details>
<summary>example code</summary>
<br>

```js
'use strict';

console.log('-> string concatenation:  +  ');
// combines multiple strings into a single string
// the "trace" button will help see the difference

// logs the 3 strings separately
console.log('a', 'b', 'c');

// combines 3 strings into 1 string then prints 1 string
// this happens in two steps:
//  'a' + 'b' -> 'ab'
//  'ab' + 'c' -> 'abc'
console.log('a' + 'b' + 'c');
```

</details>

---

### Assignment Operator

The assignment operator is used to initialize variables (`let _ = _;`) or assign
them new values (`_ = _`). You'll study this operator in the next section about
...

---

## Variables

Variables are [like boxes](https://www.youtube.com/watch?v=Jvrszgiexg0) you can
use to store data in your programs. (_That video uses `var` but these programs
use `let`. For now you can think of them as the same thing._)

There is a lot to know about variables, but for The Cat Detector you only need
to know this:

---

### Declaring and Initializing

To create a new variable in your program you need to _declare_ it using `let`,
you cannot use a variable before it is declared.

You can assign an initial value to a variable when you declare it, this is the
first value that will be stored in your variable:

<details>
<summary>example code</summary>
<br>

![variable diagram](../../0-printables/variable-declare-initialize.jpg)

```js
'use strict';

console.log('-- declare and initialize --');

// declare the variable and initialize it's value
let userName = 'Joe';

// read the value and log it to the console
console.log(userName); // 'Joe'
```

</details>

---

### Reading

You can read the value stored in a variable, reading the value _does not_ change
what is stored in the variable:

<details>
<summary>example code</summary>
<br>

```js
'use strict';

console.log('-- reading --');

// declare the variable and initialize it's value
let favoriteColor = 'orange';
// read the value and log it to the console
console.log(favoriteColor); // 'orange'

// read the value from `favoriteColor` and use it to initialize `message`
//  notice! `favoriteColor` is read BEFORE `message` is initialized
let message = 'your favorite color is ' + favoriteColor;
// read the value from `message` and log it to the console
console.log(message);

// `favoriteColor` still stores the same value:
console.log(favoriteColor);
```

</details>

---

### Assigning

You can change the value stored in a variable by _assigning_ a new value.

Careful! Variables are _dynamic_, their values can change during program
execution. What you see written in the source code may not always be what is
stored in a variable.

<details>
<summary>example code</summary>
<br>

```js
'use strict';

console.log('-- assigning --');

let favoriteColor = 'orange';
console.log(favoriteColor); // 'orange'

// assign a new value to `favoriteColor`
favoriteColor = 'blue';
console.log(favoriteColor); // 'blue'

let message = 'your favorite color is ' + favoriteColor;
// what value will be logged to the console? why?
console.log(message); // ???

// what value is stored in `favoriteColor`? why?
console.log(favoriteColor); // ???
```

</details>

---

### Built-In Global Variables

JavaScript programs have some _global variables_ built into the runtime
environment. You can use these variables without declaring them.

There are many, but you will only encounter 3 of them in these programs:

<details>
<summary>example code</summary>
<br>

```js
'use strict';

console.log('-- global variables --');

// -- console --
// console is a global variable storing an object
//  the object contains helpful functions for developers:
console.log(console);

// -- alert --
// alert is a global variable storing a function
console.log(alert);

// -- prompt --
// prompt is a global variable storing a function
console.log(prompt);

/*
  PS. you will learn more about objects and functions later
    for now this is all you need to know
*/
```

</details>

---

## User Interactions

Computer programs are often written for a user, user-centred applications need
some way to communicate with the user. This communication goes two-ways:

- The computer can display information for the user
- The user can input data for the program to use

In The Cat Detector you will be find two different user interactions:

---

### Alert

Alert just displays text for the user to read, the user cannot input any data to
your program with `alert`.

The program wil pause until the user clicks "ok":

<details>
<summary>example code</summary>
<br>

```js
'use strict';

console.log('-- alert --');

alert('hello! welcome to this boring program.');

alert('all done.');
```

</details>

---

### Prompt

`prompt` allows a user to input data to your program, they have two options:

- if the user clicks "ok", the text they typed will be returned as a string
- if the user clicks "cancel", `null` is returned

<details>
<summary>example code</summary>
<br>

```js
'use strict';

console.log('-- prompt --');

alert(
  'hello! welcome to this boring program, run it a few times to learn about `prompt`',
);

// encourage the user to explore their options
let userInput = prompt(
  'try each of these input combinations:\n' +
    '- type something and click "ok"\n' +
    '- type nothing and click "ok"\n' +
    '- type something and click "cancel"\n' +
    '- type nothing and click "cancel"\n',
);

// log the user's input for the developer to see
console.log(userInput);

alert('check your console to see what data you put into the program.');
```

</details>

---

### Interactions vs. Logs

There is one more important difference between an interaction (`alert`,
`prompt`) and `console.log`. Logging to the console will show more information
about _types_ and will show from which line the log was printed. This extra
information is very useful to developers but not important for users:

<details>
<summary>example code</summary>
<br>

```js
'use strict';

console.log('-- interactions vs. logs --');

/* --- different types --- */

// alerting true or 'true' looks exactly the same to a user
alert(true);
alert('true');

// logging these values to the console looks different!
//  also, see the info to the right of these logs in the console?
//  try clicking on that and seeing what happens
console.log(true);
console.log('true');

/* --- multiple values --- */

// you cannot alert multiple values, users just need one message
alert('hello', true);

// you can log more than one value, they are all colored differently
//  this can be very helpful for a developer
console.log('hello', true);
```

</details>

---

## Control Flow

Control flow is how you can instruct the computer to different things depending
on what data is currently stored in memory. There are only three control flow
structures you will need for The Cat Detector:

---

### `if`/`else`

An `if`/`else` statement allows you to give the computer two possible
instructions. One to use if a condition is true, the other if the condition is
false:

1. Evaluate the condition in the parenthesis
   - If the condition is true, execute the code in the `if` block
   - Otherwise execute the `else` block
2. Move on to the next line after the block

<details>
<summary>example code</summary>
<br>

```js
'use strict';

console.log('-- if/else --');

let userInput = prompt('please do not cancel');
console.log(userInput);

if (userInput === null) {
  // this code is executed if the user canceled
  alert('you canceled :(');
} else {
  // this code is executed if the user clicks "ok"
  alert('thank you for your input: ' + userInput);
}

alert('all done!');
```

</details>

---

### `while`

A `while` statement will repeat a block of code _as long as_ the condition is
true:

1. Evaluate the condition in the parenthesis
   - If the condition is true, execute the code in the block
   - Otherwise skip to step 2 without executing the block
2. Move on to the next line after the block

<details>
<summary>example code</summary>
<br>

```js
'use strict';

console.log('-- while --');

let userInput = null;

while (userInput === null) {
  userInput = prompt('do not cancel, there is no escape');
  console.log(userInput);
}

alert('thank you for your input: ' + userInput);
```

</details>

---

## That's all

There is much more to learn, but nothing more in The Cat Detector.
