# Quiz

> #todo

## Boolean Flag

A
[_Boolean Flag_](https://stackoverflow.com/questions/17402125/what-is-a-flag-variable)
is one way to use a variable, it **is not** a special kind of variable! Just a
normal variable used in a specific way. A flag stores a `"boolean"` value that
represents something important about program, it is generally used by control
flow to make decisions.

```js
'use strict';

let didConfirm = false; // line 3

while (didConfirm === false) {
  didConfirm = confirm('you must confirm.'); // line 6
}

alert('you confirmed!'); // line 9
```

---

<details>
<summary><strong>1. How many data types are assigned to <code>flag</code> in this program?</strong></summary>
<br>

<details>
<summary><em>A. 3: <code>"boolean"</code>, <code>"string"</code> and <code>"undefined"</code></em></summary>
<br>

✖ Nope.

The variable `didConfirm` is initialized to `false` not `undefined`. After
initialization it is only assigned values from `confirm` and `confirm` can only
return `true` or `false`, never `undefined`.

There are strings in the program, but they are both used as text to show the
user. A string is never assigned to a variable in this program.

Because the variable was initialized to a `"boolean"` and only reassigned
`"boolean"` values, it is impossible for it to be anything else.

</details>
<details>
<summary><em>B. 2: <code>true</code> and <code>false</code></em></summary>
<br>

✖ Nope.

`true` and `false` _are_ the two Boolean values, but they _are not_ a **data
type**. They are two primitive values that have the same type.

You can test this with the `typeof` operator. `typeof true` and `typeof false`
will both evaluate to `"boolean"`.

</details>
<details>
<summary><em>C. 1: <code>"boolean"</code></em></summary>
<br>

✔ Correct!

`didConfirm` only ever stores `"boolean"` values in this program. It is
initialized to `false`, and only reassigned values returned by `confirm`. This
means it will _always_ store a `"boolean"` value!

This variable is considered a _boolean flag_ because it only stores `"boolean"`
values, and because it's value is used to make decisions in control flow. In
this program the flag's value represents whether or not the user has confirmed.

</details>

</details>

---

<details>
<summary><strong>2. In the source code, on how many lines is  <code>flag</code> assigned a new value?</strong></summary>
<br>

This question is asking you to do _static analysis_, to study and understand the
program _without_ running it.

You can't find the answer by tracing, but you can find the answer just by
counting.

<details>
<summary><em>A. On one line</em></summary>
<br>

✔ Correct!

On line 6 `didConfirm` is assigned a new value, either `true` or `false`
depending on what the user clicked.

</details>
<details>
<summary><em>B. On two lines</em></summary>
<br>

✖ Nope.

Close, but not quite. On line 3 `didConfirm` is _initialized_ to the value
`false`, and on line 6 it is _reassigned_ a new value.

So the variable _is_ given a value on 2 separate lines, but only one of those
lines is an assignment. The other line is an initialization.

</details>
<details>
<summary><em>C. On three lines</em></summary>
<br>

✖ Nope.

It might look like there are 3 lines with assignments, but look more closely and
you'll see there are not!

- On line 3 `didConfirm` is _initialized_ to `false`
- on line 5 `didConfirm` is _compared_ with `false`
- On line 6 `didConfirm` is _assigned_ a new value

</details>
<details>
<summary><em>D. It's impossible to predict</em></summary>
<br>

✖ Nope.

The _dynamic_ behavior of a variable can be difficult to predict, but _static_
analysis of variable assignments is easy to count.

Just count how many times you see an assignment to `didConfirm`!

</details>

</details>

---

<details>
<summary><strong>3. When the program is running, how many times is  <code>flag</code> assigned a new value?</strong></summary>
<br>

This question is asking you to do _dynamic analysis_, to study and understand
the program's behavior _while it is running_.

You can't find the answer just by counting, you would need to run it and trace
how many times a line is executed.

<details>
<summary><em>A. One time</em></summary>
<br>

✖ Nope.

There is only one line where `didConfirm` is assigned a new value, but we don't
know how many times that line will be executed without running the program and
tracing it's execution.

</details>
<details>
<summary><em>B. Two times</em></summary>
<br>

✖ Nope.

We don't know how many times that line will be executed without running the
program and tracing it's execution.

</details>
<details>
<summary><em>C. Three times</em></summary>
<br>

✖ Nope.

We don't know how many times that line will be executed without running the
program and tracing it's execution.

</details>
<details>
<summary><em>D. It's impossible to predict</em></summary>
<br>

✔ Correct!

You can run the program and trace how many times the `didConfirm` variable is
assigned a new value, but there's no way to predict what that number will be
just by reading the code.

Why is that? Because the condition to exit the `while` loop depends on the
user's behavior, and it's not possible to predict exactly how the user will
interact with your program before running it.

You _can_ be sure that the variable will be reassigned each time the loop is
executed, but you _can't_ be sure how many times that will be!

</details>

</details>
