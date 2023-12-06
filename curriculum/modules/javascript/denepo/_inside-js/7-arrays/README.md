# Arrays

Below are listed the goals of following this material.

<!-- Content taken from https://github.com/in-tech-gration/inside-js/blob/main/README.md#7-Arrays -->
- **Skills**:
  - [ ] 🥚 **Reference vs. Value**: You can explain how arrays are stored in
        memory and can demonstrate using examples run in JS Tutor.
  - [ ] 🥚 **Deep vs. Shallow Comparison**: You can explain use the concept of
        reference vs. value to explain how a deep comparison is different than a
        shallow comparison.
  - **Side-Effects**: You can ...
    - [ ] 🥚 **Explain** what side-effects are with an example.
    - [ ] 🥚 **Avoid** side effects when writing your own functions.
    - [ ] 🐣 **Write tests** to check if a function has side-effects.
    - [ ] 🐣 **Fix** side-effects in buggy functions.
  - **Integrating Arrays**: You can work with programs that use arrays to store
    user data:
    - [ ] 🥚 **Call**: You can call pre-written functions in a program:
    - [ ] 🐣 **Write**: You can write functions that are used in a pre-written
          program.
    - [ ] 🐣 **Refactor**: You can refactor logic from a program into a separate
          function. You can avoid side-effects and test your function.
    - [ ] 🐔 **Reverse-Engineer**: You can reverse-engineer a program,
          refactoring logic to a separate function if necessary.
  - 🐥 **_Stateful_ Programs**: You can step through, debug and complete
    programs with an HTML/CSS interface that store user data in an array between
    interactions.
- **Language Features**: You are comfortable reading and tracing programs that
  use ...
  - [ ] 🥚 **Array Literals**: You can create a new array in your program with
        initial values using the _array literal_ syntax:
        `const arr = ['items'];`
  - 🥚 **Adding and Removing Items**: You can use these methods to add and
    remove items in an array:
    - [ ] **arr.push()**: Adds a new item to the end of an array.
    - [ ] **arr.pop()**: Removes the last item in an array.
    - [ ] **arr.unshift()**: Adds a new item to the front of an array.
    - [ ] **arr.shift()**: Removes the first item in an array.
  - 🥚 **Reading Items**: You can read items in an array using:
    - [ ] **arr[i]**: Access a specific item in an array using square brackets a
          positive index.
    - [ ] **arr.at(i)**: Access a specific item in an array using `.at()` and a
          positive or negative index.
  - [ ] 🥚 **Updating Items**: You can update any item in an array using it's
        index, square brackets and assignments: `arr[4] = 'hello'`.
  - 🥚 **Iterating Over Arrays**:
    - [ ] **for (const item of arr)**: You use _for-of_ loops to iterate
          forwards through an array.
    - [ ] **for (let i = ...)**: You can use _for_ loops to iterate forwards and
          backwards through an array.
  - [ ] 🥚 **Array.isArray()**: You can use _Array.isArray()_ to check if
        something is an array: `Array.isArray(something)`
  - [ ] 🥚 **Spread Syntax**: you can use spread syntax to create a _shallow_
        copy of an array: `const shallowCopy = [...arr];`