# Sli.do Questions

[**Instructions**](./index.md)

---

## Week 06 (Day 01-05)

---

## Week 05 (Day 01-05)

---

## Week 04 (Day 01-05)

---

## Week 03 (Day 01-05)

  Q: Can i rename my new branch after i create it?

  A: Yes, you can.

  ---

  Q: what is git add -A?

  A: it allows for staging all files at once. please, take a few minutes to review this post: https://www.geeksforgeeks.org/difference-between-git-add-a-and-git-add/

  A: Run git add --help to find out about a particular git command.

  ---

  Q: Difference between git push --set-upstream and git push -set-upstream?

  A: Just a typo. The second does not exist

  ---

  Q: Where exactly do we push the file new-feature-list.md?

  A: When not stated explicitly, you should use the root folder of the current week and day, for example: /user/week03/exercises/day01/new-feature-list.md  (edited)  

  A: If it's not a single file (e.g. HTML, CSS, JS) you should create a folder and put the files inside, for example: user/weekXX/exercises/dayXX/exercise_name/*files here

  A: Update: the correct folder structure is user/weekXX/exercises/dayXX/

  ---

  Q: What is the head branch and the base branch?

  A: In the context of a Pull Request: "The `Base Branch` is the branch where your new changes should be applied / integrated into.The `Head Branch` is the branch that contains the changes you want to integrate."

  A: Another description from the docs: "Once you're satisfied with your work, you can open a pull request to merge the changes in the current branch (the head branch) into another branch (the base branch). " ~ https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches#working-with-branches

  ---

  Q: How Repository administrator can add constraints to branches using branch protection rules or repository rulesets to prevent merging from other collaborators?

  A: Start with the Docs: https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches

  A: You can find the relevant settings under: Settings > General > Code and Automation: Branches > Branch Protection Rules

  A: There are certain limitations though, when you are part of the free plan on GitHub, so make sure to check which options that are mentioned in the Docs are actually available in the free plan (vs Business/Enterprise plans)

---

## Week 02 (Day 01-05)

  Q: touch command doesnt work on command line

  A: This question was covered extensively on the Q&A live section: https://www.youtube.com/watch?v=mhUiYaZjEvU&list=PLdo7hJB0agEkkLFrssQCGWnV08Q50X_M0&index=5        

  ---

  Q: Could someone provide me an example how "secure passphrase" should look??

  A: https://www.youtube.com/watch?v=opRMrEfAIiI

  ---

  Q: javascript-first-steps,Largest Number Checker do we have to check for null and equal or not?  (edited)  

  A: It is not required to check for null cases, but it's a good practice! For equality, I guess you can say it's redundant and you can figure out why :D

  ---

  Q: https://youtu.be/mJ-qvsxPHpY?t=622  need git checkout -b main  before push and always use main instead of master as it is changed

  A: Yep, that's a good reminder. Curriculum updated. :)

  ---

  Q: git remote -v may i know what is -v flag stands for

  A: git remote --help provides the A: "--v or --verbose"

  A: "Be a little more verbose and show remote url after name. For promisor remotes, also show which filter (blob:none etc.) are configured. NOTE: This must be placed between remote and subcommand."

  ---

  Q: How can i automate this process or run it from command line? github repo -> sync fork-> update branch 

  A: It can be automated, but a lot of advanced git commands must be executed which might lead to confusion and errors, so stay tuned. :) Automating (the boring stuff) is the way to go, so kudos for the Q. :)

  ---

  Q: Can i use different vscode themes on different types of files?

  A: What did Google come up with?

  ---

  Q: What do we have to write inside a <td></td> to get a number to the power of x? For example, 1000^3?

  A: Hint #1: https://www.wikiwand.com/en/Subscript_and_superscript

  A: Hint #1: https://www.wikiwand.com/en/Subscript_and_superscript

  ---

  Q: how to find the correct color of text in an image?

  A: Microsoft has a great tool of toys as they call them that can do many sorts of thinkgs. They're called PowerToys and includes lots of helpful tools like a color picker that you're looking for. Give them a try and you won't miss! https://learn.microsoft.com/en-us/windows/powertoys/

  A: This might help also: https://developer.chrome.com/docs/devtools/css/color/ For images found on websites or images dragged and dropped in the browser.

  ---

  Q: Computer detects wrong font color because image divided to pixels.

  A: Can you elaborate a bit on this?

  ---

  Q: Can we use git as a command to backup our files with one command?

  A: Yes, that is possible.

  ---

  Q: What type of files are supported by git and is there a size limit for use of a file?

  A: Regarding file size: https://docs.github.com/en/repositories/working-with-files/managing-large-files/about-large-files-on-github Other than that, git can handle almost any file.

  ---

  Q: How can I add multiple collaborators at once from a list?

  A: A quick Google search didn't bring any results. Probably some scripting might help here through their API.

  ---

  Q: How can I ignore folders, files or file types from git tracking them?

  A: Use the .gitignore Luke!

  A: You can also ignore .gitignore

  ---

  Q: Does the input element need a default value attribute and in what cases?

  A: No, it's an optional attribute. Depending on the case of the form you're making, you can use it to fill the value of the input with a predefined one, according to your needs.

  ---

## Week 01 (Day 01)

  **MOVED TO `/curriculum/FAQ/index.md`**

--- 

## Week 01 (Day 02)

  Q: I will need a clear explanation about idempotence in examples.

  _(Source: https://speakerdeck.com/rkh/http-rubymonsters-edition?slide=20)_

  A: Let's go through the process of how we suggest you start your search on a new term, either technical in nature or found in a technical context.

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

  Q: I'm getting a 404 for the curriculum page. What should I do regarding this? https://in-tech-gration.github.io/WDX-180/-

  A: Try removing the - at the end: https://in-tech-gration.github.io/WDX-180/

  Q: Cool. It works. Thanks a bunch! :slightly_smiling_face:

  ---

  Q: We have to stylish only the page "world's first Website"? And in the way as we want or how? 

  A: You can style it as you like. There is no restriction in that. Use what you've learned today and make it look as pleasing as you see fit! 

  ---

  Q: Is there a video you recommend for better understanding VS Code? I'm struggling a bit.

  A: You can definitely check out the official YT playlist: https://www.youtube.com/playlist?list=PLj6YeMhvp2S5UgiQnBfvD7XgOMKs3O_G6

  A: And also share the "struggling" parts with us so we can help. 
  
  ---

  Q: How can i do to see on window10 pro open terminal? I can only Open Git Bash?

  A: Git Bash it just fine. Do you mean, how do you access Git Bash via VSCode?

  Q: But i have visual studio code already in my machine

  A: They wrote only 1.Open Git Bash.
  Paste the text below, substituting in your GitHub email address.

  ---

  Q: What platform we'll be using for class in case I need to download something?

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