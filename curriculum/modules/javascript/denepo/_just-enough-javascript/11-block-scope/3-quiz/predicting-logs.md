# Quiz

> #todo

## Predicting Logs

```js
'use strict';

let animal = 'cat'; // line 3
console.log(animal); // line 4

{
  animal = 'dog'; // line 7
  console.log(animal); // line 8
}

console.log(animal); // line 11
```

---

<details>
<summary><strong>1. What will this program log to the console?</strong></summary>
<br>

<details>
<summary><em>A.  <code>"cat"</code> then <code>"dog"</code> then <code>undefined</code></em></summary>
<br>

✖ Nope.

`undefined` will never be logged in this program. There is only one variable
named `animal`, and it always has a value.

It was initialized to `"cat"` and is later reassigned to `"dog"`.

</details>
<details>
<summary><em>B.  <code>"cat"</code> then <code>"dog"</code> then <code>"cat"</code></em></summary>
<br>

✖ Nope.

The variable `animal` is declared in the outer scope and _reassigned_ in the
inner scope. A new variable was not declared inside the scope. It's the same
variable inside and outside!

Modifying an _outer scope_ variable from an _inner scope_ is the same as
modifying it outside, so the new value will still be stored for the final log.

</details>
<details>
<summary><em>C.  <code>"cat"</code> then <code>"dog"</code> then <code>"dog"</code></em></summary>
<br>

✔ Correct!

The assignment on line 7 is inside a block scope, but is accessing a variable
declared in the outer scope. This means that the new value will still be
available after the scope has closed.

Line 8 and line 11 will both log `"dog"` because a new value was never assigned
between those lines.

</details>

</details>
