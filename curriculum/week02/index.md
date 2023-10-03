---
title: Week 2
---

# Week 2 | HTML, Accessibility & Git

_(Updated: 18/09/2023)_

<!-- Week 2 - Day 1 | Git -->
<details markdown="1">
  <summary><h2>Week 2 - Day 1 | Git</h2></summary>

### Schedule

### Study Plan

  **What you'll learn:**

  - Basic Git concepts
  - Basic Git commands
  - Create a GitHub repository

  ---

  - **Set up SSH keys for GitHub.** Complete the following 4 steps in order to be able to access GitHub without using a username and password.

  > [About SSH](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/about-ssh): "Using the SSH protocol, you can connect and authenticate to remote servers and services. With SSH keys, you can connect to GitHub without supplying your username and personal access token at each visit."

  1. [**Set up SSH keys for GitHub**](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)

  2. [**Check for SSH keys**](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/checking-for-existing-ssh-keys)

  3. [**Add SSH keys to your GitHub account**](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)

  4. [**Test your SSH connection**](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/testing-your-ssh-connection)

  **TASK: Set up SSH keys for GitHub**. Once you have successfully completed all 4 steps, make sure to update your [progress sheet](../../user/progress.draft.60.csv) and mark the ` Set up SSH keys for GitHub` task as completed by switching the COMPLETED column from `FALSE` to `TRUE`.

  - [Watch: **Git Tutorial For Dummies**](https://www.youtube.com/watch?v=mJ-qvsxPHpY)
    - **Notes**: Make sure to **follow along** and run the git commands on your own repo. ⚠️ **IMPORTANT:** The repository you will create under your GitHub account, **must be named: `gitVideo`**.
    - **Duration**: 20min 
    - **Level**: Beginner
    - <details>
        <summary>What you'll learn:</summary>
        <ul>
          <li>mkdir</li>
          <li>cd</li>
          <li>rm</li>
          <li>ls</li>
          <li>touch</li>
          <li>git init</li>
          <li>git add .</li>
          <li>git add index.html</li>
          <li>git commit -m "MESSAGE"</li>
          <li>git log</li>
          <li>git checkout BRANCH_NAME</li>
          <li>git checkout -b NEW_BRANCH_NAME</li>
          <li>git checkout COMMIT_HASH</li>
          <li>git, detached state</li>
          <li>git switch</li>
          <li>git branch</li>
          <li>git remote add origin GITHUB_URL</li>
          <li>git push origin master</li>
        </ul>
      </details>

  **One important point to remember** is that the main branch in a git repository these days is called, ...well `main`. A few years back, the main branch used to be called `master`, so expect to see this term in various videos and tutorials. You should stick with `main`, by the way. There are no masters here. 🙂

  - **⏰ Time for a short break** (~5-10min) before the next longer video.

  **Repetitio est mater studiorum:** "Repetition is the mother of learning". Let's recap those git concepts by revisiting them through another (longer) and more in-depth video about Git. 

  - [Watch: **Git and GitHub for Beginners - Crash Course**](https://www.youtube.com/watch?v=RGOj5yH7evk)
    - **Duration**: 69min
    - **Level**: Beginner
    - <details>
        <summary>What you'll learn:</summary>
        <ul>
          <li>(0:00) Introduction</li>
          <li>(1:10) What is git?</li>
          <li>(1:30) What is version control?</li>
          <li>(2:10) Terms to be learn in video</li>
          <li>(5:20) Git commands</li>
          <li>(7:05) sign up in GitHub</li>
          <li>(11:32) using git in local machine</li>
          <li>(11:54) git install</li>
          <li>(12:48) getting code editor</li>
          <li>(13:30) inside VS Code</li>
          <li>(14:30) cloning through VS Code</li>
          <li>(17:30) git commit command</li>
          <li>(18:15) git add command</li>
          <li>(19:15) committing</li>
          <li>(20:20) git push command</li>
          <li>(20:30) SSH Keys</li>
          <li>(25:25) git push</li>
          <li>(30:21) Review workflow so far</li>
          <li>(31:40) Compare between GitHub workflow and local git workflow</li>
          <li>(32:42) git branching</li>
          <li>(56:30) Undoing in git</li>
          <li>(1:01:50) Forking in git</li>
          <li>(1:07:55) Ending</li>
        </ul>
      </details>

  - You can find a nice reference to the git commands mentioned in the videos [here](resources/git-commands.html). _(Also, in [markdown format](resources/git-commands.md))_

### Summary

  - **What is Version Control?** The management of changes to documents, computer programs, large web sites, and other collections of information.
  - **What is Git?** A free and open source version control system.

### Exercises

  Make sure to complete all the tasks found in the **daily Progress Sheet** and update the sheet accordingly. Once you've updated the sheet, don't forget to `commit` and `push`. The progress draft sheets are found in the `/user/weekXX/progress` folder, for example `user/week01/progress/progress.draft.w01.d01.csv`. You should **NEVER** update the `draft` sheets directly, but rather work on a copy of them according to the instructions [found here](../week01/resources/PROGRESS-WORKFLOW.md).

### [Extra Resources](EXTRAS.md)

### Sources and Attributions
</details>

<!-- Week 2 - Day 2 | HTML -->
<details markdown="1">
  <summary><h2>Week 2 - Day 2 | HTML</h2></summary>

### Schedule

### Study Plan

  **What you'll learn:**

  During Week 1, we covered some of the [basics of HTML](../week01/resources/html_basics/README.md). 
  Now, it's time to dive deeper into HTML. 

  - [Read: **What's in the head? Metadata in HTML**](resources/the_head_metadata_in_html/README.md)
    - Description: The `<head>` of an HTML document is the part that is not displayed in the web browser when the page is loaded. In this article, you'll learn all about the information it contains.
    - Exercises:
      - [Active learning: Inspecting a simple example](./resources/the_head_metadata_in_html/README.md#active-learning-inspecting-a-simple-example)
      - [Active learning: Experiment with character encoding](./resources/the_head_metadata_in_html/README.md#active-learning-experiment-with-character-encoding)
      - [Active learning: The description's use in search engines](./resources/the_head_metadata_in_html/README.md#active-learning-the-descriptions-use-in-search-engines)
      - [Active learning: applying CSS and JavaScript to a page](./resources/the_head_metadata_in_html/README.md#active-learning-applying-css-and-javascript-to-a-page)

  - [Read: **HTML text fundamentals**](resources/html_text_fundamentals/README.md)
    - Description: This article explains the way HTML can be used to structure a page of text by adding headings and paragraphs, emphasizing words, creating lists, and more.
    - Exercises:
      - 

  - [Read: **Creating hyperlinks**](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks)
    - Description: You already know [**how the hyperlink changed everything**](https://www.youtube.com/watch?v=3Va3oY8pfSI). Now it's time to dive into the more technical aspects of it.
    - What you'll learn:
      - What is a hyperlink?
      - Anatomy of a link
      - Image links
      - About URLs and paths
      - Document fragments
      - Absolute versus relative URLs
      - Link best practices
      - The `download` attribute
      - Email links
    - Exercises:
      - [Active learning: creating your own example link](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks#active_learning_creating_your_own_example_link)
      - [Active learning: creating a navigation menu](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks#active_learning_creating_a_navigation_menu)
      - [Test your skills: Links (3x Tasks)](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Test_your_skills:_Links)

### Summary

### Exercises

  Make sure to complete all the tasks found in the **daily Progress Sheet** and update the sheet accordingly. Once you've updated the sheet, don't forget to `commit` and `push`. The progress draft sheets are found in the `/user/weekXX/progress` folder, for example `user/week01/progress/progress.draft.w01.d01.csv`. You should **NEVER** update the `draft` sheets directly, but rather work on a copy of them according to the instructions [found here](../week01/resources/PROGRESS-WORKFLOW.md).

### [Extra Resources](EXTRAS.md)

### Sources and Attributions
</details>

<!-- Week 2 - Day 3 | Tables -->
<details markdown="1">
  <summary><h2>Week 2 - Day 3 | Tables</h2></summary>

### Schedule

### Study Plan

  **What you'll learn:**

### Summary

### Exercises

  - Exercise: https://github.com/4GeeksAcademy/html-tutorial-exercises-course/tree/master/exercises/12-my-first-table

  Make sure to complete all the tasks found in the **daily Progress Sheet** and update the sheet accordingly. Once you've updated the sheet, don't forget to `commit` and `push`. The progress draft sheets are found in the `/user/weekXX/progress` folder, for example `user/week01/progress/progress.draft.w01.d01.csv`. You should **NEVER** update the `draft` sheets directly, but rather work on a copy of them according to the instructions [found here](../week01/resources/PROGRESS-WORKFLOW.md).

### [Extra Resources](EXTRAS.md)

### Sources and Attributions
</details>

<!-- Week 2 - Day 4 | Forms -->
<details markdown="1">
  <summary><h2>Week 2 - Day 4 | Forms</h2></summary>

### Schedule

### Study Plan

  **What you'll learn:**

### Summary

### Exercises

  Make sure to complete all the tasks found in the **daily Progress Sheet** and update the sheet accordingly. Once you've updated the sheet, don't forget to `commit` and `push`. The progress draft sheets are found in the `/user/weekXX/progress` folder, for example `user/week01/progress/progress.draft.w01.d01.csv`. You should **NEVER** update the `draft` sheets directly, but rather work on a copy of them according to the instructions [found here](../week01/resources/PROGRESS-WORKFLOW.md).

### [Extra Resources](EXTRAS.md)

### Sources and Attributions
</details>

<!-- Week 2 - Day 5 | SVG & MathML -->
<details markdown="1">
  <summary><h2>Week 2 - Day 5 | SVG & MathML</h2></summary>

### Schedule

### Study Plan

  **What you'll learn:**

### Summary

### Exercises

  Now it's time to gather all this knowledge around HTML _(and GitHub)_, build your own Blog and take it online. Follow the instructions found [here](./exercises/lets_create_a_weblog/INDEX.md). You might need to spend a few extra hours during the weekend to improve and finalize your Blog.

  Make sure to complete all the tasks found in the **daily Progress Sheet** and update the sheet accordingly. Once you've updated the sheet, don't forget to `commit` and `push`. The progress draft sheets are found in the `/user/weekXX/progress` folder, for example `user/week01/progress/progress.draft.w01.d01.csv`. You should **NEVER** update the `draft` sheets directly, but rather work on a copy of them according to the instructions [found here](../week01/resources/PROGRESS-WORKFLOW.md).

### [Extra Resources](EXTRAS.md)

### Sources and Attributions
</details>

**Weekly feedback:** Hey, it's really important for us to know how your experience with the course has been so far, so don't forget to fill in and submit your [**mandatory** feedback form](https://forms.gle/S6Zg3bbS2uuwsSZF9) before the day ends. Thanks you! 

## Week 2 - Weekend Suggestions

If you are in the mood of enjoying related content during the weekend, check out our weekly recommendations [here](WEEKEND.md).