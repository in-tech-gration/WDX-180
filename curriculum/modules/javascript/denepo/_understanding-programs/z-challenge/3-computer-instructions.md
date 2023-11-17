# Computer Instructions

Each of these programs have identical user experience, and similar developer
experience (comments, logs, variable names & formatting).

What you might notice is that different computer instructions can make it easier
or harder for you to understand the code. This is where a great developer will
shine: finding the clearest way to write the same program.

There are some new language features that were not in the original Cat Detector,
do your best to figure out how they work by tracing the program and searching
online. All of them will be covered in this module.

---

## 0

The one and only, the original ... cat detector!

- **Variables and Types**:
  - `input`: stores either `null` or strings, but only strings after the while
    loop is finished. it is initialized to `null`, assigned in the while loop,
    read in control flow checks and read to create a message.
  - `message`: stores only strings. it is initialized to an empty string,
    assigned a new message, then read for the alert.
- **Data Input**:
  - `prompt`: users can input `null` or strings in the while loop, but only a
    string value will allow the loop to finish.
- **Control Flow Structures**:
  - `while`: repeats as long as the user's input is null
  - `if`/`else`: selects which message to create based on the user's input
- **Operators**: there are no combinations, all operators are used individually
  - `=`: used to initialize the two variables, and to assign them new values
  - `===`: used in the while loop check to decide if the input is valid
  - `!==`: used in the conditional to check if the input is not `"cat"`
  - `+`: used to concatenate `input` into the final message if the input was not
    `'cat'`

<details>
<summary>expand for the program</summary>
<br>

```js
'use strict';

/* The Cat Detector

  This programs prompts the user to input a cat,
  and lets them know if they did input a cat or not.

  Data In:
    Any string

  Data Out:
    A string describing if the user's input was "cat" or not

*/

/* --- gather the user's input --- */

let input = null;
while (input === null) {
  input = prompt('please enter "cat"');
}

/* --- create a message --- */

let message = '';
if (input !== 'cat') {
  message = '"' + input + '" is not a cat';
} else {
  message = 'thank you for the cat';
}

/* --- display the message to the user --- */

alert(message);
```

</details>

---

## 1

The comparisons have their values reversed, the primitive is on the left and the
variable is on the right. Comparisons can be written either way, it's all the
same!

- **Variables and Types**: same as [program 1](#1)
- **Data Input**: same as [program 1](#1)
- **Control Flow Structures**: same as [program 1](#1)
- **Operators**: same as [program 1](#1)

<details>
<summary>expand for the program</summary>
<br>

```js
'use strict';

/* --- gather the user's input --- */

let input = null;
while (null === input) {
  input = prompt('please enter "cat"');
}

/* --- create a message --- */

let message = '';
if ('cat' !== input) {
  message = '"' + input + '" is not a cat';
} else {
  message = 'thank you for the cat';
}

/* --- display the message to the user --- */

alert(message);
```

</details>

---

## 2

Uses a different logic in the while loop check.

- **Variables and Types**: same as [program 1](#1)
- **Data Input**: same as [program 1](#1)
- **Control Flow Structures**: same as [program 1](#1)
- **Operators**:
  - `=`: used to initialize the two variables, and to assign them new values
  - `typeof`: used in the while loop check to find what type the user inputted.
  - `!==`: used in both control flow checks:
    - in the while loop to check if the user's input is _not_ a string
    - in the conditional to check to decide if the input is `"cat"`
  - `+`: used to concatenate `input` into the final message if the input was not
    `'cat'`

<details>
<summary>expand for the program</summary>
<br>

```js
'use strict';

/* --- gather the user's input --- */

let input = null;
while (typeof input !== 'string') {
  input = prompt('please enter "cat"');
}

/* --- create a message --- */

let message = '';
if (input !== 'cat') {
  message = '"' + input + '" is not a cat';
} else {
  message = 'thank you for the cat';
}

/* --- display the message to the user --- */

alert(message);
```

</details>

---

## 3

Uses the `message` variable differently in the `if` body.

- **Variables and Types**:
  - `input`: stores either `null` or strings, but only strings after the while
    loop is finished. it is initialized to `null`, assigned in the while loop,
    read in control flow checks and read to create a message.
  - `message`: stores only strings. it is initialized to an empty string,
    assigned a new message, then read for the alert. In the `if` block it is
    read and assigned multiple times, building up the final message in small
    parts.
- **Data Input**: same as [program 1](#1)
- **Control Flow Structures**: same as [program 1](#1)
- **Operators**: same as [program 1](#1)

<details>
<summary>expand for the program</summary>
<br>

```js
'use strict';

/* --- gather the user's input --- */

let input = null;
while (input === null) {
  input = prompt('please enter "cat"');
}

/* --- create a message --- */

let message = '';
if (input !== 'cat') {
  message = message + '"';
  message = message + input;
  message = message + '" is not a cat';
} else {
  message = 'thank you for the cat';
}

/* --- display the message to the user --- */

alert(message);
```

</details>

---

## 4

Different logic in the conditional check means that the two conditional bodies
are switched.

- **Variables and Types**: same as [program 1](#1)
- **Data Input**: same as [program 1](#1)
- **Control Flow Structures**: same as [program 1](#1)
- **Operators**: there are no combinations, all operators are used individually
  - `=`: used to initialize the two variables, and to assign them new values
  - `===`: used twice, once in each control flow check:
    - in the while loop check to decide if the input is valid
    - in the conditional to check if the input is correct
  - `+`: used to concatenate `input` into the final message if the input was not
    `'cat'`

<details>
<summary>expand for the program</summary>
<br>

```js
'use strict';

/* --- gather the user's input --- */

let input = null;
while (input === null) {
  input = prompt('please enter "cat"');
}

/* --- create a message --- */

let message = '';
if (input === 'cat') {
  message = 'thank you for the cat';
} else {
  message = '"' + input + '" is not a cat';
}

/* --- display the message to the user --- */

alert(message);
```

</details>

---

## 5

This program has an extra `if` statement that actually does nothing useful! It
checks if the input is `null` _after_ the while loop, but it's impossible for
the loop to exit unless the input is a string. So, the extra conditional check
will always be `true`.

Having extra control flow like this doesn't effect the user's experience but can
make it harder for developers to understand your code.

- **Variables and Types**: same as [program 1](#1)
- **Data Input**: same as [program 1](#1)
- **Control Flow Structures**:
  - `while`: repeats as long as the user's input is null
  - `if`: checks if the input is not `null` before creating the message
  - `if`/`else`: selects which message to create based on the user's input
- **Operators**: same as [program 1](#1)

<details>
<summary>expand for the program</summary>
<br>

```js
'use strict';

/* --- gather the user's input --- */

let input = null;
while (input === null) {
  input = prompt('please enter "cat"');
}

/* --- create a message --- */

let message = '';
if (input !== null) {
  if (input === 'cat') {
    message = 'thank you for the cat';
  } else {
    message = '"' + input + '" is not a cat';
  }
}

/* --- display the message to the user --- */

alert(message);
```

</details>

---

## 6

This program has the same user experience with fewer variables. It may also be
easier for you to read as a developer. But the instructions for the computer are
very different!

The data stored in memory is very important to a program's trace, because this
program does not store the message in memory it is not the same program as
program 1.

- **Variables and Types**:
  - `input`: stores either `null` or strings, but only strings after the while
    loop is finished. it is initialized to `null`, assigned in the while loop,
    read in control flow checks and read to create a message.
- **Data Input**: same as [program 1](#1)
- **Control Flow Structures**: same as [program 1](#1)
- **Operators**: same as [program 1](#1)

<details>
<summary>expand for the program</summary>
<br>

```js
'use strict';

/* --- gather the user's input --- */

let input = null;
while (!(input !== null)) {
  input = prompt('please enter "cat"');
}

/* --- display a message to the user --- */

if (input !== 'cat') {
  alert('"' + input + '" is not a cat');
} else {
  alert('thank you for the cat');
}
```

</details>

---

## 7

This program uses two `if` statements instead of one `if`/`else` statement to
create the message. The end result is the same, but the trace is not. In this
program the computer has to compare the `input` variable twice instead of once.

It can also be harder to read as a developer because it's not immediately clear
that both conditions can never be true at the same time. So you may spend extra
time trying to figure out when each message will be created.

- **Variables and Types**: same as [program 1](#1)
- **Data Input**: same as [program 1](#1)
- **Control Flow Structures**:
  - `while`: repeats as long as the user's input is null
  - first `if`: creates the message for when a user _did not_ input `"cat"`
  - second `if`: creates the message for when a user _did_ input `"cat"`
- **Operators**:
  - `=`: used to initialize the two variables, and to assign them new values
  - `===`: used twice
    - in the while loop check to decide if the input is valid
    - in the second `if` check to decide if the input _is_ `"cat"`
  - `!==`: used in the conditional to check if the input _is not_ `"cat"`
  - `+`: used to concatenate `input` into the final message if the input was not
    `'cat'`

<details>
<summary>expand for the program</summary>
<br>

```js
'use strict';

/* --- gather the user's input --- */

let input = null;
while (input === null) {
  input = prompt('please enter "cat"');
}

/* --- create a message --- */

let message = '';
if (input !== 'cat') {
  message = '"' + input + '" is not a cat';
}
if (input === 'cat') {
  message = 'thank you for the cat';
}

/* --- display the message to the user --- */

alert(message);
```

</details>

---

## 8

This program combines the changes from #6 and #7. There is no `message`
variable, and there are two separate `if` statements instead of one `if`/`else`.

- **Variables and Types**:
  - `input`: stores either `null` or strings, but only strings after the while
    loop is finished. it is initialized to `null`, assigned in the while loop,
    read in control flow checks and read to create a message.
- **Data Input**: same as [program 1](#1)
- **Control Flow Structures**: same as [program 1](#1)
  - `while`: repeats as long as the user's input is null
  - first `if`: creates the message for when a user _did_ input `"cat"`
  - second `if`: creates the message for when a user _did not_ input `"cat"`
- **Operators**: - **Operators**:
  - `=`: used to initialize the two variables, and to assign them new values
  - `===`: used twice
    - in the while loop check to decide if the input is valid
    - in the second `if` check to decide if the input _is_ `"cat"`
  - `!==`: used in the conditional to check if the input _is not_ `"cat"`
  - `+`: used to concatenate `input` into the final message if the input was not
    `'cat'`

<details>
<summary>expand for the program</summary>
<br>

```js
'use strict';

/* --- gather the user's input --- */

let input = null;
while (input === null) {
  input = prompt('please enter "cat"');
}

/* --- display a message to the user --- */

if (input === 'cat') {
  alert('thank you for the cat');
}
if (input !== 'cat') {
  alert('"' + input + '" is not a cat');
}
```

</details>

---

## 🐥 Your Turn

---

## 9

- **Variables and Types**: ?
- **Data Input**: ?
- **Control Flow Structures**: ?
- **Operators**: ?

<details>
<summary>expand for the program</summary>
<br>

```js
'use strict';

let input = null;
while (input === null) {
  /* --- gather the user's input --- */

  input = prompt('please enter "cat"');

  if (typeof input === 'string') {
    /* --- create a message --- */

    let message = '';
    if (input === 'cat') {
      message = 'thank you for the cat';
    } else {
      message = '"' + input + '" is not a cat';
    }

    /* --- display the message to the user --- */

    alert(message);
  }
}
```

</details>

---

## 10

- **Variables and Types**: ?
- **Data Input**: ?
- **Control Flow Structures**: ?
- **Operators**: ?

<details>
<summary>expand for the program</summary>
<br>

```js
'use strict';

let input = null;
while (input === null) {
  /* --- gather the user's input --- */

  input = prompt('please enter "cat"');

  if (input !== null) {
    /* --- create a message --- */

    let message = '';
    if (input !== 'cat') {
      message = '"' + input + '" is not a cat';
    } else {
      message = 'thank you for the cat';
    }

    /* --- display the message to the user --- */

    alert(message);
  }
}
```

</details>

---

## 11

- **Variables and Types**: ?
- **Data Input**: ?
- **Control Flow Structures**: ?
- **Operators**: ?

<details>
<summary>expand for the program</summary>
<br>

```js
'use strict';

while (true) {
  /* --- gather the user's input --- */

  let input = prompt('please enter "cat"');

  if (typeof input === 'string') {
    /* --- create a message --- */

    let message = '';
    if (input !== 'cat') {
      message = '"' + input + '" is not a cat';
    } else {
      message = 'thank you for the cat';
    }

    /* --- display the message to the user --- */

    alert(message);

    break;
  }
}
```

</details>

---
