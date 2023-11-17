# Describing Programs

> Code Comments: “What questions would be asked by someone looking at this code
> for the first time?”
>
> - [Scottford](https://blog.codinghorror.com/code-tells-you-how-comments-tell-you-why/)

This set of examples and exercises will help you learn how to do a close reading
of JavaScript programs. You will practice writing many comments in a file to
describe what is happening and why.

<details>
<summary>example program</summary>
<br>

```js
'use strict';
/*
   (describe what the program does from the user's perspective)

   A user can ...
   - given ...
   - given ...

   test cases
   - given ...
     'input' -> 'output'
     'input' -> 'output'
   - given ...
     ...
 */

/* -- goal (an important step in the program) -- */

// what code is written in line of the program?
//  why is this line of code here?
//  what variables does it use?
//  how does it relate to other lines?
//  ... anything else you notice?
let line = 'of code';

/* -- goal (an important step in the program) -- */

// what code is written in line of the program?
//  why is this line of code here?
//  what variables does it use?
//  how does it relate to other lines?
//  ... anything else you notice?
alert(line);
```

</details>

- [Zooming Out](#zooming-out)
- [Zooming In](#zooming-in)
- [Connections](#connections)
- [Goals](#goals)
- [About Commenting](#about-commenting)

---

## Zooming Out

Understanding what the entire program does just by running, without looking at
any single line of code.

- can a user interact with the program?
  - when do they interact? (beginning, middle, end, ...)
  - how is the user's input processed?
  - can the user's input influence the program's flow?
- what data is at the beginning of the program?
- what data is at the end of the program?
- what is the user's journey? how many different paths can it take?
- ... what else can you say about the program?

Practice writing your thoughts as user stories, acceptance criteria, and test
cases:

<details>
<summary>example program</summary>
<br>

```js
'use strict';
/*
   A user can input anything, if the input is "yes" the program is excited
   - given the user cancels, the program is sad
   - given the user inputs 'yes' (case insensitive) the program is excited
   - given any other inputs, the program says it's "baaaaad"

   test cases:
   - the user cancels
     null -> ':('
   - any sort of 'yes'
     'yes' -> 'yes!'
     'Yes' -> 'Yes!'
     'yES' -> 'yES!'
   - any other input
     'hello' -> 'baaaaad: hello'
     '' -> 'baaaaad: '
     'good bye' -> 'baaaaad: good bye'
 */

let userInput = prompt('enter the word "yes", upper or lower case');

let reaction = '';
if (userInput === null) {
  reaction = ':(';
} else if (userInput.toLowerCase() === 'yes') {
  reaction = userInput + '!';
} else {
  reaction = 'baaaaad: ' + userInput;
}

alert(reaction);
```

</details>

[TOP](#describing-programs)

---

## Zooming In

Understanding what each line of code does and how it works, without taking a
step back to understand the whole program.

- what language features are used in each line?
- what data types and operators are in the program?
- what does the variable name(s) tell you about the code?
- what control flow do you see?
- ... what else do you notice about each line?

> if a line is important you can use `!`
>
> if a line is not clear you you can use `?`
>
> if you want to return to a line later, maybe use `#`

<details>
<summary>example program</summary>
<br>

```js
'use strict';
/*
   A user can input anything, if the input is "yes" the program is excited
   - given the user cancels, the program is sad
   - given the user inputs 'yes' (case insensitive) the program is excited
   - given any other inputs, the program says it's "baaaaad"

   test cases:
   - the user cancels
     null -> ':('
   - any sort of 'yes'
     'yes' -> 'yes!'
     'Yes' -> 'Yes!'
     'yES' -> 'yES!'
   - any other input
     'hello' -> 'baaaaad: hello'
     '' -> 'baaaaad: '
     'good bye' -> 'baaaaad: good bye'
 */

// call prompt: instructions for the program
// declare, init: the value returned from calling `prompt` (string or null)
let userInput = prompt('enter the word "yes", upper or lower case');

// declare, init: an empty string
let reaction = '';
// check: compare the input to null
if (userInput === null) {
  // assign: a sad face
  reaction = ':(';
}
// check: convert the input to lower case and compare it to 'yes'
else if (userInput.toLowerCase() === 'yes') {
  // assign: the input concatenated with an exclamation mark
  reaction = userInput + '!';
}
// the input is not null, and is not 'yes'
else {
  // assign: baaaad concatenated with the input
  reaction = 'baaaaad: ' + userInput;
}

// call alert: the correct reaction
alert(reaction);
```

</details>

[TOP](#describing-programs)

---

## Connections

Start finding connections between different lines of code across the program.

- Which lines of code are related?
- How is each variable used?
- ... what other connections do you notice between lines?

<details>
<summary>example program</summary>
<br>

```js
'use strict';
/*
   A user can input anything, if the input is "yes" the program is excited
   - given the user cancels, the program is sad
   - given the user inputs 'yes' (case insensitive) the program is excited
   - given any other inputs, the program says it's "baaaaad"

   test cases:
   - the user cancels
     null -> ':('
   - any sort of 'yes'
     'yes' -> 'yes!'
     'Yes' -> 'Yes!'
     'yES' -> 'yES!'
   - any other input
     'hello' -> 'baaaaad: hello'
     '' -> 'baaaaad: '
     'good bye' -> 'baaaaad: good bye'
 */

// call prompt: instructions for the program
// declare, init: the value returned from calling `prompt` (string or null)
//   this line explains to the user what they need to input
//   the `userInput` variable is used later on to check if the user input a valid string
let userInput = prompt('enter the word "yes", upper or lower case');

// declare, init: an empty string
//  this variable will be assigned a different values depending on what the user provided
//  the value in `reaction` will be used at the end of the program to alert the user
let reaction = '';
// check: compare the input to null
//  this is to check if they canceled the prompt
if (userInput === null) {
  // assign: a sad face
  //  let the user know how much they have disappointed you
  reaction = ':(';
}
// check: convert the input to lower case and compare it to 'yes'
//   checking the user input to make sure they put in a valid string
//   this line uses .toLowerCase so that it doesn't matter what letter were upper or lower case
else if (userInput.toLowerCase() === 'yes') {
  // assign: the input concatenated with an exclamation mark
  //   this is the path for valid user inputs
  //   the user will be congratulated for following instructions
  reaction = userInput + '!';
}
// the input is not null, and is not 'yes'
//  they did input something, but it was not correct
else {
  // assign: baaaad concatenated with the input
  //   this is the path for invalid user inputs (things that aren't some form of "yes")
  //   it will tell users that they messed up baaaaadly
  reaction = 'baaaaad: ' + userInput;
}

// call alert: the correct reaction
//  all the logic is done, nothing left but to send your reaction to the user
alert(reaction);
```

</details>

[TOP](#describing-programs)

---

## Goals

So you know what the program does, and how the lines of code work, it's time to
start zooming out again!

A "goal" an important step in the program, it can be a single line of code or
many lines of code. What's important is that a goal achieves one important step
along the way from the program's initial input to it's final output. One way to
decide which lines belong to the same goal is to look at your _connections_
comments. If you see a group of lines that seem to be closely connected, you may
be looking at a goal:

- How does each line of code contribute to the program's overall behavior?
- Which line(s) of code seem the most important?
- How does the program's data change from before to after a goal?

You can label goals with commented line dividers and a short title describe what
important step happens in those lines:

<details>
<summary>example program</summary>
<br>

```js
'use strict';
/*
   A user can input anything, if the input is "yes" the program is excited
   - given the user cancels, the program is sad
   - given the user inputs 'yes' (case insensitive) the program is excited
   - given any other inputs, the program says it's "baaaaad"

   test cases:
   - the user cancels
     null -> ':('
   - any sort of 'yes'
     'yes' -> 'yes!'
     'Yes' -> 'Yes!'
     'yES' -> 'yES!'
   - any other input
     'hello' -> 'baaaaad: hello'
     '' -> 'baaaaad: '
     'good bye' -> 'baaaaad: good bye'
 */

/* --- gather user input --- */

// call prompt: instructions for the program
// declare, init: the value returned from calling `prompt` (string or null)
//   this line explains to the user what they need to input
//   the `userInput` variable is used later on to check if the user input a valid string
let userInput = prompt('enter the word "yes", upper or lower case');

/* --- create a reaction to their input --- */

// declare, init: an empty string
let reaction = '';

// check: compare the input to null
//  this is to check if they canceled the prompt
if (userInput === null) {
  // assign: a sad face
  //  let the user know how much they have disappointed you
  reaction = ':(';
}
// check: convert the input to lower case and compare it to 'yes'
//   checking the user input to make sure they put in a valid string
//   this line uses .toLowerCase so that it doesn't matter what letter were upper or lower case
else if (userInput.toLowerCase() === 'yes') {
  // assign: the input concatenated with an exclamation mark
  //   this is the path for valid user inputs
  //   the user will be congratulated for following instructions
  reaction = userInput + '!';
}
// the input is not null, and is not 'yes'
//  they did input something, but it was not correct
else {
  // assign: baaaad concatenated with the input
  //   this is the path for invalid user inputs (things that aren't some form of "yes")
  //   it will tell users that they messed up baaaaadly
  reaction = 'baaaaad: ' + userInput;
}

/* --- communicate your program's reaction to the user -- */

// call alert: the correct reaction
//  all the logic is done, nothing left but to alert hte final value of `reaction`
alert(reaction);
```

</details>

---

## About Commenting

- [better-programming](https://medium.com/better-programming/javascript-clean-code-comments-c926d5aae2cb)
- [elegantthemes](https://www.elegantthemes.com/blog/wordpress/how-to-comment-your-code-like-a-pro-best-practices-and-good-habits)
- [4 reasons to comment](https://blog.submain.com/4-reasons-need-code-comments/)
- [the pros and cons](https://www.techrepublic.com/article/the-pros-and-cons-but-mostly-pros-of-comments-in-code/)
- [comments in your code](https://medium.com/better-programming/comments-in-your-code-730cfd1dde02)
- [the good, the bad, the ugly](https://www.freecodecamp.org/news/code-comments-the-good-the-bad-and-the-ugly-be9cc65fbf83/)
