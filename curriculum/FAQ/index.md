---
load_script_js: 
  - setup_faq.js
  - animated.bubbles.js
  - libs/fuse-6.6.2.js
  # Using CDN version: https://cdn.jsdelivr.net/npm/fuse.js@6.6.2
  - libs/tagify-4.17.9.js
  - libs/tagify-4.17.9.polyfills.min.js
load_css:
  - libs/tagify.min.css
---

# Setup Process FAQ

**Do you feel that there's something missing from this FAQ? Please [let us know](https://github.com/in-tech-gration/WDX-180/discussions/categories/q-a)**

---

**Q: Do I need a particular type of operating system for WDX180?**

> A: No, you can go through the course with any kind of OS (Windows, Linux, MacOS)

---

Q: **I try to use npm install but i get prompted that the term is not recognized** 

> A: In order to run npm, you need to have node.js installed: [https://nodejs.org/en](https://nodejs.org/en) (Prefer the LTS version)

---

**Q: Install npm notice update What about that? npm notice New major version of npm available! 9.8.1 -> 10.1.0 npm notice Run npm install -g npm@10.1.0 to update!** 

> A: Good observation. You can continue using your current npm version or update to the latest one. It's a good thing to keep npm updated by running the command: `npm install -g npm@<VERSION>`

---

**Q: for the git clone to work I had to use `ssh-keyscan github.com >> ~/.ssh/known_hosts`** 

> A: Cool! With this command you've added github's fingerpint to the known hosts of your machine.

---

**Q: Do windows need ssh config file? Because none mentioned.** 

> A: You should follow the official guide ([https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account?platform=windows](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account?platform=windows)) and make sure that the connection works. If it works and there was no need for messing with a config file, and it should probably be fine.

---

**Q: Do we have to use git bash terminal for the ssh installation? Because some commands only recognized through that and not other command line interfaces.** 

> A: In general, we recommend that you use Git Bash for running most of the commands on a Windows system. Another alternative is the WSL, which might prove to be challenging. If some commands are not found you can also use Windows' powershell. What commands are not available via Git Bash by the way?

---

**Q: Can we use like button or comment on the youtube videos you post or is it prohibited as they are for the class?** 

> A: You can like and comment if you want, but please don't share with anyone outside the group, as these recordings are unedited.

---

**Q: After update progress to progress.w01.d01.csv are we going to upload the new updated file to our repository and delete the draft file.Or with git commit?** 

> A: You are going to keep both the draft version and the copy in your repository. After you have made updates to the CSV files (the copies) you can git add - git commit in order to submit your progress.

---

**Q: On the setup step 4 what is the personal progress sheet and where can i find it to paste the URL?** 

> A: The personal progress sheets are found under the /user folder in the WDX180 repository (your forked version). For the 1st day and week, the progress sheets are found under `/user/week01/progress/progress.draft.w01.d01.csv`. You must, of course, first make a copy of the draft file and rename it to `progress.w01.d01.csv` before updating it.

---

**Q: git clone command error. The authenticity of host 'github.com (140.82.121.3)' can't be establishedED key fingerprint is This key is not known by any other names**

> A: Perhaps this can help: [https://docs.github.com/en/enterprise-cloud@latest/authentication/connecting-to-github-with-ssh/testing-your-ssh-connection](https://docs.github.com/en/enterprise-cloud@latest/authentication/connecting-to-github-with-ssh/testing-your-ssh-connection) 

---

**Q: Why do you have (main) with a green check on main folder of clone when you go to that folder in video? [https://www.youtube.com/watch?v=S9Qg3Ltf__c&t=12m53s](https://www.youtube.com/watch?v=S9Qg3Ltf__c&t=12m53s)**

> A: I am currently using a command line "shell" called ZSH. There is a project called OhMyZsh ([https://github.com/ohmyzsh/ohmyzsh](https://github.com/ohmyzsh/ohmyzsh)) that includes some scripts and plugins for this shell, which add extra functionality. I have installed one that shows a green checkmark when there are not commits on git and the working tree is clean. At this point, I think it's an overkill to try and configure zsh on your machine, but we can certainly try this at a later point in the course.

---

**Q: Vscode shows a pop up message "window is not responding" and doesn't open even when excluded in the antivirus exceptions. Reinstall didn't work.**

**Q (related): I found out that when windows sound service is enabled vscode crashes and doesn't open. Any fixes?** 

> A: Let us know how this goes as it is something we've haven't seen before and it's probably related to either the latest VSCode version and/or some software running on your system, e.g. the Antivirus you mentioned.
> Perhaps, this might be helpful: [https://www.youtube.com/watch?v=YQRoik6lk6c](https://www.youtube.com/watch?v=YQRoik6lk6c)
>
> A: Not to our knowledge. It's Google time, we guess. As a temporary alternative, there's always VSCode for the Web ([https://vscode.dev/](https://vscode.dev/)) and Sublime Text ([https://www.sublimetext.com/](https://www.sublimetext.com/)), although we recommend to keep an eye on the updates as we are going to move forward with VSCode in this course.
> 
> Another thing you can do, is download the latest insiders release (the upcoming) and check whether the issues persists: [https://code.visualstudio.com/insiders/](https://code.visualstudio.com/insiders/)

---

**Q: Question (that just came in): 1) I am not give the option to add questions to the sli.do, why is that? 2) Is there not a live Q&A today?**

> A: 1) Each day, you'll be given a new sli.do that relates to the topics of the daily content/material. This means, that the previous sli.do will be closed for questions. If you have any questions related to yesterday's topic, you can use today's sli.do and from now on, we'll try and keep the previous sli.do links open for more questions.
>
> 2) No, as mentioned during our welcoming session, live Q&As for this week will happen on Wednesday and Friday.

---

**Questions, comments, suggestions? Please leave them on the comment section below.**

<script src="https://utteranc.es/client.js"
  repo="in-tech-gration/WDX-180"
  issue-term="pathname"
  theme="github-dark"
  crossorigin="anonymous"
  async>
</script>

<!-- 
  **Tags: [ "operating system", "WDX180", "npm", "npm install", "update", "git", "git clone", "clone", "ssh", "config", "windows", "bash", "terminal", "youtube", "video", "progress", "repository", "commit", "URL", "authenticity", "vscode", "folder" ]** 
-->