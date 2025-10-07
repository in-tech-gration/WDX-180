# `let` vs. `const`

In JavaScript there are a few ways to declare a variable. So far you have only
learned about `let`, now you will learn about `const`.

The two important differences between `let` and `const` are:

- Variables declared with `const` _must be initialized_.
- Variables declared with `const` _can not be reassigned_.

These two programs will throw an error:

```js
'use strict';

// declaring with `const` without initializing
const name; // SyntaxError
```

```js
'use strict';

const name = 'Liz';

// reassigning a `const` variable
name = 'Ayoub'; // TypeError
```

---

## Using Const

But how do you _use_ `const` in a program? There are lots of opinions, some
people thing you should write code that _only_ uses `const`, other people think
you should use `const` for every variable that never changes, and other people
think you never need to use it!

We suggest you use `const` whenever a variable is never reassigned. Why? Because
then a developer knows the variable will never change right when they read the
declaration. Otherwise it might take them more time reading the program to
figure out the variable is never changed.

- **Use `const` whenever JavaScript will _let_ you.** ; )

Here's the same program written twice, one with only `let` and the other with
both. It might just feel like extra work now, but with larger programs it can
make a bigger difference:

```js
'use strict';

let input = null;
while (input === null) {
  input = prompt('enter something');
}

let reversed = '';
for (let char of input) {
  reversed = char + reversed;
}

let message = input + ' -> ' + reversed;

alert(message);
```

```js
'use strict';

let input = null;
while (input === null) {
  input = prompt('enter something');
}

let reversed = '';
for (const char of input) {
  reversed = char + reversed;
}

const message = input + ' -> ' + reversed;

alert(message);
```
