# Fixing Errors

Program life cycle is the air JavaScript breaths, you may not notice it but it's
always there and it's pretty darned important. Taking the time to become
familiar with the life-cycle of JS program will make it easier to debug your
code and to learn the tricker topics everyone's talking about; scope, errors,
hoisting, strict mode, you name it.

Learning to recognize the difference between your source code (simply a text
file) and the dynamic runtime of your program (values changing in memory) is a
critical skill. Before it 'clicks', it will be a mystery. After it 'clicks' it
will be almost simple. To understand a running program you need to be aware of
the life-cycle of a JS program:

0. **Source Code**: the text file sitting in your computer's folder system. it
   doesn't do anything, it's just like any other text file
1. **Creation Phase**: before actually running your program, the javascript
   parser will "read" your code and get everything ready to run your program
   (without running the program!)
2. **Execution Phase**: running your program! carrying out your instructions one
   at a time

---

## 4 Principles

1. **JavaScript Syntax**
   - You can think of this like spelling, grammar & vocabulary. If you open
     parenthesis, you must close them or the JS parser will not understand what
     you wrote. If you use a symbol that JS doesn't support it will throw an
     error. If you write anything that JS does not understand or write code that
     JS does not allow, you will get a syntax error.
   - Learning JS syntax means building your understanding of what is and isn't
     allowed, then recognizing & fixing mistakes you make. This is just a lot of
     memorization and attention to detail. Fortunately most modern code editors
     have a lot of features to help you with this.
2. **JavaScript Semantics**
   - Just because your code has correct syntax doesn't mean everything is ok! It
     is still possible for you to use correct syntax in incorrect ways. The
     rules that define correct and incorrect usage are JS semantics.
   - You can think of it like normal language. You may be using english words
     that are spelled correctly, but that doesn't mean your grammar is correct!
     "Red dog woods running"
3. **Creation Phase** & **Execution Phase**
   - _Creation phase_ is what happens before the program runs. JS will interpret
     your code and prepare the program memory. Some types of error occur during
     creation phase.
   - _Execution Phase_ is everything that happens after the creation phase. This
     is when JS executes your program one instruction at a time. Different
     errors can occur in execution phase than in creation phase.
4. **Errors**
   - **creation phase errors**: Bad "spelling" or bad "grammar". Your program
     can either not be understood by the JS parser, or made a mistake that the
     parser was able to find without running your code. Your program will not
     continue to the execution phase.
   - **execution phase errors**: Commonly called "runtime errors". You made no
     syntax errors and no semantic errors the parser could catch, so your
     program entered execution phase. But somewhere in your program you
     instructed JavaScript to do something that is not possible, maybe trying to
     use a variable that wasn't declared.

### All together

| _Error Classifications_ |                                                                                               syntax error                                                                                                |                                                                                                        semantic error                                                                                                        |
| :---------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|   **creation phase**    |                                    Bad spelling, the parser can't understand (or "parse") what you've written. Your program will not continue to the execution phase.                                     |                  The parser was able to parse your code, but you tried doing something the parser will not allow. An error is thrown before entering execution phase. (ie. reassigning a constant variable)                  |
|   **execution phase**   | These are less common, generally by the time your program is running there are no syntax errors. But in some cases it is possible to have run-time syntax errors in JS, worry about that when it happens. | "runtime errors". You made no syntax errors, and no semantic errors the parser can catch. Instead you wrote a command JS doesn't allow and won't notice untill it tries to execute that line. (these are the hardest to fix) |

---

## The Exercises

In this chapter you will learn some simple steps you can take to find and
understand the errors in your code. You'll learn to fill in all the blanks in
this comment:

```js
/*
  environment:

  name:
  message:

  callstack:

  life cycle:

  the mistake:

  the fix(es):
*/
```

Once you've gotten used to finding this information in your DevTools, you're
ready to fix errors in all your projects!

---

## Logic Errors

Logic mistakes (or "bugs") are when your code runs without an error, but does
not do what you wanted it to. This is a different topic from Errors (when your
code breaks). Bugs and errors are often taught together, but are actually
different. Take a look at this funny video
[comparing syntax & logic errors](https://www.youtube.com/watch?v=tV0tQisuxPo)
to understand the difference by analogy. You can think of it like normal
language, a sentence can have good grammar but still make no sense: "Dogs talk
almost as red as a bus."

While fixing errors requires "only" a solid understanding of the JS Syntax and
Semantics, plus some experience with the debugger. Fixing logic mistakes also
requires an understanding of debugging strategies, testing and strategic
thinking. These exercises only cover Errors.

---

## Resources

- [Describing Errors (class recording)](https://vimeo.com/530238051)
- [creation phase & execution phase](https://www.youtube.com/watch?v=YID-HIdy1bk)
- [syntax vs semantics](https://www.youtube.com/watch?v=vP-mn62EF0o)
- [Syntax Parsers, Execution Contexts, and Lexical Environments](https://jsbeginners.com/understanding-the-weird-parts-notes-1/)
- [different kinds of errors](https://in-tech-gration.github.io/intro-to-professional-web-dev/chapters/errors-and-debugging/categories-of-errors.html)
- JS Tutor snippets:
  - [creation phase errors](https://goo.gl/1Psxu7)
  - [creation phase errors](https://goo.gl/68af7H)
  - [execution phase errors](https://goo.gl/WzbmNE)
- [JS error reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors)
- [JavaScript Engines](https://www.youtube.com/watch?v=BMKWdLX9w3M)
- [errors vs. bugs vs. defects](https://www.youtube.com/watch?v=pqSB3MrUtD4)
