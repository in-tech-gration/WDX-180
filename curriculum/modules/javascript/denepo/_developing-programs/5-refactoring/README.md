# Refactoring

"_Refactoring_" is a big word with a simple meaning:

- Changing a program's code without changing it's behavior.

At first it might seem like a useless skill. Why would you want to rewrite
something that already works? There are a few very good reasons:

1. You always learn as you develop a program. Your understanding of the problem
   evolves, and your coding skills grow as well. After writing a first version
   of a program you will usually look back on your code and think of a better
   way to solve the problem. That means it's time to refactor!
2. As a developer you will often need to work with code other people have
   already written. Sometimes making changes in their code helps you understand
   how they solved the problem, and sometimes their code is simply hard to
   understand. Either way it's time for a refactor!
3. As software projects grow and evolve, you will naturally need to adapt the
   code. Maybe you need to change from one framework to another, or maybe the
   client requested some changes. Time for a refactor!
4. It's a great way to understand JavaScript and problem solving.
5. It's fun! (sort of, for some people :)
6. ... too many to count

Whether you know it or not, you've been studying refactoring this whole time!
The examples and exercises in previous chapters were full of different ways to
write the same program. Below is one program refactored 3 different ways:

- **Logic in the Head**

  ```js
  'use strict';

  let input = null;
  while (input === null) {
    input = prompt('enter something');
  }

  alert(input);
  ```

- **`true`/`break`/`continue`**

  ```js
  'use strict';

  let input = null;
  while (true) {
    input = prompt('enter something');
    if (input !== null) {
      break;
    }
  }

  alert(input);
  ```

- **Boolean Flag Variable**

  ```js
  'use strict';

  let input = null;

  let isValid = false;
  while (!isValid) {
    input = prompt('enter something');
    if (input !== null) {
      isValid = true;
    }
  }

  alert(input);
  ```

Now it's your turn! Take a look at the `./examples` directory then try your hand
at refactoring the exercises.

**Pro Tip**: Make one small change at a time and run your tests after each
change.
