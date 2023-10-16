## Terminology

| Terms                        | Meaning                                                 |
| ---------------------------- | ------------------------------------------------------- |
| **Directory**                | Folder                                                  |
| **Terminal or Command Line** | Interface for Text Commands                             |
| **CLI**                      | Command Line Interface                                  |
| **cd**                       | Change Directory                                        |
| **Repository**               | Project, or the folder/place where your project is kept |
| **Github**                   | A website to host your repositories online              |

## Git Commands

| Git Commands |                                                                                                                 |
| ------------ | --------------------------------------------------------------------------------------------------------------- |
| **clone**    | bring a repo down from the internet (remote repository like Github) to your local machine                       |
| **add**      | track your files and changes with Git                                                                           |
|              | **Example:** add all changes to be saved: `git add .`                                                           |
|              | **Example:** add a single file to be saved: `git add filename`                                                  |
| **commit**   | save your changes into Git                                                                                      |
|              | **Example:** Save changes with a message: `git commit -m "message"`                                             |
| **log**      | See all previous saved changes: `git log`                                                                       |
| **push**     | push your changes to your remote repo on Github (or another website)                                            |
|              | **Example:** Push changes to GitHub main: `git push origin main`                                                |
|              | **Example:** Push changes to github new-branch: `git push origin new-branch`                                    |
| **pull**     | pull changes down from the remote repo to your local machine (the opposite of push)                             |
|              | **Example:** Pull (download) changes from github main: `git pull origin main`                                   |
| **status**   | check to see which files are being tracked or need to be committed                                              |
|              | **Example:**  Check status of changes: `git status`                                                             |
| **init**     | use this command inside of your project to turn it into a Git repository and start using Git with that codebase |
| **checkout** | switch between branches locally                                                                                 |
|              | **Example:** Create a new branch and switch to that: `git checkout -b new-branch`                               |
|              | **Example:** Traveling back to an old commit: `git checkout <commit _hash>`                                     |

## Git Cheatsheet

| Git Cheatsheet                                        |                                                                 |
| ----------------------------------------------------- | --------------------------------------------------------------- |
| **Git: configurations**                               |                                                                 |
|                                                       | `git config --global user.name "FirstName LastName"`            |
|                                                       | `git config -global user.email "your-email@email-provider.com"` |
|                                                       | `git config --global color.ui true`                             |
|                                                       | `git config --list`                                             |
| **Git: starting a repository**                        |                                                                 |
|                                                       | `git init`                                                      |
|                                                       | `git status`                                                    |
| **Git: staging files**                                |                                                                 |
|                                                       | `git add <filename>`                                            |
|                                                       | `git add <filename> <another_filename> <yet_another>`           |
|                                                       | `git add`                                                       |
|                                                       | `git add --all`                                                 |
|                                                       | `git add -A`                                                    |
|                                                       | `git rm --cached <filename>`                                    |
|                                                       | `git reset <filename>`                                          |
| **Git: committing to a repository**                   |                                                                 |
|                                                       | `git commit -m "Add three files"`                               |
|                                                       | `git reset --soft HEAD^`                                        |
|                                                       | `git commit --amend -m <enter your message>`                    |
| **Git: pulling and pushing from and to repositories** |                                                                 |
|                                                       | `git remote add origin <link>`                                  |
|                                                       | `git push -u origin main`                                       |
|                                                       | `git clone <link>`                                              |
|                                                       | `git pull`                                                      |

## Sources

- [Git Commands](https://gist.github.com/gwenf/19e5748a5391929e8e938a22c8a4b3f2) Please consider giving it a ⭐ star!
