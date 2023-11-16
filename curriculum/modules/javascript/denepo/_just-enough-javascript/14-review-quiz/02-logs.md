# Logs

How can you log `'hello'` to the console for developers?

---

<details>
<summary><strong>A: </strong> <code>console('hello');</code></summary>
<br>

✖ Nope.

`console` is a global variable in JavaScript, it's available by default in your
programs without need to declare it.

But it's not a function so if you try calling it directly the program will throw
an error.

</details>

---

<details>
<summary><strong>B: </strong> <code>consoleLog('hello');</code></summary>
<br>

✖ Nope.

`consoleLog` written as one word does not come built into JavaScript, but
`console` does.

`console` is the _global variable_ used to store different logging functions, to
access one of the console functions you need to use `console.__`

</details>

---

<details>

<summary><strong>C: </strong> <code>console.log 'hello';</code></summary>
<br>

✖ Nope.

You need to wrap function arguments in parenthesis `( )` or the computer will
not be able to parse your program.

</details>

---

<details>

<summary><strong>D: </strong> <code>console.log('hello');</code></summary>
<br>

✔ Correct!

`console` is the _global variable_ used to store different logging functions,
the most common one is `log`.

First you're telling the computer to get the value stored in the `console`
variable, then `.log` tells the computer to get the value named `log` stored
inside the `console` object.

You don't need to understand this just yet, you'll learn more about objects
later on.

</details>

---
