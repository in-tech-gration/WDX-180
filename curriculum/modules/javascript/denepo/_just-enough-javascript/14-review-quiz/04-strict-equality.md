# Strict Equality

Which of these comparisons will evaluate to `true`?

---

<details>
<summary><strong>A: </strong> <code>'hello' = 'hello'</code></summary>
<br>

✖ Nope.

This line of code uses an _assignment operator_ `=` where it should have a
_comparison_ `===`.

If you try to run this code it cause an error because you can only assign values
to a variable, not to strings.

</details>

---

<details>

<summary><strong>B: </strong> <code>null === null</code></summary>
<br>

✔ Correct!

</details>

---

<details>

<summary><strong>C: </strong> <code>true === 'true'</code></summary>
<br>

✖ Nope.

The two values look similar but take a closer look. The left one is a Boolean
and the right one is a String, it's not possible for them to be the same thing!

</details>

---

<details>
<summary><strong>D: </strong> <code>true === false</code></summary>
<br>

✖ Nope.

Both primitives are Booleans, but they do not have the same value.

</details>

---
