<!-- SOFTWARE -->
<details markdown="1">
  <summary><h3 id="software">Software</h3></summary>

  This is a list of Software you must have installed on your system in order to get started with the course:

  - **Communication:** [Slack](https://slack.com){:target="_blank"} is our main communication tool.
    - [Web version (**recommended**)](https://slack.com/signin#/signin){:target="_blank"}
    - Mobile version (**recommended**): [Android](https://play.google.com/store/apps/details?id=com.Slack){:target="_blank"} / [iOS](https://apps.apple.com/app/slack-app/id618783545?ls=1){:target="_blank"}
    - Desktop version: 
      - [Windows](https://slack.com/downloads/windows){:target="_blank"} (109MB)
      - [Mac](https://slack.com/downloads/mac){:target="_blank"} (160MB)
      - [Linux (*_beta_)](https://slack.com/downloads/linux){:target="_blank"} (81MB)

  - **Communication:** [Zoom client](https://zoom.us/support/download){:target="_blank"} and [Google Meet](https://meet.google.com/) are used to attend the live lectures and student sessions.
    - You can do a quick video/audio check for Google Meet, following the directions [found here](https://support.google.com/meet/answer/10409699?hl=en){:target="_blank"}. Video is optional, but **audio (good quality microphone) is mandatory**. 

  - **Browser(s)**:
    - [Chrome](https://www.google.com/chrome/){:target="_blank"}
      - Windows: _
      - Mac: 212MB
      - Linux: 90MB
    - [Firefox](https://www.mozilla.org/en-US/firefox/){:target="_blank"}
      - Windows: 55MB
      - Mac: 115MB
      - Linux: 76MB

    > **Note:** During the course, we recommend using `Chrome` for developing and debugging Frontend web applications. For daily, normal usage we recommend using browsers that respect the privacy of their users, such as `Firefox` and [Brave](https://brave.com/download/){:target="_blank"}. Likewise, we tend to `Google` a lot for technical issues and searching for resources, but we recommend using an alternative search engine, such as [DuckDuckGo](https://duckduckgo.com/){:target="_blank"} for personal use.  

  - **Code Editor:** Download and install [Visual Studio Code](https://code.visualstudio.com/){:target="_blank"}
    - Windows: 88MB
    - Mac: 203MB
    - Linux: 82MB
    - **Extensions for VSCode:** Throughout the course we will be recommending  a variety of VSCode extensions that can be installed and extend the functionality of the code editor and boost our productivity. 
      - One of the first extensions that **must be installed** is the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer){:target="_blank"}. 
      - Another one is the [Live Share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare){:target="_blank"} which allows for real-time collaboration. More to follow. 🙂
      - Last, but not least, you want to install our very own [WDX Extension Pack](https://marketplace.visualstudio.com/items?itemName=kostasx.vscode-wdx-extension-pack){:target="_blank"} which comes packed with recommended extensions and snippets that will you study and code better.

  - **Git:** Mandatory [Version Control](https://www.atlassian.com/git/tutorials/what-is-version-control){:target="_blank"} software for the professional developer. [**Download here**](https://git-scm.com/downloads){:target="_blank"}
    - **Windows** users will also need to run the following command after installing git: `git config --global core.autocrlf true` as mentioned [here](https://docs.github.com/en/get-started/getting-started-with-git/configuring-git-to-handle-line-endings?platform=windows#global-settings-for-line-endings){:target="_blank"}
    - In order to check that `git` has been installed on your system, you will need to run one of the following commands in the terminal: 
    - `git --version`
    - `git -v` (for short)

  - **Command Line Tools (Terminal):**
    - **Windows:** you will use [GitBash](https://www.atlassian.com/git/tutorials/git-bash){:target="_blank"} _(which is bundled along with `git` so you don't need to install anything if you already have `git`` installed)_ as your UNIX-style command line environment.
    - **Linux:** _(Already includes built-in Unix command line terminals. No need to install.)_
    - **MacOS:** _(Already includes built-in Unix command line terminals. No need to install.)_
      - You will need to install [Homebrew](https://brew.sh/){:target="_blank"}

  > So, you've downloaded Visual Studio Code (aka VSCode) along with Git and GitBash if you are running Windows. Even though Windows comes packed with quite a few types of terminals through which you can type and execute commands, we highly recommend that you stick with Git Bash on Windows.
  >
  > VSCode has this neat feature called **Integrated Terminal** which basically means that you can access any terminal without leaving the VSCode interface. Pretty cool!

  - Spend a few minutes to watch the following video and learn some of the most basic terminal commands. You will need to **carefully practice** _(especially with the `rm` command)_ and repeat these commands on your own terminal in order to become comfortable with it. 
  
  - [Watch: **Terminal Commands for Web Developers**](https://www.youtube.com/watch?v=YSj30jnvxKo)
    - **Duration:** 12min
    - **Level:** Beginner 
    - List of commands that you will learn: `pwd`, `cd`, `mkdir`, `ls`, `touch`, `rm`, `rmdir`, `mv`, `cp`.

  **❌ Caution:** be extremely careful with the `rm -rf` command. You can probably try to avoid running this command on your system until you get quite comfortable with the terminal, as this command can literally wipe out your entire disk drive if ran improperly.  

  You can also use our [**online virtual terminal**](https://in-tech-gration.github.io/WDX-180/resources/vm/jslinux/){:target="_blank"} to safely practice these commands. Remember that the file structure on your system and our virtual terminal environment is quite different from the file structure depicted in the video above. And, yes, you can safely run `rm -rf` in this virtual environment!

  [![](./assets/jslinux.jpg)](https://in-tech-gration.github.io/WDX-180/resources/vm/jslinux/){:target="_blank"}

  It's extremely helpful and will greatly improve your chances of retaining any new concept, to keep notes of everything that you learn (e.g. terminal commands in this case) and organize them in a manner that will help you quickly go back and find what you need. 

  > At this point, it's also probably a good idea to spend a few minutes watching this [YouTube video walkthrough](https://youtu.be/S9Qg3Ltf__c){:target="_blank"} and follow along in order to create your SSH keys and connect them with GitHub, then follow the rest of the instructions to `clone` (download) the repository to your computer and install all the necessary dependencies.  

  - **Node.js:** Download the `LTS` version of the powerful and popular JavaScript running environment [here](https://nodejs.org/en){:target="_blank"}. You are going to be using `Node.js` **a lot** during this course 🙂. In order to check that `Node.js` has been installed on your system, you will need to run one of the following commands in the terminal: 
    - `node --version`
    - `node -v` (for short)

  - **Productivity:**
    - [**Wikiwand**: the Wikipedia Reader](https://www.wikiwand.com/){:target="_blank"} _(Install as a Browser extension)_
      - As you will be reading **a lot** (and we mean it) of Wikipedia articles throughout the course, we highly recommend that you use this awesome Browser extension to enhance the Wikipedia experience. In a sentence, this is Wikipedia on steroids!
    - [**Photopea**](https://www.photopea.com/){:target="_blank"}: a free, online image editing software that's pretty similar to `Adobe Photoshop`. You can use this tool to resize, crop or compress images among other things. 
</details>