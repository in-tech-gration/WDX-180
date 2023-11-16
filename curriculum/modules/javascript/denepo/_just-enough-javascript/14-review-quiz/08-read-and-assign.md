# Read and Assign

How do you _read_ the value from the `source` variable and _assign_ it to the
`destination` variable?

---

<details>
<summary><strong>A: </strong> <code>source = destination</code></summary>
<br>

✖ Nope.

Variable assignments go from _right to left_ in two steps:

1. get the value from the right side of the assignment operator `=`
2. store that value in the variable on the left side

This line of code is backwards, the `destination` variable is on the right, not
the left!

</details>

---

<details>
<summary><strong>B: </strong> <code>destination = source</code></summary>
<br>

✔ Correct!

Variable assignments go from _right to left_ in two steps:

1. get the value from the right side of the assignment operator `=`
2. store that value in the variable on the left side

</details>

---

<details>

<summary><strong>C: </strong> <code>source === destination</code></summary>
<br>

✖ Nope.

This line of code uses strict equality `===` which _compares_ the values stored
in two variables. There is no assignment happening

</details>

---

<details>

<summary><strong>D: </strong> <code>destination === source</code></summary>
<br>

✖ Nope.

This line of code uses strict equality `===` which _compares_ the values stored
in two variables. There is no assignment happening

</details>

---
