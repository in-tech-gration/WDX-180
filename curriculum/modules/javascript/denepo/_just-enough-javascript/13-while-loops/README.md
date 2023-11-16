# While Loops

While loops allow you to write a block of code that will repeat _while_ a
condition is true. The condition in a while loop is very similar to a
conditional, if the value in the parenthesis is true the block of code will be
executed.

The major difference between a while loop and a conditional is that a
conditional will only test the value once. A while loop will test the value as
many times as necessary until it is false.

```js
'use strict';
console.log('-- while --');

let input = null;
while (input === null) {
  input = prompt('do not cancel');
}

alert(input + '!');
```

<details>
<summary>🥚 while null</summary>

```js
'use strict';
console.log('-- while null --');

let input = null;

// continue prompting the user until they enter
//  an empty string is ok, because it is not canceling
while (input === null) {
  input = prompt('do not cancel');
}

alert(input + '!');
```

</details>
<details>
<summary>🥚 while null or empty string</summary>

```js
'use strict';
console.log('-- while null or empty string --');

let input = null;

// continue prompting the user until they enter something
//  an empty string is not allowed!
while (input === null || input === '') {
  input = prompt('enter something');
}

alert(input + '!');
```

</details>
<details>
<summary>🥚 while not "bread"</summary>

```js
'use strict';
console.log('-- while not "bread" --');

let input = null;

// continue prompting the user until they enter "bread"
//  this loop is different because it finishes when the user's input IS a specific value
//  the other loops ended when the user's input was NOT a specific value
while (input !== 'bread') {
  input = prompt('enter "bread"');
}

alert(input + '!');
```

</details>
<details>
<summary>🥚 while not "bread" and not "water"</summary>

```js
'use strict';
console.log('-- while not "bread" or "water" --');

let input = null;

// continue prompting the user until they enter "bread" or "water"
//  notice that this example use !== with &&, but the previous used === with ||
while (input !== 'bread' && input !== 'water') {
  input = prompt('enter "bread" or "water"');
}

alert(input + '!');
```

</details>

---

## Looping Strategies

Here are two strategies you can use when writing `while` loops:

### Logic in Condition

Write the logic for your loop directly in the parenthesis of the `while` loop.
This is good for loops where the logic is simple:

<details>
<summary>🥚 logic in condition</summary>

```js
'use strict';
// yup, nothing new here
// all of the examples so far have been written this way

let input = null;
while (input === null) {
  input = prompt('do not cancel');
}
alert(input);
```

</details>

### Boolean Flag

Another strategy for writing for loops is to use _boolean flag variable_. A
boolean flag is a variable that stores a boolean that you can set to `true` or
`false` depending on what has happened in your program.

Boolean flags are useful when the logic of your for loop is more complicated:

<details>
<summary>🐣 boolean flag</summary>

```js
'use strict';
let input = '';
let prompting = true;
while (prompting) {
  input = prompt(
    'enter something longer than 4 characters, or "cancel" to leave',
  );
  if (input === null) {
    prompting = false;
    input = 'you canceled';
  } else if (input.length > 4) {
    prompting = false;
  }
}
alert(input);
```

</details>

---

## Infinite Loops

```js
'use strict';
console.log('-- while true --');

// this is the simplest infinite loop
//  while loops continue so long as the condition is true
//  this condition is true and will never change!

while (true) {
  // the only way to end this loop is to close the browser tab
  console.log('... forever ...');
}
```

Sometimes you will write a loop that never ends. There's many ways to do this,
and it will happen a lot while you're studying. It's easy to accidentally write
an infinite loop, and hard to predict when it will happen.

Some infinite loops are easy to find just by reading your code, others are
trickier to guess. Check out the **[./infinite-loops](./infinite-loops)** folder
to practice running and fixing infinite loops.

### 🐣 Loop Guards

One way to avoid infinite loops is to use _loop guards_.

A loop guard is a little extra code in your program that throws an error if a
loop repeats too many times. This kind of loop guard isn't something you'll use
in your professional code, but it's very helpful while you're learning.

<details>
<summary>loop guard: 10 iterations</summary>

```js
'use strict';
console.log('-- loop guard: 10 iterations --');

let loopGuard = 0;
while (true) {
  loopGuard = loopGuard + 1;
  if (loopGuard > 10) {
    throw new RangeError('loopGuard exceeded 10 iterations');
  }

  console.log('(not) forever');
}
```

</details>

When you use the `?study` lens there is an option that will automatically add
loop guards to your code when you run it. This way you can write your code
without the extra code, and still have the security of a loop guard when you run
it.

---

## No `else`

```js
'use strict';
// this is not allowed in JS! you will get a syntax error
//  it looks logical and useful, but does not exist

let input = null;
while (input === null) {
  input = prompt('enter something');
} else { // SyntaxError
  alert('canceling is not allowed');
}

alert(input);
```

---

## References

- [programiz](https://www.programiz.com/javascript/while-loop)
- [launchcode](https://education.launchcode.org/intro-to-professional-web-dev/chapters/loops/while-loops.html)
- [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)
