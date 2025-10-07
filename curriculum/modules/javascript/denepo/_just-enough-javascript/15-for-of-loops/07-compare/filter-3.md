# Quiz

> #todo

## Filter 3

Do these programs have the same behavior? (_data in, data out_)

<table>
<tr>
<td>

### Program 1

</td>
<td>

### Program 2

</td>
</tr>
<tr>
<td>

```js
'use strict';

let a = null;
while (a === null) {
  a = prompt('');
}

let b = '';
for (let c of a) {
  if (!b.includes(c)) {
    b = b + c;
  }
}

alert(b);
```

</td>
<td>

```js
'use strict';

let a = null;
while (a === null) {
  a = prompt('');
}

let b = '';
for (let c of a) {
  if (!a.includes(c)) {
    b = b + c;
  }
}

alert(b);
```

</td>
</tr>
</table>

---

---

<details>
<summary><strong>check it</strong></summary>
<br>

✖ Nope.

</details>
