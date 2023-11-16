# Which program will create this trace?

<table>
<tr>
<td>

1. `line 3 - a (declare, let)`
2. `line 3 - a (initialize): 1`
3. `line 4 - b (declare, let)`
4. `line 4 - b (initialize): 2`
5. `line 6 - b (read): 2`
6. `line 6 - a (read): 1`
7. `line 6 - operation (_ + _): 2 + 1`
   - `(evaluates to): 3`
8. `line 6 - c (declare, let)`
9. `line 6 - c (initialize): 3`

</td>
<td>

<details>
<summary><strong>Program A</strong></summary>

```js
'use strict';

let a = 1;
let b = 2;

let c = a + b;
```

<details>
<summary>check it</summary>
<br>

✖ Nope.

Look carefully at steps 5, 6 and 7.

In which order are variables read when evaluating addition?

</details>
</details>

---

<details>
<summary><strong>Program B</strong></summary>

```js
'use strict';

let a;
a = 1;
let b;
b = 2;

let c = a + b;
```

<details>
<summary>check it</summary>
<br>

✖ Nope.

Look carefully at steps 1 to 4.

What is the difference between _initializing_ and _assigning_ a variable?

</details>
</details>

---

<details>
<summary><strong>Program C</strong></summary>

```js
'use strict';

let a = 1;
let b = 2;

let c = b + a;
```

<details>
<summary>check it</summary>
<br>

✔ Correct!

</details>

</details>

---

<details>
<summary><strong>Program D</strong></summary>

```js
'use strict';

let a = 1;
let b = 2;

let c = 3;
```

<details>
<summary>check it</summary>
<br>

✖ Nope.

The variables in this program are all _initialized_ to the correct values, and
will all have the correct _final values_. But this program does not match the
trace.

Use a trace table to figure out how this program's trace is different from the
example.

</details>

</details>

</td>
</tr>
</table>

</td>
</tr>
</table>
