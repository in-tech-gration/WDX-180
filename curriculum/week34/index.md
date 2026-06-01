---
title: Week 34 | Full Stack Project
---

<hr class="mb-0">

<h1 id="{{ Week 34-Full Stack Project | slugify }}">
  <span class="week-prefix">Week 34 |</span> Full Stack Project
</h1>

<img src="assets/mini.cms.jpg" />

<div class="week-controls">

  {% assign week_num = 34 | to_integer %}

  <h2 class="week-controls__previous_week">

    {% if week_num > 0 %}

      {% assign previous_week_num = 34 | to_integer | minus: 1 | prepend: '00' | slice: -2, 2 %}

      <a href="../week{{ previous_week_num }}">Week {{ previous_week_num }} &#8678;</a>
    {% endif %}

  </h2>

  <span>Updated: 1/6/2026</span>

  <h2 class="week-controls__next_week">

    {% if week_num < 36 %}

      {% assign next_week_num = 34 | to_integer | plus: 1 | prepend: '00' | slice: -2, 2 %}

      <a href="../week{{ next_week_num }}">&#8680; Week {{ next_week_num }}</a>
    {% endif %}

  </h2>

</div>

<!-- VERSION -->
<hr style="margin-bottom:0" />
<div class="center opacity-50 opacity-100:hover">
  You are viewing v2.0 of this content. To go back to v1.0 click <a href="v1.0">this link</a>.
</div>
<!-- VERSION -->

---

<!-- Week 34 - Day 1 | Full Stack Project - Part 1 -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 34 - Day 1</span> | Full Stack Project - Part 1</h2>
  </summary>

### Schedule

  - **Study the suggested material**
  - **Practice on the topics and share your questions**

### Study Plan

  Study Part 1 of the Full Stack Project series:

  **Express + EJS Fundamentals**

  By the end of this lesson, students will be able to:

  * Explain the difference between a web server and a web application.
  * Explain what Express.js does and why it exists.
  * Create and configure an Express application.
  * Understand HTTP requests and responses.
  * Serve static files using Express middleware.
  * Configure EJS as a template engine.
  * Render dynamic HTML using data from JavaScript.
  * Create reusable layouts and partials.
  * Understand the purpose of middleware.
  * Build a small server-rendered application from scratch.

  - ➡️ **Part 1 - [Express + EJS Fundamentals](../modules/javascript/misc/fullstack/day01.html){:target="_blank"}**
  - Part 2 - [Planning, Architecture & Diagrams](../modules/javascript/misc/fullstack/day02.html){:target="_blank"}
  - Part 3 - [Public Routes & Basic CRUD](../modules/javascript/misc/fullstack/day03.html){:target="_blank"}
  - Part 4 - [Single Product Pages & Database-Driven Routing](../modules/javascript/misc/fullstack/day04.html){:target="_blank"}
  - Part 5 - [Creating Products (CREATE)](../modules/javascript/misc/fullstack/day05.html){:target="_blank"}
  - Part 6 - [Pagination](../modules/javascript/misc/fullstack/day06.html){:target="_blank"}
  - Part 7 - [Search & Filtering](../modules/javascript/misc/fullstack/day07.html){:target="_blank"}
  - Part 8 - [Updating Products (UPDATE)](../modules/javascript/misc/fullstack/day08.html){:target="_blank"}
  - Part 9 - [Deleting Products (DELETE)](../modules/javascript/misc/fullstack/day09.html){:target="_blank"}
  - Part 10 - [File Uploads & Image Management](../modules/javascript/misc/fullstack/day10.html){:target="_blank"}
  - Part 11 - [Authentication & Login Systems](../modules/javascript/misc/fullstack/day11.html){:target="_blank"}
  - Part 12 - [Authorization, Roles & Permissions](../modules/javascript/misc/fullstack/day12.html){:target="_blank"}
  - Part 13 - [Validation, Error Handling & Defensive Programming](../modules/javascript/misc/fullstack/day13.html){:target="_blank"}
  - Part 14 - [Testing Express Applications](../modules/javascript/misc/fullstack/day14.html){:target="_blank"}
  - Part 15 - [Deployment, Production & Launching Your CMS](../modules/javascript/misc/fullstack/day15.html){:target="_blank"}

<!-- Summary -->

<!-- Exercises -->

<!-- Extra Resources -->

<!-- Sources and Attributions -->
  
</details>

<hr class="mt-1">

<!-- Week 34 - Day 2 | Full Stack Project - Part 2 -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 34 - Day 2</span> | Full Stack Project - Part 2</h2>
  </summary>

### Schedule

  - **Study the suggested material**
  - **Practice on the topics and share your questions**

### Study Plan

  Study Part 2 of the Full Stack Project series:

  **Planning, Architecture & Diagrams**

  By the end of this lesson, students will be able to:

  * Understand software architecture fundamentals
  * Explain separation of concerns
  * Understand MVC architecture
  * Design a relational database schema
  * Understand primary keys and relationships
  * Organize an Express application into modules
  * Use Express Router
  * Design route structures before implementation
  * Create architecture diagrams
  * Plan a CRUD application before writing code

  - Part 1 - [Express + EJS Fundamentals](../modules/javascript/misc/fullstack/day01.html){:target="_blank"}
  - ➡️ **Part 2 - [Planning, Architecture & Diagrams](../modules/javascript/misc/fullstack/day01.html){:target="_blank"}**
  - Part 3 - [Public Routes & Basic CRUD](../modules/javascript/misc/fullstack/day01.html){:target="_blank"}
  - Part 4 - [Single Product Pages & Database-Driven Routing](../modules/javascript/misc/fullstack/day01.html){:target="_blank"}
  - Part 5 - [Creating Products (CREATE)](../modules/javascript/misc/fullstack/day01.html){:target="_blank"}
  - Part 6 - [Pagination](../modules/javascript/misc/fullstack/day01.html){:target="_blank"}
  - Part 7 - [Search & Filtering](../modules/javascript/misc/fullstack/day01.html){:target="_blank"}
  - Part 8 - [Updating Products (UPDATE)](../modules/javascript/misc/fullstack/day01.html){:target="_blank"}
  - Part 9 - [Deleting Products (DELETE)](../modules/javascript/misc/fullstack/day01.html){:target="_blank"}
  - Part 10 - [File Uploads & Image Management](../modules/javascript/misc/fullstack/day01.html){:target="_blank"}
  - Part 11 - [Authentication & Login Systems](../modules/javascript/misc/fullstack/day01.html){:target="_blank"}
  - Part 12 - [Authorization, Roles & Permissions](../modules/javascript/misc/fullstack/day01.html){:target="_blank"}
  - Part 13 - [Validation, Error Handling & Defensive Programming](../modules/javascript/misc/fullstack/day01.html){:target="_blank"}
  - Part 14 - [Testing Express Applications](../modules/javascript/misc/fullstack/day01.html){:target="_blank"}
  - Part 15 - [Deployment, Production & Launching Your CMS](../modules/javascript/misc/fullstack/day01.html){:target="_blank"}

<!-- Summary -->

<!-- Exercises -->

<!-- Extra Resources -->

<!-- Sources and Attributions -->
  
</details>

<hr class="mt-1">

<!-- Week 34 - Day 3 | Full Stack Project - Part 3 -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 34 - Day 3</span> | Full Stack Project - Part 3</h2>
  </summary>

### Schedule

  - **Study the suggested material**
  - **Practice on the topics and share your questions**

### Study Plan

  Study Part 3 of the Full Stack Project series:

  **Public Routes & Basic CRUD**

  By the end of this lesson, students will be able to:

  * Create a SQLite database
  * Design and create tables
  * Seed a database with sample data
  * Connect Express to SQLite
  * Execute SQL queries
  * Display records using EJS
  * Understand basic CRUD database operations
  * Separate database logic from routes
  * Build the "Read" portion of a CMS

  - Part 1 - [Express + EJS Fundamentals](../modules/javascript/misc/fullstack/day01.html){:target="_blank"}
  - Part 2 - [Planning, Architecture & Diagrams](../modules/javascript/misc/fullstack/day02.html){:target="_blank"}
  - ➡️ **Part 3 - [Public Routes & Basic CRUD](../modules/javascript/misc/fullstack/day03.html){:target="_blank"}**
  - Part 4 - [Single Product Pages & Database-Driven Routing](../modules/javascript/misc/fullstack/day04.html){:target="_blank"}
  - Part 5 - [Creating Products (CREATE)](../modules/javascript/misc/fullstack/day05.html){:target="_blank"}
  - Part 6 - [Pagination](../modules/javascript/misc/fullstack/day06.html){:target="_blank"}
  - Part 7 - [Search & Filtering](../modules/javascript/misc/fullstack/day07.html){:target="_blank"}
  - Part 8 - [Updating Products (UPDATE)](../modules/javascript/misc/fullstack/day08.html){:target="_blank"}
  - Part 9 - [Deleting Products (DELETE)](../modules/javascript/misc/fullstack/day09.html){:target="_blank"}
  - Part 10 - [File Uploads & Image Management](../modules/javascript/misc/fullstack/day10.html){:target="_blank"}
  - Part 11 - [Authentication & Login Systems](../modules/javascript/misc/fullstack/day11.html){:target="_blank"}
  - Part 12 - [Authorization, Roles & Permissions](../modules/javascript/misc/fullstack/day12.html){:target="_blank"}
  - Part 13 - [Validation, Error Handling & Defensive Programming](../modules/javascript/misc/fullstack/day13.html){:target="_blank"}
  - Part 14 - [Testing Express Applications](../modules/javascript/misc/fullstack/day14.html){:target="_blank"}
  - Part 15 - [Deployment, Production & Launching Your CMS](../modules/javascript/misc/fullstack/day15.html){:target="_blank"}

<!-- Summary -->

<!-- Exercises -->

<!-- Extra Resources -->

<!-- Sources and Attributions -->
  
</details>

<hr class="mt-1">

<!-- Week 34 - Day 4 | Full Stack Project - Part 4 -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 34 - Day 4</span> | Full Stack Project - Part 4</h2>
  </summary>

### Schedule

  - **Study the suggested material**
  - **Practice on the topics and share your questions**

### Study Plan

  Study Part 4 of the Full Stack Project series:

  **Single Product Pages & Database-Driven Routing**

  By the end of this lesson, students will be able to:

  * Understand route parameters
  * Retrieve URL parameters using Express
  * Query a database for a single record
  * Handle missing records gracefully
  * Build dynamic detail pages
  * Create reusable database queries
  * Understand 404 responses
  * Create database-driven navigation

  - Part 1 - [Express + EJS Fundamentals](../modules/javascript/misc/fullstack/day01.html){:target="_blank"}
  - Part 2 - [Planning, Architecture & Diagrams](../modules/javascript/misc/fullstack/day01.html){:target="_blank"}
  - Part 3 - [Public Routes & Basic CRUD](../modules/javascript/misc/fullstack/day01.html){:target="_blank"}
  - ➡️ **Part 4 - [Single Product Pages & Database-Driven Routing](../modules/javascript/misc/fullstack/day01.html){:target="_blank"}**
  - Part 5 - [Creating Products (CREATE)](../modules/javascript/misc/fullstack/day01.html){:target="_blank"}
  - Part 6 - [Pagination](../modules/javascript/misc/fullstack/day01.html){:target="_blank"}
  - Part 7 - [Search & Filtering](../modules/javascript/misc/fullstack/day01.html){:target="_blank"}
  - Part 8 - [Updating Products (UPDATE)](../modules/javascript/misc/fullstack/day01.html){:target="_blank"}
  - Part 9 - [Deleting Products (DELETE)](../modules/javascript/misc/fullstack/day01.html){:target="_blank"}
  - Part 10 - [File Uploads & Image Management](../modules/javascript/misc/fullstack/day01.html){:target="_blank"}
  - Part 11 - [Authentication & Login Systems](../modules/javascript/misc/fullstack/day01.html){:target="_blank"}
  - Part 12 - [Authorization, Roles & Permissions](../modules/javascript/misc/fullstack/day01.html){:target="_blank"}
  - Part 13 - [Validation, Error Handling & Defensive Programming](../modules/javascript/misc/fullstack/day01.html){:target="_blank"}
  - Part 14 - [Testing Express Applications](../modules/javascript/misc/fullstack/day01.html){:target="_blank"}
  - Part 15 - [Deployment, Production & Launching Your CMS](../modules/javascript/misc/fullstack/day01.html){:target="_blank"}

<!-- Summary -->

<!-- Exercises -->

<!-- Extra Resources -->

<!-- Sources and Attributions -->
  
</details>

<hr class="mt-1">

<!-- Week 34 - Day 5 | Full Stack Project - Part 5 -->
<details markdown="1">
  <summary>
    <h2>
      <span class="summary-day">Week 34 - Day 5</span> | Full Stack Project - Part 5</h2>
  </summary>

### Schedule

  - **Study the suggested material**
  - **Practice on the topics and share your questions**

### Study Plan

  Study Part 5 of the Full Stack Project series:

  **Creating Products (CREATE)**

  By the end of this lesson, students will be able to:

  * Build HTML forms using EJS
  * Understand GET vs POST
  * Process form submissions
  * Parse form data using Express middleware
  * Validate user input
  * Insert records into SQLite
  * Handle validation errors
  * Redirect users after successful actions
  * Understand the POST-Redirect-GET pattern
  * Build the Create portion of CRUD

  - Part 1 - [Express + EJS Fundamentals](../modules/javascript/misc/fullstack/day01.html){:target="_blank"}
  - Part 2 - [Planning, Architecture & Diagrams](../modules/javascript/misc/fullstack/day02.html){:target="_blank"}
  - Part 3 - [Public Routes & Basic CRUD](../modules/javascript/misc/fullstack/day03.html){:target="_blank"}
  - Part 4 - [Single Product Pages & Database-Driven Routing](../modules/javascript/misc/fullstack/day04.html){:target="_blank"}
  - ➡️ **Part 5 - [Creating Products (CREATE)](../modules/javascript/misc/fullstack/day05.html){:target="_blank"}**
  - Part 6 - [Pagination](../modules/javascript/misc/fullstack/day06.html){:target="_blank"}
  - Part 7 - [Search & Filtering](../modules/javascript/misc/fullstack/day07.html){:target="_blank"}
  - Part 8 - [Updating Products (UPDATE)](../modules/javascript/misc/fullstack/day08.html){:target="_blank"}
  - Part 9 - [Deleting Products (DELETE)](../modules/javascript/misc/fullstack/day01.html){:target="_blank"}
  - Part 10 - [File Uploads & Image Management](../modules/javascript/misc/fullstack/day10.html){:target="_blank"}
  - Part 11 - [Authentication & Login Systems](../modules/javascript/misc/fullstack/day11.html){:target="_blank"}
  - Part 12 - [Authorization, Roles & Permissions](../modules/javascript/misc/fullstack/day12.html){:target="_blank"}
  - Part 13 - [Validation, Error Handling & Defensive Programming](../modules/javascript/misc/fullstack/day13.html){:target="_blank"}
  - Part 14 - [Testing Express Applications](../modules/javascript/misc/fullstack/day14.html){:target="_blank"}
  - Part 15 - [Deployment, Production & Launching Your CMS](../modules/javascript/misc/fullstack/day15.html){:target="_blank"}

<!-- Summary -->

<!-- Exercises -->

<!-- Extra Resources -->

<!-- Sources and Attributions -->
  
</details>


<hr class="mt-1">

**Weekly feedback:** Hey, it's really important for us to know how your experience with the course has been so far, so don't forget to fill in and submit your [**mandatory** feedback form](https://forms.gle/S6Zg3bbS2uuwsSZF9){:target="_blank"} before the day ends. Thanks you!



---

<!-- COMMENTS: -->
<script src="https://utteranc.es/client.js"
  repo="in-tech-gration/WDX-180"
  issue-term="pathname"
  theme="github-dark"
  crossorigin="anonymous"
  async>
</script>