# Isolating JavaScript

> Careful! The goal of these exercises is to help you master JavaScript
> execution, and to become familiar reading, writing and refactoring some core
> JS language features. The goal of these exercises _is not_ to teach you best
> practices.
>
> In fact, some of the exercises in this folder are _bad_ practices. For example
> you will be learning how type coercion works with primitives and operators,
> you _should not_ write code that uses type coercion on purpose. But you will
> come across code that does and you will have bugs related type coercion, so
> it's good to learn how it works.
>
> Some of the exercises in this folder will be difficult and abstract. you do
> not need to finish everything at once, you can always start a set of exercises
> and come back to finish them later.

---

Studying JavaScript will be challenging. The HYF way of learning is not
glamorous. You will need to learn how you study JS, and very importantly

- you will need to adjust your learning expectations

Studying JavaScript will be 100% different from learning HTML and CSS. HTML &
CSS are all about learning and applying rules. if you apply the rules correctly,
your web page looks right. You don't need to think about what happens between
your code and the final web page

- Studying JavaScript is 100% about what happens behind the scenes!

Programming is all about inner processes. You should focus 100% on what happens
between starting your script and the final result. Making your code work, or
solving a challenge is second. Learning how the JavaScript engine executes your
code step-by-step is first. You should focus on ...

---

## Program Memory

_Program Memory_ is a term that refers to the values stored in memory at EACH
SPECIFIC moment of execution. These values can change often, sometimes at every
step of your program! Learning to program requires you to understand:

- how does the JS engine represent memory?
- how does the JS engine interpret your code step-by-step?
- how does each instruction interact with program memory?

Your first goal is learning to see what is happening inside your program at each
step:

- _`console.log`_: The simplest way to peek into program memory, but logging has
  some huge limitations. You will only log what you think of logging, but
  there's a lot more going on! A few `console.log`s here and there is not the
  best way to understand how your whole program's memory is represented
- \__DevTools Debugger_: The best way to peek inside program memory. It will
  take some practice to use effectively and is worth every second. You can see
  every value in memory, at every step of your program's execution. Debuggers
  are designed to help you understand how memory is structured in JS

---

## General Study Tips

> For more info, check out:
> [Learning From Code](https://home.hackyourfuture.be/students/study-tips/learning-from-code)

Look through the rest of the files in this folder to learn a good study workflow

- Spend lots of time studying the examples
  - understand of what each line of code means (technically and humanly)
  - step through them one line at a time, following the workflows in this folder
  - predict!!! Always try guess what will happen before stepping your code
  - draw on paper, read out loud, do what you can to make the code more tangible
- Write lots of comments in the exercises and examples, your future self will
  thank you
  - what surprised you about each line? what did you learn from that surprise?
  - what should you study deeper next time you review this topic?
  - which other examples/exercises/resources/projects used this concept?
  - what random thoughts did you have while studying this?
  - ... you know you best, write whatever helps!

Hint: the solution for many of the \_'s in are written in the debugger ... if
you know how to look for them ;)

---

Keep at it and you'll get there, one step at a time :)
