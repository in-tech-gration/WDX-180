---
title: What is Programming?
---

### Schedule

  - [Study](#study-plan-NN)
  - [Exercises](#exercises-NN)
  - [Extra Resources](#extra-resources-NN)

### Study Plan

#### What is Programming?

  Programming is communication. It's also a lot of other things, but this
  introduction will focus on the different ways you communicate with your code.

  When you write code you are really just writing a text document, exactly like
  you might write an email or a note. The biggest difference between an email and a computer program is _who you are writing for_.

  When you write an email you're writing for the person who will be reading it.
  When you write a computer program you are writing for 3 very different audiences at the same time! One single document (your code) needs to be understandable to:

  - **Developers**: A developer needs to read your code and understand what you
    were trying to do and why.
  - **Computers**: Your code needs to have _perfect_ syntax so the computer can
    parse it, and you must write instructions that are allowed by the programming language or the computer will throw an error.
  - **Users**: The instructions you give to the computer must create an intuitive and pleasant experience for the user.

  Being a developer means understanding how all these characters interact, and
  then communicating with everyone involved to deliver quality software within
  your project's constraints. This diagram shows the different channels of
  communication in a software project:

  ![rhetorical situation](./assets/the-big-picture.png)

  ---

  **Programming Languages**

  High-level programming languages like JavaScript are a compromise between how
  people think and how a computer works. Programming languages are not always easy for people to learn but they're definitely easier than directly telling a
  computer what to do (writing 1's and 0's).

  Because humans are so much better at learning and understanding than computers
  are (for now), programming languages have been designed to leave all the hard
  work for us. It's our job to make sure our instructions for the computer are
  perfectly structured and do exactly what we want. The computer just _parses_
  (interprets) our code and follows the instructions without any understanding or thinking.

  You can think of a programming language as the developer's UI for the computer.
  Because this UI isn't very intuitive you will need to spend a lot of time
  studying syntax and other details before you can program with ease. This is why you will be focusing on _understanding_ programs before writing them.

  [**_Learnable Programming_**](http://worrydream.com/LearnableProgramming/){:target="_blank"} said it best:

  > - **Programming is a way of thinking, not a rote skill**. Learning about "for"
  >   loops is not learning to program, any more than learning about pencils is
  >   learning to draw.
  > - **People understand what they can see**. If a programmer cannot see what a
  >   program is doing, she can't understand it.
  >
  > Thus, the goals of a programming system should be:
  >
  > - to support and encourage powerful ways of thinking
  > - to enable programmers to see and understand the execution of their programs
  >
  > ...
  >
  > _How do we get people to understand programming?_
  >
  > We change programming. We turn it into something that's understandable by
  > people.

  Until the future when computers are designed to understand us, we're stuck with programming systems where we do the hard work of understanding computers. 
  
  Hopefully these Modules can make this journey easier.

  ---

#### JavaScript

  JavaScript is the only programming language supported by web browsers, this
  makes is a very common language. Every website that needs interactivity uses
  JavaScript alongside HTML & CSS. Because people across the world with all levels
  of programming experience are writing web pages, JavaScript has become something
  like the English of programming languages:

  - It's everywhere, most developers will know at least a little bit of
    JavaScript.
  - It's a messy and complicated language, full of exceptions and concepts
    borrowed from other languages.
  - It's easy enough to get started with the basics, and without too much
    experience you can already get your ideas across.

  So why learn JavaScript? Because it's quick to get started, you can do a lot
  with it, and there's lots of work for a good JavaScript developer.

**Running JavaScript**

There are many ways you can run JavaScript, for now you should know about these
options:

---

**1. Writing directly in the console**

> This is closest to how you will be studying JS in this module.

Writing JS in your browser's console is the simplest and quickest way to run
some JavaScript, but is limited. It's perfect for doing little experiments to
see how something works, but it's not possible to write and save a full program.

<details>
<summary>Try copy-pasting this code into your browser's console and pressing "enter"</summary>
<br>

```js
/* --- for the computer --- */
'use strict';

/* --- for the developer --- */

// log to the console for developers to read
console.log('hello developer (console)');

/* --- for the user --- */

// alert hello for the user
//  not a great UX, but easy to program
//  you'll use this for now
alert('hello user (alert)');
```

</details>

---

**2. Writing directly in an HTML file**

You can also write your code in a script tag of an HTML file then open the HTML
file in your browser. The JavaScript will run automatically when the page is
loaded. See this in action with [`./assets/1-inline-script-tag.html`](./assets/1-inline-script-tag.html).

<!-- TODO: The ./assets above pointing to a folder containing code, should be managed in some way, e.g. redirect to GitHub or local repo, display them inline or through a viewer (Flems/Codesandbox/other)  -->

You will learn about this later in the course for examples and exercises that
introduce how JavaScript interacts with the DOM. It's easier to understand "the
big picture" when you can see everything in one document.

---

**3. Loading JS files into HTML**

You can also write your code in a separate `.js` file, then load the file into
your HTML to execute the code. There are two different ways you can load a `.js`
file into your HTML, you can see them in action with [`./assets/2-separate-script-file/index.html`](./assets/2-separate-script-file/index.html) and
[`./assets/3-separate-module-files/index.html`](./assets/3-separate-module-files/index.html) (you'll learn more about scripts vs. modules later on).
<!-- TODO: Same as above... -->


<!-- TODO: INTEGRATE: https://stackoverflow.com/a/53821485/4861760 -->

You will use this for larger projects and for collaboration. Separating code
into smaller files each with a clear purpose makes your code base easier to
understand, debug, and to divide into group tasks.

---

**4. Specialized Browser Environments**

There are also many specialized environments for writing and running JavaScript
in a browser, each one has a specific use case:

<!-- TODO: ADD LINK to online study-lenses or local npm script -->
- **Study Lenses**: This is an environment specialized for studying JavaScript
  locally with your text editor and a browser. It has features for understanding
  different aspects of code and for visualizing what happens during execution.
  The "run" and "debug" buttons in Study Lenses execute your code directly in
  the browser just like if you loaded a script into an HTML file. This will help
  you learn your browser's DevTools and help you eventually transition away from
  the learning environment and towards professional devtools. (_the material in
  this repo is written for Study Lenses_)

- **Online IDEs**: There are many online IDEs (Integrated Development
  Environments) designed for easy setup, collaboration, and sharing. Online IDEs
  try to match the developer experience of working on your local machine, but
  online. These are easy to use, but they're not beginner toys! You can use
  these to develop full projects with a wide variety of programming languages,
  libraries and frameworks. Some popular ones are [Repl.it](https://repl.it/),
  [CodeSandbox](https://codesandbox.io/),
  [Codespaces](https://github.com/features/codespaces) or
  [Glitch](https://glitch.com/).

- **Online Learning Environments**: There are also many online programming
  environments online designed for beginners that simplify the developer
  experience and allow you to focus on learning the basics without getting
  distracted by advanced features. Many of these come with built-in graphics
  libraries or support for game development. These include
  [code.org](https://code.org/) (develop and play games with JS),
  [editor.p5js.org](https://editor.p5js.org/) (create interactive artwork),
  [PencilCode](https://pencilcode.net/edit/myprogram) (write your code as blocks
  or text), [Ocelot](https://code.ocelot-ide.org/) (disallows "bad" language
  features and has helpful error messages).

---

### 5. Beyond the Browser

You can also use JavaScript outside of the browser to create web servers,
develop mobile apps, program a
[Raspberry Pi](https://www.w3schools.com/nodejs/nodejs_raspberrypi.asp), program
IOT (Internet of Things) Devices, and much more.

[Node.js](https://nodejs.org/) is the most popular non-browser runtime for
JavaScript. [Deno](https://deno.land/) is a newer runtime developed as a more
secure and developer-friendly alternative to Node.js.

---

## References

- [javascript.info/intro](https://javascript.info/intro)
- [The Net Ninja](https://www.youtube.com/watch?v=VB7y0yxZjro)
- [MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript)
- [Andrew Mosh](https://www.youtube.com/watch?v=W6NZfCO5SIk) \(first 5 minutes\)
- [Code School](https://www.youtube.com/watch?v=nItSSTwBvSU)
- [MDN: First Steps](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript)
- [javascript.info](https://javascript.info/intro)
- [Danielle Thé](https://www.youtube.com/watch?v=gT0Lh1eYk78)

---

## Programs: Source Code

JavaScript is the language used to write the Source Code in this diagram:

[![program diagram](./assets/a-program.png)](https://excalidraw.com/#json=_cj6JYwuO38PPGKxXN_cQ,3910Z7e2jGLZu4vjueG-Bg)


### Summary

### Exercises

### Extra Resources

### Sources and Attributions

  - **DeNepo**:
    - [What is Programming](https://github.com/in-tech-gration/welcome-to-js/tree/main/1-what-is-programming) [(Permalink)](https://github.com/in-tech-gration/welcome-to-js/tree/9239360311e64cb81658105b674c7fdfec97bed8/1-what-is-programming)
  
  - [CodeCademy](https://www.codecademy.com/articles/what-is-programming)
  
  - [Khan Academy](https://www.khanacademy.org/computing/computer-programming/programming/intro-to-programming/v/programming-intro)
  
  - [The Coding Train](https://www.youtube.com/watch?v=AImF__7FyzM)
  
  - [Practical Introduction to JS](https://shawnr.gitbooks.io/practical-introduction-to-javascript/content/what-is-programming/)
