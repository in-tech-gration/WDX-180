# 🐣 `break`

`break` is a JavaScript key words that you can use in your loops for _control
flow_.

When it is executed the loop will end immediately, no matter what. the rest of
the loop body will not be executed.

You do not really _need_ `break`, any code you write with `break` you could also
write with an `if`/`else` and a _boolean flag variable_. But sometimes using
`break` can make your code less dense and easier to read.

---

## While Loops

You can use `break` in a `while` loop:

```js
'use strict';

let input = null;

// normally while (true) would create an infinite loop
//  `break` will exit the loop so it is not infinite
while (true) {
  input = prompt('enter something');

  if (input === null) {
    alert('there is no escape');
  } else if (input === '') {
    alert('no empty text allowed');
  } else {
    // exit the loop immediately
    break;
  }
}

alert(input + '!');
```

<details>
<summary>The same program written without using <code>break</code></summary>
<br>

```js
'use strict';

let input = null;

let validInput = false;
while (!validInput) {
  input = prompt('enter something');

  if (input === null) {
    alert('there is no escape');
  } else if (input === '') {
    alert('no empty text allowed');
  } else {
    // exit the loop after the next check
    validInput = false;
  }
}

alert(input + '!');
```

</details>

---

## For-Of Loops

You can also use `break` with `for-of` loops:

```js
'use strict';

let input = null;
while (input === null) {
  input = prompt('enter something with a space');
}

let hasASpace = false;
for (let char of input) {
  if (char === ' ') {
    hasASpace = true;
    // exit the loop immediately after the first space
    break;
  }
}

if (hasASpace) {
  alert('your input has a space');
} else {
  alert('your input does not have a space');
}
```

<details>
<summary>The same program written without using <code>break</code></summary>
<br>

```js
'use strict';

let input = null;
while (input === null) {
  input = prompt('enter something with a space');
}

let hasASpace = false;
for (let char of input) {
  if (char === ' ') {
    hasASpace = true;
    // keep checking all characters even though a space was found
  }
}

if (hasASpace) {
  alert('your input has a space');
} else {
  alert('your input does not have a space');
}
```

</details>

---

## Conditionals

Nope! Can't use `break` in a conditional, it will cause an error.

```js
'use strict';

let nope = 'NOPE!';

if (nope.length > 2){
  break; // SyntaxError
}
```

---

## References

- [programiz](https://www.programiz.com/javascript/continue-statement)
- [net ninja](https://www.youtube.com/watch?v=QSuTH0C_3_Y)
