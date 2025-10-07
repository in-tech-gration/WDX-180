# Which trace is created by this program?

<table>
<tr>
<td>

```js
'use strict';

let a = 1;
let b = 2;

let c = a + b;
```

</td>
<td>

<details>
<summary><strong>Trace A</strong></summary>

1. `line 3 - a (declare, let): 1`
2. `line 4 - b (declare, let): 2`
3. `line 6 - a (read): 1`
4. `line 6 - b (read): 2`
5. `line 6 - operation (_ + _): 1 + 2`
   - `(evaluates to): 3`
6. `line 6 - c (declare, let): 3`

<details>
<summary>check it</summary>
<br>

✖ Nope.

Look carefully at steps 1 & 2.

What is the difference between _declaring_ and _initializing_ a variable?

</details>
</details>

---

<details>
<summary><strong>Trace B</strong></summary>

1. `line 3 - a (declare, let)`
2. `line 3 - a (assign): 1`
3. `line 4 - b (declare, let)`
4. `line 4 - b (assign): 2`
5. `line 6 - a (read): 1`
6. `line 6 - b (read): 2`
7. `line 6 - operation (_ + _): 1 + 2`
   - `(evaluates to): 3`
8. `line 6 - c (declare, let)`
9. `line 6 - c (assign): 3`

<details>
<summary>check it</summary>
<br>

✖ Nope.

Look carefully at steps 2, 4 and 9.

What is the difference between _initializing_ and _assigning_ a variable?

</details>

</details>

---

<details>
<summary><strong>Trace C</strong></summary>

1. `line 3 - a (declare, let)`
2. `line 3 - a (initialize): 1`
3. `line 4 - b (declare, let)`
4. `line 4 - b (initialize): 2`
5. `line 6 - operation (_ + _): 1 + 2`
   - `(evaluates to): 3`
6. `line 6 - c (declare, let)`
7. `line 6 - c (initialize): 3`

<details>
<summary>check it</summary>
<br>

✖ Nope.

Look carefully at step 5.

What needs to happen before the value stored in a variable can be used?

How many variables are being used on the right hand side of the initialization
on line 6?

</details>
</details>

---

<details>
<summary><strong>Trace D</strong></summary>

1. `line 3 - a (declare, let)`
2. `line 3 - a (initialize): 1`
3. `line 4 - b (declare, let)`
4. `line 4 - b (initialize): 2`
5. `line 6 - a (read): 1`
6. `line 6 - b (read): 2`
7. `line 6 - operation (_ + _): 1 + 2`
   - `(evaluates to): 3`
8. `line 6 - c (declare, let)`
9. `line 6 - c (initialize): 3`

<details>
<summary>check it</summary>
<br>

✔ Correct!

</details>
</details>

</td>
</tr>
</table>
