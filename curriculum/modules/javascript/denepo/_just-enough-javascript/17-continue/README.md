# 🐣 `continue`

`continue` is a JavaScript key words that you can use in your loops for _control
flow_. When it is executed your program will skip the rest of the loop body and
go back to check the condition.

You do not really _need_ `continue`, any code you write with `continue` you
could also write with an `if`/`else` and a _boolean flag variable_. But
sometimes using `continue` can make your code less dense and easier to read.

---

## While Loop

You can use `continue` inside `while` loops:

```js
'use strict';

let input = null;

// normally while (true) would create an infinite loop
//  you can use `break` to exit the loop, so it is not infinite
while (true) {
  input = prompt('enter something');

  if (input === null) {
    alert('there is no escape');
    // jump directly to the check, skipping the rest of the body
    continue;
  }

  if (input === '') {
    alert('no empty text allowed');
    // jump directly to the check, skipping the rest of the body
    continue;
  }

  // exit the loop immediately, without executing a check
  break;
}

alert(input + '!');
```

<details>
<summary>The same program written without using <code>break</code> or <code>continue</code></summary>
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

You can also use `continue` with `for-of` loops, but it doesn't always make code
easier to understand!

```js
'use strict';

let input = null;
while (input === null) {
  input = prompt('enter something, all spaces will be removed');
}

let spaceless = '';
for (let char of input) {
  if (char === ' ') {
    // skip to the next character
    continue;
  }
  spaceless = spaceless + char;
}

alert(input + ' -> ' + spaceless);
```

<details>
<summary>The same program written without using <code>break</code> or <code>continue</code></summary>
<br>

```js
'use strict';

let input = null;
while (input === null) {
  input = prompt('enter something, all spaces will be removed');
}

let spaceless = '';
for (let char of input) {
  if (char !== ' ') {
    spaceless = spaceless + char;
  }
}

alert(input + ' -> ' + spaceless);
```

</details>

---

## Conditionals

Nope! Can't use `continue` in a conditional, it will cause an error.

```js
'use strict';

let nope = 'NOPE!';

if (nope.length > 2){
  continue; // SyntaxError
}
```

---

## References

- [programiz](https://www.programiz.com/javascript/continue-statement)
- [net ninja](https://www.youtube.com/watch?v=QSuTH0C_3_Y)
