---
title: Introduction to JavaScript
---

### Schedule

  - [Study](#study-plan)
  - [Exercises](#exercises)
  - [Extra Resources](#extra-resources)

### Study Plan

  **JavaScript! This is where things really start getting interesting.**

  ![](./assets/js.magician.png)

<!-- WDX:META:PROGRESS:task=Read 'JavaScript Intro' -->
#### JavaScript Intro

  This is a tough section to teach because the needs of the students vary quite widely here. Some of you are programmers from other languages coming here to learn front-end coding. Some of you are totally new to coding and JavaScript will be your first programming language. Just like if you know Spanish already, learning Italian becomes much easier since you take the same concepts and express them with minor variances. This workshop is optimized for those totally new to coding and thus we assume no prior knowledge. If you do know another programming language, we invite you instead to skim this section to familiarize yourself with how JavaScript looks. The next sections will also be aimed at you.

#### What is code?

  A dumb question but its answer may surprise you. Code is for humans first and computers second. You can think of writing code as essentially writing notes on how to solve a particular problem that just happens to be in a way that a computer can understand.

  Wait, why? The why is that you or someone else will have to go back and re-read that code sometime in the future, maybe tomorrow or maybe in ten years (I've worked on code older than 10 years old, it's not fun.) As such, it's important to write code in such a way that it can understood as quickly as is reasonable. Think of it like a textbook: you don't want to read the entire textbook every time you want to review a concept, you want to jump right to the page and learn just the thing you're looking for. Same with code: you want to jump right to the bit of code in question and understand it at a glance without re-reading the whole codebase.

  You will spend far longer maintaining this code than you will writing it the first time. Be explicit. Be deliberate. The point here is not to be clever but to be simple and to communicate clearly. Code is communication.

  Okay, given this, let's frame how this code works then. When you write code, the computer breaks it down into smaller pieces it can understand and then executes those one bit at a time. With JavaScript, only one thing is ever happening at a time (this is called being _single-threaded_ but that is not a term you need to know.) In general, this means it executes line 1, then line 2, then line 3, etc. Let's that in action:

  ```javascript
  const monthlyRent = 500;

  const yearlyRent = monthlyRent * 12;
  console.log(yearlyRent);
  ```

  The first thing that happens above is that we declare a variable, `monthlyRent`. The `const` keyword is how we let JavaScript know we're declaring a variable. Variable names always have to have no spaces in them, which is why we squish the words "monthly rent" together. In order to make this more readable, we use what's called _camel casing_, so-called because the capital letters in the middle make it look like humps on a camel. You can also use other styles of capitalization, there's no rule it must be camel case in JavaScript; everyone just happens to do camel casing in JavaScript.

  Notice the `;` at the end of every line. This semi-colon lets JavaScript know you've completed your thought. Think of this as the period/full-stop of the programming world.

  A variable can be called _almost_ anything. You **can't** use keywords. An example would be `const const = 15`. `const` is a keyword so it can't be used as a variable name. You do want to give your variables good names, even if they end up being long sometimes. Imagine we have a huge file and 200 lines below we see the variable named `monthlyRent`: we'll know instantly what this variable does and we won't have to go try to read other parts of the code to figure it out. Always, always, always use good variable names. Seriously. Put time into it. Naming things is hard and it's a big part of your job.

  Okay, so after line one, I have a variable named `monthlyRent` that I can use as much as I want. In this case, it represents the number of `500` but it also semantically represents monthlyRent. Imagine if I had 1000 lines between where `monthlyRent` is declared and where `yearlyRent` is calculated. I could have just put `500` directly in `yearlyRent` but I don't because I now understand how that's calculated just by reading the code. Use variables. Use them everywhere. It makes your code way easier to read. Also, later, if my monthly rent changes, I can change it to one place and everywhere I reference `monthlyRent` and `yearlyRent` get updated automatically. Powerful stuff.

  Okay, I want to calculate `yearlyRent`. I use the `*` to represent multiplication. I'm also mixing variables and numbers which is just fine. I also could have said `const yearlyRent = monthlyRent * monthsInAYear;` (assuming I put `const monthsInAYear = 12;` somewhere else) too and that would be a good idea. I would argue the two are roughly the same since it's obvious there are 12 months in a year. But you do what you think is most clear. That's your job.

  `console.log(yearlyRent);` is going to print whatever is stored in `yearlyRent` to the JavaScript console. The JavaScript Console is a part of the dev tools. If you need help finding them, [see here][devtools]. We'll explain how it works in a bit but for now, just know that anything you put between the parentheses gets logged out to your JavaScript console.

  Let's get this little snippet working in our browser. Make a new folder (I'll just put it on my desktop) and add an index.html file with the following in it:


  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <title>JavaScript Experiments</title>
    </head>
    <body>
      <h1>JavaScript Experiments!</h1>
      <script src="./experiments.js"></script>
    </body>
  </html>
  ```

  That `script` tag is going to let us load JavaScript code into our HTML page. So make another file in the same folder called `experiments.js` (it really can be called anything as long as the script tag matches it.) Then in the JS file put our code from above:

  ```javascript
  const monthlyRent = 500;

  const yearlyRent = monthlyRent * 12;
  console.log(yearlyRent);
  ```

  Now, if you open your **HTML** file, not the JS file, in your browser and open your console, you should see the number `6000` being printed. Congrats! You just wrote your first code!

---

<!-- WDX:META:PROGRESS:task=Read 'Numbers Strings and Booleans' -->
#### Numbers, Strings and Booleans

  So far we've just dealt with numbers. Let's go further and start working with words and characters. In programming, we refer to these things are strings, as in a string of one-letter characters. An example of this would be

  ```javascript
  const myName = "Brian Holt";
  console.log(myName);
  ```

  You can see I use the " (double quote) to enclose everything I want to be in the string. In JavaScript, you can also use ' (single quote) and ` (backtick) as well to demarcate strings.

  Strings, as you may imagine, are everywhere in programming. We're constantly keeping track of names, addresses, names of products, cities, etc. and thus constantly need strings.

  Let's go further. Strings let you connect them together through string concatenation. If I want to be able to greet someone based on their name, I might have something like this:

  ```javascript
  const firstName = "Brian";
  const lastName = "Holt";

  const sentence = "Hello " + firstName + " " + lastName + "! How are you!?";
  const sentenceWithTemplate = `Hello ${firstName} ${lastName}! How are you!?`;

  console.log(sentence);
  console.log(sentenceWithTemplate);
  ```

  The first way is the old way. We can use the `+` to tell JavaScript to connect two strings. Notice how we have inserted the space between `firstName` and `lastName`. The computer only does exactly what you tell it to do. If you don't insert that space, it doesn't get out there.

  The second line is the new way of doing this. JavaScript got a large update in 2015 and it made things a lot easier. Now you can use the backtick (notice the first uses a double quote) to do template strings. If you do that, anything inside of `${yourVariableHere}` gets output in the string. Cool, right?

  Sometimes you just need a simple true or false. These are where booleans are useful. Something like a light switch's state is best represented by a boolean. A light is either on (true) or off (false). You'd have something like `const lightIsOn = true;`. Useful and you'll see them everywhere.

  Some languages separate integers (whole numbers, like 1, 2, 3, 4, 500, 1000) and floats (1.2, 3.14159, 14.01, etc.) differently but not JavaScript. JavaScript just has one type of number, Number. A number is a number.

---

<!-- WDX:META:PROGRESS:task=Read 'Control Flow' -->
#### Control Flow

  Sometimes I want to modify the flow of how my program works, or in other words, sometimes I only want to run code if some condition is true. This is where `if` statements are very useful. Imagine if we tried this.

  ```javascript
  const skyIsBlue = true;

  if (skyIsBlue) {
    console.log("The sky is blue!");
  } else {
    console.log("The sky is … not blue?");
  }
  ```

  In the above example, the condition inside of the parentheses is evaluated and if it's true, the first block is run and the second is skipped. If it is false, the second block is run and the first block is skipped. Paste that code into your experiments and play with it. You also do not have to have an else block. Okay, let's go further.

  ```javascript
  // if you see three lines, it's just three = in a row, ===. the font just combines them into one big character
  if (2 + 2 === 4) {
    console.log(
      "Oh thank god, the fundamental principles of mathematics still hold true."
    );
  } else {
    console.log("Uh, panic?");
  }
  ```

  You can put any expression (a technical term, means anything you can stick on the right side of an equal sign, we'll explore it more as we go) inside of the if statement. In this case, we are asking, if two plus two is still equal to four. If this is true (I hope so) then again the first block will be run. If not, the second will be.

  Let's talk about `===` for a second. If you use just one `=` in JavaScript, it means **is assigned to**. So when we have `const isBrianCool = true;` you can verbalize that as "The variable isBrianCool is assigned to true". Thus we can't use that inside of the if statement because that's not we mean. We're trying to ask a question, not assign something. We're trying to ask "is two plus two equal to four." Enter the triple equals. Triple equals is the same as asking "is this equal to that." We use the triple equals instead of the double equals because double equals do a lot of funny business that usually we don't want them to do. It does what's called coercion and we'll talk about that below. But in an example `2 == "2"` but it does not `2 === "2"`. String 2 is double equal to number 2 but string 2 is not triple equal to number 2.

  There's also `!==`. This is asking "is this not equal to that". Lastly, you can ask with numbers `>` `>=` `<` `<=` as well to ask if numbers less than or greater than too. For another example:

  ```javascript
  const friendsAtYourParty = 10;

  if (friendsAtYourParty === 0) {
    console.log("Cool, now I have a lot of nachos to myself.");
  } else if (friendsAtYourParty <= 4) {
    console.log("Perfect amount to play some Mario Kart.");
  } else {
    console.log("Wooooo turn on the dance music!");
  }
  ```

  This also demonstrates the `else if` if you have more than just two different conditions.

---

<!-- WDX:META:PROGRESS:task=Read 'Loops: behavior that repeats' -->
#### Loops: behavior that repeats

  In programming, we often times need to repeat part of our code, again and again. This repeating behavior is called a **Loop** in programming lingo.

  The more geeky term for looping _(which you will also encounter again and again in programming manuals)_ is **iteration**.

  - Watch a Microsoft engineer explain loops in the first part of [this video](https://www.youtube.com/embed/G8hfAk4PfOM?si=8N2UnFsPaim5YmTr&amp;start=0&end=109){:target="_blank"} and then move on.  

  ---

  Okay so now what if I want to do one thing multiple times? I could do something like this

  ```javascript
  let friendsAtYourParty = 0;
  friendsAtYourParty = friendsAtYourParty + 1;
  friendsAtYourParty = friendsAtYourParty + 1;
  friendsAtYourParty = friendsAtYourParty + 1;
  friendsAtYourParty = friendsAtYourParty + 1;
  friendsAtYourParty = friendsAtYourParty + 1;
  friendsAtYourParty = friendsAtYourParty + 1;
  friendsAtYourParty = friendsAtYourParty + 1;
  friendsAtYourParty = friendsAtYourParty + 1;
  friendsAtYourParty = friendsAtYourParty + 1;
  friendsAtYourParty = friendsAtYourParty + 1;
  console.log(friendsAtYourParty);
  ```

  That's annoying though. I wish there was a better way. Before we explore that, let's chat about this example a tad more.

  We used `let` instead of `const`. Things that are `const` cannot be reassigned later. In general, I find this to be of minor help but others do not so I leave you to make your own judgment call. In general, one should try to follow the "principle of least power." You should always choose the least powerful "thing" to accomplish whatever you're trying to do. Things with less power tend to be simpler and simple things are less prone to having or causing bugs. Why don't you cut your hair with garden shears? You could, it'd work, but it's way easier to screw it up and has worse consequences. The same general idea is here. The right tool for the right job.

  We instead use `let` here because you can see on the subsequent lines we do reassign `friendsAtYourParty` to be a different number. If you used `const` your code would crash because `const` won't let you do that. Thus here we use `let`. There's another one called `var` that is the old way of doing JavaScript. There are differences but I don't see a reason to use `var` at all anymore. It behaves more similarly to `let`.

  Okay, so, we want to do this better, let's explore a few ways to do that using loops.

  ```javascript
  let friendsAtYourParty = 0;
  while (friendsAtYourParty < 10) {
    friendsAtYourParty = friendsAtYourParty + 1;
  }
  console.log(friendsAtYourParty);
  ```

  This is a while loop. The first part works similarly to an `if` statement: as long as what's inside that statement is **true** it will continue running and re-running the body (what's between the `{ }`) until that statement is false. Once that statement is false, it'll break the loop and continue on. In this case, we add 1 to `friendsAtYourParty` until it's 10, and then the next loop, when it's 10, it'll stop because 10 is not less than 10.

  Also, let's just show you a few shortcuts for adding one to a thing

  ```javascript
  let friendsAtYourParty = 0;
  friendsAtYourParty = friendsAtYourParty + 1;
  friendsAtYourParty += 1;
  friendsAtYourParty++;
  ++friendsAtYourParty;
  console.log(friendsAtYourParty);
  ```

  Those four lines are equivalent. They all do the exact same thing: they add one to the existing total. The second one, the plus-equals line, you can put any number there and it'll add that amount to the total, so `friendsAtYourParty += 15;` would add 15 to the total. It also works with `-=` (subtraction,) as well as `*=` (multiplication,) `/=` (division,) and `**=` (exponent.) Two last two lines (`++` before or after) just signify add one. They more-or-less mean the same thing (there's a subtle difference of _when_ it adds one that should never matter to you) but suffice it to say everyone in the JavaScript community _always_ does the `++` after; I've never seen anyone do it before in JavaScript. `--` Works as well to subtract one as well.

  Okay, so now let's see a second kind of loop to achieve the same effect as above.

  ```javascript
  let friendsAtYourParty = 0;
  for (let i = 0; i <= 10; i++) {
    friendsAtYourParty++;
  }
  console.log(friendsAtYourParty);
  ```

  [![](./assets/nikkisiapno.for.loop.jpeg)](./assets/nikkisiapno.for.loop.jpeg){:target="_blank"}

  This is a for loop which is likely the most common kind of loop. Inside the parentheses are three statements and you need all of them. The `let i = 0;` is you defining your control variable that will control the loop. For some reason, people always use `i`, not sure why. It's just that way. It really could be anything. The second statement `i <= 10` is just like the while loop, is that's the statement that as soon as it's false it breaks the loop. The last statement, `i++` happens at the end of every loop. In our case, we increment the control variable `i` so that it creeps closer to the end of the loop each time.

  An important note: in coding, we start counting from 0. In English, we count `1, 2, 3, 4, 5, etc.` but in coding, we count `0, 1, 2, 3, 4, etc.`. So the fifth element of a string is index 4 (where index is how we'd refer to where that item is in the string). Index 0 is the first element. It's weird but you get used to it and it makes a lot of things easier.

  Sometimes, if you mess up what's inside the control condition for the loop, you'll get a runaway loop that'll never complete. This is called an **infinite loop** and it'll lock up and crash your code. Something like this:

  ```display-javascript
  let friendsAtYourParty = 1;
  while (friendsAtYourParty > 0) {
    friendsAtYourParty = friendsAtYourParty + 1;
  }
  console.log(friendsAtYourParty);
  ```

  Since you're adding one to `friendsAtYourParty` each time, and the loop will continue each time until it's less than zero, that condition will never happen. Thus it'll continue going until it crashes your code. Be careful of these. Nasty bugs.

### Summary

### Exercises

  The following exercises are just to get you to flex your newly-gained muscles a bit. This code itself wouldn't be super useful but it'll be useful for you to try to take an idea in words and translate that into workable code.

#### Task 1: Booleans in JavaScript

  <!-- WDX:META:PROGRESS:task=Complete the exercise 'Booleans in JavaScript'|user_folder=task_1 -->
  <!-- WDX:META:TESTS:name=Test Exercise: 'Booleans in JavaScript'|type=exist|user_folder=task_1|files=booleans.js,booleans.html -->
  In this task, we want you to load the [booleans.js file](./exercises/booleans.js){:target="_blank"} from an HTML named `booleans.html` and complete the challenges found inside. 

#### Task 2: Creating Variables

  <!-- WDX:META:PROGRESS:task=Complete the exercise 'Creating Variables'|user_folder=task_2 -->
  <!-- WDX:META:TESTS:name=Test Exercise: 'Creating Variables'|type=exist|user_folder=task_2|files=creating-variables.js,creating-variables.html -->
  In this task, we want you to load the [creating-variables.js file](./exercises/creating-variables.js){:target="_blank"} from an HTML named `creating-variables.html` and complete the challenges found inside. 

#### Task 3: JavaScript Numbers

  <!-- WDX:META:PROGRESS:task=Complete the exercise 'JavaScript Number'|user_folder=task_3 -->
  <!-- WDX:META:TESTS:name=Test Exercise: 'JavaScript Number'|type=exist|user_folder=task_3|files=numbers.js,numbers.html -->
  In this task, we want you to load the [numbers.js file](./exercises/numbers.js){:target="_blank"} from an HTML named `numbers.html` and complete the challenges found inside. 

#### Task 4: JavaScript Strings

  <!-- WDX:META:PROGRESS:task=Complete the exercise 'JavaScript Strings'|user_folder=task_4 -->
  <!-- WDX:META:TESTS:name=Test Exercise: 'JavaScript Strings'|type=exist|user_folder=task_4|files=strings.js,strings.html -->
  In this task, we want you to load the [strings.js file](./exercises/strings.js){:target="_blank"} from an HTML named `strings.html` and complete the challenges found inside.

#### Task 5: JavaScript Variables

  <!-- WDX:META:PROGRESS:task=Complete the exercise 'JavaScript Variables'|user_folder=task_5 -->
  <!-- WDX:META:TESTS:name=Test Exercise: 'JavaScript Variables'|type=exist|user_folder=task_5|files=variables.js,variables.html -->
  In this task, we want you to load the [variables.js](./exercises/variables.js){:target="_blank"} from an HTML named `variables.html` and complete the challenges found inside.

#### Task 6: JavaScript Loops

  <!-- WDX:META:PROGRESS:task=Complete the exercise 'JavaScript Loops'|user_folder=task_6 -->
  <!-- WDX:META:TESTS:name=Test Exercise: 'JavaScript Loops'|type=exist|user_folder=task_6|files=loops.js,loops.html -->
  In this task, we want you to load the [loops.js](./exercises/loops.js){:target="_blank"} from an HTML named `loops.html` and complete the challenges found inside.

### Extra Resources

### Sources and Attributions

  **Content is based on the following sources:**

  - [Intro](https://github.com/btholt/complete-intro-to-web-dev-v3/blob/main/lessons/04-javascript/A-intro.md){:target="_blank"} [(Permalink)](https://github.com/btholt/complete-intro-to-web-dev-v3/blob/a46a32bb9d641523163d74c28340ec686c5be2f9/lessons/04-javascript/A-intro.md){:target="_blank"}

  - [Numbers, Strings and Booleans](https://github.com/btholt/complete-intro-to-web-dev-v3/blob/main/lessons/04-javascript/B-numbers-strings-and-booleans.md){:target="_blank"} [(Permalink)](https://github.com/btholt/complete-intro-to-web-dev-v3/blob/a46a32bb9d641523163d74c28340ec686c5be2f9/lessons/04-javascript/B-numbers-strings-and-booleans.md){:target="_blank"}

  - [Control Flow](https://github.com/btholt/complete-intro-to-web-dev-v3/blob/main/lessons/04-javascript/C-control-flow.md){:target="_blank"} [(Permalink)](https://github.com/btholt/complete-intro-to-web-dev-v3/blob/a46a32bb9d641523163d74c28340ec686c5be2f9/lessons/04-javascript/C-control-flow.md){:target="_blank"}

  - [Loops](https://github.com/btholt/complete-intro-to-web-dev-v3/blob/main/lessons/04-javascript/D-loops.md){:target="_blank"} [(Permalink)](https://github.com/btholt/complete-intro-to-web-dev-v3/blob/a46a32bb9d641523163d74c28340ec686c5be2f9/lessons/04-javascript/D-loops.md){:target="_blank"}

  - [Experiment exercise](https://github.com/btholt/complete-intro-to-web-dev-v3/blob/main/lessons/04-javascript/E-exercise.md){:target="_blank"} [(Permalink)](https://github.com/btholt/complete-intro-to-web-dev-v3/blob/a46a32bb9d641523163d74c28340ec686c5be2f9/lessons/04-javascript/E-exercise.md){:target="_blank"}

  Please do not forget to ⭐ the [repo](https://github.com/btholt/complete-intro-to-web-dev-v3){:target="_blank"}!

  **Tasks 1 through 4 are based on the following sources:**

  - [TeachMeJavaScriptLikeIm5 booleans](https://github.com/inspirezonetech/TeachMeJavaScriptLikeIm5/blob/main/2-variables/booleans.js){:target="_blank"} [(Permalink)](https://github.com/inspirezonetech/TeachMeJavaScriptLikeIm5/blob/bcbe160a29718c0eb832fbf7af113b896ff06deb/2-variables/booleans.js){:target="_blank"}

  - [TeachMeJavaScriptLikeIm5 creating-variables](https://github.com/inspirezonetech/TeachMeJavaScriptLikeIm5/blob/main/2-variables/creating-variables.js){:target="_blank"} [(Permalink)](https://github.com/inspirezonetech/TeachMeJavaScriptLikeIm5/blob/bcbe160a29718c0eb832fbf7af113b896ff06deb/2-variables/creating-variables.js){:target="_blank"}

  - [TeachMeJavaScriptLikeIm5 numbers](https://github.com/inspirezonetech/TeachMeJavaScriptLikeIm5/blob/main/2-variables/numbers.js){:target="_blank"} [(Permalink)](https://github.com/inspirezonetech/TeachMeJavaScriptLikeIm5/blob/bcbe160a29718c0eb832fbf7af113b896ff06deb/2-variables/numbers.js){:target="_blank"}

  - [TeachMeJavaScriptLikeIm5 strings](https://github.com/inspirezonetech/TeachMeJavaScriptLikeIm5/blob/main/2-variables/strings.js){:target="_blank"} [(Permalink)](https://github.com/inspirezonetech/TeachMeJavaScriptLikeIm5/blob/bcbe160a29718c0eb832fbf7af113b896ff06deb/2-variables/strings.js){:target="_blank"}

  Please do not forget to ⭐ the [repo](https://github.com/inspirezonetech/TeachMeJavaScriptLikeIm5){:target="_blank"}!