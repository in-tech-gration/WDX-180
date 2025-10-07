# Quiz

> #todo

## Swapping Values

```js
'use strict';

// declare and initialize variables
let a = 'y'; // line 4
let b = 'x'; // line 5
let temp; // line 6

// swap the values stored in `a` and `b`
temp = b; // line 9
b = a; // line 10
a = temp; // line 11
```

---

<details>
<summary><strong>1. What is the final value of <code>a</code>?</strong></summary>
<br>

<details>
<summary><em>A. undefined</em></summary>
<br>

✖ Nope.

`a` never stores the value `undefined` in this program.

`a` is _initialized_ to `"y"` on line 4, and later _reassigned_ to `"x"` on
line 11.

</details>
<details>
<summary><em>B. "x"</em></summary>
<br>

✔ Correct!

On line 11 `"x"` is _assigned_ to `a`.

Because this is the last time `a` is _assigned_ a value, `"x"` is the final
value stored in `a`.

</details>
<details>
<summary><em>C. "y"</em></summary>
<br>

✖ Nope.

`"y"` is the _initial_ value stored in `a`, but on line 11 `a` is reassigned a
new value.

Because line 11 is the _last time_ `a` is assigned a new value and it is
assigned `"x"`, it's not possible for the final value to be `"y"`.

</details>

</details>

---

<details>
<summary><strong>2. What is the final value of <code>b</code>?</strong></summary>
<br>

<details>
<summary><em>A. undefined</em></summary>
<br>

✖ Nope.

`b` never stores the value `undefined` in this program.

`b` is _initialized_ to `"x"` on line 5, and later _reassigned_ to `"y"` on
line 10.

</details>
<details>
<summary><em>B. "x"</em></summary>
<br>

✖ Nope.

`"x"` is the _initial_ value stored in `b`, but on line 10 `b` is reassigned a
new value.

Because line 10 is the _last time_ `b` is assigned a new value and it is
assigned `"y"`, it's not possible for the final value to be `"x"`.

</details>
<details>
<summary><em>C. "y"</em></summary>
<br>

✔ Correct!

On line 10 `"y"` is _assigned_ to `b`.

Because this is the last time `b` is _assigned_ a value, `"y"` is the final
value stored in `b`.

</details>

</details>

---

<details>
<summary><strong>3. What is the initial value of <code>temp</code>?</strong></summary>
<br>

<details>
<summary><em>A. undefined</em></summary>
<br>

✔ Correct!

On line 6 `temp` is _declared_ but not _initialized_, so it's value is
`undefined` by default.

</details>
<details>
<summary><em>B. "x"</em></summary>
<br>

✖ Nope.

`temp` is _declared_ but not _initialized_. This means it's initial value will
be `undefined` by default.

</details>
<details>
<summary><em>C. "y"</em></summary>
<br>

✖ Nope.

`temp` is _declared_ but not _initialized_. This means it's initial value will
be `undefined` by default.

</details>

</details>

---

<details>
<summary><strong>4. What is the final value of <code>temp</code>?</strong></summary>
<br>

<details>
<summary><em>A. undefined</em></summary>
<br>

✖ Nope.

The _initial_ value for `temp` is `undefined`, but on line 9 it is assigned the
value `"x"`.

Because this is the last time that `temp` is _reassigned_, `"x"` is the final
value.

</details>
<details>
<summary><em>B. "x"</em></summary>
<br>

✔ Correct!

On line 9 `"x"` is _assigned_ to `temp`.

Because this is the last time `temp` is _assigned_ a value, `"x"` is the final
value stored in `temp`.

</details>
<details>
<summary><em>C. "y"</em></summary>
<br>

✖ Nope.

`temp` never stores the value `"y"`. The only two values it stores in this
program are `undefined` and `"x"`.

</details>

</details>
