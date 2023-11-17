# Developer Experience

These programs all have the same instructions for the computer (have the same
traces), produce the exact same same user experience, but have very different
developer experiences.

Read and study each program to see how the developer's experience is different.
Which do you find easiest to understand? there is no right answer! Only your
opinion, and your opinion will change as you learn more and gain experience.

---

## 0

The original Cat Detector:

- **Formatting**: Automated formatting by Prettier.
- **Variable Names**: Descriptive.
- **Comments**: Program description, goals.
- **Logs**: Every input value, both conditional paths, final message.

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

/* --- gather the user's input (canceling not allowed) --- */

let input = null;
while (input === null) {
  input = prompt('please enter "cat"');
  console.log('user input:', input);
}

/* --- check the input and create a message --- */

let message = '';
if (input !== 'cat') {
  message = '"' + input + '" is not a cat';
  console.log('path: if');
} else {
  message = 'thank you for the cat';
  console.log('path: else');
}
console.log('final message:', message);

/* --- display the message for the user --- */

alert(message);
```

</details>

---

## 1

- **Formatting**: Automated formatting by Prettier.
- **Variable Names**: Descriptive.
- **Comments**: Program description, goals, detailed descriptions. Too much?
- **Logs**: Every input value, both conditional paths, final message.

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

/* --- gather the user's input (canceling not allowed) --- */

// declare and initialize `input`
//  this variable is used later to create the message
//  if the input is not "cat"
let input = null;
// continue prompting the user until `input` is not null
//  this only happens when the user clicks "ok"
while (input === null) {
  // ask the user for a cat
  //  assign it to the `input` variable
  //  this variable is used in the `while` check
  input = prompt('please enter "cat"');
  // log the new value so the dev can see each input the user provided
  console.log('user input:', input);
}

/* --- check the input and create a message --- */

// declare a new variable for the message
//  initialize it to a string so it's clear what type it should store
//  this variable will be used to store a message to the user
let message = '';
// check if the input is not exactly "cat"
//  we know `input` will always store a string
//  because prompt only returns strings and null
//  and the loop won't exit if `input` is null
if (input !== 'cat') {
  // read the user's input and concatenate it into a new string
  // assign this new string to the `message` variable
  message = '"' + input + '" is not a cat';
  // log which path the program took
  console.log('path: if');
} else {
  // assign a thank you note to the `message` variable
  message = 'thank you for the cat';
  // log which path the program took
  console.log('path: else');
}
// log the new message value for the developer
console.log('final message:', message);

/* --- display the message for the user --- */

// alert the final value of `message` to the user
alert(message);
```

</details>

---

## 2

- **Formatting**: Automated formatting by Prettier.
- **Variable Names**: Descriptive.
- **Comments**: None
- **Logs**: Every input value, both conditional paths, final message.

<details>
<summary>expand for the program</summary>
<br>

```js
'use strict';

let input = null;
while (input === null) {
  input = prompt('please enter "cat"');
  console.log('user input:', input);
}

let message = '';
if (input !== 'cat') {
  message = '"' + input + '" is not a cat';
  console.log('path: if');
} else {
  message = 'thank you for the cat';
  console.log('path: else');
}
console.log('final message:', message);

alert(message);
```

</details>

---

## 3

- **Formatting**: Automated formatting by Prettier.
- **Variable Names**: Descriptive.
- **Comments**: Main goals.
- **Logs**: None.

<details>
<summary>expand for the program</summary>
<br>

```js
'use strict';

/* --- gather the user's input (canceling not allowed) --- */

let input = null;
while (input === null) {
  input = prompt('please enter "cat"');
}

/* --- check the input and create a message --- */

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

- **Formatting**: Automated formatting by Prettier.
- **Variable Names**: Descriptive.
- **Comments**: None.
- **Logs**: None.

<details>
<summary>expand for the program</summary>
<br>

```js
'use strict';

let input = null;
while (input === null) {
  input = prompt('please enter "cat"');
}

let message = '';
if (input !== 'cat') {
  message = '"' + input + '" is not a cat';
} else {
  message = 'thank you for the cat';
}

alert(message);
```

</details>

---

## 5

- **Formatting**: Automated formatting by Prettier.
- **Variable Names**: Descriptive.
- **Comments**: Main Goals.
- **Logs**: Numbered logs in each control flow block (not as helpful).

<details>
<summary>expand for the program</summary>
<br>

```js
'use strict';

/* --- gather the user's input (canceling not allowed) --- */

let input = null;
while (input === null) {
  input = prompt('please enter "cat"');
  console.log(1);
}

/* --- check the input and create a message --- */

let message = '';
if (input !== 'cat') {
  message = '"' + input + '" is not a cat';
  console.log(2);
} else {
  message = 'thank you for the cat';
  console.log(3);
}

/* --- display the message for the user --- */

alert(message);
```

</details>

---

## 6

- **Formatting**: Automated formatting by Prettier.
- **Variable Names**: Not descriptive (`x` and `y`).
- **Comments**: Main Goals.
- **Logs**: Every input value, both conditional paths.

<details>
<summary>expand for the program</summary>
<br>

```js
'use strict';

/* --- gather the user's input (canceling not allowed) --- */

let x = null;
while (x === null) {
  x = prompt('please enter "cat"');
  console.log(x);
}

/* --- check the input and create a message --- */

let y = '';
if (x !== 'cat') {
  y = '"' + x + '" is not a cat';
  console.log('path: if');
} else {
  y = 'thank you for the cat';
  console.log('path: else');
}

/* --- display the message for the user --- */

alert(y);
```

</details>

---

## 7

- **Formatting**: Automated formatting by Prettier.
- **Variable Names**: Not descriptive (`x` and `y`).
- **Comments**: None.
- **Logs**: None.

<details>
<summary>expand for the program</summary>
<br>

```js
'use strict';

let x = null;
while (x === null) {
  x = prompt('please enter "cat"');
}

let y = '';
if (x !== 'cat') {
  y = '"' + x + '" is not a cat';
} else {
  y = 'thank you for the cat';
}

alert(y);
```

</details>

---

## 8

- **Formatting**: Automated formatting by Prettier. Control flow without curly
  braces (this is allowed if your block has only one statement!).
- **Variable Names**: Descriptive.
- **Comments**: Main goals.
- **Logs**: None.

<details>
<summary>expand for the program</summary>
<br>

```js
'use strict';

/* --- gather the user's input (canceling not allowed) --- */

let input = null;
while (input === null) input = prompt('please enter "cat"');

/* --- check the input and construct a message --- */

let message = '';
if (input !== 'cat') message = '"' + input + '" is not a cat';
else message = 'thank you for the cat';

/* --- display the message for the user --- */

alert(message);
```

</details>

---

## 9

- **Formatting**: No indentation, blocks are not so clear.
- **Variable Names**: Descriptive.
- **Comments**: Main Goals.
- **Logs**: Every input value, both conditional paths, final message.

<details>
<summary>expand for the program</summary>
<br>

<!-- prettier-ignore -->
```js
'use strict'

/* --- gather the user's input (canceling not allowed) --- */



let input = null;
while (input === null) {
input = prompt('please enter "cat"');
console.log('user input:', input);
}

/* --- check the input and create a message --- */



let message = '';
if (input !== 'cat') {
message = '"' + input + '" is not a cat';
console.log('path: if');
} else {
message = 'thank you for the cat';
console.log('path: else');
}
console.log('final message:', message);

/* --- display the message for the user --- */



alert(message);
```

</details>

---

## 10

- **Formatting**: More than one statement per line, very tight spacing.
- **Variable Names**: Descriptive.
- **Comments**: Main Goals.
- **Logs**: Every input value, both conditional paths, final message.

<details>
<summary>expand for the program</summary>
<br>

<!-- prettier-ignore -->
```js
'use strict'

/* --- gather the user's input (canceling not allowed) --- */



let input=null;while(input===null){
  input=prompt('please enter "cat"');console.log('user input:',input);
}

/* --- check the input and create a message --- */



let message='';if(input!=='cat'){
  message='"'+input+'" is not a cat';console.log('path: if');
}else{
  message='thank you for the cat';console.log('path: else');
}
console.log('final message:',message);

/* --- display the message for the user --- */



alert(message);
```

</details>

---

## 11

- **Formatting**: Huh?
- **Variable Names**: Descriptive.
- **Comments**: None.
- **Logs**: Every input value, final message.

<details>
<summary>expand for the program</summary>
<br>

<!-- prettier-ignore -->
```js
'use strict';
                                              let
  input = null;                               while
  (input === null) {
input = prompt('please enter "cat"');
console.log('user input:', input);
  }

                                              let
  message = '';                               if
  (input !== 'cat') {
message = '"' + input + '" is not a cat';
  }                                           else
  {
message = 'thank you for the cat';
  }
  console.log('final message:', message);

  alert(message);
```

</details>

---

## 12

- **Formatting**: Creative.
- **Variable Names**: Descriptive.
- **Comments**: None.
- **Logs**: Every input value, final message.

<details>
<summary>expand for the program</summary>
<br>

<!-- prettier-ignore -->
```js
'use strict';
   let input=
         null;
         while
         (input
        ===null)
   {input=prompt(
 'please enter "cat"'


          );console.log(
            'user input:'
              ,input);}let
                message='';
            if(input!=='cat')
            {message='"'+input+
               '" is not a cat'



; }else{ message=



              'thank you for the cat' ;}

console
.log(
'final message:'
,message);alert(


                    message);
```

</details>

---

## 13

- **Formatting**: Creative.
- **Variable Names**: Not descriptive.
- **Comments**: None.
- **Logs**: Every input value, final message.

<details>
<summary>expand for the program</summary>
<br>

<!-- prettier-ignore -->
```js
'use strict'                                                   ;
              let x=null;           while(x===null)
      {x=prompt     ('please enter "cat"')       ;console.


log  (  'user input:'  ,  x  )  ;  }  let  y  =  ''  ;  if  (  x


      !=='cat')    {y='"'+x+'" is not a cat'     ;}else{y=


                   'thank you for the cat'
;
}
console
.
log(
'final message:'
,
y
)
;
alert(
y
)
;
```

</details>

---

## 14

- **Formatting**: Minified to a single line.
- **Variable Names**: Not Descriptive and short.
- **Comments**: None.
- **Logs**: None.

This style of code is used for live applications. Developers will write their
code using helpful names, comments and formatting. Then an automated tool will
shrink their code to the fewest possible characters so it's uses less data when
someone visits the website.

<!-- prettier-ignore -->
```js
'use strict';let x=null;while(x===null)x=prompt('please enter "cat"');let y='';if(x!=='cat')y='"'+x+'" is not a cat';else y='thank you for the cat';alert(y);
```
