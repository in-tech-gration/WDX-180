# Quiz

> #todo

## Stepper Variables

A **stepper variable** is not a different _kind_ of variable, it's just one way
you can _use_ a variable. A stepper is a variable that steps through a
predictable series of values. They are usually used with control flow, and don't
store important data or contribute directly to the final result of a program.

Which of the following programs have a stepper? There may be more than one
correct answer!

> _hint_: string indexes start at `0` and end at one **fewer** than the string's
> length!
>
> _hint_: use a trace table to study each program's behavior before making a
> guess.

---

### Program 1

```js
'use strict';

let letters = 'abc';
let reversed = '';

let step = 0;
while (step < letters.length) {
  let nextChar = letters[step];
  reversed = nextChar + reversed;
  step = step + 1;
}

console.log(letters, reversed);
```

<details>
<summary><strong>check it</strong></summary>
<br>

✔ Correct!

`step`:

- **initialized**: `0`, the first index in a string
- **stepped**: `+1`, to access each character in order from front to back
- **check**: is less than `letters.length`, the index of the last character in
  the string

The `step` variable is used as a stepper. It is initialized to `0` (the first
index in a string) and then steps up by `1` with each iteration of the loop,
each time being used as an index to access the next character in the string.

It is also used by the `while` loop's condition to know when all the characters
in the string have been used. When the `step` variable is equal to `letter`'s
length it's done.

None of the numbers stored in `step` appear in the final reversed text, the
numbers used only to support the program's control flow and character access.

</details>

---

### Program 2

```js
'use strict';

let text = 'abc';
let reversed = '';

let index = text.length - 1;
while (index >= 0) {
  let nextChar = text[index];
  reversed = reversed + nextChar;
  index = index - 1;
}

console.log(text, reversed);
```

<details>
<summary><strong>check it</strong></summary>
<br>

✔ Correct!

`index`:

- **initialized**: `text.length - 1`, the _last_ index in the string
- **stepped**: `-1`, to access each character in order from back to front
- **check**: is greater than or equal to `0`, the _first_ of a string

The `index` variable is used as a stepper. It is initialized to one _less_ than
the string's length and steps _down_ by one with each iteration of the loop.
Notice how the `nextChar` is added to the _end_ of the new string? That's
because the characters are being read in reverse order, adding them to the front
of `reversed` would not reverse the string!

`index` is also used by the `while` loop's condition to know when all the
characters in the string have been used. When the `index` variable is equal to
`-1` the loop condition will be false. It is written this way because `0` is the
first index in a string, when the `index` is `0` it has read the last remaining
character in the string.

None of the numbers stored in `index` appear in the final reversed text, the
numbers used only to support the program's control flow and character access

</details>

---

### Program 3

```js
'use strict';

let word = 'mouse';
let result = '';

let i = word.length - 1;
while (word.length !== result.length) {
  let nextChar = word[i];
  result = result + nextChar;
  i = i - 1;
}

console.log(word, result);
```

<details>
<summary><strong>check it</strong></summary>
<br>

✔ Correct!

`i`:

- **initialized**: `word.length - 1`, the _last_ index in the string
- **stepped**: `-1`, to access each character in order from back to front
- **check**: (`i` is not used in the check!)

The `i` variable is used as a stepper. It is initialized to one _less_ than the
string's length and steps _down_ by one with each iteration of the loop. Notice
how the `nextChar` is added to the _end_ of the new string? That's because the
characters are being read in reverse order, adding them to the front of `result`
would not reverse the string!

`i` is not used by the `while` loop's condition, instead the condition checks if
the original `word` and the new `result` have different lengths (contain a
different number of characters). When the two strings have the same number of
characters, then you know that all of the full string has been reversed and the
loop can stop.

None of the numbers stored in `i` appear in the final reversed text, the numbers
used only to support the program's control flow and character access

</details>

---

### Program 4

```js
'use strict';

let vehicleName = 'racecar';
let backwards = '';

let charIndex = 0;
while (vehicleName.length !== backwards.length) {
  let nextChar = vehicleName[charIndex];
  backwards = nextChar + backwards;
  charIndex = charIndex + 1;
}

console.log(vehicleName, backwards);
```

<details>
<summary><strong>check it</strong></summary>
<br>

✔ Correct!

`charIndex`:

- **initialized**: `0`, the first index in a string
- **stepped**: `+1`, to access each character in order from front to back
- **check**: (`charIndex` is not used in the check!)

The `charIndex` variable is used as a stepper. It is initialized to `0` (the
first index in a string) and then steps up by `1` with each iteration of the
loop, each time being used as an index to access the next character in the
string.

`charIndex` is not used by the `while` loop's condition, instead the condition
checks if the original `vehicleName` and the new `backwards` have different
lengths (contain a different number of characters). When the two strings have
the same number of characters, then you know that all of the full string has
been reversed and the loop can stop.

None of the numbers stored in `charIndex` appear in the final reversed text, the
numbers used only to support the program's control flow and character access

</details>
