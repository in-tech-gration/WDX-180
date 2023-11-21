# Modifying Programs

Here you will practice how to change the behavior of a whole program by making
simple, small changes on one or two lines. Each exercise has `original.js` that
has the working program you should modify. Each `challenge-x.js` has a
description of how you should modify the program, you can copy-type the original
code into these files to get started.

Here are two tips:

1. Make one small change at a time and run the program after every change.
2. Keep track of each change you made and how it effected the program.

Using comments to keep track of your experiments will help with both of those
tips. Below is an example of how you can use comments to track the changes you
made and how they effected your program.

This is of course a very simple example just to help you see how comments can be
helpful, the actual challenges may require a few changes on different lines.
With more complex challenges you'll need to think ahead and recognize when a
change you have made is a step in the right direction, even if the challenge is
not yet complete.

And here's the example:

---

## Original Program + a Challenge

Read, run and study the program before making any changes. The better you
understand the program the more productive you will be modifying it.

The goal of modifying a program isn't to randomly change lines until it works,
the goal is to make small changes based on your best understanding of what the
code _already_ does. You may want to add some comments in the program, but try
to keep them small so they don't get in the way of the next steps.

```js
'use strict';

/*
  modify this program so it accepts only strings longer than 7 characters
*/

let input = '';

while (input !== null && input.length > 5) {
  input = prompt('enter something longer than 5 characters');
}

alert(input);
```

## Experiment 1

Comment out the original code and leave it as a reference for later, then
copy-type the original code and make one small change. Make a quick prediction
of how you think the program will change, run the program and note if you were
right or wrong.

If the experiment did not work, no problem! You can just comment it out and move
on to the next.

```js
'use strict';

/*
  modify this program so it accepts only strings longer than 7 characters
*/

let input = '';

// original code:
// while (input !== null && input.length > 5) {

// experiment 1: use the >= operator instead
//  predict: the program will now also accept strings with 7 characters
//  actual: it does accept strings with 7 characters, but also shorter strings
//          that's not the goal, it should not accept strings shorter than 7
while (input !== null && input.length >= 5) {
  input = prompt('enter something longer than 5 characters');
}

alert(input);
```

## Experiment 2

Comment out the experiment that didn't go as you'd predicted, copy-type the line
you're modifying and repeat!

Note: just because a line does what you predicted doesn't always mean that
you're trying to make the right change ;)

```js
'use strict';

/*
  modify this program so it accepts only strings longer than 7 characters
*/

let input = '';

// original code:
// while (input !== null && input.length > 5) {

// experiment 1: use the >= operator instead
//  predict: the program will now also accept strings with 7 characters
//  actual: it does accept strings with 7 characters, but also shorter strings
//          that's not the goal, it should not accept strings shorter than 7
// while (input !== null && input.length >= 5) {

// experiment 2: use `>= 7` in the condition
//  predict: it will accept strings 7 characters or longer
//  actual: correct! it did what I predicted
//      but I misunderstood the challenge, the program shouldn't accept length 7
while (input !== null && input.length >= 7) {
  input = prompt('enter something longer than 5 characters');
}

alert(input);
```

## Experiment 3, success

```js
'use strict';

/*
  modify this program so it accepts only strings longer than 7 characters
*/

let input = '';

// original code:
// while (input !== null && input.length > 5) {

// experiment 1: use the >= operator instead
//  predict: the program will now also accept strings with 7 characters
//  actual: it does accept strings with 7 characters, but also shorter strings
//          that's not the goal, it should not accept strings shorter than 7
// while (input !== null && input.length >= 5) {

// experiment 2: use `>= 7` in the condition
//  predict: it will accept strings 7 characters or longer
//  actual: correct! it did what I predicted
//      but I misunderstood the challenge, the program shouldn't accept length 7
// while (input !== null && input.length >= 7) {

// experiment 3: use `> 7`
//  predict: it will accept only strings longer than 7 characters
//  actual: it does what I wanted, and I wanted the right thing
// success!
while (input !== null && input.length > 7) {
  input = prompt('enter something longer than 5 characters');
}

alert(input);
```
