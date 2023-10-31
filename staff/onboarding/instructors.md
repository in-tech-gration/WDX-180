# Instructors Starting Point

  In this guide, you're gonna learn a thing or two about our beloved project, and how to quickly find your way through to help as much as you wish! :)

## How WDX-180's Curriculum is structured

  After a lot of research and communication with people from a great Open Education project called [DeNepo](https://github.com/DeNepo), we decided to make our curriculum, as modular as possible. In order to achieve this, we have broken down the content of our curriculum that is going to be covered into several modules.

  Each of these modules, is consisted of sub-modules, which are also broken down into smaller packages that we want to call units. For example, **JavaScript** is a module that is consisted of 5 different sub-modules _(Async, Core, Frameworks, NodeJS, Web APIs)_, where each on of those is consisted of smaller units.

  We shifted to this structure, because we want people to be able to grab any amount of modules inside our knowledge base and create their own course, no matter how long or short they want it to be.

  In order to achieve this, we have a [tool](https://github.com/in-tech-gration/WDX-180/blob/main/tools/sgen.js) in our repository that can automatically create dynamic content based on a YAML configuration file. Right now, the SGEN tool is not "production ready", as it requires a lot of documentation, testing etc.

  Below you can find it's current functionality:

  - Takes as input a .yml file (either [curriculum](https://github.com/in-tech-gration/WDX-180/blob/main/curriculum/curriculum.yaml) or [week](https://github.com/in-tech-gration/WDX-180/blob/main/curriculum/schedule/week04.yaml))
    - Each YAML file contains
      - a link to a draft Markdown file containing the structure desired for our curriculum, week and\or day (e.g. [curriculum draft](https://raw.githubusercontent.com/in-tech-gration/WDX-180/main/curriculum/curriculum.draft.md), [week draft](https://raw.githubusercontent.com/in-tech-gration/WDX-180/main/curriculum/schedule/weekly.draft.md), [day draft](https://raw.githubusercontent.com/in-tech-gration/WDX-180/main/curriculum/schedule/daily.draft.md))
      - Metadata: **title**, **subtitle** and _more to come_.
      - `schedule` property that contains number of weeks/days that a curriculum/week is consisted of.
      - each `weeks` or `days` property had a number of properties (starting from **1:**) that contain links to markdown files from our modules
  - Parses each markdown file (either draft or module) and replaces the string regular expressions found below:
    - `/\{\{\s?WDX:\s?WEEK\s?\}\}/gi`
    - `/\{\{\s?WDX:\s?TITLE\s?\}\}/gi`
    - `/\{\{\s?WDX:\s?DAY\s?\}\}/gi`
    - `/\{\{\s?WDX:\s?DAILY_SCHEDULE\s?\}\}/gi`
    - `/\{\{\s?WDX:\s?STUDY_PLAN\s?\}\}/gi`
    - `/\{\{\s?WDX:\s?SUMMARY\s?\}\}/gi`
    - `/\{\{\s?WDX:\s?EXERCISES\s?\}\}/gi`
    - `/\{\{\s?WDX:\s?EXTRAS\s?\}\}/gi`
    - `/\{\{\s?WDX:\s?ATTRIBUTIONS\s?\}\}/gi`
    - `/\{\{\s?WDX:\s?INCLUDES:(.*)\s?\}\}/gi`
    - `/\{\{\s?WDX:\s?DATE_UPDATED\s?\}\}/gi`
    - `/\{\{\s?WDX:\s?WEEKLY_CONTENT\s?\}\}/gi`

  Based on the functionality of the current version of our SGEN tool, WDX-180 cohort_02's curriculum can be found [here](https://github.com/in-tech-gration/WDX-180/blob/main/curriculum/curriculum.yaml).

  As time passes by, this file is going to be updated with more information. So please bear with us! :D

## Useful Links

  - [inTECHgration's website](https://intechgration.io/)
    - Currently the GitHub repository for our website is private, so if you have any ideas and wish to contribute to make it look more awesome, please contact **Kostas**, **Abed** or **Asteris** for more!
  - [cohort_02's current page](https://in-tech-gration.github.io/WDX-180/)
    - This is our current GitHub Page that contains the curriculum available for the current students.
    - [GitHub Repository](https://github.com/in-tech-gration/WDX-180)
      - As you can see the repository is public, however access is required to make changes. Once again, please contact **Kostas**, **Abed** or **Asteris** for more!