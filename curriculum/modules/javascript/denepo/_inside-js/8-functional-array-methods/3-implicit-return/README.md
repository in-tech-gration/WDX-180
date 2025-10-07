# Implicit Return

When the body of an arrow function is _one single expression_, you can remove
the curly braces `{ }` and the `return` statement to simplify your function's
syntax.

Writing a function one way or the other is just preference. A good general rule
is to start with an explicit `return` and refactor to an implicit arrow function
if it makes your code easier to read.

When working in a team it's best to agree on one style and have everyone stick
to that.

```js
// these two functions do exactly the same thing!

const explicitReturn = (a, b) => {
  return a + b;
};

const implicitReturn = (a, b) => a + b;
```

The exercises in this folder will give you a function that uses array methods
and callbacks with `return` statements, your task is:

1. Rewrite the callbacks to use implicit returns.
2. Decide if the entire function can be re-written as an implicit return.

---

Looking for more practice? Go back to the `/practice` exercises and try
rewriting your solutions to use implicit returns.

---

## References

- [Colt Steele](https://www.youtube.com/watch?v=thXp0_py9X4)
- [Tyler McGinnis](https://ui.dev/arrow-functions/)
- [Jake Trent](https://jaketrent.com/post/javascript-arrow-function-return-rules)
- [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
