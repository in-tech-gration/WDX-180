---
title: Week 2
---

# Week 2 | HTML, Accessibility & Git

_(Updated: 18/09/2023)_

<!-- Week 2 - Day 1 | Git -->
<details markdown="1">
  <summary><h2>Week 2 - Day 1 | Git</h2></summary>

### Schedule

  - [Study](#study-plan)
  - [Exercises](#exercises)
  - [Extra Resources](#extra-resources)

### Study Plan

  **What you'll learn:**

  - Basic Git concepts
  - Basic Git commands
  - Connecting to GitHub securely using SSH keys
  - Create a GitHub repository

  ---

  💡 **TIP OF THE DAY:** How to display hidden (system) files and folders?

  - **Windows (Powershell):** Run `ls -Force` to show hidden files and folders
  - **Windows (Command Prompt):** Run `dir /a:h` to show hidden files and folders
  - **Mac:** Press `Cmd + Shift + .` to toggle system files/folders view on and off
  - **Linux/Unix:** Run `ls -a` to list all files and folders (including hidden ones) 
  - **VSCode:** How to show particular hidden folders: File > Preferences > Settings: type "exclude" > Hover over the `**/.git` and click X to delete
  - **Windows 11 (File Explorer):**
    - Open `File Explorer` from the taskbar
    - Select `View > Show > Hidden items` 
  - **Windows 10 (File Explorer):** 
    - Open `File Explorer` from the taskbar 
    - Select `View > Options > Change folder and search options`
    - Select the `View` tab and, in `Advanced settings`, select `Show hidden files, folders, and drives` and OK.
  - **References:**
    - [View hidden files and folders in Windows](https://support.microsoft.com/en-us/windows/view-hidden-files-and-folders-in-windows-97fbc472-c603-9d90-91d0-1166d1d9f4b5)

  ---

  On the Internet, it's pretty easy for someone to intercept the data going from one place to another.

  ![](./assets/Comm.Insecure.png)

  That's why it's crucial to always use some form of encryption and decryption, in order for your data to be securely transported through the Internet. 

  ![](./assets/Comm.Secure.png)

  The same goes, of course, for the data that you exchange with **GitHub**. In order to open up a secure connection with **GitHub** and be able to download (`git pull`) or upload (`git push`) data, we can use the **SSH** protocol along with a pair of keys to lock and unlock data going back and forth.

  > [About SSH](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/about-ssh): "SSH, which stands for Secure Shell, is a protocol used to open up a secure communication channel between computers. Using the SSH protocol, you can connect and authenticate to remote servers and services. With SSH keys, you can connect to GitHub without supplying your username and personal access token at each visit."

  - **Set up SSH keys for GitHub.** Complete the following 4 steps in order to be able to access GitHub without using a username and password.

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

  **Content is based on the following sources:**

  - [Git SSH keys simplified and how to setup on GitHub](https://inspirezone.tech/git-ssh-keys-simplified/)

</details>

<!-- Week 2 - Day 2 | HTML -->
<details markdown="1">
  <summary><h2>Week 2 - Day 2 | HTML</h2></summary>

### Schedule

  - [Study](#study-plan-1)
  - [Exercises](#exercises-1)
  - [Extra Resources](#extra-resources-1)

### Study Plan

  **What you'll learn:**

  During Week 1, we covered some of the [basics of HTML](../week01/resources/html_basics/index.md). 
  Now, it's time to dive deeper into HTML. 

  - [Read: **What's in the head? Metadata in HTML**](resources/the_head_metadata_in_html/index.md)
    - Description: The `<head>` of an HTML document is the part that is not displayed in the web browser when the page is loaded. In this article, you'll learn all about the information it contains.
    - Exercises: Make sure to practice by completing all the **Active learning** sections of this article and then pasting all the files that you've created in the `user/week02/exercises/day02/the_head_metadata_in_html/` folder for submission.
      - [Active learning: Inspecting a simple example](./resources/the_head_metadata_in_html/index.md#active-learning-inspecting-a-simple-example)

      - [Active learning: Experiment with character encoding](./resources/the_head_metadata_in_html/index.md#active-learning-experiment-with-character-encoding)

      - [Active learning: The description's use in search engines](./resources/the_head_metadata_in_html/index.md#active-learning-the-descriptions-use-in-search-engines)

      - [Active learning: applying CSS and JavaScript to a page](./resources/the_head_metadata_in_html/index.md#active-learning-applying-css-and-javascript-to-a-page)


  - [Read: **HTML text fundamentals**](resources/html_text_fundamentals/index.md)
    - Description: This article explains the way HTML can be used to structure a page of text by adding headings and paragraphs, emphasizing words, creating lists, and more.
    - Exercises: 
      - Make sure to complete all the **Active learning** sections along with the 3 Tasks found under the 'Test your skills!' section of the tutorial and submit your code under the `user/week02/exercises/day02/html_text_fundamentals/` folder.

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
      - Make sure to complete all the **Active learning** sections along with the 3 Tasks found under the 'Test your skills!' section of the tutorial and submit your code under the `user/week02/exercises/day02/Creating_hyperlinks/` folder:
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

  - [Study](#study-plan-2)
  - [Exercises](#exercises-2)
  - [Extra Resources](#extra-resources-2)

### Study Plan

  **What you'll learn:**

  - Structuring Tabular Data using HTML Tables
  - Accessibility considerations for HTML Tables

  **HTML Tables**

  A very common task in HTML is structuring tabular data, and it has a number of elements and attributes for just this purpose. Coupled with a little [CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS){:target="_blank"} for styling, HTML makes it easy to display tables of information on the web such as your school lesson plan, the timetable at your local swimming pool, or statistics about your favorite dinosaurs or football team. This module takes you through all you need to know about structuring tabular data using HTML.

  **Prerequisites**

  Before starting this module, you should already have covered the basics of HTML _(see previous Modules)_. 

  **Guides**

  <!-- - [HTML table basics](./resources/html_table_basics/index.md){:target="_blank"}
    - Description: This article gets you started with HTML tables, covering the very basics such as rows and cells, headings, making cells span multiple columns and rows, and how to group together all the cells in a column for styling purposes. (COMPLETED) -->

  This module contains the following articles, which will take you through all the fundamentals of creating tables in HTML.

  - [HTML table basics](https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables/Basics){:target="_blank"}
    - **Description:** This article gets you started with HTML tables, covering the very basics such as rows and cells, headings, making cells span multiple columns and rows, and how to group together all the cells in a column for styling purposes.
    - **Exercises:** You should place the files related to the exercises found in this module, in the `user/week02/exercises/day03/html_table_basics/` folder.

  - [HTML table advanced features and accessibility](https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables/Advanced){:target="_blank"}
    - **Description:** This article looks at some more advanced features of HTML tables — such as captions/summaries and grouping your rows into table head, body and footer sections — as well as looking at the accessibility of tables for visually impaired users.
    - **Exercises:** You should place the files related to the exercises found in this module, in the `user/week02/exercises/day03/html_table_basics/` folder.

  <!-- - [Styling tables](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Styling_tables)
    - Description: This article provides a guide to making HTML tables look good, with some specific table styling techniques highlighted. -->

### Summary

### Exercises

  The following assessment will test your understanding of the HTML table techniques covered in the guides above.

  - [Structuring planet data](https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables/Structuring_planet_data){:target="_blank"}
    - **Description:** In our table assessment, we provide you with some data on the planets in our solar system, and get you to structure it into an HTML table.
    - **Submission:** You should place the files related to this exercise in the `user/week02/exercises/day03/Structuring_planet_data` folder.

  Make sure to complete all the tasks found in the **daily Progress Sheet** and update the sheet accordingly. Once you've updated the sheet, don't forget to `commit` and `push`. The progress draft sheets are found in the `/user/weekXX/progress` folder, for example `user/week01/progress/progress.draft.w01.d01.csv`. You should **NEVER** update the `draft` sheets directly, but rather work on a copy of them according to the instructions [found here](../week01/resources/PROGRESS-WORKFLOW.md).

### [Extra Resources](EXTRAS.md)

### Sources and Attributions

  **Content is based on the following sources:**

  - **MDN**:
    - [HTML tables](https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables){:target="_blank"} / [Permalink](https://github.com/mdn/content/blob/7073233dfed28e7c2fb325d2bb378075763d81b9/files/en-us/learn/html/tables/index.md){:target="_blank"}

</details>

<!-- Week 2 - Day 4 | Forms & Accessibility -->
<details markdown="1">
  <summary><h2>Week 2 - Day 4 | Forms</h2></summary>

### Schedule

  - [Study](#study-plan-3)
  - [Exercises](#exercises-3)
  - [Extra Resources](#extra-resources-3)

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

  - [Study](#study-plan-4)
  - [Exercises](#exercises-4)
  - [Extra Resources](#extra-resources-4)

### Study Plan

  **What you'll learn:**

### Summary

### Exercises

  Now it's time to gather all this knowledge around HTML _(and GitHub)_, build your own Blog and take it online. Follow the instructions found [here](./exercises/lets_create_a_weblog/index.md). You might need to spend a few extra hours during the weekend to improve and finalize your Blog.

  Make sure to complete all the tasks found in the **daily Progress Sheet** and update the sheet accordingly. Once you've updated the sheet, don't forget to `commit` and `push`. The progress draft sheets are found in the `/user/weekXX/progress` folder, for example `user/week01/progress/progress.draft.w01.d01.csv`. You should **NEVER** update the `draft` sheets directly, but rather work on a copy of them according to the instructions [found here](../week01/resources/PROGRESS-WORKFLOW.md).

### [Extra Resources](EXTRAS.md)

### Sources and Attributions
</details>

**Weekly feedback:** Hey, it's really important for us to know how your experience with the course has been so far, so don't forget to fill in and submit your [**mandatory** feedback form](https://forms.gle/S6Zg3bbS2uuwsSZF9) before the day ends. Thanks you! 

## Week 2 - Weekend Suggestions

If you are in the mood of enjoying related content during the weekend, check out our weekly recommendations [here](WEEKEND.md).