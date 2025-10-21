---
title: More Git
version: 0.1.1
date_updated: 21.10.2025
---


### Schedule


  - [Study](#study-plan)
  - [Exercises](#exercises)
  - [Extra Resources](#extra-resources)

### Study Plan

 About a week ago, you've learned about the infamous version control system (VCS) called Git. Definitely, one of the most important tools in your arsenal! Today, we are going to recap on what we've learned in the previous modules and later on we're going to focus on a much more realistic and everyday scenario that you're going to encounter as a web developer.

  First things first though. What have you learned so far?

  - What is Git
  - How to initialize a git repository on your local machine
  - How to commit new changes
  - How to create new branches
  - How to push your version to GitHub

  These are some of the basic concepts covered so far. If you feel like you are uncertain about some of the things above, don't worry! It takes time and lots of practice to learn and master git! You can always revisit old lectures and your personal notes! 

  Let's start by looking more into the remote repositories and get comfortable with some very important git concepts, terms and commands:

  - [Watch: **Git Remotes Fundamentals**](https://www.youtube.com/watch?v=5ctkqMqG6G4)
    - Duration: 11min
  
  Let's strengthen our confidence by watching a video that gives a solid explanation of branches and a basic local workflow of creating/deleting branches in about ten minutes.  
  
  - [Watch: **Git & GitHub Tutorial for Beginners #8 - Branches**](https://www.youtube.com/watch?v=QV0kVNvkMxc){:target="_blank"}
    - Duration: 10min
    - Level: Beginner
    - Captions: Yes
    - ⚠️ **Note:** The video is a bit old (but still highly relevant), so you will be seeing terms like `Master branch` or `(master)` a lot. The default branch these days is called the `main branch`.
  
  ---

  **Practice time: New Feature List**

  Now that we freshened up our memory, let's take a few minutes and try to create a step-by-step list of the commands executed on our local repo, when we want to work on a new feature on a project. You're going to create a new Markdown file, named `new-feature-list.md`, containing your list! The structure of your file should be as below:

  ```markdown
  # Step-by-step list for a new feature

  - command1
  - action1
  - command2
  - action2
  ```

  **Still confused?**

  Just to give you a hint, think about how you would start
  your working day if you were asked to create a new feature.

  Of course, you would need to run `git status` to check your
  current status and `git pull` to download any updates from
  the remote repo.

  So, you'll probably want to add those comments to the `new-feature-list.md`
  file:

  ```
  - git status
  - git pull
  ```

  Next, you want to create a new branch and `checkout` or `switch`
  to that branch and start working safely. Once again, commands
  like `git branch -a` to check what branches already exist, is
  a good candidate for the list:

  ```
  - git status
  - git pull
  - git branch -a
  ```

  💡 That's the basic logic behind this exercise!

  > Note: It's a good practice to check the **status** of our repository after any alteration!!

  After you're finished with your list, do not forget to push it your `user` folder in your forked WDX repository!
  
  ---

  After you've finished the task above, make sure to **take a short break**, and get ready to dig deeper with the following content!

  - [Read: **Pull Requests and Merges**](resources/more_git/pull_requests_and_merges/index.md)

  In order to make it more clear to you, below you can watch a great video that represents a real-like scenario!

  - [Watch: **GITHUB PULL REQUEST, Branching, Merging & Team Workflow**](https://www.youtube.com/watch?v=oFYyTZwMyAg){:target="_blank"}
    - Duration: 11min
    - Level: Beginner
    - Captions: Yes

  **Practice time: Learn Git Branching**

  - Go through the [LearnGitBranching](https://learngitbranching.js.org/) interactive game and try to complete all the steps.

### Summary

  At the end of the day, you're gonna have a pretty good understanding of the Git VCS. However, with this tool you're gonna get better and better the more you use it and the more you make mistakes! Don't be afraid to fail! Even great mid-level and senior developers worldwide have serious issues with it. Git is a powerful tool, developed by a [genius](https://youtu.be/o8NPllzkFhE?t=343), who did not plan on making it easy for the rest of us. 

  **Understanding Git == becoming a better developer**

### Exercises

### Extra Resources

  - [Read: **A look under the hood: how branches work in Git**](https://stackoverflow.blog/2021/04/05/a-look-under-the-hood-how-branches-work-in-git/){:target="_blank"}

  - [Read: **Git Branching - Branches in a Nutshell**](https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell){:target="_blank"}

  > **Disclaimer**: These two articles are advanced for someone like you right now. You can always keep them for later and give them a read whenever you feel confident enough with Git, but we do highly recommend to give them a try nonetheless!

### Sources and Attributions