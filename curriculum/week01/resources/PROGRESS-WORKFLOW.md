---
  title: Progress Workflow
---

# Progress Workflow

_(Updated: 21/09/2023)_

  ## What to do in order to keep track of your Progress

  Now that you have joined WDX, you'll have to keep track of your Progress each day of each week. In order to do so, below you will find the steps required to do, after you have successfully forked WDX-180 repository and cloned it locally!

  ### Steps to do at the end of each day

  - Make a copy of the draft progress sheet (e.g. `user/weekXX/progress/progress.draft.wXX.dYY.csv`) for the week XX(range 01 - 36) and day YY(range 01 - 05 OR weekend)  in the `user/weekXX/progress/` folder with the following name `progress.wXX.dYY.csv`
  > Before/after example : 
  >
  > Copy `user/week03/progress/progress.draft.w03.d04.csv` and rename to  `user/week03/progress/progress.w03.d04.csv`.
  > As, you can see, we are just removing the .draft part of the filename. It's **important to note** at this point, that the **.draft version** of these files should remain intact. **You should neither delete/update or rename these files**.
  - Update all tasks of the day YY according to what you have accomplished.
  - Stage the changes that you've made to your git repository (`git add`)
  - Commit the staged changes with a small message (`git commit -m "<MESSAGE_PLACEHOLDER>"`)
  - Push to your forked repo.
  - Sync your repo's version with WDX-180's main branch version.