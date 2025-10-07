# Fixing Bugs

Fixing bugs is all about understand what your code _does do_ before trying to
make it do what you _want_ it to do. After you understand the difference between
what it _does_ do and what it _should_ do, you will want to make small
experiments to discover how you can go from buggy code to working code.

Becoming a master debugger will take lots of experience, the more bugs you've
fixed the more solutions you know. Practicing this structured approach will help
you learn the most from each bug you encounter.

Here are the questions you should practice asking and answering. If you can't
answer these questions then fixing a bug will be pure luck!

1. what _should_ it do? ("zooming out": user stories, input/output test cases)
2. what _does_ it do? ("zooming out": actual output values, actual user
   experience)
3. how _does_ it work? ("zooming in": reading, tracing, describing, stepping
   through, ...)
4. which line(s) are surprising?

Once you've answered these questions you are ready to experiment with changes
that might fix your program.

Additionally, you can watch the [following video](https://www.youtube.com/watch?v=q2mN_JWD5wU) for a better understanding on some of the concepts described.

---

## What _does_ it do?

When you're already thinking of what the program _should_ do, it's too easy to
look at your buggy code and see what you _want_ to see. Not what's actually
there. Clearing your mind and telling yourself "I know nothing" is the first
step toing understand _exactly_ what the buggy code does and how it works.

Once you've convinced yourself you have no idea how the code works, here are a
few things you can do to understand the buggy code:

- **Static**: _without running the code_
  - read the code out loud, line by line
  - describe the code in detail using comments (zooming out, zooming in,
    connections & goals)
  - open an empty file and rewrite the buggy code by hand, no copy pasting!
  - copy the code to a new file and rename the variables
  - hand-made trace table
- **Dynamic**: _with running the code_
  - `console.log`ing variables that confuse you
  - tracing in the console to check your hand-made trace table
  - stepping through the code (debugger, and sometimes JS Tutor)
  - going backwards from the output to the input (traces, tables, JS Tutor)

---

## Surprises

The whole point of debugging is that you _expect_ your code to do one thing, but
it _actually_ does something different. That means there must be at least one
line of code that surprises you!

Finding the line(s) that that surprise you is a huge step towards fixing your
bugs. If there is a line of code that does not do what you think it will do,
then there's a good chance it has something to do with your bug. Finding
surprising lines won't fix your code, but it can help you think up new
experiments.

Think about the confusing line, what about it is confusing?

- maybe something is missing?
- or is there something extra that shouldn't be there?
- maybe it does belong in the program, just not there?
- or maybe it's supposed to be there, and it's just not quite written correctly?

---

## Experiments

After you've understood what the code _should_ do, what the code _does_ do and
you've found the lines that surprise you - it's time to start experimenting!
This is where the real debugging begins.

Fixing a bug doesn't happen by magic, and it usually doesn't happen with a
single moment of genius. Fixing a bug happens in small steps using trial and
error. You can think of it as a conversation with your code.

- You ask your code if you found the answer by making a small change and running
  the program.
- The code tells you if you found the answer by either working correctly, or
  not.

By taking notes on all the little experiments you make and what happened you can
carefully fix your bugs without causing more problems. (and learn a lot on the
way)

---

## The Exercises

The exercises in this folder are all short programs with a bug or two. Each
exercise will also have some comments to help guide you through the debugging
process. Take a look at the [./examples](./examples) to see how you can study
these exercises.

```js
'use strict';

/* program name

  a user can ...
  - given ...

  test cases:
    input -> expected output

  --- experiments ---

  1. FAILING: (which failing test cases will you try to fix?)
      EXPECT: (what value should the program output)
      ACTUAL: (what value does the program actually output)

    TRY: (how will you try to fix the bug?)
    PREDICT: (how do you expect the program to behave after your change?)
    IT DID: (what actually happened after your change?)
    EXPLAIN: (explain why your change did what it did. was your prediction correct?)

  --- lessons learned ---


*/

// 1. ! what?  this line is surprising because ...
const someBuggyCode = 'goes here';
```

---

## References

- [explicit debugging](https://www.youtube.com/watch?v=1vWQ8vHBD4A) (from
  [software debugging](https://www.udacity.com/course/software-debugging--cs259))
- [reading 13: debugging](https://web.mit.edu/6.031/www/fa17/classes/13-debugging/)
- [hypothesis-driven debugging](https://tech.residebrokerage.com/hypothesis-driven-debugging-bf1a4509f404)
- [wiki.c2.com](https://wiki.c2.com/?DebuggingAndTheScientificMethod)
- using the scientific method: [video](https://youtu.be/bCHRCehDOq0?t=1383),
  [page](https://www.debuggingbook.org/html/Intro_Debugging.html#The-Scientific-Method)
- [ghosts in debugging](https://third-bit.com/2021/03/27/ghosts-in-debugging/)
