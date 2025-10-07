---
title: Week 03 | CSS, Accessibility & Git
---

<hr class="mb-0">

<h1 id="{{ Week 03-CSS, Accessibility & Git | slugify }}">
  <span class="week-prefix">Week 03 |</span> CSS, Accessibility & Git
</h1>

<div class="week-controls">

  {% assign week_num = 03 | to_integer %}

  <h2 class="week-controls__previous_week">

    {% if week_num > 0 %}

      {% assign previous_week_num = 03 | to_integer | minus: 1 | prepend: '00' | slice: -2, 2 %}

      <a href="/WDX-180/curriculum/week{{ previous_week_num }}">Week {{ previous_week_num }} &#8678;</a>
    {% endif %}

  </h2>

  <span>Updated: 10/11/2023</span>

  <h2 class="week-controls__next_week">

    {% if week_num <= 36 %}

      {% assign next_week_num = 03 | to_integer | plus: 1 | prepend: '00' | slice: -2, 2 %}

      <a href="/WDX-180/curriculum/week{{ next_week_num }}">&#8680; Week {{ next_week_num }}</a>
    {% endif %}

  </h2>

</div>

---

<!-- Week 03 - Day 1 | More Git -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 03 - Day 1</span> | More Git</h2>
  </summary>

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

<!-- Exercises -->

### Extra Resources

  - [Read: **A look under the hood: how branches work in Git**](https://stackoverflow.blog/2021/04/05/a-look-under-the-hood-how-branches-work-in-git/){:target="_blank"}

  - [Read: **Git Branching - Branches in a Nutshell**](https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell){:target="_blank"}

  > **Disclaimer**: These two articles are advanced for someone like you right now. You can always keep them for later and give them a read whenever you feel confident enough with Git, but we do highly recommend to give them a try nonetheless!



<!-- Sources and Attributions -->
  
</details>

<hr class="mt-1">

<!-- Week 03 - Day 2 | What is CSS? -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 03 - Day 2</span> | What is CSS?</h2>
  </summary>

### Schedule

  - [Study](#study-plan-1)
  - [Exercises](#exercises-1)
  - [Extra Resources](#extra-resources-1)

### Study Plan

  **TIP OF THE DAY:** During your coding journey, you will be constantly using the Browser Developer Tools _(aka DevTools)_ panel to inspect and debug your code, whether it's HTML, CSS or JavaScript. This [short video](https://www.youtube.com/watch?v=X65TAP8a530){:target="_blank"} will help you familiarize yourself with some common keyboard shortcuts that will open up the appropriate `DevTools` panel. 

  ---



  <!-- TODO: Turn this resource into a Module -->


  - [Read: **What is CSS?**](resources/css_first_steps/what_is_css/index.md){:target="_blank"}
    - Level: Beginner

  <!-- TODO: Turn this resource into a Module -->


  - [Read: **Getting started with CSS**](resources/css_first_steps/getting_started/index.md){:target="_blank"}
    - Level: Beginner

  <!-- TODO: Turn this resource into a Module -->


  - [Read: **How CSS is structured**](resources/css_first_steps/how_css_is_structured/index.md){:target="_blank"}
    - Level: Beginner

  <!-- TODO: Turn this resource into a Module -->


  - [Read: **How CSS works**](resources/css_first_steps/how_css_works/index.md){:target="_blank"}
    - Level: Beginner

### Summary

  Now that you've finished studying today's content, you've gained some more familiarity with the CSS language and its syntax. Move on to the exercises to get some basic experience using it.

### Exercises

  - [MDN's Assessment: **Styling a biography page**](exercises/styling_a_biography_page/index.md){:target="_blank"}

  **IMPORTANT:** Make sure to complete all the tasks found in the **daily Progress Sheet** and update the sheet accordingly. Once you've updated the sheet, don't forget to `commit` and `push`. The progress draft sheet for this day is: **/user/week03/progress/progress.draft.w03.d02.csv**

  You should **NEVER** update the `draft` sheets directly, but rather work on a copy of them according to the instructions [found here](../modules/curriculum/progress_workflow.md).


<!-- Extra Resources -->

### Sources and Attributions

  **Content is based on the following sources:**

  - **MDN:**
    - [Learn to style HTML with CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS){:target="_blank"} [(Permalink)](https://github.com/mdn/content/blob/a77137e6239ef445ac67b2ffb7067d6332907910/files/en-us/learn/css/index.md){:target="_blank"}
    - [Styling a biography page](https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/Styling_a_biography_page){:target="_blank"} [(Permalink)](https://github.com/mdn/content/blob/a77137e6239ef445ac67b2ffb7067d6332907910/files/en-us/learn/css/first_steps/styling_a_biography_page/index.md){:target="_blank"}
  
</details>

<hr class="mt-1">

<!-- Week 03 - Day 3 | CSS Selectors -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 03 - Day 3</span> | CSS Selectors</h2>
  </summary>

### Schedule

  - [Study](#study-plan-2)
  - [Exercises](#exercises-2)
  - [Extra Resources](#extra-resources-2)

### Study Plan

  Now that you've gained familiarity with the language and its syntax, and got some basic experience using it, it's time to dive a bit deeper. **CSS Selectors** is the part of CSS that defines which element(s) will be `selected` from the HTML page and what styling rules will be applied to them. Let's see them in detail:

  - Let's start by watching a super quick intro to [**CSS Selectors**](https://www.youtube.com/watch?v=rLZWAGrY6cU) just to get a first taste of what they are.

  Now let's dive deeper into CSS Selectors _(because nobody became a professional Web developer by watching 1-minute coding videos)_.

  - [Read: **CSS Selectors**](resources/css_building_blocks/css_selectors/index.md){:target="_blank"}
    - Level: Beginner
  
  - [Read: **Type, class, and ID selectors**](resources/css_building_blocks/css_selectors/type_class_and_id_selectors/index.md){:target="_blank"}
    - Level: Beginner
  
  - [Read: **Attribute Selectors**](resources/css_building_blocks/css_selectors/attribute_selectors/index.md){:target="_blank"}
    - Level: Beginner
  
  - [Read: **Pseudo-classes and Pseudo-elements**](resources/css_building_blocks/css_selectors/pseudo-classes_and_pseudo-elements/index.md){:target="_blank"}
    - Level: Beginner
  
  - [Read: **Combinators**](resources/css_building_blocks/css_selectors/combinators/index.md){:target="_blank"}
    - Level: Beginner

  Let's recap CSS Selectors by watching Kyle (from `WebDevSimplified`) going through every CSS Selector in his [**Learn Every CSS Selector In 20 Minutes**](https://www.youtube.com/watch?v=l1mER1bV0N0){:target="_blank"} video. 

  ---


  **Still confused?** Let's try this [**little tool**](/WDX-180/resources/css/selectors-explained/index.html){:target="_blank"} that explains CSS selectors. If you find this tool useful, keep a bookmark and please don't forget to star the [author's repo](https://github.com/KittyGiraudel/selectors-explained){:target="_blank"}.

  ![](./assets/selectors-explained.jpg)

### Summary

  Now that you've finished studying this Module's content, you've learned about a wide variety of CSS selectors that are available, allowing for fine-grained precision when selecting elements to style in a Web page. It's time to put this information to the test with the following exercises!

### Exercises

  - Let's quickly practice some CSS Selectors [here](/WDX-180/resources/css/css-selector-game/index.html){:target="_blank"}.

  - [Play: **CSS Diner**](https://flukeout.github.io/){:target="_blank"}
    - An awesome exercise as a game, consisting of 32 levels to help you understand how CSS selectors work, in a very fun way!
    - Take a screenshot of the max level you have successfully completed, name it `completed-level.png` and move it to folder `user/week03/exercises/day03/`

  - [MDN's Assessment: **Test your skills: Selectors**](exercises/selectors_tasks/index.md)

  As for the CSS Diner, if you've  enjoyed the experience and it has helped you learn something, do not forget to star (⭐) the [repo](https://github.com/flukeout/css-diner){:target="_blank"} of this awesome game!

  **IMPORTANT:** Make sure to complete all the tasks found in the **daily Progress Sheet** and update the sheet accordingly. Once you've updated the sheet, don't forget to `commit` and `push`. The progress draft sheet for this day is: **/user/week03/progress/progress.draft.w03.d03.csv**

  You should **NEVER** update the `draft` sheets directly, but rather work on a copy of them according to the instructions [found here](../modules/curriculum/progress_workflow.md).


<!-- Extra Resources -->

### Sources and Attributions

  **Content is based on the following sources:**

  - [The CSS-Selector-Game](https://github.com/toolness/css-selector-game) _(Please give the original author a star!)_

  - [Selectors Explained: A CSS selector to plain English translator](https://github.com/KittyGiraudel/selectors-explained)

  - **MDN:**
    - [CSS Selectors](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors){:target="_blank"}
    - [Type, class, and ID selectors](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors){:target="_blank"}
    - [Attribute Selectors](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors/Attribute_selectors){:target="_blank"}
    - [Pseudo-classes and pseudo-elements](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements){:target="_blank"}
    - [Combinators](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors/Combinators){:target="_blank"}
    - [Test your skills: Selectors](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors/Selectors_Tasks){:target="_blank"} [(Permalink)](https://github.com/mdn/content/blob/a77137e6239ef445ac67b2ffb7067d6332907910/files/en-us/learn/css/building_blocks/selectors/selectors_tasks/index.md){:target="_blank"}
  - **CSS Diner:**
    - [CSS Diner Github Repo](https://github.com/flukeout/css-diner){:target="_blank"}
  
</details>

<hr class="mt-1">

<!-- Week 03 - Day 4 | Cascade, Inheritance and the Box Model -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 03 - Day 4</span> | Cascade, Inheritance and the Box Model</h2>
  </summary>

### Schedule

  - [Study](#study-plan-3)
  - [Exercises](#exercises-3)
  - [Extra Resources](#extra-resources-3)

### Study Plan

  The aim of this lesson is to develop your understanding of some of the most fundamental concepts of CSS — **cascade, specificity, and inheritance** — which control how CSS is applied to HTML and how conflicts are resolved.

  - [Read: **Cascade and Inheritance**](resources/css_building_blocks/cascade_and_inheritance/index.md){:target="_blank"}
    - Level: Beginner

  **The Box Model**

  In a web page, **every element is rendered as a rectangular box**. The box model describes how the element’s content, padding, border, and margin determine the space occupied by the element and its relation to other elements in the page.

  Depending on the element’s display property, its box may be one of two types: a **block box** or an **inline box**. 

  - [Watch: **The box model for beginners web design tutorial**](https://www.youtube.com/watch?v=MrAnu4zdjjY){:target="_blank"} to get a first quick taste of the **Box Model**.
    - **Duration:** 2min 

  - [Watch: **Learn CSS Box Model In 8 Minutes**](https://www.youtube.com/watch?v=rIO5326FgPE){:target="_blank"} to get a better, more detailed overview of the Box Model.
    - **Duration:** 8min 

  - [Read: **The box model**](resources/css_building_blocks/the_box_model/index.md){:target="_blank"}
    - Level: Beginner

### Summary

  Now that you've finished studying today's content, you have a better understanding of the most fundamental concepts of CSS. It's time to put this information to the test with the following exercise!

### Exercises

  - [MDN's Assessment: **Test your skills: The Cascade**](exercises/cascade_tasks/index.md){:target="_blank"}

  - [MDN's Assessment: **Test your skills: The box model**](exercises/box_model_tasks/index.md){:target="_blank"}

  **IMPORTANT:** Make sure to complete all the tasks found in the **daily Progress Sheet** and update the sheet accordingly. Once you've updated the sheet, don't forget to `commit` and `push`. The progress draft sheet for this day is: **/user/week03/progress/progress.draft.w03.d04.csv**

  You should **NEVER** update the `draft` sheets directly, but rather work on a copy of them according to the instructions [found here](../modules/curriculum/progress_workflow.md).


<!-- Extra Resources -->

### Sources and Attributions

  **Content is based on the following sources:**

  - [Understanding the CSS box model for inline elements](https://hacks.mozilla.org/2015/03/understanding-inline-box-model/)

  - **MDN**
    - [Cascade, specificity, and inheritance](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance){:target="_blank"} [(Permalink)](https://github.com/mdn/content/blob/529a4466f00f0f29e11716313a3ceb1f9ce5ce76/files/en-us/learn/css/building_blocks/cascade_and_inheritance/index.md){:target="_blank"}
    - [Test your skills: The Cascade](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_tasks){:target="_blank"} [(Permalink)](https://github.com/mdn/content/blob/529a4466f00f0f29e11716313a3ceb1f9ce5ce76/files/en-us/learn/css/building_blocks/cascade_tasks/index.md){:target="_blank"}
    - [The box model](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model){:target="_blank"} [(Permalink)](https://github.com/mdn/content/blob/529a4466f00f0f29e11716313a3ceb1f9ce5ce76/files/en-us/learn/css/building_blocks/the_box_model/index.md){:target="_blank"}
    - [Test your skills: The box model](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Box_Model_Tasks){:target="_blank"} [(Permalink)](https://github.com/mdn/content/blob/529a4466f00f0f29e11716313a3ceb1f9ce5ce76/files/en-us/learn/css/building_blocks/box_model_tasks/index.md){:target="_blank"}

  
</details>

<hr class="mt-1">

<!-- Week 03 - Day 5 | Backgrounds, borders, media, sizing items & more -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 03 - Day 5</span> | Backgrounds, borders, media, sizing items & more</h2>
  </summary>

### Schedule

  - [Study](#study-plan-4)
  - [Exercises](#exercises-4)
  - [Extra Resources](#extra-resources-4)

### Study Plan

  ![](assets/css.bg.media.sizing.png)

  **CSS**

  - [Watch: **CSS Borders in 1 Minute**](https://www.youtube.com/watch?v=JYv_jNYV2R8){:target="_blank"}
    - Level: Beginner
  
  - [Watch: **Border radius - CSS Tutorial for beginners in 1 Minute**](https://www.youtube.com/watch?v=Th1fXtFjhJ4){:target="_blank"}
    - Level: Beginner

  - [Read: **Backgrounds and borders**](resources/css_building_blocks/backgrounds_and_borders/index.md){:target="_blank"}
    - Level: Beginner

  - Quick taste of CSS Overflow with [**this video**](https://www.youtube.com/watch?v=LMLwvJvnsZE){:target="_blank"}. Then dive deeper with the MDN guide.

  - [Read: **Overflowing Content**](resources/css_building_blocks/overflowing_content/index.md){:target="_blank"}
    - Level: Beginner

  CSS has some [absolute sizing units](https://www.youtube.com/watch?v=RvW5rXuFDGU){:target="_blank"} along with some [relative sizing units](https://www.youtube.com/watch?v=HdSm-aDTes8){:target="_blank"}. Oh, and don't forget [these guys too](https://www.youtube.com/watch?v=N4Mt32GkBSI){:target="_blank"}. 

  - [Read: **CSS values and units**](resources/css_building_blocks/values_and_units/index.md){:target="_blank"}
    - Level: Beginner

  - [Read: **Sizing items in css**](resources/css_building_blocks/sizing_items_in_css/index.md){:target="_blank"}
    - Level: Beginner

  - [Read: **Images, media, and form elements**](resources/css_building_blocks/images_media_form_elements/index.md){:target="_blank"}
    - Level: Beginner

  **CSS & Accessibility**

  Among the things that a Frontend developer must always check, to ensure web accessibility, is `Color Contrast`.

  Most of the times, this means that the background (the `background-color` property in CSS) and foreground color (the `color` property in CSS) combination used on our HTML elements must ideally pass the WCAG AA and/or AAA tests.

  - [Read: **About Color Contrast and Accessibility**](./resources/color_contrast/index.md)
    - Level: Beginner

### Summary

  We've covered quite a lot here. Don't miss out on proving your knowledge on the exercises below!

### Exercises

  - [MDN's Assessment: **Test your skills: Backgrounds and borders**](exercises/test_your_skills_backgrounds_and_borders/index.md){:target="_blank"}

  - [MDN's Assessment: **Test your skills: Overflow**](exercises/overflow_tasks/index.md){:target="_blank"}

  - [MDN's Assessment: **Test your skills: Values and units**](exercises/values_tasks/index.md){:target="_blank"}

  - [MDN's Assessment: **Test your skills: Sizing**](exercises/sizing_tasks/index.md){:target="_blank"}

  - [MDN's Assessment: **Test your skills: Images and form elements**](exercises/images_tasks/index.md){:target="_blank"}

  **IMPORTANT:** Make sure to complete all the tasks found in the **daily Progress Sheet** and update the sheet accordingly. Once you've updated the sheet, don't forget to `commit` and `push`. The progress draft sheet for this day is: **/user/week03/progress/progress.draft.w03.d05.csv**

  You should **NEVER** update the `draft` sheets directly, but rather work on a copy of them according to the instructions [found here](../modules/curriculum/progress_workflow.md).


<!-- Extra Resources -->

### Sources and Attributions

  **Content is based on the following sources:**

  - **MDN**
    - [Backgrounds and borders](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders){:target="_blank"} [(Permalink)](https://github.com/mdn/content/blob/529a4466f00f0f29e11716313a3ceb1f9ce5ce76/files/en-us/learn/css/building_blocks/backgrounds_and_borders/index.md){:target="_blank"}
    - [Test your skills: Backgrounds and borders](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Test_your_skills_backgrounds_and_borders){:target="_blank"} [(Permalink)](https://github.com/mdn/content/blob/529a4466f00f0f29e11716313a3ceb1f9ce5ce76/files/en-us/learn/css/building_blocks/test_your_skills_backgrounds_and_borders/index.md){:target="_blank"}
    - [Overflowing Content](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Overflowing_content){:target="_blank"} [(Permalink)](https://github.com/mdn/content/blob/b2a5f62d66b4e3d71704017d0fab7ad710e68057/files/en-us/learn/css/building_blocks/overflowing_content/index.md){:target="_blank"}
    - [Test yours skills: Overflow](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Overflow_Tasks){:target="_blank"} [(Permalink)](https://github.com/mdn/content/blob/d45f6c3733728f0eefdb7fd4b9a84c4858b35fd1/files/en-us/learn/css/building_blocks/overflow_tasks/index.md){:target="_blank"}
    - [CSS values and units](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units){:target="_blank"} [(Permalink)](https://github.com/mdn/content/blob/6dc60c265c35440871208490fa8924e4696f5610/files/en-us/learn/css/building_blocks/values_and_units/index.md){:target="_blank"}
    - [Test your skills: Values and units](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_tasks){:target="_blank"} [(Permalink)](https://github.com/mdn/content/blob/6dc60c265c35440871208490fa8924e4696f5610/files/en-us/learn/css/building_blocks/values_tasks/index.md){:target="_blank"}
    - [Sizing items in CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Sizing_items_in_CSS){:target="_blank"} [(Permalink)](https://github.com/mdn/content/blob/de7d710496266ccf4fce5ade75a67e6605f60ce5/files/en-us/learn/css/building_blocks/sizing_items_in_css/index.md){:target="_blank"}
    - [Test your skills: Sizing](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Sizing_tasks){:target="_blank"} [(Permalink)](https://github.com/mdn/content/blob/de7d710496266ccf4fce5ade75a67e6605f60ce5/files/en-us/learn/css/building_blocks/sizing_tasks/index.md){:target="_blank"}
    - [Images, media, and form elements](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Images_media_form_elements){:target="_blank"} [(Permalink)](https://github.com/mdn/content/blob/bffe6c3486fa8cbaa2291a5e1cd67f704cf483bf/files/en-us/learn/css/building_blocks/images_media_form_elements/index.md){:target="_blank"}
    - [Test your skills: Images and form elements](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Images_tasks){:target="_blank"} [(Permalink)](https://github.com/mdn/content/blob/bffe6c3486fa8cbaa2291a5e1cd67f704cf483bf/files/en-us/learn/css/building_blocks/images_tasks/index.md){:target="_blank"}

  
</details>


<hr class="mt-1">

**Weekly feedback:** Hey, it's really important for us to know how your experience with the course has been so far, so don't forget to fill in and submit your [**mandatory** feedback form](https://forms.gle/S6Zg3bbS2uuwsSZF9){:target="_blank"} before the day ends. Thanks you!

## Week 03 - Weekend Suggestions

If you are in the mood of enjoying related content during the weekend, check out our weekly recommendations [here](WEEKEND.md).

---

<!-- COMMENTS: -->
<script src="https://utteranc.es/client.js"
  repo="in-tech-gration/WDX-180"
  issue-term="pathname"
  theme="github-dark"
  crossorigin="anonymous"
  async>
</script>