# Using Functions

It's one thing to know how functions work, it's a whole different thing to
understand how to _use_ them in a program. The simplest way to use functions in
your program is to _refactor_ a tricky bit of logic into a separate function.
This has two main benefits:

- **Your main program is easier to read**: a function call is simpler to
  understand (and easier to talk about) than a bunch of loops and conditions.
- **You can test the logic**: when you write code in a function it's easy to
  make sure it does what you expect by testing it with different input/output
  pairs.
- **You can re-use your logic**: a function can be used many times in many
  places, and parameters allow your function to be more flexible than loops and
  conditions hard-coded into the main program
- **Collaboration is easier**: When your software is split into many smaller
  functions it's easy to assign each group member a function.
- **Documentation is easier**: There are many tools out there that can convert
  JSDoc comments into software documentation (like
  [the Lodash docs](https://lodash.com/docs/4.17.15)). This is much harder to do
  when your code does not use well-defined functions!
- ... and many more. You'll fall in love with functions soon enough, promise

Enough of that, let's get started.

## Reading Programs with Functions

Other developers should be able to know WHAT your code does without needing to
read every line. Functions and JSDocs are a great way to do this. When you write
your programs using well-named functions and a clear JSDoc comment, other people
can understand your main program without needing to read the code inside your
functions!

Reading programs that use functions is not the same as what you've seen before,
you will need to start thinking of your programs as having two different phases:

1. declaring functions
2. using functions

The programs in this folder are divided by comments to make this difference
clear. Here are some steps you can go follow to practice reading programs that
use functions (remember zooming in and zooming out?):

1. read the program's description at the top of the file
2. use the program without reading any of the source code
3. read the main program where the functions are called, this is where you will
   understand how the user's interaction is structured
4. read the function names, docs, and tests to understand what each function
   does.
   - Hint: don't read the function body yet!
5. re-read to the main program to understand in more depth how and where each
   function is.
6. read the function bodies - look inside each function and understand how they
   were implemented
7. use the program one last time, this time noting when the user is interacting
   with the main program and when the main program is calling a function.

<details>
<summary>A little example program</summary>

```js
'use strict';

/*

  a little program to reverse the user's input

*/

/* ===== declare functions ===== */

/**
 * reverses it's argument and returns as a new string
 * @param {string} text - the string to reverse
 * @returns {string} the reversed text
 */
const reverseString = (text = '') => {
  let backwards = '';
  for (const character of text) {
    backwards = character + backwards;
  }
  return backwards;
};
console.assert(reverseString('') === '', 'Test 1');
console.assert(reverseString('1234') === '4321', 'Test 2');
console.assert(reverseString('abc') === 'cba', 'Test 3');
console.assert(reverseString('.-{|}-.') === '.-}|{-.', 'Test 4');
console.assert(reverseString('ooo') === 'ooo', 'Test 5');

/* ===== main program (use functions) ===== */

// -- gather user input --
let input = null;
while (input === null) {
  input = prompt('enter some text to reverse');
}

// -- use your program logic --
const output = reverseString(input);

// -- display result for the user --
const message = `before: "${input}"
after: "${output}"`;
alert(message);

// -- log for developers --
console.log(input, output);
```

</details>

## The Exercises

There are 4 types of exercise in this chapter:

### 1. Call Functions

Calling a function is when you use it in your program to do something useful.
You've been calling functions for a while whether you knew it or not -
`prompt(_)`, `console.log(_)`, `'asdf'.toLowerCase()`, all of these are
functions calls!

In your life as a programmer you'll be calling way more functions than you
write. Documentation is your best friend, it has the information you need to get
started:

- **behavior**: what the function does, and how you could use it in your
  program.
- **parameters**: the values (and their types!) that you can pass to the
  function, and how they will be used
- **return value**: what type/value the function returns

In the `call-functions` exercises you will be given a program with working,
documented functions. The programs will have missing lines that you fill in by
calling the working functions.

### 2. Write Functions

The next level up from calling functions is writing them. In the
`write-functions` exercises you'll be given a working program that calls empty
functions with documentation describing how they _should_ behave.

Time for tests! Besides documentation, each empty function will have a few tests
to give you confidence that they do what you think they do. Tests are your
friends, they catch your mistakes so you don't have to : )

You will be writing some code in the empty body of the functions to pass the
tests and make the program work. There is more than one file for each exercise,
that's because you need to write more than one function that passes the same
tests!

### 3. Refactor Logic

The final level of exercise is _refactoring_ function, removing a few lines of
code from the program and writing them into a separate function.

Refactoring functions isn't as easy as it sounds! And it's more important than
you might think. Learning to refactor functions out of your a long block of code
will make your code easier to read, to test and to develop as a team.

### 4. Avoid Side-Effects

Practice using, writing and refactoring functions that process arrays. Be
careful of side-effects! Your functions should return new arrays and not modify
the original one.
