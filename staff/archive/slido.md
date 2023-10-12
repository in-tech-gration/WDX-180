# Sli.do Questions

---

## Week 06 (Day 01-05)

---

## Week 05 (Day 01-05)

---

## Week 04 (Day 01-05)

---

## Week 03 (Day 01-05)

---

## Week 02 (Day 01-05)

--- 

## Week 01 (Day 01)

  **MOVED TO `/curriculum/FAQ/index.md`**

--- 

## Week 01 (Day 02)

  QUESTION: I will need a clear explanation about idempotence in examples.

  _(Source: https://speakerdeck.com/rkh/http-rubymonsters-edition?slide=20)_

  ANSWER: Let's go through the process of how we suggest you start your search on a new term, either technical in nature or found in a technical context.

  If the term does not make sense in english or you are unfamiliar with it, we suggest that you start with finding out and understanding its formal definition. You can do that by googling `define [ACTUAL WORD]`, e.g. let's start by searching `define idempotence` (which in turns leads us to `idempotent`)

  [SCREENSHOT](/curriculum/week02/assets/define.idempotent.jpg)

  _*adjective: idempotent*_
  _denoting an element of a set which is unchanged in value when multiplied or otherwise operated on by itself._

  OK. That gives us a clue. Or at least some clue, about what the word is all about in a general context.

  It's also useful sometimes to look at the etymology of the word to better understand its meaning. For example, we see that the word is made up of two words: "idem" (which means the same in Latin) and "potent" which means "having great power, influence or effect". For our purposes, it makes sense to keep the last meaning of potent: "same" + "effect"

  If at this point, things are not clear enough, we jump to Wikipedia which states that:

  _"Idempotence is the property of certain operations in mathematics and computer science whereby **they can be applied multiple times without changing the result beyond the initial application**."_

  That provides even more insight into the meaning of the word.

  To give a more concrete explanation with a programming example:

  Idempotent means that the result of every operation should be same: 

  - If a variable named `i` is equal to `1`, the `i + i` is an *idempotent* operation (shows _idempotence_) since every operation of `1+1` will result in the same unchanged initial result `2`.

  - By contrast, `i++` is *not an idempotent* operation, since every time the operation takes place, `i` will be larger by 1 since the last operation: `2`, `3`, `4` and so forth.

  In the context of HTTP methods, and specifically taken from the presentation...

  _"Idempotent requests:_
  _- The resource state will be the same after performing the request one or multiple times_
  _- HTTP client does not need to ask the user for permission to repeat the request_

  ...idempotent requests have the same outcome no matter how many times they are executed.

  - If we do an `HTTP GET /index.html` request one or 1000 times, we will always get back the same `index.html` file.

  As per the documentation, "The methods GET, HEAD, PUT and DELETE share this property."

  If you want to read a bit more about Idempotency, check out [this article](https://www.mscharhag.com/api-design/http-idempotent-safe).  

## Week 01 (Day 05)

  Q: I need more explanation about Number.isNaN() checks if value is NaN and if the value is a number data Type

  A: The NaN is a value representing Not-A-Number.

  JavaScript developers will be confronted with the `NaN` special value
  through various types of operations as described in the ["There are 5 different types of operations that return NaN"](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN#description) section of the MDN documentation. One example, is when we try to multiply 0 by Infinity:

  `0 * Infinity` => will result in `NaN`

  To tell if a value is `NaN`, we use `Number.isNan()` _(preferred)_ or `isNan()`.

  ```js
  const whatKindOfValue = 0 * Infinity;

  alert( Number.isNaN(whatKindOfValue) ); // true
  alert( Number.isNaN(1) ); // false
  ```

## Week 01 (Day 01-05)

  Q: Is the fork repository supposed to be private or public? (Because l choose private)

  A: The forked repository of WDX-180 should always be public.

  Q: I'm doing the css assignment and can't find the correct index.html file I need. Was this something you guys did in previous classes? I started late so I'm not sure what to do here.

  A :Are you referring to the "Styling the world’s first website" exercise?

  Q: CSS basics

  A: Oh, I see. The index.html refers to a web page that you created during the previous days.

  Q: ah, that would make more sense

  ---

  Q: Sorry, Kosta, one more question. I'm getting a 404 for the curriculum page. What should I do regarding this? https://in-tech-gration.github.io/WDX-180/-

  A: Try removing the - at the end: https://in-tech-gration.github.io/WDX-180/

  Q: Cool. It works. Thanks a bunch! :slightly_smiling_face:

  ---

  Q: I have a question) we have to stylish only the page  "world's first Website"? And in the way as we want or how? 

  A: You can style it as you like. There is no restriction in that. Use what you've learned today and make it look as pleasing as you see fit! 

  ---

  Q: Is there a video you recommend for better understanding VS Code? I'm struggling a bit.

  A: You can definitely check out the official YT playlist: https://www.youtube.com/playlist?list=PLj6YeMhvp2S5UgiQnBfvD7XgOMKs3O_G6

  A: And also share the "struggling" parts with us so we can help. 
  
  ---

  Q: Hello !How can i do to see on window10 pro open terminal ? but i can only Open Git Bash ?Thanks

  A: Hello! Git Bash it just fine. Do you mean, how do you access Git Bash via VSCode?

  Q: But i have visual studio code already in my machine

  A: They wrote only 1.Open Git Bash.
  Paste the text below, substituting in your GitHub email address.

  ---

  Q: Sorry, I forgot to ask what platform we'll be using for class in case I need to download something?

  A: Our main tools are the browser (through which you'll be accessing the curriculum -https://in-tech-gration.github.io/WDX-180/- and study material), our code editor (VSCode) and a few other tools (Node, git, etc.)

  Q: I think I was confused. I meant are you using something like Webex or Google for when lectures are live? Or do we not have live lectures. I forgot to ask earlier today.

  A: We use Google Meet.

  ---

  Q: I'm doing the first exercise in the folder: exercise/1-parent-child and opened index.html, so here we have to make these changes and save or as usual to create copy and then commit and push?

  A: You'll have to copy the files existing in the folder and place them in the corresponding folder inside your user folder.

  For example:

  - Copy all files in folder 1-parent-child.
  - Paste them inside folder user/week01/exercises/day03/1-parent-child/ .
  - Work on the copied files and complete the exercise.
  - Upload to your repo.

  Q: got it thnx)

  ---

  Q: Why did we use git add . instead of git add user/week01/progress/progress.w01.d01.csv?

  A: By using "git add ." you tell Git to add for commit any changes you've made to files inside your current working directory. If the only file you've changed is "user/week01/progress/progress.w01.d01.csv" the two commands that you mention do the exact same thing. When you are sure that you want to add to your next commit any file changed in your current working directory, doing "git add ." is much faster than adding each file changed one by one. Do not forget to check the status of your repo (git status) after every command, just to make sure that there is nothing wrong going on! :)

  ---
  
  Q: Could someone provide me an advice please?:) I don't receive notifications from the slack, I need from time to time to open the app in order to check if some information arrives. But obviously it's not convenient..

  ---

  Q: I have a question regarding VS Code. I don't see any day 04 exercises in my curriculum or user. How do I complete the assignment? The only thing I see under day 04 is README.md

  A: you should create a cern directory under week-1/exercises/day04 structure should be like this user/week01/exercises/day04/cern/ and your html file css and images for assignment goes inside this cern directory

  Q: What is a cern directory? And how do I create it?

  A: it doesn't exist you can create one. If you right click on day04 in options click "New folder" and give it a name "cern" hit "Enter" inside  *cern*  you can create your html and assignment related files.

  A: and also i think you don't need to search anything in curriculum everything related to us students you can find in user directory or https://in-tech-gration.github.io/WDX-180/ curriculum will confuse you.








