# Logging

> _State: the values stored in your program's memory at a single step of
> execution._

The goal of logging is to build your own trace of execution. So far you've been
using the `trace` button to study this module's exercises, but you won't have
this for all your projects. And sometimes it just prints too much information.
There are some things that `trace` can show which you won't be able to see with
a `console.log`, but there's also a lot of information you can print with
`console.log` that doesn't show up with `trace`.

Logging your code is a balance; Writing too many logs will clutter the console
with too much info and your code with too many extra lines. Writing too few logs
won't give you a clear enough idea of what's going on inside your program. These
exercises are a chance for you to you to explore this balance. Learning to write
clear and precise logs will help you to understand and debug your code in any
programming environment.

In these exercises you are encouraged to experiment with different ways of
logging the programs. For each file try out a few different strategies,
describing what you tried in a block comment at the top of the file. Feel free
to copy each program as many times as you like to keep a record of everything
you've tried.

---

## Logging vs. Interactions

Logging is for developers, interactions are for the user. Logs trace what
happens _inside_ the program for developers. Interactions let the _outside_
world interact with your program.

- **Logging**: What a developer can read through _after_ the program has
  finished running to understand what happened. Users won't see these!
- **Interactions**: How a user can participate in the program _while_ it is
  running. Developers will often not be able to see users interact with the
  program, they will need to figure out what happened after the fact by reading
  logs.

```js
// an interaction with the user while the program is runnning
let input = prompt('enter the word "yes", upper or lower case');

// a log for the developer to read after the program has completed
console.log(input);

let reaction = '';
if (input === null) {
  reaction = ':(';
} else if (input.toLowerCase() === 'yes') {
  reaction = input + '!';
} else {
  reaction = 'baaaaad: ' + input;
}

alert(reaction);
```

---

## The Golden Rule

Logs are like one-way windows. They help you see into your program without
changing anything about how the program behaves. So do not include logic in your
logs, logs should just print values as they appear in your program. when you
write logic in your logs you risk one of two things:

- Accidentally changing values in your program because you made a mistake. Now
  your logs are no longer just windows, they're part of the program!:

  ```js
  let input = prompt('enter something');
  // ! you've changed the value of input by accidentally using = instead of ===
  console.log('did they cancel?', (input = null));

  alert(input);
  ```

- Logging something that is not true because you made a mistake in your logging
  logic. Now your logs are not a clear window, they are showing you something
  that is not actually true about your program:

  ```js
  let input = prompt('enter something');
  // this will print "string" even if the user cancels, so the input was null
  console.log(typeof 'the user input was ' + input);

  alert(input);
  ```

The best logs just print a variable or a value directly to the console. The one
useful exception to this rule is using the `typeof` operator in your logs:

```js
let input = prompt('enter something');
// notice! A comma is used to separate different logs
console.log(typeof input, input);

alert(input);
```

---

## Logging Strategies

There's different approaches you can take to logging your programs, each will
help you trace a different aspect of the program's execution. There is no best
way to log, it will depend on your program, and will probably include a mix of
all these strategies.

### Program Structure

> to build a trace of your program's general behavior

The simplest type of logging is to just log a string at certain points in the
program. It all depends on the program you're studying and what you want to
learn from it, but here's some ideas for inspiration:

- **Beginning and End:** Put a little "hello" and "goodbye" at the beginning and
  end of your program. This isn't too complicated with the code in Welcome to
  JS, but it won't always be so easy.
- **Chunks:** Log a short description of what's about to happen at the beginning
  of each chunk in your program.

<details><summary>Beginning, End & Chunks</summary>

```js
console.log('=== a program to tell a user if they inputted "yes" ===');

console.log('-- gathering the user input');

let input = prompt('enter the word "yes", upper or lower case');

console.log('-- generating the reaction');

let reaction = '';
if (input === null) {
  reaction = ':(';
} else if (input.toLowerCase() === 'yes') {
  reaction = input + '!';
} else {
  reaction = 'baaaaad: ' + input;
}

console.log('-- communicating the reaction to the user');

alert(reaction);

console.log('=== all done ===');
```

</details>

---

### Variables

> to build a trace of your program's data

when it is declared, and when it is assigned or read. it all depends on what
parts of your code you want ot trace

These are just some ideas for how you can log your variables, it's up to you and
your code to find what's most helpful:

<details>
<summary>Values only</summary>

```js
let input = prompt('enter the word "yes", upper or lower case');
console.log(input);

let reaction = '';
if (input === null) {
  reaction = ':(';
} else if (input.toLowerCase() === 'yes') {
  reaction = input + '!';
} else {
  reaction = 'baaaaad: ' + input;
}
console.log(reaction);

alert(reaction);
```

</details>
<details>
<summary>Name and value</summary>

```js
let input = prompt('enter the word "yes", upper or lower case');
console.log('input:', input);

let reaction = '';
if (input === null) {
  reaction = ':(';
} else if (input.toLowerCase() === 'yes') {
  reaction = input + '!';
} else {
  reaction = 'baaaaad: ' + input;
}
console.log('reaction:', reaction);

alert(reaction);
```

</details>
<details>
<summary>Name, type and value</summary>

```js
let input = prompt('enter the word "yes", upper or lower case');
console.log('input:', typeof input, input);

let reaction = '';
if (input === null) {
  reaction = ':(';
} else if (input.toLowerCase() === 'yes') {
  reaction = input + '!';
} else {
  reaction = 'baaaaad: ' + input;
}
console.log('reaction:', typeof reaction, reaction);

alert(reaction);
```

</details>
<details>
<summary>Name, use, type and value</summary>

```js
let input = prompt('enter the word "yes", upper or lower case');
console.log('input, declare, init:', typeof input, input);

let reaction = '';
if (input === null) {
  reaction = ':(';
} else if (input.toLowerCase() === 'yes') {
  reaction = input + '!';
} else {
  reaction = 'baaaaad: ' + input;
}
console.log('reaction, write:', typeof reaction, reaction);

alert(reaction);
```

</details>
<details>
<summary>Other information</summary>

```js
let input = prompt('enter the word "yes", upper or lower case');
console.log('input, should be "yes":', typeof input, input);

let reaction = '';
if (input === null) {
  reaction = ':(';
} else if (input.toLowerCase() === 'yes') {
  reaction = input + '!';
} else {
  reaction = 'baaaaad: ' + input;
}
console.log('reaction:', reaction);

alert(reaction);
```

</details>

---

### Control Flow

> to build a trace of your program's execution paths

Logging something like "first loop" at the beginning of a loop block, or "first
condition"/"second condition"/"else condition" at the beginning of each
conditional block can give you a good idea of how your program is executed. You
will want to be more descriptive than just "first" or "second" in your own
programs, that's just for example here.

<details><summary>Conditionals</summary><br>

to trace the program's flow through conditional statements you can place one log
at the beginning of the conditional describing it's purpose, then one log in
each path to know which path was taken.

```js
let input = prompt('enter the word "yes", upper or lower case');

let reaction = '';

console.log('conditional: deciding the reaction');
if (input === null) {
  console.log('path: user canceled');
  reaction = ':(';
} else if (input.toLowerCase() === 'yes') {
  console.log('path: input was "yes"');
  reaction = input + '!';
} else {
  console.log('path: input was not "yes"');
  reaction = 'baaaaad: ' + input;
}

alert(reaction);
```

</details>
<details><summary>While Loops</summary><br>

to trace the program's flow through while loops you could place one log at the
beginning of the loop describing it's purpose, then a log at the top of the loop
to see how many times it's executed. You could take it one step further by
logging something related to the while test at the end of your loop. Be careful!
It's possible to make a mistake

```js
let input = null;
console.log('I/O loop');
while (input === null) {
  console.log('prompting for input');
  input = prompt('enter the word "yes", upper or lower case');
  console.log('input:', typeof input, input);
}

let reaction = '';

if (input === null) {
  reaction = ':(';
} else if (input.toLowerCase() === 'yes') {
  reaction = input + '!';
} else {
  reaction = 'baaaaad: ' + input;
}

alert(reaction);
```

</details>
<details><summary>For-Of Loops</summary><br>

With a for-of loop it can be helpful to log each character of your string, and
the result of what your logic in the loop body.

```js
let input = null;
while (input === null) {
  input = prompt('enter something');
}

let backwards = '';
for (let char of input) {
  console.log(char);
  backwards = char + backwards;
  console.log(backwards);
}

alert(backwards);
```

</details>
<details><summary>For Loops</summary><br>

For loops are like for-of loops, but a little more complicated. You will also
want to log the incrementor variable:

```js
let input = null;
while (input === null) {
  input = prompt('enter something');
}

let everyOther = '';
for (let i = 0; i < input.length; i = i + 2) {
  console.log(i);
  let char = input[i];
  console.log(char);
  everyOther = everyOther + char;
  console.log(everyOther);
}

alert(everyOther);
```

</details>

---

### All Together

> to build a trace of the most helpful information

Be creative! What's helpful for you and the program you're working on? And
remember your logging strategy can change over time for the same program as you
learn more about it, it's easy to add or remove logs because they won't change
your program's behavior.

Here's an example of all the different logging strategies at once:

<details>
<summary>More logging than code!</summary>
<br>

```js
console.log('=== a program to tell a user if they inputted "yes" ===');

console.log('-- gathering the user input');

let input = prompt('enter the word "yes", upper or lower case');
console.log('input, should be "yes":', typeof input, input);

console.log('-- generating a reaction');

let reaction = '';
console.log('conditional: deciding the reaction');
if (input === null) {
  console.log('path: user canceled');
  reaction = ':(';
} else if (input.toLowerCase() === 'yes') {
  console.log('path: input was "yes"');
  reaction = input + '!';
} else {
  console.log('path: input was not "yes"');
  reaction = 'baaaaad: ' + input;
}
console.log('reaction:', reaction);

console.log('-- communicating the reaction to the user');

alert(reaction);

console.log('=== all done ===');
```

</details>
<details><summary>And a happy medium :)</summary>

```js
console.log('=== a program to tell a user if they inputted "yes" ===');

let input = prompt('enter the word "yes", upper or lower case');
console.log('input, should be "yes":', typeof input, input);

let reaction = '';
if (input === null) {
  console.log('path: user canceled');
  reaction = ':(';
} else if (input.toLowerCase() === 'yes') {
  console.log('path: input is "yes"');
  reaction = input + '!';
} else {
  console.log('path: input was not "yes"');
  reaction = 'baaaaad: ' + input;
}
console.log('reaction:', reaction);

alert(reaction);
```

</details>
