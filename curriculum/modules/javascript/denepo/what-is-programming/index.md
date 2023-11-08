---
title: What is Programming?
---

### Schedule

  - [Study](#study-plan-NN)
  - [Exercises](#exercises-NN)
  - [Extra Resources](#extra-resources-NN)

### Study Plan

<!-- WDX:META:PROGRESS:task=Read 'What is programming?' -->
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

<!-- WDX:META:PROGRESS:task=Read 'JavaScript' -->
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
    libraries and frameworks. Some popular ones are [Repl.it](https://repl.it/){:target="_blank"},
    [CodeSandbox](https://codesandbox.io/){:target="_blank"},
    [Codespaces](https://github.com/features/codespaces){:target="_blank"} or
    [Glitch](https://glitch.com/){:target="_blank"}.

  - **Online Learning Environments**: There are also many online programming
    environments online designed for beginners that simplify the developer
    experience and allow you to focus on learning the basics without getting
    distracted by advanced features. Many of these come with built-in graphics
    libraries or support for game development. These include
    [code.org](https://code.org/){:target="_blank"} (develop and play games with JS),
    [editor.p5js.org](https://editor.p5js.org/){:target="_blank"} (create interactive artwork),
    [PencilCode](https://pencilcode.net/edit/myprogram){:target="_blank"} (write your code as blocks
    or text), [Ocelot](https://code.ocelot-ide.org/){:target="_blank"} (disallows "bad" language
    features and has helpful error messages).

  ---

  **5. Beyond the Browser**

  You can also use JavaScript outside of the browser to create web servers,
  develop mobile apps, program a
  [Raspberry Pi](https://www.w3schools.com/nodejs/nodejs_raspberrypi.asp){:target="_blank"}, program
  IOT (Internet of Things) Devices, and much more.

  [Node.js](https://nodejs.org/) is the most popular non-browser runtime for
  JavaScript. [Deno](https://deno.land/){:target="_blank"} is a newer runtime developed as a more
  secure and developer-friendly alternative to Node.js.

  ---

  **References**

  - [javascript.info/intro](https://javascript.info/intro){:target="_blank"}
  - [The Net Ninja](https://www.youtube.com/watch?v=VB7y0yxZjro){:target="_blank"}
  - [MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript){:target="_blank"}
  - [Andrew Mosh](https://www.youtube.com/watch?v=W6NZfCO5SIk){:target="_blank"} \(first 5 minutes\)
  - [Code School](https://www.youtube.com/watch?v=nItSSTwBvSU){:target="_blank"}
  - [MDN: First Steps](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript){:target="_blank"}
  - [javascript.info](https://javascript.info/intro){:target="_blank"}
  - [Danielle Thé](https://www.youtube.com/watch?v=gT0Lh1eYk78){:target="_blank"}

  ---

  **Programs: Source Code**

  JavaScript is the language used to write the Source Code in this diagram:

  [![program diagram](./assets/a-program.png)](https://excalidraw.com/#json=_cj6JYwuO38PPGKxXN_cQ,3910Z7e2jGLZu4vjueG-Bg)

<!-- WDX:META:PROGRESS:task=Read 'Some History' -->
#### Some History

  JavaScript has an interesting history, it was originally created in 1 week
  during 1995 by Brendan Eich and since then has gone through many many changes.

  At first it was just a small language used for small interactions in web pages.
  Over the years as the internet has grown and browsers have become more powerful,
  JavaScript has evolved from a small language for small interactions to a huge
  programming language capable of building complex applications.

  As JavaScript grew, so did the number of developers who use it. All these
  developers pushed the limits of JavaScript, created new tooling, different
  conventions, and generally made the JS ecosystem a fascinating (and
  frustrating!) place to work. This human history of JavaScript is what makes it
  so interesting.

  - [simplilearn](https://www.youtube.com/watch?v=6ENWOVc-64c){:target="_blank"}
  - [wierd history of js](https://dev.to/codediodeio/the-weird-history-of-javascript-2bnb){:target="_blank"}
  - [from Brendan Eich himself](https://www.youtube.com/watch?v=3-9fnjzmXWA){:target="_blank"}
  - [springboard](https://www.springboard.com/blog/data-science/history-of-javascript/){:target="_blank"}

  **Backwards Compatibility**

  > or "don’t break the internet!”

  An important concept for understanding the JavaScript language is "**Backwards
  Compatibility**". Backwards Compatibility means that any program ever written in
  JavaScript must _always_ work!

  Any time something is added to JavaScript or the language is changed in any way,
  older programs must still be valid JavaScript. This is important because people
  have been websites for decades now. It would be bad if one day every website
  written before 2003 no longer worked because of a recent change in JavaScript.

  Imagine if every word, sentence, and grammar in your native language's history
  needed to be understood by every native speaker for the rest of eternity! You
  would need to be just as comfortable reading a story written 4000 years ago as
  one written yesterday. This would make it very hard for languages to change and
  grow, but this is the case for JavaScript.

  - [You Don't Know JS](https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/get-started/ch1.md#backwards--forwards){:target="_blank"}
  - [Why is JavaScript backwards compatible to a fault?](https://stackoverflow.com/questions/4937245/why-is-javascript-backwards-compatible-to-a-fault){:target="_blank"}
  - [edytawrobel](https://www.edytawrobel.com/js-compatibility/){:target="_blank"}
  - [tonsky.me](https://tonsky.me/blog/compatibility/){:target="_blank"}
  - [rohitdhatrak](https://www.rohitdhatrak.com/backwards-forwards-compatibility/){:target="_blank"}
  - [Chrome Breaks the Web](https://www.theregister.com/2021/10/04/chrome_breaks_web/){:target="_blank"}

  **ES6rohitdhatrak**

  ES6 was a new version of JavaScript released in 2015, it contained major changes
  to the language that improved the developer experience. ES6 marked such a large
  change in JavaScript that it's fair to talk about the JS world before ES6 and
  after ES6 as different eras.

  You can learn more about ES6 another time, for now you just need to know it was
  such a big improvement that it belongs in every history of JS.

  **The Future of JavaScript**

  All new features for the JavaScript language are presented and discussed in the
  [tc39 github organization](https://github.com/tc39){:target="_blank"}. If you're curious looking
  through the [proposals repository](https://github.com/tc39/proposals){:target="_blank"} can be
  interesting to see how people plan and discuss additions to the JS language.

<!-- WDX:META:PROGRESS:task=Read 'Developers' -->
#### Developers

  Developers are the ones designing the software, writing the code, and fixing the
  bugs. As a developer you'll spend lots of time reading source code. So it's very
  important to make sure your code is easy to understand.

  You should think first of other developers who will need to understand your
  program, and second of yourself. Why is this more productive? First because
  working on a team is easier when everyone is looking out for each other. Second
  because one day you'll be someone else! After even half an hour your thoughts
  about a program are no longer fresh, you'll need to rely on what you wrote to
  figure out the details of your own program.

  ---

  **Programs: Developers**

  Users and on the left in this diagram, developers are on the right.

  - **For Developers**
    - **Static**: Comments, variable names and code formatting help developers
      read and understand source code.
    - **Dynamic**: Logs and error messages help developers understand what is
      happening inside the computer as it follows the code's instructions.
  <!-- TODO: Maybe this has to be removed. -->
  [![program diagram](./assets/a-program.png)](https://excalidraw.com/#json=40qMI89WByj9Yhhh94Ghg,4zpL-AmDgpnbyFJWJfNQhg)

<!-- WDX:META:PROGRESS:task=Read 'The Computer' -->
#### The Computer

  You've been the user of many websites, you've even developed a few with HTML &
  CSS, but you haven't had to _be the computer_ yet. With HTML & CSS it's enough
  to learn what goes in and what comes out, you don't need to know what happens in
  between:

  - HTML/CSS goes into a browser -> ... ? ... -> a website is displayed

  With JavaScript it's the complete opposite. What the program _does_ (inputs ->
  outputs) is less important than _how it happens_. Your goal now isn't to amaze
  the user, it's to become the computer and understand what happens between the
  input and the output:

  - source code -> **a lot of important steps** -> final output

  **Computer Empathy**

  A program is just a series of instructions. If you follow the instructions
  _exactly_ like the computer would, you are actually running the program by hand!
  (just a lot slower.) There is no difference in theory between you following the
  code's instructions and a computer following the same instructions.

  So when you practice tracing think of it as building your _computer empathy_:
  understanding what it's like to be the computer as it runs your program. If the
  first rule in design is "know your user", then one of the first rule in coding
  should be "know your computer". After all, the computer is one of your code's
  users!

  **Predict, not Explain**

  So what does it mean to "know JavaScript"? How do you know when you've
  understood some code? When you can **predict** _exactly_ what will happen at
  each step of execution!

  Explaining a program in plain english is helpful but it's easy to be a little
  bit wrong and not know it. When you focus on _predicting_ what happens at each
  step and you check your predictions with a trace or JS Tutor, then you really
  know if you understood.

  This approach is also helpful because not only will you know if you're right,
  but if you're wrong the computer will tell you the right answer! Then you know
  exactly which line you didn't understand, and you know what to study next.

  ---

  **Programs: The Computer**

  The computer is in the center of this diagram. It interpreting the developers
  source code, processing the user's data, and logging information for the
  developer.

  Tracing code is a very good way to begin understanding how the computer follows
  your instructions one step at a time:
  <!-- TODO: Maybe this has to be removed. -->
  [![program diagram](./assets/a-program.png)](https://excalidraw.com/#json=_cj6JYwuO38PPGKxXN_cQ,3910Z7e2jGLZu4vjueG-Bg)

<!-- WDX:META:PROGRESS:task=Read 'Users' -->
#### Users

  Users will use your running programs, but will never see your source code. When
  writing for a user you need to think of their needs and their experience using
  your program.

  For now the user experience of your programs will be limited to pop-up boxes,
  but that doesn't mean you can't think of UX (User Experience). A user always
  appreciates  clear instructions, helpful feedback and a friendly tone in your
  messages.

  How does thinking of a user help you write code that they will never see? It's
  about keeping the big picture in mind and making priorities. It's easy to get
  caught up in the details of your code, taking a step back to remember who you're
  developing for and why they need this program keeps your priorities in
  perspective.

  ---

  **Programs: Users**

  Users and on the left in this diagram, developers are on the right.

  - **For Users**
    - **Inputting Data**: `prompt` is a simple way for users to input data to a
      JavaScript program.
    - **Outputting Data**: `alert` is a simple way for the computer to display
      data to a user.
  <!-- TODO: Maybe this has to be removed. -->
  [![program diagram](./assets/a-program.png)](https://excalidraw.com/#json=40qMI89WByj9Yhhh94Ghg,4zpL-AmDgpnbyFJWJfNQhg)

<!-- WDX:META:PROGRESS:task=Read 'Data In Data Out: I/O' -->
#### Data In, Data Out: I/O

  So what is a program? It's something like this:

  ![program diagram](./assets/a-program.png)

  The basic job of a computer program is to process data. Even the most beautiful
  and interactive programs are just processing data behind the scenes. One of the
  biggest tricks to programming is figuring out how to _model_ your problem using
  data so computer can help you solve the problem.

  The programs you'll be studying in this module are focused on processing _text
  data_ ("strings" in JavaScript). This is a good place to start because you are
  already used to reading and working with text so it shouldn't be too hard to
  understand what's happening inside the computer:

  1. The user inputs some text data into a pop-up.
  2. The program processes the data. (_tracing_!)
  3. Some new data is displayed to the user in a pop-up.

  Later on you'll learn how to make better user interfaces than just a pop-up, but
  the main idea will remain the same: The user interface is just a human-friendly
  way for the user to interact with your program, the actual program is running
  behind the scenes processing their data and producing new data.

  ---

  **JavaScript Strings**

  What is data? In the simplest sense, data is just information. This information
  can be represented or stored in many different ways. JavaScript has several data
  types, the one that matters most for now are _strings_. Strings are how
  JavaScript stores and manipulates text:

  ```js
  'use strict';

  // strings are any text wrapped in quotation marks

  console.log('this is a string');

  // you can check type of some data using `typeof`
  //  you'll learn a lot more about this later
  //  for now just know that it's possible
  console.log(typeof 'hello'); // "string"
  console.log(typeof 5); // "number"
  console.log(typeof '5'); // "string

  // you can find the length of a string with `.length`
  console.log('abc'.length); // 3
  console.log('ab'.length); // 2
  console.log('a'.length); // 1
  console.log(''.length); // 0

  // string concatenation:
  //  you can combine two strings using concatenation
  console.log('a' + 'b' + 'c'); // 'abc'
  ```

  You don't need to understand very much about JavaScript types for now, just that
  the programs in this folder are all processing _text data_ represented in
  JavaScript by _strings_.

  ---

  **Programs to Study**

  A very important skill to learn as a programmer is not being afraid of code you
  don't understand. There is always _something_ you can understand and there is
  always a way to understand the rest. You aren't expected understand all the
  syntax in this folder just yet.

  Instead focus on what you _can_ understand about each program at a higher level,
  like in the diagram at the top of this README. For all of these examples and
  exercises try running the program many times inputting different data and seeing
  what comes out.

  Practice explaining what is happening in each program using these terms:

  - **Program Behavior**: You can answer these questions just by comparing inputs
    and outputs! You don't need to read a single line of code:
    - What does the program do?
    - What happens to the user data, how is it transformed or processed in the
      program?
  - **Data In**: What data does the program expect? Try to say this in a normal
    human sentence.
  - **Data Out**: What data does the program expect? Try to say this in a normal
    human sentence.
  - **Test Cases**: Specific examples of data that goes in and the data that comes
    out.

  <!-- TODO: Maybe this has to be removed. -->
  In the `/examples` folder you will find a few programs with a comment describing
  the **behavior**, **data in** and **data out**. Your challenge in `/exericses`
  is to fill in the same information for new programs.

  Be _very careful_ about your formatting! Study the example comments closely and
  do your best to format yours _exactly_ the same:

  ```js
  'use strict';

  /* Program Title

    Description of program's behavior.

    Data In:
      Describe the data that goes in.

    Data Out:
      Describe the data that comes out.

    Test Cases:
      'an example input' -> 'the matching output'
      'another input' -> 'the other output'
      ...

  */

  // ... the rest of the code
  ```

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
