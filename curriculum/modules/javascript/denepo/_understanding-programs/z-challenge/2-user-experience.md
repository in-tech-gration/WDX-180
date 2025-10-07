# User Experience

All of these programs have the same developer experience. They also have nearly
identical instructions for the computer; the hard-coded string values and the
interactions are different, but the program logic and variable use are the same
(ie, their traces are the same).

What changes between each program is how clear & consistent the instructions
are, how helpful the feedback is, and the tone of voice used in the messages.

---

## 0

The one and only, the original ... cat detector!

- **Clear Instructions**: mostly clear, a user might think that they need to
  type `"cat"` instead of `cat`
- **Helpful Feedback**: mostly, it could be more clear that the input was just
  the word "cat" and not an actual cat
- **Consistency**: yes
- **Tone of Voice**: the messages are short and clear

<details>
<summary>expand for the program</summary>
<br>

```js
'use strict';

/* The Cat Detector

  This programs prompts the user to input a cat,
  and lets them know if they did input a cat or not.

  Data In:
    Any string

  Data Out:
    A string describing if the user's input was "cat" or not

*/

/* --- gather user input --- */

let input = null;
while (input === null) {
  input = prompt('please enter "cat"');
}

/* --- create a message --- */

let message = '';
if (input !== 'cat') {
  message = '"' + input + '" is not a cat';
} else {
  message = 'thank you for the cat';
}

/* --- display the message for the user --- */

alert(message);
```

</details>

---

## 1

Same basic user experience, but `"cat"` is replaced by `"dog"`.

- **Clear Instructions**: mostly clear, a user might think that they need to
  type `"dog"` instead of `dog`
- **Helpful Feedback**: mostly, it could be more clear that the input was just
  the word "cat" and not an actual cat
- **Consistency**: yes
- **Tone of Voice**: the messages are short and clear

<details>
<summary>expand for the program</summary>
<br>

```js
'use strict';

/* --- gather user input --- */

let input = null;
while (input === null) {
  input = prompt('please enter "dog"');
}

/* --- create a message --- */

let message = '';
if (input !== 'dog') {
  message = '"' + input + '" is not a dog';
} else {
  message = 'thank you for the dog';
}

/* --- display the message for the user --- */

alert(message);
```

</details>

---

## 2

- **Clear Instructions**: no instructions at all
- **Helpful Feedback**: not at all, it just says "yes" or "no" without
  explaining what the goal was
- **Consistency**: nope. it's also confusing that the final message is displayed
  in a `prompt`, but that the input is not used.
- **Tone of Voice**: the messages are either absent or unhelpfully short

<details>
<summary>expand for the program</summary>
<br>

```js
'use strict';

/* --- gather user input --- */

let input = null;
while (input === null) {
  input = prompt('');
}

/* --- create a message --- */

let message = '';
if (input !== 'cat') {
  message = 'no';
} else {
  message = 'yes';
}

/* --- display the message for the user --- */

prompt(message);
```

</details>

---

## 3

The instructions come before the option to input text, so it might be harder to
remember what you're supposed to do.

- **Clear Instructions**: mostly clear, a user might think that they need to
  type `"cat"` instead of `cat`
- **Helpful Feedback**: mostly, it could be more clear that the input was just
  the word "cat" and not an actual cat
- **Consistency**: not completely, it might be confusing that the instructions
  come before the prompt
- **Tone of Voice**: the messages are short and clear

<details>
<summary>expand for the program</summary>
<br>

```js
'use strict';

/* --- gather user input --- */

let input = null;
while (input === null) {
  alert('please enter "cat"');
  input = prompt('');
}

/* --- create a message --- */

let message = '';
if (input !== 'cat') {
  message = '"' + input + '" is not a cat';
} else {
  message = 'thank you for the cat';
}

/* --- display the message for the user --- */

alert(message);
```

</details>

---

## 4

The final message is the opposite of what the user would expect. This might just
be a mistake by the developer, but it still breaks the conventions a user
expects.

- **Clear Instructions**: mostly clear, a user might think that they need to
  type `"cat"` instead of `cat`
- **Helpful Feedback**: mostly, it could be more clear that the input was just
  the word "cat" and not an actual cat
- **Consistency**: not at all! the feedback at the end of the program is the
  opposite of what you would expect
- **Tone of Voice**: friendly and polite (maybe too much?)

<details>
<summary>expand for the program</summary>
<br>

```js
'use strict';

/* --- gather user input --- */

let input = null;
while (input === null) {
  input = prompt(
    'Hello! Welcome to the Cat Detector. \n\nPlease enter "cat", cats make everything better.',
  );
}

/* --- create a message --- */

let message = '';
if (input !== 'cat') {
  message = 'Thank you for the cat! \n\nWe hope you have a fabulous day.';
} else {
  message =
    '"' +
    input +
    '" is not a cat. \n\nThat\'s not a problem, you can always try again!';
}

/* --- display the message for the user --- */

alert(message);
```

</details>

---

## 5

The instructions are not clear at first, and neither are the messages. But once
you figure out what they mean it's a fun experience.

- **Clear Instructions**: nope
- **Helpful Feedback**: once you get it, yes. before that, no
- **Consistency**: yes, the instructions and message do work well together
- **Tone of Voice**: minimal

<details>
<summary>expand for the program</summary>
<br>

```js
'use strict';

/* --- gather user input --- */

let input = null;
while (input === null) {
  input = prompt('cat');
}

/* --- create a message --- */

let message = '';
if (input !== 'cat') {
  message = ':(';
} else {
  message = ':)';
}

/* --- display the message for the user --- */

alert(message);
```

</details>

---

## 6

\> : (

- **Clear Instructions**: yes
- **Helpful Feedback**: mostly. the message when you do input "cat" could
  mention the cat instead of just saying congratulations
- **Consistency**: yes
- **Tone of Voice**: sarcastic and rude

<details>
<summary>expand for the program</summary>
<br>

```js
'use strict';

/* --- gather user input --- */

let input = null;
while (input === null) {
  input = prompt('type "cat" and press "enter"');
}

/* --- create a message --- */

let message = '';
if (input !== 'cat') {
  message = 'are you stupid? "' + input + '" is not a cat.';
} else {
  message = 'so you can read, congratulations.';
}

/* --- display the message for the user --- */

alert(message);
```

</details>

---

## 7

Asks for a dog, then checks for a cat. Developer mistake? Bad UX design? You
decide.

- **Clear Instructions**: yes
- **Helpful Feedback**: yes, the messages are clear
- **Consistency**: not at all
- **Tone of Voice**: simple and clear

<details>
<summary>expand for the program</summary>
<br>

```js
'use strict';

/* --- gather user input --- */

let input = null;
while (input === null) {
  input = prompt('please enter "dog"');
}

/* --- create a message --- */

let message = '';
if (input !== 'cat') {
  message = '"' + input + '" is not a cat';
} else {
  message = 'thank you for the cat';
}

/* --- display the message for the user --- */

alert(message);
```

</details>

---

## 8

The instructions and message are consistent about `"cat"`, but the logic in the
program checks for `"dog"`.

- **Clear Instructions**: mostly clear, a user might think that they need to
  type `"cat"` instead of `cat`
- **Helpful Feedback**: mostly, it could be more clear that the input was just
  the word "cat" and not an actual cat
- **Consistency**: nope. the program asks for cats and the message mentions
  cats, but the logic actually checks for `"dog"`
- **Tone of Voice**: simple and clear

<details>
<summary>expand for the program</summary>
<br>

```js
'use strict';

/* --- gather user input --- */

let input = null;
while (input === null) {
  input = prompt('please enter "cat"');
}

/* --- create a message --- */

let message = '';
if (input !== 'dog') {
  message = '"' + input + '" is not a cat';
} else {
  message = 'thank you for the cat';
}

/* --- display the message for the user --- */

alert(message);
```

</details>

---

## 9

Suspense!

- **Clear Instructions**: they are clear as long as you remember what you're
  supposed to enter
- **Helpful Feedback**: the message is clear enough about if the input is a cat
  or not
- **Consistency**: yes
- **Tone of Voice**: like a game show host

<details>
<summary>expand for the program</summary>
<br>

```js
'use strict';

/* --- gather user input --- */

let input = null;
while (input === null) {
  alert('please');
  alert('enter');
  alert('"cat"');
  alert('...');
  input = prompt('now!');
}

/* --- create a message --- */

let message = '';
if (input !== 'cat') {
  message = '"' + input + '" is not a cat';
} else {
  message = 'thank you for the cat';
}

/* --- display the message for the user --- */

alert('ready for your results?');
alert('are you sure?');
alert('...');
alert(message);
alert('all done!');
```

</details>
