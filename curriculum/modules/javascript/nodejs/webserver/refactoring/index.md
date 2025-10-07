---
title: "Tiny Server Refactoring"
---

# Tiny Web Server Refactoring

### Schedule

  - [Study](#study-plan)
  - [Exercises](#exercises)
  <!-- - [Extra Resources](#extra-resources) -->

### Study Plan

  ![](./assets/server-refactoring.png)

  In this exercise we are going to study and refactor the code of a tiny Web Server that uses the built-in `node:os` module to return system information back to the user. Our aim is to detect parts of the code that can be improved and detect any [`code smells`](https://martinfowler.com/bliki/CodeSmell.html) that can be removed.

  > _"A code smell is a surface indication that usually corresponds to a deeper problem in the system."_ ~ Martin Fowler

  **Requirements:**

  - Fundamental knowledge of Node.js
  - Familiarity with the `node:os`, [`node:fs`](https://www.youtube.com/watch?v=Z_p1yFGS0Ak&list=PLC3y8-rFHvwh8shCMHFA5kWxD9PaPwxaY&index=27){:target="_blank"} and [`node:http`](https://www.youtube.com/watch?v=3Z-pAgra-tw&list=PLC3y8-rFHvwh8shCMHFA5kWxD9PaPwxaY&index=30){:target="_blank"} built-in modules.
  - Familiarity with the [basic Web Server boileplate](https://nodejs.org/en/learn/getting-started/introduction-to-nodejs#an-example-nodejs-application){:target="_blank"}

  **Here's the plan...**

  ---

  **1) First, let's start by watching a series of short videos from `Jacob Sorber` on `Code Smells`:**

  ![](./assets/code.smells.png)

  - [Smelly code and long functions](https://www.youtube.com/watch?v=ll4XT0MYKN0){:target="_blank"}
  - [Smelly code and bad names](https://www.youtube.com/watch?v=zx7euEEZ0H4){:target="_blank"}
  - [Code Smells: Duplicate Code (DRY)](https://www.youtube.com/watch?v=ck_RfVOYgjQ){:target="_blank"}
  - [Smelly code and Magic Numbers](https://www.youtube.com/watch?v=p8RC_i9t0MU){:target="_blank"}

  This will take you around 20 minutes. After you've finished watching these videos, take a piece of paper and write down what you've learned in the form of a checklist.

<!-- ### Summary -->

### Exercises
 
  <hr style="margin-top: 3rem; margin-bottom: 4rem">

  **2) Download, study and run the following code:**

  <!-- ![](./assets/studying.code.png) -->

  <img src="./assets/studying.code.t.png" style="float: left; width: 40%; shape-outside: circle(50%); margin-right: 2rem;">

  <!-- ![](./assets/studying.code.t.png?r=1) -->

  [Source code here](https://github.com/in-tech-gration/WDX-180/tree/main/curriculum/modules/javascript/nodejs/webserver/refactoring/assets/original_code){:target="_blank"} or [here _(index.js)_](https://in-tech-gration.github.io/WDX-180/curriculum/modules/javascript/nodejs/webserver/refactoring/assets/original_code/index.js){:target="_blank"} and [here _(style.css)_](https://in-tech-gration.github.io/WDX-180/curriculum/modules/javascript/nodejs/webserver/refactoring/assets/original_code/style.css){:target="_blank"}.

  This is a **Node.js app**, so you must execute the code using the `node` command from the terminal:

  `node index.js`

  See if you can find any `code smells` and ways to improve the code based on the newly acquired knowledge before moving forward. **Make sure to take a short break before moving on**. 🚶‍♀️

  <hr style="margin-top: 4rem; margin-bottom: 4rem">

  **3) Watch the Code Review and refactor accordingly**

  Watch [this video](https://www.youtube.com/watch?v=3eO2hfBbCy0){:target="_blank"} and then apply the same refactoring to the original source code.

  Once you've finished code refactoring, can you spot any more code smells?

  There's still a lot to be improved.

  <hr style="margin-top: 4rem; margin-bottom: 4rem">

  **4) New requirements!**

  ![](./assets/new.requirements.png)

  The boss came up with some new requirements for the project! 

  Here are the new features you must implement on the refactored code:

  <img src="./assets/System.Overview.button.jpg" style="margin: 0 auto; display: block; border: 2px solid;" />

  The `System Overview` page should look like this:

  <img src="./assets/System.Overview.jpg" style="margin: 0 auto; display: block; border: 2px solid;" />

  As you can see, the boss is kind of a visual guy.

  **Good luck!**

  ---

  > **Questions, comments, suggestions? Please leave them on the comment section below.**

  <script src="https://utteranc.es/client.js"
    repo="in-tech-gration/WDX-180"
    issue-term="pathname"
    theme="github-dark"
    crossorigin="anonymous"
    async>
  </script>

### Sources and Attributions

  - Initial Node.js code: [Alex Kokh](https://github.com/alkozp){:target="_blank"}

<!-- ### Extra Resources -->