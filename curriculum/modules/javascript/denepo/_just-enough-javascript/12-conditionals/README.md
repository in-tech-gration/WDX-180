# Conditionals

```js
'use strict';
console.log('-- conditionals --');

let isLeftHanded = confirm('are you left handed?');
console.log(isLeftHanded);

if (isLeftHanded) {
  alert('you are left handed');
} else {
  alert('you are not left handed');
}
```

<details>
<summary>🥚 if</summary>

```js
'use strict';
console.log('-- if --');

let input = prompt("please don't cancel");

let response = '';
if (input === null) {
  // enter this block if the condition is true
  response = 'you are a canceler';
}

alert(response);
```

</details>
<details>
<summary>🥚 if else</summary>

```js
'use strict';
console.log('--  if else  --');

let input = prompt("please don't cancel");

let response = '';
if (input === null) {
  // enter this block if the condition is true
  response = 'you are a canceler';
} else {
  // enter this block if the condition is false
  response = input;
}

alert(response);
```

</details>
<details>
<summary>🥚 if else if else</summary>

```js
'use strict';
console.log('-- if else if else --');

let input = prompt('enter something');

let response = '';
if (input === null) {
  // enter this block if the first condition is true
  response = 'you are a canceler';
} else if (input === '') {
  // enter this block if the second condition is true
  response = 'come on, type something';
} else {
  // enter this block if all conditions are false
  response = '"' + input + '" is something';
}

alert(response);
```

</details>

---

## Execution Paths

Code using conditionals has more than one _execution path_. An execution path is
the specific lines of code that are executed when you run the program. This
means that you can no longer just read a program from top to bottom to
understand how it works, different values in a program can mean that different
lines will execute!

Creating trace tables, and using the `trace` or `openIn` buttons will help you
understand how programs with conditionals behave.

<details>
<summary>🥚 2 paths: if else</summary>

```js
'use strict';
console.log('-- 2 paths: if else --');

let input = prompt('enter something');

let path = '';
if (input === null) {
  path = 'a';
} else {
  path = 'b';
}

alert(path);
```

</details>
<details>
<summary>🥚 3 paths: if else if else</summary>

```js
'use strict';
console.log('-- 3 paths: if else if else --');

let input = prompt('enter something');

let path = '';
if (input === null) {
  path = 'a';
} else if (input === '') {
  path = 'b';
} else {
  path = 'c';
}

alert(path);
```

</details>
<details>
<summary>🥚 4 paths: nested</summary>

```js
'use strict';
console.log('-- 4 paths: nested --');

let input = prompt('enter "something"');

let path = '';
if (input !== null) {
  path = 'a';
  if (input === '') {
    path = path + '1';
  } else if (input === 'something') {
    path = path + '2';
  } else {
    path = path + '3';
  }
} else {
  path = 'b';
}

alert(path);
```

</details>

---

## Nested Conditionals

Programs with more execution paths are more complex to understand, but can also
have a more interesting user experience. One way to write more interesting
programs is to use _nested conditionals_ (conditionals inside of conditionals)

<details>
<summary>🐣 memory game</summary>

```js
'use strict';
console.log('-- memory game --');

let thingToRemember = prompt(
  'enter some text, then remember it.\n\n' +
    'if you remember it correctly you win',
);

if (thingToRemember !== null) {
  let displayTheText = confirm(
    'would you like to see your text one more time?',
  );
  if (displayTheText) {
    alert(thingToRemember);
  }
  let guess = prompt('now try to remember what it was:');
  if (guess !== null) {
    if (guess === thingToRemember) {
      alert('you win!');
    } else {
      alert('try again.');
    }
  }
}

alert('good bye');
```

</details>

---

## Trace Exercises

There will be two kinds of tracing exercises from now on, **interactive** and
**not interactive**. Each will help you explore the different _execution paths_
of a program.

The **interactive** trace exercises will use `prompt`, `alert` and `confirm` to
introduce different values into your program.

The **not interactive** exercises will have a few variable declarations at the
top of the file with different initial values. You can comment and uncomment the
variables to see how the program behaves with different values:

<details>
<summary>🥚 example not-interactive exercise</summary>

```js
'use strict';
let value = -1;
// let value = -0.5;
// let value = 0;
// let value = 0.5;
// let value = 1;

let message;
if (value < 0) {
  message = 'too small';
} else if (value === 0) {
  message = 'perfect';
} else if (value > 0) {
  message = 'too big';
} else {
  message = 'this path is unreachable!';
}

console.log(message);
```

</details>

---

## References

- [RichardCodes](https://www.youtube.com/watch?v=NAOSKGV9bqg)
- [Mosh](https://www.youtube.com/watch?v=IsG4Xd6LlsM)
- [programiz](https://www.programiz.com/javascript/if-else)
- [javascript.info](https://javascript.info/ifelse)
- [launchcode](https://education.launchcode.org/intro-to-professional-web-dev/chapters/booleans-and-conditionals/conditionals.html)
- MDN:
  [the docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else),
  [intro](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals)
