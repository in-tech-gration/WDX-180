# Just Enough JavaScript

JavaScript is a huge and powerful programming language, this makes it exciting
but also challenging to learn.

In this module you will only learn a small part of what JavaScript has to offer.
You will learn _just enough_ JavaScript to make small programs that process text
and interact with users. Why just enough, and not a little more? Because reading
and understanding program logic is more important than JavaScript, so why let
the code get in the way?

In this directory is is all the JavaScript you will find in this module's
examples and exercises. Don't be mistaken, there's a lot you can do with only
this!

---

## Understanding a Program

The main goal of this chapter is that you can understand small programs written
using _Just Enough JavaScript_. You know you have understood a program when you
can use a trace table to explain how it works (_dynamic analysis_), and when you
can answer all the [`[ask me]`](https://youtu.be/5uCJBiQ7MkA?t=388) questions about it (_static analysis_).

---

## Exercises

There are a few different kinds of exercises in _Just Enough JavaScript_. Each
type of exercise in this chapter has a priority (🥚, 🐣, 🐥, 🐔).

Learn more about each type of exercise below:

---

<details markdown="1">
  <summary>
    <h3>🥚 Marking Syntax</h3>
  </summary>

  A good way to internalize JS syntax is to practice marking it on a page.
  Printing code and marking on paper is a great way to go, but you can also do it
  in your browser with the `?highlight` lens.

  > Check the following parts of the Study Lenses demo to learn more about 
  > how to switch lenses and what the highlight lens is all about:
  >
  > - [How to change a lense via the URL](https://youtu.be/5uCJBiQ7MkA?t=624)
  > - [See code in different lenses (highlight)](https://youtu.be/5uCJBiQ7MkA?t=68)

  Here's a quick guide for how to mark each piece of syntax:

  1. **Primitives**:A small arrow _under_ the primitive.
  1. **Identifiers**: A line _under_ the identifier.
  1. **Function Calls**: A line under the identifier and a half-box under the
    arguments.
  1. **Operators**: A small arrow _above_ on the operator.
  1. **Keywords**: A line _over_ the keyword.
  1. **Blocks**: A half-box written in the block's indentation.
  1. **Checks**: A half-box written over the check.

  You will find images of how to mark the code in the `/examples` folders found under each chapter. _(Open this [image link](./02-primitive-values/syntax/examples/logging-primitives.png) in a new Tab to see an example.)_

  Familiarize yourself with the syntax of each new language feature by marking
  each part in a different color. Taking a few minutes to familiarize yourself
  with how JavaScript is written _before_ studying full programs will make the
  rest go a lot smoother.

  #### `// prettier-ignore`

  The marking exercises will have an extra block around the code and a comment
  written before the block. You can ignore that. It's there so that Prettier doesn't
  remove the extra spacing when it formats the code.
</details>

---

<!-- TRACE -->
<details markdown="1">
  <summary>
    <h3>🥚 Trace</h3>
  </summary>

  Practice _being the computer_, executing code line by line with your mind the
  same way the computer does. Until you learn how to _trace_ code, programs and
  bugs will be a mystery! After you've learned how to trace, it will still be hard
  to understand programs but you'll at least know how to start :) Learning to
  trace is tricky, but will save you many many hours in the future.

  Because it can be hard to know if you are tracing correctly without someone by
  your side to answer your questions, there are a few buttons to help you along
  the way:

  - **table**: the _table_ button will open an empty trace table in your browser
    that you can use to step through a program by hand.
  - **trace**: the _trace_ button will log a trace of the program's execution to
    the console. You can use this to learn how to step through a program, and to
    see if your trace tables are correct. _(Open this [link](https://youtu.be/5uCJBiQ7MkA?t=308) in a new Tab to see a quick demo of the trace lens)_
  - **openIn jsTutor**: exercises without user interactions can be opened in JS
    Tutor, this website will show you what is happening in program memory with
    each step.
  - **debugger**: You can open any exercise in your browser's debugger using the
    `[debug]` button. At first you may find the debugger overwhelming, but with
    some practice it may become your favorite way to study code.

  If you like to draw on code as you trace what's happening you can do that with
  any file! Just replace `?--defaults` in your browser's URL bar with `?highlight`
  and you're good to go.

</details>


<details markdown="1">

  <summary>Trace Tables</summary>

  Trace tables have been around as long as computer programming (probably). The
  challenge with a trace table is to run the code in your head, keeping track of
  all the variables in your program by hand. This is also called a _dry run_ or a
  _desk check_.

  You can write trace tables on paper with a pencil, or you can use the trace
  tables built into Study Lenses. There are three different types of trace table
  available in Study Lenses:

  1. **steps**: The _steps_ table asks you to be the computer and to go step by
    step through the program, recording each time a variable is declared, read,
    or assigned. When you use the steps table you can check your work by pressing
    `trace` button and comparing your table to the console output.
  2. **values**: The _values_ table is the traditional type of trace table. With
    the _values_ table you only keep track of each time a variable is assigned a
    new value. You can also check your _values_ table by using the `trace` button
    and only checking against the _assign_ logs
  3. **Operators**: This table is for studying operator precedence, you'll learn
    more about this in Debugging.

  You may find that the **steps** table is more helpful in the beginning when you
  are first learning. It forces you to pay close attention to each step of program
  execution.

  Later on you may prefer the **values** table because it allows you to look at
  the bigger picture and see more clearly the _strategy_ (or _algorithm_) of a
  program.


</details>

<details markdown="1">
  <summary>Links about <strong>values</strong> trace tables</summary>

  - videos
    - [TeamComputing](https://www.youtube.com/watch?v=DyeVR1zb7Jo)
    - [Computer Science Tutorials](https://www.youtube.com/watch?v=UbANyxE7pGE)
    - [Chris Mayfield](https://www.youtube.com/watch?v=tJGrie7k97c)
    - [Revise Computer Science](https://www.youtube.com/watch?v=dzYlncc72O0)
    - [5 Minutes to Code: Programming Basics "Trace Tables"](https://www.youtube.com/watch?v=i2qLAVBUERs)
  - articles
    - [akxl - Desk Checking](https://www.akxl.org/JavaProgramming1/TraceTables.htm)
    - [101computing](https://www.101computing.net/using-trace-tables/),
      [online table](https://www.101computing.net/trace-table/)
    - [ibcomputerscience](https://ibcomputerscience.xyz/trace-tables/)
    - [wikipedia](https://en.wikipedia.org/wiki/Trace_table)
    <!-- - [bits of bytes](https://www.bitsofbytes.co/trace-tables.html) -->

</details>

---

<!-- READ -->
<details markdown="1">
  <summary>
    <h3>🥚 Read</h3>
  </summary>

  Practice reading small programs and identifying key features in the code. You
  will need to find syntax features, different scopes, variable usage, and much
  more.

  Most of the exercises are small interactive programs and have a list of
  questions to help guide you explore the program. When you've answered all of
  those questions you can keep going with the `[ask me]` button.

</details>

---

<!-- BLANKS -->
<details markdown="1">
  <summary>
    <h3>🥚 Fill in the Blanks</h3>
  </summary>

  Fill-in-the-blanks exercises will be JS scripts with some blanks for you to fill
  in and (sometimes) a comment describing what should happen. Some exercises will
  simple like this:

  ```js
  'use strict';

  console.log(true && _); // true
  ```

  But others will be more complex. Larger exercises will open with the [`?blanks`](https://www.youtube.com/watch?v=5uCJBiQ7MkA&t=434s) lens where you will be able to decide how many words you want to remove from the
  program. You will be shown a list of all the words that have ben removed from
  the program, and have the option to compare the modified program to the correct
  solution using a _diff editor_.

</details>

---

<!-- QUIZ -->
<details markdown="1">
  <summary>
    <h3>🥚 Quiz</h3>
  </summary>

  Some chapters will have a `/quiz` folder, these contain multiple choice
  questions to test your knowledge. By the end of this module you should be
  comfortable finding the right answers for each quiz **_and_** understanding why
  the wrong answers are incorrect.

  Careful, passing the quizzes is not enough! Being able to answer questions is
  not the same thing as building and practicing skills. Even if you are
  comfortable with the quiz in a chapter, you should _still_ keep practice the
  exercises.

</details>

---

<!-- COPY-TYPE -->
<details markdown="1">
  <summary>
    <h3>🥚 Copy-Type</h3>
  </summary>

  Ever heard of "copy-paste"? This is kind of like that but a much better way to
  learn. Instead of letting the computer do the copy and pasting for you, you need
  to do the copying and the typing.

  With Copy-Type exercises you will practice writing out programs from a blank
  page. On the left is an empty editor, on the right is the finished code: you
  need to re-write the program _exactly_ into the editor on the left. But there's
  a catch! You can only see one of the editors at a time, and you can't
  copy-type >:) Your goal will be to memorize the syntax and structures of
  JavaScript, you will not be running these programs or changing them.

  You can study these exercises alone to memorize and master JS syntax, flipping
  between _read_ and \_write like a flashcard. Or you can do them in small groups.
  If you study these in groups you and your group members should take turns in
  each role:

  - **Reader**: The _reader_ will open the finished program and will read the
    program out loud, guiding the _writer_ as they complete the program. The
    reader's challenge is help the writer _exactly_ reproduce the code; each
    space, each new line, each character, each capital letter, everything!
  - **Writers**: the _writers_ will try to write down _exactly_ the correct
    program following only the instructions of reader. No peaking! The writers
    should not look at the finished program, only listen to the advice of their
    reader and follow the hints in the editor.

  Looking for an extra challenge? Try to complete these exercises _without ever_
  showing each other your screens!

</details>


---

<!-- TRANSLATE -->
<details markdown="1">
  <summary>
    <h3>🥚 Translate</h3>
  </summary>

  You'll be given a JavaScript file with `'use strict'` up top and a commented out
  PseudoCode program, you will need to translate the program to JavaScript.

  These exercises will give you a chance to practice JS syntax, read PseudoCode
  and analyze the logic in small programs.

  Writing code is only a tiny part of programming. Understanding the problem and
  designing a solution is much more important!

  And JavaScript has a lot of syntax and can be slow to write, you just learned
  all that syntax and are probably wishing you never have to use it again.
  PseudoCode to the rescue!

  The purpose of PseudoCode is for developers to sketch and discuss ideas without
  worrying about the computer understanding their code. There are some conventions
  for how to write PseudoCode so other developers can understand you but it's
  flexible. As long as your colleagues understand you, that's all that counts.

  You don't need to spend a lot of time studying PseudoCode, the syntax isn't so
  hard and you'll pick it up as you use it. With Study Lenses you can also convert
  any JavaScript code into PseudoCode which gives you more than enough examples to
  learn from.

</details>

<table>

<tr>
<td>

### Before

</td>
<td>

### After

</td>
</tr>

<tr>
<td>

```js
'use strict';

// input <- null

// WHILE: input === null
//   input <- prompt('enter something')
// :END WHILE

// alert(input)
```

</td>
<td>

```js
'use strict';

// input <- null
let input = null;
// WHILE: input === null
while (input === null) {
  //   input <- prompt('enter something')
  input = prompt('enter something');
  // :END WHILEs
}

// alert(input)
alert(input);
```

</td>
</tr>
</table>

---
<details markdown="1">
  <summary>
    <h3>🐣 Compare</h3>
  </summary>

  Compare two programs, do they have the same behavior (_data in, data out_)?

  - _If they do have **the same** behavior_: explain how the different lines of
    code create the same behavior.
  - _if they have **different** behavior_: find test cases that show the
    difference and explain why the programs behave differently for these tests.

  Each exercise will have a hidden answer to if the programs are the same or not,
  but they will not explain why they are the same or give test cases. That's up to
  you!

  Below is an example of two programs you might compare and a good answer (you can
  write your answers somewhere, or just say them aloud.):

</details>


<table>
<tr>
<td>

### Program 1

</td>
<td>

### Program 2

</td>
</tr>
<tr>
<td>

```js
'use strict';

let a = prompt('');

let b = 'no';
if (a !== '') {
  b = 'yes';
}

alert(a);
```

</td>
<td>

```js
'use strict';

let a = prompt('');

let b = '';
if (a === null) {
  b = 'no';
} else {
  b = 'yes';
}

alert(a);
```

</td>
</tr>
</table>

```txt
Program 1 and Program 2 are different.

If you input the empty string ("") into both they will output different values.

Program 1 outputs "no"
  The conditional will not be executed, so b will not be reassigned.
  Since b is initialized to "no", that will be the final value.

Program 2 outputs "yes"
  Since "" is not null, the second path will be executed.
  The second path assigned "yes" to b.
  That is the last time b is assigned a new value, so it will be the final value
```

---

<!-- PARSONS -->
<details markdown="1">
  <summary>
    <h3>🐣 Parsons Problems</h3>
  </summary>

  Parsons problems are designed to help you study snippets of code without getting
  caught by errors. You'll be given lines of code and your task is to place them
  in order. But it's not always as easy as it sounds! Exercises will have extra
  lines as distraction, you'll need to figure out which lines are part of the
  program and which are there to confuse you.

  **Here's a [video guide](https://www.youtube.com/watch?v=8mRlMF96gLA) to the `Parsons` lens.**

  - [Parsons Problems have same Learning Gains as Writing or Fixing code, in less time](https://computinged.wordpress.com/2017/11/17/parsons-problems-have-same-learning-gains-as-writing-or-fixing-code-in-less-time-koli-calling-2017-preview)
  <!-- - [How to study programming](https://medium.com/swlh/how-to-study-computer-programming-parsons-problems-2bfdefabfd86) -->
  - [Teaching coding: What is a Parsons Problem?](https://georgejmount.com/parsons-problems/)

</details>

---

<!-- LOGS -->
<details markdown="1">
  <summary>
    <h3>🐥 Logs</h3>
  </summary>

  These are exercises where you practice writing as many programs as possible that
  print the specific logs. When you run a program the console will display the
  _expected logs_ (what your program _should_ print) and your _actual logs_ (what
  your program _did_ print). If your actual logs are different from the expected
  logs the exercise will show which logs are incorrect.

  These exercises are meant for exploring JavaScript and all the creative ways you
  can write code that does the same thing. For example:

  <details>
  <summary>Here are 3 solutions to the challenge "<em>write
  a program that logs <code>1</code>, <code>2</code>, <code>3</code></em>"</summary>
  <br />

  Just plain old logs (boring):

  ```js
  'use strict';

  console.log(1);
  console.log(2);
  console.log(3);
  ```

  Adding `1` to a variable:

  ```js
  'use strict';

  let number = 1;
  console.log(number);

  number = number + 1;
  console.log(number);

  number = number + 1;
  console.log(number);
  ```

  Stepping up to 3 with a while loop:

  ```js
  'use strict';

  let number = 1;
  while (number <= 3) {
    console.log(number);
    number = number + 1;
  }
  ```

  Stepping up by 1 to the length of user input. Only works when the user follows
  their instructions:

  ```js
  'use strict';

  let input = null;
  while (input === null) {
    input = prompt('enter something with 3 characters');
  }

  let number = 1;
  while (number < input.length) {
    console.log(number);
    number = number + 1;
  }
  ```

  </details>

  There will be two types of log exercises:

  - **Not Interactive**: These exercises will not have any user interactions, all
    you need to do is write code that matches the expected logs.
  - **Interactive**: Interactive exercises will be more complicated. You'll need
    to write some code _and/or_ pass in the correct input to match the expected
    logs.

  Each exercise comes with a few starter programs to help you think of different
  ways to solve the same problem. But you're not limited to these suggestions, you
  can always start a new solution from an empty page!

</details>  


---

<!-- SPECS -->
<details markdown="1">
  <summary>
    <h3>🐔 Specs</h3>
  </summary>

  > these exercises can be more challenging, if you get lots of errors or can't
  > finish them right away that's ok. You'll learn more about writing programs
  > later on.

  "Specs" is short for "specifications". In development a
  [_specification_](https://en.wikipedia.org/wiki/Software_requirements_specification#Structure)
  is a description of the software that needs to be built - specific enough that
  the team can get started but general enough that it doesn't tell them how to
  write each file of code. Importantly, specs will also help a team know when
  their software is good enough to call it done.

  The `specs` exercises will ask you to write small interactive programs that meet
  certain specifications. None of these exercises will be large programs, and each
  one can be solved using only what you have learned in previous chapters of Just
  Enough JavaScript.

  All exercises will have these 4 parts:

  1. **User Stories**: those are the interactions a user can have with this
    software when it is finished. You will also be given _acceptance criteria_ to
    help you know when you've satisfied the user story.
  2. **Test Cases**: example input/output pairs - What data can you expect to come
    out of your program when you input certain values? You can use these test
    cases to make sure your software functions correctly. But don't stop there!
    See if you can think of other strange inputs that might break your program.
  3. **Starter Code**: each exercise will have some starter code with a couple `_`
    blanks. You can change this as much as you want, it's just a suggestion
  4. **Checklist**: working code does not mean you're finished! There is a
    checklist to help you know when your code is complete. You will need to make
    sure your code is formatted, has good variable names, is well-commented and
    error-free.

  Even with these constraints, there are many different solutions to each problem.
  See how many you can find! Below are 3 different ways to write a program that
  meet the same specifications - to add excitement to the user's input (and there
  are still many more solutions):

</details>  

<details>
<summary>the challenge</summary>

```js
'use strict';
/*
  1. ===== the user story =====

  a user can provide any input to a prompt
    - given the input is null, the program is sad
    - given the input is not null, the program is excited

  2. ===== the test cases =====

  test cases:
    the user cancels:
      null -> ':('
    any input is exciting:
      '' -> '!'
      'hi' -> 'hi!'
      'javascript' -> 'javascript!'
*/

// 3.  ===== the starter code =====

console.log('--- begin program ---');

/* --- gather user input --- */

let input = prompt(_);
console.log('input:', input);

/* --- declare initial output --- */

let output = _;

/* --- create final output --- */

/* --- alert the result --- */

console.log('output:', output);
alert(output);

console.log('--- end program ---');

/*
  4. ===== the checklist =====

  checklist:
    [ ] the code is formatted
    [ ] linting check passes
    [ ] variable names are clear and helpful
    [ ] each line of code is explained in a comment above that line
      - use full sentences and correct JS vocabulary
    [ ] the program runs
    [ ] the program has no errors
    [ ] all of the test cases work
    [ ] you tested strange inputs that could break your program (edge cases)
*/
```

</details>

<details>
<summary>solution 1</summary>

```js
'use strict';
/*
  a user can provide any input to a prompt
    - given the input is null, the program is sad
    - given the input is not null, the program is excited

  test cases:
    the user cancels:
      null -> ':('
    any input is exciting:
      '' -> '!'
      'hi' -> 'hi!'
      'javascript' -> 'javascript!'
*/

console.log('--- begin program ---');

/* --- gather user input --- */

// maybe not the most clear instructions, but it's good enough for now
let input = prompt('if you cancel i will be sad. otherwise i will be excited.');
console.log('input:', input);

/* --- declare initial output --- */

// declaring output to an empty string
//  it will be assigned the correct value in a conditional later on
let output = '';

/* --- create final output --- */

// input will only be null if the user canceled
if (input === null) {
  // assign the sad output value because the user canceled
  output = ':(';
} else {
  // this is the path for any input that is not from the user canceling
  //  since the user didn't cancel, i assigned added some excitement
  output = input + '!';
}

/* --- alert the result --- */

console.log('output:', output);
alert(output);

console.log('--- end program ---');

/*
  checklist:
    [x] the code is formatted
    [x] variable names are clear and helpful
    [x] each line of code is explained in a comment above that line
      - use full sentences and correct JS vocabulary
    [x] the program runs
    [x] the program has no errors
    [x] all of the test cases work
    [x] you tested strange inputs that could break your program (edge cases)
*/
```

</details>

<details>
<summary>solution 2</summary>

```js
'use strict';
/*
  a user can provide any input to a prompt
    - given the input is null, the program is sad
    - given the input is not null, the program is excited

  test cases:
    the user cancels:
      null -> ':('
    any input is exciting:
      '' -> '!'
      'hi' -> 'hi!'
      'javascript' -> 'javascript!'
*/

console.log('--- begin program ---');

/* --- gather user input --- */

// maybe not the most clear instructions, but it's good enough for now
let input = prompt('give me something to be excited about:');
console.log('input:', input);

/* --- declare initial output --- */

// initialized the output to the sad output, assuming the user canceled
//  if they didn't cancel, the program will later reassign the correct value
let output = ':(';

/* --- create final output --- */

// check if the user inputted a string value
if (input !== null) {
  // if they did not cancel, be excited about their input
  output = input + '!';
}

/* --- alert the result --- */

console.log('output:', output);
alert(output);

console.log('--- end program ---');

/*
  checklist:
    [x] the code is formatted
    [x] variable names are clear and helpful
    [x] each line of code is explained in a comment above that line
      - use full sentences and correct JS vocabulary
    [x] the program runs
    [x] the program has no errors
    [x] all of the test cases work
    [x] you tested strange inputs that could break your program (edge cases)
*/
```

</details>

<details>
<summary>solution 3</summary>

```js
'use strict';
/*
  a user can provide any input to a prompt
    - given the input is null, the program is sad
    - given the input is not null, the program is excited

  test cases:
    the user cancels:
      null -> ':('
    any input is exciting:
      '' -> '!'
      'hi' -> 'hi!'
      'javascript' -> 'javascript!'
*/

console.log('--- begin program ---');

/* --- gather user input --- */

// maybe not the most clear instructions, but it's good enough for now
let input = prompt('give me something to be excited about:');
console.log('input:', input);

/* --- declare initial output --- */

// initialize the output to be excited, assuming the user didn't cancel
//  if they did cancel, the program will later reassign the correct value
let output = input + '!';

/* --- create final output --- */

// check if the user actually canceled
if (input === null) {
  // if they did cancel, be sad
  output = ':(';
}

/* --- alert the result --- */

console.log('output:', output);
alert(output);

console.log('--- end program ---');

/*
  checklist:
    [x] the code is formatted
    [x] variable names are clear and helpful
    [x] each line of code is explained in a comment above that line
      - use full sentences and correct JS vocabulary
    [x] the program runs
    [x] the program has no errors
    [x] all of the test cases work
    [x] you tested strange inputs that could break your program (edge cases)
*/
```

</details>

---

<details markdown="1">
  <summary>
    <h3>🐔 DOM I/O</h3>
  </summary>

  Small interactive web pages that use the DOM I/O library. Each exercise will
  have an _obfuscated_ solution so you can compare the output of your program to
  the expected output without being able to read the solution.

</details>
