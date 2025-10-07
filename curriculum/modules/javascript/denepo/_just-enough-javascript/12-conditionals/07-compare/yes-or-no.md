# Quiz

> #todo

## Yes or No

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

let a = confirm('');

let b = 'yes';
if (!a) {
  b = 'no';
}

alert(b);
```

</td>
<td>

```js
'use strict';

let a = confirm('');

let b = '';
if (a) {
  b = 'no';
} else {
  b = 'yes';
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
