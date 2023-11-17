# Naming Variables

Your code should be written first for humans, and then for computers. One of the
best tools you have for helping humans is a good variable name.

- [Variable Analysis](#variable-analysis)
- [`let` or `const`](#let-or-const)
- [Naming the Variable](#name-the-variable)
- [Variable Roles](#variable-roles)
- [Naming Conventions](#naming-conventions)

---

## Variable Analysis

The first step to coming up with a good variable name is to understand how the
variable is used. This doesn't need to be a complicated task, there's a few
simple questions you can ask to begin understanding the variables in a program.
To answer the first three questions all you need to do is read the code.

This exercise is what's called _static analysis_. You can answer all of these
questions _without_ running or tracing the code! (of course you can run it, you
just don't need to)

The first things to notice are the simplest, just carefully read the code to
notice these details:

- **Declaration:** Where in the source code is the variable declared? Is it
  initialized with a value or not? (`let x;` is not initialized. `let x = 1;` is
  initialized).
- **Reads:** How many times in the source code is this variable read? Careful!
  This is not the same as how many times it is read in the program's trace. In
  the example below there is only one line that writes to the `input` variable,
  even though you may execute that line of code many times when running the
  program.
- **Assignments:** How many times in the source code is this variable's value
  changed after it was initialized? Careful! Like with reads, this should be the
  number of times the variable is read _in the source code_. There are only two
  lines that read from `input`, even if those lines are executed many times when
  you run the program.
- _hint: use the `?variables` lens_

Taking a closer look at each time a variable is used you can describe them
further:

- **Types**: What types are assigned to this variable? Is there only one type,
  or does it store different types at different times?
- **Scopes**: In which scope is this variable declared? In which scopes is it
  used? Does it store a value that was created in a different scope?
- **checks**: Is this variable used in control flow checks? What types of
  control flow? How often?

Finally you're ready for the big one ...

- **Description:** How is each variable used in the code, what's it's role? Try
  to write a short and simple description of why this variable needs to be in
  the program.

In the Naming Variables examples & exercises you will learn a structured
approach to analyzing and naming your variables. The first step is to analyze
the code with comments like these:

```js
/*
  _a: used to store the user's input
    declaration:
      init: yes
      types: object (null)
      scopes: global
    reads: 2
      scopes: global
      checks: while
    assignments: 1
      types: string, object (null)
      scopes: while
*/

// declare, initialize: null
let _a = null;
// read: the value of _a
while (_a === null) {
  // assign: string or null, depending on the user
  _a = prompt('enter your name');
}

// read: the user's valid input
// call alert: display the user's valid input
alert(_a);
```

[TOP](#naming-variables)

---

## `let` or `const`?

After you've analyzed all of the variables figure out which ones are
_constant_ - never assigned a new value after initialization. You can rewrite
all of their declarations to use `const`.

The `[eslint]` button will help you find which variables can be declared using
`const`.

[TOP](#naming-variables)

---

## Name the Variable

Now you understand how the variable is used in the program, it's time to give it
a name! In these exercises you'll need to give two different names to each
variable, one _generic_ name and one _specific_ name:

- **Generic**: Generic names that describe the variables' roles in the program.
  A generic names could be used in any program with similar logic.

  ```js
  /* generic
  
    _a -> input:
      it holds a string of user input to be processed in the program
  
  */

  let input = null;
  while (input === null) {
    input = prompt('enter your name');
  }

  alert(input);
  ```

- **Specific**: Specific names relate to your program's use case. A specific
  names may not make sense if you use them in a different program:

  ```js
  /* specific
  
    _a -> userName:
      this variable stores the user's name as a string
  
  */

  let userName = null;
  while (userName === null) {
    userName = prompt('enter your name');
  }

  alert(userName);
  ```

[TOP](#naming-variables)

---

## Variable Roles

The JavaScript language treats variables like a blank slate, you can name them
whatever you want and you can assign any value to them. But that doesn't mean
all variables in a program are the same. Variables can have very different
_roles_ in your program depending on how they're used.

Learning to identify these roles in code will help understand other people's
code and to write your own. Your goal in this chapter is to explore the
different roles a variable can play in a program and how you can come up with
names that describe not only the values stored in a variable, but also how it's
used in the program.

In this module you will only learn a few different roles, but there are more
that you will encounter over your time as a programmer. Learning to use
different roles will help you write more clean and effective code. You aren't
required to assign a role to each variable in these exercises, but keeping roles
in mind will help to think of better names.

Can you think of any other roles whiles studying these exercises?

- **Fixed Value**: a variable that never changes after initialization
- **Stepper**: changes systematically, going through a series of values for
  control flow
- **Flag**: a boolean variable which can be turned "on" or "off" to control
  program flow
- **Gatherer**: combines a series of values into a new value
- **Holder**: stores one selected value from a series of values
- **Temporary**: holds a value for a short time, before using it somewhere else

To learn more about roles of variables check out these links:

- [einarsen](https://www.einarsen.no/variables-and-the-roles-they-play/)
- [saja.kapsi.fi](http://saja.kapsi.fi/var_roles/stud_vers/stud_Python3_eng.html)
- [counter vs. accumulator](https://stackoverflow.com/questions/12983063/what-is-the-difference-between-a-counter-and-an-accumulator)

[TOP](#naming-variables)

---

## Designing Better Names

Design is a process, finding the right design for anything (a web page, a
bridge, a variable name) takes iteration. The exercises in this folder pretend
that naming variables is a one-step task to help you understand some of the
principles behind a good name. But in the real world nothing is so simple!

Check out this series of articles for an idea of what it's like to name
variables in larger programs:

- [Naming as a Process](https://www.digdeeproots.com/articles/on/naming-process/)

---

## Naming Conventions

There are no real rules to naming variables but there are some conventions, some
good and some bad practices. Each company or project may also have it's own
rules. Here's some resources to get you started:

- [do's and don'ts](https://www.freecodecamp.org/news/javascript-naming-conventions-dos-and-don-ts-99c0e2fdd78a/)
- [Best Practices (plainenglish)](https://javascript.plainenglish.io/javascript-naming-convention-best-practices-b2065694b7d)
- [The Ultimate Guide](https://javascript.plainenglish.io/the-ultimate-guide-to-javascript-naming-conventions-f3e371efb0d1)
- [nexTRIE](https://www.youtube.com/watch?v=O5WlRR-lEDE)
- [Best Practices (swlh)](https://medium.com/swlh/javascript-best-practices-variable-naming-conventions-ea121ca389c5)
- [Chidre's Tech Tutorials](https://www.youtube.com/watch?v=CZ9iNTLYhfw)

---

## Class Recordings

- [Class 15](https://vimeo.com/566111424) (first half of the video)
