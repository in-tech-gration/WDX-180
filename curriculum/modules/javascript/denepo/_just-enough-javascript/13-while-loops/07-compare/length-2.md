# Quiz

> #todo

## Length 2

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

let a = '';

while (a === null || a.length < 4) {
  a = prompt('');
}

alert(a);
```

</td>
<td>

```js
'use strict';

let a = '';

let b = true;
while (b) {
  a = prompt('');
  if (a !== null && a.length >= 4) {
    b = false;
  }
}

alert(a);
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
