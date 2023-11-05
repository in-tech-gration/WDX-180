---
title: Week 05 | CSS Frameworks
---

# Week 05 | CSS Frameworks

_(Updated: 5/11/2023)_

---

<!-- Week 05 - Day 1 | Practice with Form Input fields -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 05 - Day 1</span> | Practice with Form Input fields</h2>
  </summary>

### Schedule

  - [Study](#study-plan)
  - [Exercises](#exercises)
  - [Extra Resources](#extra-resources)

### Study Plan

  <!-- ![](assets/css.bg.media.sizing.png) -->



  > Inspirational quote of the week:
  >
  > ___"If I ran a school, I’d give the average grade to the ones 
  > who gave me all the right answers, for being good parrots. 
  > I’d give the top grades to those who made a lot of mistakes 
  > and told me about them, and then told me what they learned from them."___
  >
  > R. Buckminster Fuller



  ---



  This Module is about replicating some real-life User Interfaces and specifically the form fields found in the [**YouTube Studio**](https://www.youtube.com/playlist?list=PLpjK416fmKwQ42eDY75Q05uM0g3N9WNXU){:target="_blank"} video editor page.

  [![](./assets/youtube_editor_input_fields.jpg)](./assets/youtube_editor_input_fields.jpg){:target="_blank"}

  _(Click on the screenshot to see it in full scale)_

  The process, of course, involves coding but also doing some research to find out more about the required HTML and CSS to complete the project.

  Before starting the project, we have a tiny bit of theory for you. Check the next short video about the BEM CSS methodology before starting the exercise:

  - [Watch: **Why I use the BEM naming convention for my CSS**](https://www.youtube.com/watch?v=SLjHSVwXYq4){:target="_blank"}
    - **Duration:** 7min

  Now that you have rough idea about organizing CSS code using the BEM methodology, scroll down to the [**Exercises section**](#exercises) to find all the details and start the project. 

<!-- Summary -->

### Exercises

**What are you building?**

Take a close look at the screenshot below to understand what you are building:

[![](./assets/form_fields_preview.jpg)](./assets/form_fields_preview.jpg)

We are basically creating a single `<input>` form field of type `text`. In the screenshot, you are seeing various states of this input field. You won't be creating 5 different input fields but just one. Check the Requirements below to learn more about the various states and behavior that we want this element to exhibit.

**Requirements**

- Here are the color you must use:
  - Background color for the page: `#282828`
  - The input text color (for the user values) is: `#d0d0d0`
  - The `placeholder` text color is: `#767676`
  - The border color is: `#4c4c4c`
  - The border color on hover is: `#8f8f8f`
  - The border color on focus is: `#7c9dbd`
  - When there is a validation error on some input, the border color is: `#862e2a`

1. For this project, we need all the CSS colors to be stored in [**CSS variables**](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties){:target="_blank"} that follow [**good naming practices**](https://stackoverflow.com/a/74253999/4861760){:target="_blank"}. 

2. The font family for all text should be: `Arial, Helvetica, sans-serif;`

3. There should be special validation rule for this input field, so that the only permitted characters are the following: `A-Z`, `a-z`, `0-9` and the special characters `!, @, _, -, $, ( and )`. Also, there is a limit on how many characters should be permitted: **maximum 30 chars**. If the user has entered more than 30 characters or any non-permitted character, the input border should change to the error color (as seen in the last input example in the screenshot).

4. The input field must be accompanied by a special section that indicates the number of current characters along with the limit (30) as seen in the screenshot. This does not need to change dynamically. For now, you'll just want this element to contain the text: `0/30 characters`. Once you've learned about JavaScript, you'll be able to dynamically update these numbers.

5. The input field must also be accompanied by a `<label>` element (as depicted in the screenshot) with the informative text: `Enter your message`. The `<input>` and `<label>` elements **should be paired together** so that when the user clicks on the label, the input should receive focus. Also, when the user hovers over the label, the input should change its border color to the appropriate focus color (see list of colors above). The label should use the same color as the input text value.

6. You should validate your HTML code using the `W3C Validator` service and make sure to fix all warnings and errors.

7. You should check your web page using the Chrome [**Lighthouse**](https://developer.chrome.com/docs/lighthouse/overview/){:target="_blank"} checker and make sure that you have a green score (>90%) on the `Accessibility` checks. If the score is lower than 90%, make sure to do any necessary fixes.

**Extra Challenges**

- Whenever the input value is invalid, a specially crafted HTML element should appear beneath the input element, displaying an error notification: `("Error: Invalid input")`. You **do not need JavaScript** for this one to work. Do your research and come up with a plain HTML/CSS solution.

[![](./assets/form_fields_error_preview.jpg)](./assets/form_fields_error_preview.jpg){:target="_blank"}

**Study Resources**

- [Naming CSS Stuff Is Really Hard](https://sparkbox.com/foundry/naming_css_stuff_is_really_hard){:target="_blank"}

- [Input pseudo-classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes#input_pseudo-classes){:target="_blank"}

  **IMPORTANT:** Make sure to complete all the tasks found in the **daily Progress Sheet** and update the sheet accordingly. Once you've updated the sheet, don't forget to `commit` and `push`. The progress draft sheet for this day is: **/user/week05/progress/progress.draft.w05.d01.csv**

  You should **NEVER** update the `draft` sheets directly, but rather work on a copy of them according to the instructions [found here](../week01/resources/PROGRESS-WORKFLOW.md).


<!-- Extra Resources -->

<!-- Sources and Attributions -->
  
</details>

<hr class="mt-1">

<!-- Week 05 - Day 2 | Flappy App - Day 1 -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 05 - Day 2</span> | Flappy App - Day 1</h2>
  </summary>

### Schedule

  - [Study](#study-plan-NN)
  - [Exercises](#exercises-NN)
  - [Extra Resources](#extra-resources-NN)

### Study Plan

  **Flappy App**: Recreating a web page from a design mockup

  This is a 2-day project. You will go through a series of videos, where we take a webpage mockup and turn it into HTML and CSS code.

  Below you'll find a list of videos that will take you through the process of decomposing the mockup into an HTML structure and gradually building and styling each section of the mockup. The total duration of the videos is around 3 hours. 

  **Here's how you should proceed:**

  - 1) **TAKE #1:** Watch each video once, without touching any code or running any commands. It's really important to pause from time to time and **take notes** during this first step. 

  - 2) **TAKE #2:** Go through the video a second time, but this time you should pause the video and code along, trying to exactly replicate the steps and commands shown in the video

  - 3) **TAKE #3:** This is the most important step. Start from scratch and try to replicate each step **without looking at the code or commands** in the video. This will help you recollect everything you've learned from the videos and the 2nd repetition (during which you coded along) and actually code by memory. Now, this part is going to be hard, so give yourself some time to recollect the commands, steps or code needed. You can freely Google or search the MDN documentation, but try not to cheat and go back to the video.

  At this step, the notes you took during the first run will help you move on and find what you need to complete each step. 

  If you get stuck and don't see the expected results, don't worry. Move on and you'll be able to compare your code with the video, after you've finished each step. You will then notice what went wrong, what misconceptions you've held and take notes.

  It will probably take 3 hours for you to go through the videos once, then somewhere around 3 to 4 hours to go through the videos and code along and finally, you will spend 3 to 5 hours recreating the project without referencing the videos.

  It's recommended that you create 2 separate folders and VSCode workspaces for these last 2 steps. 

  All the videos can be found in this _(unlisted*)_ [**YouTube playlist**](https://www.youtube.com/playlist?list=PLdo7hJB0agEmTY9xT7EvzUkClAeAHJr9G).

  Good luck!

  __*Please do not share the link with anyone outside of intechgration.io__

  **The Videos**

  - Part 1: [Intro](https://www.youtube.com/watch?v=dN49vf6yTmI){:target="_blank"}
    - **Duration:** 2min
    - **Description:** Brief description of the project.
    - **Repository:** [https://github.com/in-tech-gration/Flappy_App](https://github.com/in-tech-gration/Flappy_App){:target="_blank"}

  - Part 2: [Setup](https://www.youtube.com/watch?v=2r8rXxdfcN0){:target="_blank"} 
    - **Duration:** 3min
    - **Description:** Clone the git repository, set everything up before moving on to the next video and checking the mockups.
    - **What you'll learn:** 
      - Adding a local folder into your VSCode workspace via the command line using the `code -a .` command.

  - Part 3: [Folder Structure](https://www.youtube.com/watch?v=EUQzZHd_QJg){:target="_blank"} 
    - **Duration:** 5min
    - **Description:** All about the files and folders structure of the project.
    - **What you'll learn:** 
      - Using the `Live Server` VSCode extension to serve the HTML files.
      - What does the `missing favicon` 404 error mean.
      - Checking which resources are loaded through an HTML page using the Network Panel of DevTools

  - Part 4: [Planning](https://www.youtube.com/watch?v=N1YJZuMOzUs){:target="_blank"} 
    - **Duration:** 28min
    - **Description:** How do we go from a 2D design mockup to an actual website created using HTML and CSS? How do we start decomposing a static image into the actual HTML elements that will comprise the final web page?
    - **What you'll learn:** 
      - Thinking in boxes and containers
      - Using diagram tools (such as https://excalidraw.com/) to plan and turn a design into an HTML structure.
      - Destructuring a mockup in rows and columns
      - Properly commenting and indenting HTML code
      - Using Semantic HTML elements for your web page structure
      - Using the DevTools Color Picker to grab colors from an image
      - Organizing and managing the colors of a web page using CSS variables
      - Using the `Computed Panel` in DevTools to debug HTML and CSS and get a better overview of each HTML element's box model.
      - Using the `outline`, `background` and `border` CSS properties to debug CSS issues and get a better visual overview of where each HTML element's box model appears.
      - Learn about the very handy `vh` (viewport height) CSS unit.
      - Creating a basic HEADER/MAIN/FOOTER layout using Flexbox

  - Part 5: [Google Web Fonts](https://www.youtube.com/watch?v=hcOW_ZIudeM){:target="_blank"} 
    - **Duration:** 5min
    - **Description:** Follow the specs and load the appropriate font family defined in the mockup.
    - **What you'll learn:**
      - How to load [Google Web Fonts](https://fonts.google.com/specimen/Lato?query=Lato){:target="_blank"} into an HTML page.
      - Use the `Format Document` feature of VSCode to keep your code well-formatted

  - Part 6: [Containers](https://www.youtube.com/watch?v=nt4ooUqFYbQ) 
    - **Duration:** 9min
    - **Description:** Define containers within the design to restrict the maximum width of the main content sections.
    - **What you'll learn:** 
      - Thinking about inner HTML elements that act as width limiters and restrict the content from going past a specific width

  - Part 7: [Defining Columns](https://www.youtube.com/watch?v=4f4j64LvlY8){:target="_blank"} 
    - **Duration:** 25min
    - **Description:** After defining the rows in our design it's time to define the columns and start splitting our content vertical sections as well.
    - **What you'll learn:** 
      - Thinking in boxes, but this time in terms of columns instead of rows
      - Using `Semantic HTML` elements for sections that play a particular role in our page
      - Using `unordered lists` for the navigation menu items
      - Using the Emmet abbreviations for quickly creating sibling elements and multiple elements:
        - `selector+sibling+sibling`
        - `selector*NUMBER_OF_TIMES_TO_BE_CREATED`, e.g. `div*5`
    - Using utility classes in CSS for reusability and ease-of-use
    - Understanding the Flexbox axis rule: `justify-content` works (aligns items) horizontally when `flex-direction` is set to `row` and vertically when flex-direction is set to `column`. Likewise, `align-items` works vertically in `row` and horizontally in `column` `flex-direction`.

  - Part 8: [Recreating the FlappyApp Logo](https://www.youtube.com/watch?v=o2piJRYw-ns){:target="_blank"} 
    - **Duration:** 17min
    - **Description:** Recreating the logo based on the mockup.
    - **What you'll learn:** 
      - Using an empty `alt=""` attribute when an image is just for decoration (best practice in Web Accessibility)
      - Using the `text-transform` CSS property
      - Using negative margins to position an element
      - All about the `line-height` property
      - Using `position: relative` to make an element overlap another element

  - Part 9: [Navigation Menu](https://www.youtube.com/watch?v=kY2MMjCKwgY){:target="_blank"} 
    - **Duration:** 19min
    - **Description:** Recreating the navigation menu as depicted in the mockup
    - **What you'll learn:** 
      - Resetting the default `ul` styling
      - Displaying `li` elements horizontally with the help of `display: flex`
      - Debugging spacing issues using the `Inspector` Tool and `outline`
      - Setting hover color for the `li` elements using the `:hover` pseudo class
      - Changing the default cursor icon using the `cursor` CSS property

  - Part 10: [Main Section: Scenery](https://www.youtube.com/watch?v=gsmqNJbuJQE){:target="_blank"} 
    - **Duration:** 7min
    - **Description:** Recreating the main game scenery area.
    - **What you'll learn:** 
      - [How to add a double border](https://stackoverflow.com/questions/3906983/two-color-borders){:target="_blank"} in an HTML element using both the `border` and `outline` CSS properties
      - Using the color picker to set a color and choose a different color format (e.g. switching from HSL to HEX)

  - Part 11: [Main Section: Game Features Table](https://www.youtube.com/watch?v=_9m04Bk4EVw){:target="_blank"} 
    - **Duration:** 16min
    - **Description:** Recreating the Features table in the main section.
    - **What you'll learn:** 
      - Using the `first-child` and `nth-child` CSS pseudo classes to target and style specific children of a container element
      - Using `span` as a special-purpose inline container to style specific parts of a text.
      - Using `letter-spacing` to customize the space between word characters.

  - Part 12: [Main Section: Lorem Ipsum Area](https://www.youtube.com/watch?v=gBzI16r3OvI){:target="_blank"} 
    - **Duration:** 3min
    - **Description:** Recreating the Lorem Ipsum area in the main mockup section.

  - Part 13: [Fixing Navigation Alignment Issues](https://www.youtube.com/watch?v=-vswtF-N4RI){:target="_blank"} 
    - **Duration:** 9min
    - **Description:** Fixing some vertical alignment issues in the top navigation
    - **What you'll learn:** 
      - Using the Inspector tool along with the special `Flex` feature to debug Flexbox alignment and layout issues.
      - Get to know the different syntaxes of the `padding` shorthand property.

  - Part 14: [Centering the Main Content](https://www.youtube.com/watch?v=aFH8Smnr7xQ){:target="_blank"} 
    - **Duration:** 5min
    - **Description:** Using Flexbox to center the main content
    - **What you'll learn:** 
      - More Utility CSS class to the rescue
      - Centering content vertically and horizontally using Flexbox

  - Part 15: [Footer](https://www.youtube.com/watch?v=wzb2IwygrIM){:target="_blank"} 
    - **Duration:** 14min
    - **Description:** Recreating the Footer area of the mockup
    - **What you'll learn:** 
      - More Utility CSS classes
    - **Notes:** You'll see at some point in the video, that it's unclear whether the `padding` property applied in an `ul` element is inherited and applied to the children `li` elements. In order to find out whether a specific CSS property is inherited by the children, always check the appropriate MDN page, and specifically look for the **Inherited** property entry in the **Formal Definition** section. For example, `padding` is a [non-inheritable property](https://developer.mozilla.org/en-US/docs/Web/CSS/padding#formal_definition){:target="_blank"} whereas [color is inherited by the children of an element](https://developer.mozilla.org/en-US/docs/Web/CSS/color#formal_definition){:target="_blank"}.

  - Part 16: [Adjusting for max-width](https://www.youtube.com/watch?v=lEGm5UUbTCk){:target="_blank"} 
    - **Duration:** 16min
    - **Description:** Our design must adhere to the mockup specs which state that the main content areas should be limited to a width of 1100px 
    - **What you'll learn:** 
      - All about the `margin` `auto` value
      - Tricky `Specificity` styling and checking the Styles panel of Chrome DevTools to see which CSS rules are being overridden by other more specific CSS selectors 

  - Part 17: [Ribbon Decoration using Background-Image](https://www.youtube.com/watch?v=VTwauBSSuQE){:target="_blank"} 
    - **Duration:** 6min
    - **Description:** Adding some decoration to the Header and Footer via `background-image` CSS property
    - **What you'll learn:** 
      - `background-image`
      - `background-position`
      - `background-repeat`

<!-- Summary -->

<!-- Exercises -->

<!-- Extra Resources -->

### Sources and Attributions

  - [Flappy App Project by the `devleague`](https://github.com/devleague/Flappy_App) (Make sure to star the repo if you liked this challenge)
  
</details>

<hr class="mt-1">

<!-- Week 05 - Day 3 | Flappy App - Day 2 -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 05 - Day 3</span> | Flappy App - Day 2</h2>
  </summary>

### Schedule

  - [Study](#study-plan-NN)
  - [Exercises](#exercises-NN)
  - [Extra Resources](#extra-resources-NN)

### Study Plan

This is Day 2 of the Flappy App practice. Just follow the instructions found on Day 1 and continue where you've left off.

<!-- Summary -->

<!-- Exercises -->

<!-- Extra Resources -->

<!-- Sources and Attributions -->
  
</details>

<hr class="mt-1">

<!-- Week 05 - Day 4 | Introduction to Tailwind CSS -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 05 - Day 4</span> | Introduction to Tailwind CSS</h2>
  </summary>

### Schedule

  - [Study](#study-plan-NN)
  - [Exercises](#exercises-NN)
  - [Extra Resources](#extra-resources-NN)

### Study Plan

  ![](./assets/tailwind.css.jpg)

  **What is a CSS Framework**

  A CSS framework is a prepped and ready-to-use CSS library (Cascading Style Sheets). The stylesheets collection makes the job of a UI developer **easier**. 

  Rather than starting every project from scratch, a CSS framework gives them tools to quickly create a user interface that they repeat and tweak during a project. They also **enable the creation** of more **standards-compliant** websites. 

  While quite challenging to use or ambiguous for beginners, senior developers who know the CSS framework sites’ descriptions and buzzwords find them extremely useful.

  **Why Do You Need A CSS Framework?**

  CSS frameworks **are designed for use in typical scenarios** such as establishing navigation bars, footers, sliders, hamburger menus, 3-column layouts, and more. 

  The frameworks also **enable expanding on JavaScript, SASS, and other technologies**. If designers are time-stressed, frameworks allow setting up web pages – not just homepages, without diving into some CSS.

  Other than time-saving, teams comprising several developers benefit from the standards offered by CSS frameworks. Rather than each developer on a project adding their own style of names, frameworks regulate layouts, easily read others’ code, and smooth the development cycle with fewer bugs and better team communication.

  All of the above are the two strongest **pros** of working with a CSS Framework: **Faster Development** and **Consistency**

  However, as you already know, every coin has 2 sides. Using any CSS Framework can have it's drawbacks and not be suitable for some cases as described below:

  1. **Bloated Code**

  CSS frameworks include a lot of pre-built styles and components, which can add unnecessary code to a website or application. This can slow down the website's loading time and negatively impact performance. Additionally, using pre-built components can limit the customization options available to developers and tempt developers to use them without fully understanding how they work.

  2. **Learning Curve**

  Each CSS framework has its own set of styles, components, and conventions that developers need to learn in order to use it effectively. This can take time and effort, especially for developers who are new to front-end development. Additionally, CSS frameworks may not always align with a developer's preferred workflow or coding style. This can make it challenging to use the framework effectively, especially if the developer is used to writing custom CSS from scratch.

  **How to use a CSS Framework**

  There are many different CSS Frameworks out there and they can be broken down to two categories:

  1. Pre-styled, prescriptive, all-in-one frameworks (e.g. Bootstrap)

  2. Hands-off, unopinionated, utility frameworks (e.g. TailwindCSS)

  In later modules we're going to dive deeper to each one of those two popular CSS frameworks, but first we must answer the one million dollar question: **What type of Framework do we need?**

  To begin, we must have some knowledge of our website. Is it even necessary to have a system? Structures are beneficial to most locations with a large number of pages. The ideal amount of pages can change, but if we find ourselves repeating the same HTML, CSS, or even JavaScript on one of our pages, a layout or structure can help.

  -  Framework Language

  We should be familiar with the computer language(s) that our framework employs. As previously stated, some simple frameworks are nothing more than basic HTML templates, while more complicated frameworks may include CSS and JavaScript. Some frameworks construct the CSS using LESS or SASS, while others utilize Ruby or other computer languages to compile the pages once they're built. It will be challenging to build our framework if we are unfamiliar with the language(s) it employs.

  - Framework Features

  A CSS framework, often known as a web framework, is a collection of web-based tools, libraries, and best practices. A CSS framework can be as simple as a one-page template that serves as the foundation for all of our site's pages, or it can be a complicated collection of CSS, HTML, JavaScript, and server-side programs and files that govern the entire site architecture.

  - Whether the Framework is Customizable and Modular
  Customizable frameworks allow us to add our own code to make our site look unique and different from other websites. However, if a framework is overly customized, its benefits are lost, and it will be better to start from scratch.

  After we've decided which type of Framework, and specifically which one we want to use, all we have to do it find their **Official Documentation** and follow their instructions! This can be scary for a new developer, but it can benefit us in the long run! 

  **Tailwind CSS**

  - Let's start by watching this quick introduction to [**Tailwind in 100 seconds**](https://www.youtube.com/watch?v=mr15Xzb1Ook){:target="_blank"}.

  - Watch this [**Tailwind CSS Introduction**](https://www.youtube.com/watch?v=pYaamz6AyvU){:target="_blank"} video by Dave Gray and follow along by coding and replicating the example he creates in the video. You will need to place all the files in the `user/week05/exercises/day04/tailwind_intro/` folder. Make sure to create the folder if it doesn't already exist.

  - More practice with utility classes! Watch [**this video**](https://www.youtube.com/watch?v=oU5ar0dmQEY){:target="_blank"} and code along. Place your file in the `user/week05/exercises/day04/utility_classes/` folder. Make sure to create the folder if it doesn't already exist.

### Summary

  CSS Frameworks are so popular these days and they get better and better as time goes by. However, just because they make things easier and faster for some cases, that does not mean that we should ditch plain CSS and restrain our options and imagination to what each CSS Framework has to offer.

  Finally, it's highly suggested that you take a look on the following link focused on [Understanding the spectrum of CSS frameworks](https://dev.to/bholmesdev/when-and-why-you-should-use-css-frameworks-4oe)

  > **Note:**
  >
  > You can have a look at this [video](https://www.youtube.com/watch?v=ufMqGkXL1Jw) if you're time stressed, but the article mentioned above is worth reading!



<!-- Exercises -->

<!-- Extra Resources -->

### Sources and Attributions

  - [What Is A CSS Framework?](https://elementor.com/resources/glossary/what-is-a-css-framework/)

  - [The Pros and Cons of CSS Frameworks: A Comprehensive Review](https://dev.to/c0mmand3rj/the-pros-and-cons-of-css-frameworks-a-comprehensive-review-13db)
  
  - [Guide to CSS Framework](https://www.simplilearn.com/tutorials/css-tutorial/css-framework)
  
</details>

<hr class="mt-1">

<!-- Week 05 - Day 5 | How To Make A Website With Tailwind CSS -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 05 - Day 5</span> | How To Make A Website With Tailwind CSS</h2>
  </summary>

### Schedule

  - [Study](#study-plan-05)
  - [Exercises](#exercises-05)
  - [Extra Resources](#extra-resources-05)

### Study Plan

  ![](./assets/screenshot.jpg)

  - [Watch: **How To Make A Website With Tailwind CSS**](https://www.youtube.com/watch?v=8eQwgc9nc64){:target="_blank"}
    - **Duration:** 32min
    - **Level:** Beginner

  - Now, go through the video again, pause and code along. Below, you can find all the images needed to complete the tutorial _(just click the links, then right click and select "Save Image as")_:
    - [**cart.png**](./assets/cart.png){:target="_blank"}
    - [**grocery-image.png**](./assets/grocery-image.png){:target="_blank"}
    - [**Image.png**](./assets/Image.png){:target="_blank"}
    - [**logo.png**](./assets/logo.png){:target="_blank"}

  You will need to create a repository named **grocify** under your GitHub account and enable GitHub Pages on that. Once you have finished recreating the website in the video, update the progress sheet with your GitHub repository's Pages URL, that would look something like this: `https://YOUR_USERNAME.github.io/grocify`

  While working with Tailwind CSS, it's probably a good idea to install the following VSCode extension that will help you deal with the large list of utility classes provided by the library:

  - [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss){:target="_blank"}

<!-- Summary -->

### Exercises

  - Complete the **Make a Website with Tailwind CSS** challenge and update the progress sheet.

  **IMPORTANT:** Make sure to complete all the tasks found in the **daily Progress Sheet** and update the sheet accordingly. Once you've updated the sheet, don't forget to `commit` and `push`. The progress draft sheet for this day is: **/user/week05/progress/progress.draft.w05.d05.csv**

  You should **NEVER** update the `draft` sheets directly, but rather work on a copy of them according to the instructions [found here](../week01/resources/PROGRESS-WORKFLOW.md).


<!-- Extra Resources -->

<!-- Sources and Attributions -->
  
</details>


<hr class="mt-1">

**Weekly feedback:** Hey, it's really important for us to know how your experience with the course has been so far, so don't forget to fill in and submit your [**mandatory** feedback form](https://forms.gle/S6Zg3bbS2uuwsSZF9){:target="_blank"} before the day ends. Thanks you!

## Week 05 - Weekend Suggestions

If you are in the mood of enjoying related content during the weekend, check out our weekly recommendations [here](WEEKEND.md).