# Global Variables

Which of these are global variables that come built into the JavaScript Runtime
Environment?

---

<details>
<summary><strong>A: </strong> <code>console</code></summary>
<br>

✔ Correct!

`console` is the built-in global variable that stores useful functions for
developers to print what's happening inside their program while it's running.

`console.log` is a _function_ which means you need to _call_ it using
parentheses and an argument between the parentheses: `console.log('hello');`.

This is all you need to know for now, you'll learn more about functions later.

</details>

---

<details>
<summary><strong>B: </strong> <code>alert</code></summary>
<br>

✔ Correct!

`alert` is the built-in global variable you can use to display text to a user.

`alert` is a _function_ which means you need to _call_ it using parentheses and
an argument between the parentheses: `alert('argument');`.

This is all you need to know for now, you'll learn more about functions later.

</details>

---

<details>

<summary><strong>C: </strong> <code>prompt</code></summary>
<br>

✔ Correct!

`prompt` is the built-in global variable you can use to get data from a user.

`prompt` is a _function_ which means you need to _call_ it using parentheses and
an argument between the parentheses: `prompt('some instructions');`.

This is all you need to know for now, you'll learn more about functions later.

</details>

---

<details>

<summary><strong>D: </strong> <code>log</code></summary>
<br>

✖ Nope.

`log` is not a built-in global variable. It is a _property_ of the `console`
object, but `log` does not exist on it's own. Try this little program to see:

```js
'use strict';

console.log('the next line will throw an error');

log('this line will throw an error');
```

</details>

---
