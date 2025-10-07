# From Spec

It's time! Practice writing some programs of your own.

There are different levels of exercise in this folder, each with less support:

0. **Stepped Examples**: These examples show each step of the incremental
   writing process. Don't skip these before moving on!
1. **Starter Code**: These exercises will give you behavior, goals and some
   starter code. You need to complete the code to implement the behavior
   described by the specs.
2. **Specs and Goals**: These exercises will have specs and labeled goals, but
   not starter code. You need to write all the code from scratch.
3. **Only Specs**: This set of exercises will only give you the program specs,
   you need to come up with your own goals and your own code.

Some of the programs you will write are a lot like ones you studied in previous
chapters. No problem, just find a different way to write the same program
behavior!

---

## Some Tips

The easiest way write a program is to work in small steps, running the code
every time you make a change and fixing each bug as you write them instead of
having to fix them all at once afterwards. Planning your development around
program goals is the key to structuring these small steps.

A good strategy to write a program is thinking about what data you will need in
_the next goal_. Thinking of the data you need later will helps you understand
what to write now.

So what's a good process for writing a program? It might look something like
this:

---

### 0. Zoom out, Zoom in, Zoom out, Zoom in

The most helpful piece of advice you can keep in mind while writing a program is
to switch your focus between the big picture and the details.

When you start writing PseudoCode and later JavaScript, it's very easy to get
absorbed by the details of each line you're writing. This is good as you're
figuring out what to write on that line but can become a problem when you spend
all of your time focused on one line, then the next line, then the next line,
then the next ... You can easily loose sight of the big picture!

After every line you write it's helpful to zoom out to consider the program's
behavior, goals and the connections between your new line and each existing
line. When you spend too much time zoomed in you will often write code that
works but is not really what you need. Then you have to start all over again!

---

### 1. Understand the Behavior

Carefully read the user stories and test cases to understand what data goes in,
what data comes out, and what should happen to the data.

<details>
<summary>expand for example code</summary>
<br />

```js
'use strict';

/* Add Excitement

  a user can input any text and it will become excited.
    - given the user cancels: they are prompted again
    - given the input is a string: it will have an "!" added to the end

  test cases:
    ''      -> '!'
    '!'     -> '!!'
    'JS'    -> 'JS!'
    'hello' -> 'hello!'
*/
```

</details>

---

### 2. Plan your Goals

What are the important steps in transforming the input data to the final output
data?

Take some extra time to think about what data should come into each goal, and
what data should leave each goal. That's right, you can think of each goal as a
small program inside your program!

<details>
<summary>expand for example code</summary>
<br />

```js
'use strict';

/* Add Excitement

  a user can input any text and it will become excited.
    - given the user cancels: they are prompted again
    - given the input is a string: it will have an "!" added to the end

  test cases:
    ''      -> '!'
    '!'     -> '!!'
    'JS'    -> 'JS!'
    'hello' -> 'hello!'
*/

/* --- get a string from the user --- */
//  Data In:      a string or null
//  Data After:   the first string the user inputs

/* --- make the string excited --- */
//  Data Before:  the user's string
//  Data After:   the same text with an exclamation mark

/* --- display the string to the user --- */
//  Data Out:  an excited string
```

</details>

---

### 3. English Solution

Try your best to understand the problem and possible solutions before writing a
single line of code, start with English!

If you dive into code without carefully thinking about how to solve the problem,
you'll almost always get tangled in confusing code and errors. A little planning
goes a long way.

At this step there are no rules, just write whatever helps you understand the
problem and think of a solution.

<details>
<summary>expand for example code</summary>
<br />

```js
'use strict';

/* Add Excitement

  a user can input any text and it will become excited.
    - given the user cancels: they are prompted again
    - given the input is a string: it will have an "!" added to the end

  test cases:
    ''      -> '!'
    '!'     -> '!!'
    'JS'    -> 'JS!'
    'hello' -> 'hello!'
*/

/* --- get a string from the user --- */
//  Data In:      a string or null
//  Data After:   the first string the user inputs

/* get some text from the user
  it can be anything as long as it's a string
  should use `prompt` -> string or null
  and a while loop I think?
*/

/* --- make the string excited --- */
//  Data Before:  the user's string
//  Data After:   the same text with an exclamation mark

/*
  create a new variable to store the final message
  add an exclamation point to the end of their input
*/

/* --- display the string to the user --- */
//  Data Out:  an excited string

/*
  display the new string with an exclamation point
*/
```

</details>

---

### 4. PseudoCode Solution

Try your best to solve the problem before writing a single line of code by
translating your English solution to PseudoCode.

Of course your PseudoCode solution may not be perfect, that happens to all of
us. You'll get a chance to work through any bugs you missed when you start
writing JavaScript.

PS. this step looks easy in the examples but can actually be the hardest! Don't
worry if it takes you a lot of time and effort to work out a solution, that's
normal.

<details>
<summary>expand for example code</summary>
<br />

```js
'use strict';

/* Add Excitement

  a user can input any text and it will become excited.
    - given the user cancels: they are prompted again
    - given the input is a string: it will have an "!" added to the end

  test cases:
    ''      -> '!'
    '!'     -> '!!'
    'JS'    -> 'JS!'
    'hello' -> 'hello!'
*/

/* --- get a string from the user --- */
//  Data In:      a string or null
//  Data After:   the first string the user submits

/* get some text from the user
  it can be anything as long as it's a string
  should use `prompt` -> string or null
  and a while loop I think?
*/
// input <- ''
// WHILE: input === null
//   input <- prompt('enter something')
// :END WHILE

/* --- make the string excited --- */
//  Data Before:  the user's string
//  Data After:   the same text with an exclamation mark

/*
  create a new variable to store the final message
  add an exclamation point to the end of their input
*/
// output <- input + '!'

/* --- display the string to the user --- */
//  Data Out:  an excited string

/*
  display the new string with an exclamation point
*/
// alert(output)
```

</details>

---

### 5. Write -> Predict -> Check -> Repeat

It's tempting to jump in and translate all your pseudo code into JS at once,
this feels faster at first but will actually slow you down. The more code you
write the harder it is to understand the more mistakes you can make.

The best approach is to translate a small amount of code, predict what it will
do, then run the code and check. If it didn't do what you expected then make a
small change and check again. Don't move on to the next line until the one
you're working on does _exactly_ what you expect it will!

Here is an example of what it might look like to write and check the code for
one goal:

<details>
<summary>goal 1, try 1: the loop never executes</summary>
<br />

```js
'use strict';

/* Add Excitement

  a user can input any text and it will become excited.
    - given the user cancels: they are prompted again
    - given the input is a string: it will have an "!" added to the end

  test cases:
    ''      -> '!'
    '!'     -> '!!'
    'JS'    -> 'JS!'
    'hello' -> 'hello!'
*/

/* --- get a string from the user --- */
//  Data In:      a string or null
//  Data After:   the first string the user submits

// the initial value is not null, so the loop never executes
let input = '';
while (input === null) {
  input = prompt('enter something');
  console.log(input);
}
console.log(input);

/* --- make the string excited --- */
//  Data Before:  the user's string
//  Data After:   the same text with an exclamation mark

// output <- input + '!'

/* --- display the string to the user --- */
//  Data Out:  an excited string

// alert(output)
```

</details>

<details>
<summary>goal 1, try 2: the loop still never executes</summary>
<br />

```js
'use strict';

/* Add Excitement

  a user can input any text and it will become excited.
    - given the user cancels: they are prompted again
    - given the input is a string: it will have an "!" added to the end

  test cases:
    ''      -> '!'
    '!'     -> '!!'
    'JS'    -> 'JS!'
    'hello' -> 'hello!'
*/

/* --- get a string from the user --- */
//  Data In:      a string or null
//  Data After:   the first string the user submits

let input = null;
// oops,  used an assignment operator instead of a comparison
while ((input = null)) {
  input = prompt('enter something');
  console.log(input);
}
console.log(input);

/* --- make the string excited --- */
//  Data Before:  the user's string
//  Data After:   the same text with an exclamation mark

// output <- input + '!'

/* --- display the string to the user --- */
//  Data Out:  an excited string

// alert(output)
```

</details>

<details>
<summary>goal 1, try 3: got it!</summary>
<br />

```js
'use strict';

/* Add Excitement

  a user can input any text and it will become excited.
    - given the user cancels: they are prompted again
    - given the input is a string: it will have an "!" added to the end

  test cases:
    ''      -> '!'
    '!'     -> '!!'
    'JS'    -> 'JS!'
    'hello' -> 'hello!'
*/

/* --- get a string from the user --- */
//  Data In:      a string or null
//  Data After:   the first string the user submits

let input = null;
while (input === null) {
  input = prompt('enter something');
  console.log(input);
}
console.log(input);

/* --- make the string excited --- */
//  Data Before:  the user's string
//  Data After:   the same text with an exclamation mark

// output <- input + '!'

/* --- display the string to the user --- */
//  Data Out:  an excited string

// alert(output)
```

</details>

---

### 6. One Goal At a Time

Follow the same process (_Write -> Predict -> Check -> Repeat_) for each goal in
your program until you think the full program is ready.

Notice that the _Data After_ one goal is the _Data Before_ the next goal!

<details>
<summary>goal 1: get a string from the user</summary>
<br />

```js
'use strict';

/* Add Excitement

  a user can input any text and it will become excited.
    - given the user cancels: they are prompted again
    - given the input is a string: it will have an "!" added to the end

  test cases:
    ''      -> '!'
    '!'     -> '!!'
    'JS'    -> 'JS!'
    'hello' -> 'hello!'
*/

/* --- get a string from the user --- */
//  Data In:      a string or null
//  Data After:   the first string the user submits

let input = null;
while (input === null) {
  input = prompt('enter something');
  console.log(input);
}
console.log(input);

/* --- make the string excited --- */
//  Data Before:  the user's string
//  Data After:   the same text with an exclamation mark

// output <- input + '!'

/* --- display the string to the user --- */
//  Data Out:  an excited string

// alert(output)
```

</details>

<details>
<summary>goal 2: make the input excited</summary>
<br />

```js
'use strict';

/* Add Excitement

  a user can input any text and it will become excited.
    - given the user cancels: they are prompted again
    - given the input is a string: it will have an "!" added to the end

  test cases:
    ''      -> '!'
    '!'     -> '!!'
    'JS'    -> 'JS!'
    'hello' -> 'hello!'
*/

/* --- get a string from the user --- */
//  Data In:      a string or null
//  Data After:   the first string the user submits

let input = null;
while (input === null) {
  input = prompt('enter something');
  console.log(input);
}
console.log(input);

/* --- make the string excited --- */
//  Data Before:  the user's string
//  Data After:   the same string with an exclamation mark

let output = input + '!';
console.log(output);

/* --- display the string to the user --- */
//  Data Out:  an excited string

// alert(output)
```

</details>

<details>
<summary>goal 3: display the excited string to the user</summary>
<br />

```js
'use strict';

/* Add Excitement

  a user can input any text and it will become excited.
    - given the user cancels: they are prompted again
    - given the input is a string: it will have an "!" added to the end

  test cases:
    ''      -> '!'
    '!'     -> '!!'
    'JS'    -> 'JS!'
    'hello' -> 'hello!'
*/

/* --- get a string from the user --- */
//  Data In:      a string or null
//  Data After:   the first string the user submits

let input = null;
while (input === null) {
  input = prompt('enter something');
  console.log(input);
}
console.log(input);

/* --- make the string excited --- */
//  Data Before:  the user's string
//  Data After:   the same string with an exclamation mark

let output = input + '!';
console.log(output);

/* --- display the string to the user --- */
//  Data Out:  an excited string

// alert(output)
```

</details>

---

### 7. Test the Program

When you think the program is finished, it's time to test it. Run the program
with each of the test cases making sure that the correct output is displayed for
each input.

Writing extra test cases can help you understand the program, be confident that
it works as expected, and catch any bugs you may have missed while writing.

<details>
<summary>even more test cases</summary>
<br />

```js
'use strict';

/* Add Excitement

  a user can input any text and it will become excited.
    - given the user cancels: they are prompted again
    - given the input is a string: it will have an "!" added to the end

  test cases:
    ''      -> '!'
    '!'     -> '!!'
    'JS'    -> 'JS!'
    'hello' -> 'hello!'
    '123'   -> '123!'
    '..!!..'  -> '..!!..!'
    'HYF'   -> 'HYF!'
    'HYF!!' -> 'HYF!!!'
*/

/* --- get a string from the user --- */
//  Data In:      a string or null
//  Data After:   the first string the user submits

let input = null;
while (input === null) {
  input = prompt('enter something');
  console.log(input);
}
console.log(input);

/* --- make the string excited --- */
//  Data Before:  the user's string
//  Data After:   the same string with an exclamation mark

let output = input + '!';
console.log(output);

/* --- display the string to the user --- */
//  Data Out:  an excited string

alert(output);
```

</details>

If your program does what it should, great! If it doesn't, then it's time to
start ...

---

### 8. Debugging

If your code doesn't do what it's supposed to, then you've got a bug.

Some bugs are easy to fix, maybe you just used the wrong variable or flipped
your `if`/`else` blocks. But other bugs can be hard to find and fix.

Learning to carefully identify and fix bugs in a program is not an easy skill to
develop. You'll figure it out with lots of examples, practice and experience.
