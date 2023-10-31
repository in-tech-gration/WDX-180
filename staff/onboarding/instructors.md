# Instructor's Starting Point

  In this guide, you're gonna learn a thing or two about our beloved project, and how to quickly find your way through to help as much as you wish! :)

## Student's Journey

  Our students begin their journey to Web Development by following [this guide](https://github.com/in-tech-gration/WDX-180/blob/main/README.md#where-do-i-start){:target="_blank"}.

  After they have finished setting up their personal environment with all the tools and the accounts needed, they are ready to get into action!

  Our WDX-180's Syllabus can be found [here](https://github.com/in-tech-gration/WDX-180/blob/main/curriculum/index.md){:target="_blank"}!

  **WDX-180's Syllabus** is divided into 36 weeks, a total of 180 days, hence the WDX-180 name :D. Each week is broken down into 5 days of **mandatory** content plus optional content for the Weekend. All of our weeks and days are represented in Markdown format, as it is easy and simple to both write and read. The structure for each week and day can be found below:
  - [Week's Structure](https://raw.githubusercontent.com/in-tech-gration/WDX-180/main/curriculum/schedule/weekly.draft.md){:target="_blank"}
  - [Day's Structure](https://raw.githubusercontent.com/in-tech-gration/WDX-180/main/curriculum/schedule/daily.draft.md){:target="_blank"}

  > Note:
  >
  > All those {{ WDX:* }} string literals are parsed by our [SGEN tool](https://github.com/in-tech-gration/WDX-180/blob/main/tools/sgen.js){:target="_blank"} which is responsible for dynamically creating each week of our curriculum.

  The goal of our course is to teach the fundamentals of the world of Web Development. Some of the concepts covered are:

  - The World Wide Web
  - HTML
  - CSS
  - JavaScript
  - NodeJS
  - React

  Each student is required to make a fork of our [GitHub repository](https://github.com/in-tech-gration/WDX-180){:target="_blank"} in order to keep track of their progress and assert their knowledge by updating several CSV files, that can be found under the `user/` folder ([example](https://github.com/in-tech-gration/WDX-180/blob/main/user/week01/progress/progress.draft.w01.d01.csv){:target="_blank"}).

## WDX-180's Curriculum: Behind the scenes

  After a lot of research and communication with people from a great Open Education project called [DeNepo](https://github.com/DeNepo){:target="_blank"}, we decided to make our curriculum, as modular as possible. In order to achieve this, we have broken down the content of our curriculum that will be covered into several modules.

  Each of these _modules_ consists of _sub-modules_, which are broken down into smaller packages, called _units_. For example, _JavaScript_ is a module that consists of 5 different sub-modules _(Async, Core, Frameworks, NodeJS, Web APIs)_, where each one of those consists of smaller units. All modules,sub-modules, and units are markdown files containing information on their subject ([sample found here](https://github.com/in-tech-gration/WDX-180/blob/main/curriculum/modules/Module.sample.md){:target="_blank"}), plus some predefined regular expressions that we have established. More on those later!

  Below you can find the list of modules that are available right now:

  - [Accessibility](https://github.com/in-tech-gration/WDX-180/tree/main/curriculum/modules/accessibility){:target="_blank"}
  - [Backend](https://github.com/in-tech-gration/WDX-180/tree/main/curriculum/modules/backend){:target="_blank"}
  - [Computer Science](https://github.com/in-tech-gration/WDX-180/tree/main/curriculum/modules/computer_science){:target="_blank"}
  - [CSS](https://github.com/in-tech-gration/WDX-180/tree/main/curriculum/modules/css){:target="_blank"}
  - [DevTools](https://github.com/in-tech-gration/WDX-180/tree/main/curriculum/modules/devtools){:target="_blank"}
  - [Frontend](https://github.com/in-tech-gration/WDX-180/tree/main/curriculum/modules/frontend){:target="_blank"}
  - [HTML](https://github.com/in-tech-gration/WDX-180/tree/main/curriculum/modules/html){:target="_blank"}
  - [JavaScript](https://github.com/in-tech-gration/WDX-180/tree/main/curriculum/modules/javascript){:target="_blank"}
  - [Version Control](https://github.com/in-tech-gration/WDX-180/tree/main/curriculum/modules/version_control){:target="_blank"}
  - [Web3](https://github.com/in-tech-gration/WDX-180/tree/main/curriculum/modules/web3){:target="_blank"}

  > Note:
  >
  > As you can see, the content for each of those modules needs to be completed. If you have any suggestions of what content can be included in each of those modules, please do not hesitate to create a new Pull Request containing a markdown file with your suggestions on the selected concepts.

  We shifted to this structure because we want people to be able to grab any amount of modules inside our knowledge base and create their own course, no matter its duration.

  In order to achieve this, we have a [tool](https://github.com/in-tech-gration/WDX-180/blob/main/tools/sgen.js){:target="_blank"} in our repository that can automatically create dynamic content based on a YAML configuration file. Right now, the SGEN tool is not "production ready", as it requires a lot of documentation, testing, etc.

  Below you can find its current functionality:

  - Takes as input a .yaml file (either [curriculum](https://github.com/in-tech-gration/WDX-180/blob/main/curriculum/curriculum.yaml){:target="_blank"} or [week](https://github.com/in-tech-gration/WDX-180/blob/main/curriculum/schedule/week04.yaml){:target="_blank"})
    - Each YAML file contains
      - a link to a draft Markdown file containing the structure desired for our curriculum, week and day (e.g. [curriculum draft](https://raw.githubusercontent.com/in-tech-gration/WDX-180/main/curriculum/curriculum.draft.md){:target="_blank"}, [week draft](https://raw.githubusercontent.com/in-tech-gration/WDX-180/main/curriculum/schedule/weekly.draft.md){:target="_blank"}, [day draft](https://raw.githubusercontent.com/in-tech-gration/WDX-180/main/curriculum/schedule/daily.draft.md){:target="_blank"})
      - Metadata: **title**, **subtitle**, and _more to come_.
      - `schedule` property that contains a number of weeks/days that a curriculum/week consists of.
      - each `weeks` or `days` property has a number of properties (starting from **1:**) that contain links to markdown files from our modules
  - Parses each markdown file (either draft or module) and replaces the string templates found below:
  {% raw %}
    - `{{WDX:WEEK}}`
    - `{{WDX:TITLE}}`
    - `{{WDX:DAY}}`
    - `{{WDX:DAILY_SCHEDULE}}`
    - `{{WDX:STUDY_PLAN}}`
    - `{{WDX:SUMMARY}}`
    - `{{WDX:EXERCISES}}`
    - `{{WDX:EXTRAS}}`
    - `{{WDX:ATTRIBUTIONS}}`
    - `{{WDX:INCLUDES:(.*)}}`
    - `{{WDX:DATE_UPDATED}}`
    - `{{WDX:WEEKLY_CONTENT}}`
    - `<!-- WDX:META:PROGRESS:<params> -->`
    - `<!-- WDX:META:TESTS:<params> -->`
{% endraw %}

  Based on the functionality of the current version of our SGEN tool, WDX-180 cohort_02's curriculum can be found [here](https://github.com/in-tech-gration/WDX-180/blob/main/curriculum/curriculum.yaml){:target="_blank"}.

  As time passes by, this file is going to be updated with more information. So please bear with us! :D

## Useful Links

  - [inTECHgration's website](https://intechgration.io/){:target="_blank"}
    - Currently, the GitHub repository for our website is private, so if you have any ideas and wish to contribute to making it look more awesome, please contact **Kostas**, **Abed**, or **Asteris** for more!
  - [cohort_02's current page](https://in-tech-gration.github.io/WDX-180/){:target="_blank"}
    - This is our current GitHub Page that contains the curriculum available for the current students.
    - [GitHub Repository](https://github.com/in-tech-gration/WDX-180){:target="_blank"}
      - As you can see the repository is public, however, access is required to make changes. Once again, please contact **Kostas**, **Abed**, or **Asteris** for more!