# Quiz

> #todo

## Map 1

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
  b = c + b;
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
  b = b + c;
  b = b[b.length - 1] + b.slice(0, b.length - 1);
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

✔ Yup!

</details>
