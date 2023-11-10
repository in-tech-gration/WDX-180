const { createSyllabusFromMarkdownText } = require("../sgen.js");

const curriculumYaml = `
input: curriculum/curriculum.draft.md
output: curriculum/curriculum.output.md
messages:
  MODULE_CURRENTLY_NOT_AVAILABLE: "🔒 Stay tuned! This module is on the way."
Syllabus:
  Beginner:
    title: "Beginner: WDX 60°"
    subtitle: ""
    schedule:
      weeks: # Can also be 'days'
        1: 
          title: "Basics of Computing, How the Internet & the World Wide Web works, intro to HTML, CSS and JavaScript"
          open: true
        2: 
          title: "HTML, Accessibility & Git"
          open: true
        3: 
          title: "CSS, Accessibility & more Git"
        4: 
          title: "JavaScript Core 1"
        5: 
          title: "JavaScript Core 2"
        6: 
          title: "CSS 2 & Performance"
        7: 
          title: "Web APIs 1: DOM, Events, Asynchronous Programming & Ajax"
        8: 
          title: "Web APIs 2: Promises, JSON, Fetch API, Web Storage, Media, Drag and Drop"
        9: 
          title: "Functional Programming 1, Clean Code & Testing"
        10: 
          title: "CSS Frameworks"
        11: 
          title: "Templating, JavaScript Frameworks & Git Workflow"
        12: 
          title: "Deploying our Applications & Group Project"
  Intermediate:
    title: "Intermediate: WDX 120°"
    schedule:
      weeks:
        13:
          title: "JavaScript Intermediate 1 & Git"
        14:
          title: "Data Structures"
        15:
          title: "Algorithms"
        16:
          title: "Web APIs 3: Geolocation, Canvas, Audio API, Web Workers & more"
        17:
          title: "JavaScript Intermediate 2: Software Patterns & TypeScript"
        18:
          title: "Node.js 1"
        19:
          title: "Node.js 2, NoSQL Databases & Docker"
        20:
          title: "React 1"
        21:
          title: "React 2, Firebase"
        22:
          title: "React 3, Redux & Tech Interview"
        23:
          title: "Group Project, Tech Interview & Job Hunt"
        24:
          title: "Group Project"
  Advanced:
    title: "Advanced: WDX 180°"
    schedule:
      weeks:
        25:
          title: "JavaScript Advanced 1"
        26:
          title: "JavaScript Advanced 2, TypeScript Advanced"
        27:
          title: "Node.js 3 & Relational Databases"
        28:
          title: "Express.js, REST APIs & GraphQL"
        29:
          title: "Thinking out-of-the-box: CLI, Browser Extensions & ElectronJS"
        30:
          title: "Functional Programming 2, Software Principles & Reading Academic Papers"
        31:
          title: "Content Management Systems, WordPress, Eleventy & Serverless Architecture"
        32:
          title: "Introduction to AI, Machine Learning & Tensorflow.js"
        33:
          title: "Introduction to Data Science & Danfo.js"
        34:
          title: "Blockchain & Web3"
        35:
          title: "Solo Project"
        36:
          title: "Solo Project"
        37:
          title: The Road Ahead
          no_unit: true
`

const textContent = `
# Web Development X - 180°

![](assets/syllabus.jpg)

## Overview 

  The \`Intechgration.io\` WDX curriculum consists of several lessons spread over 9 months, covering concepts such as the Internet, World Wide Web, HTML, CSS, JavaScript, Node.js, React and more.

  This course will guide and support students towards the following goals:

  - Gain a firm understanding of computing and basic computer science concepts
  - Understand how the Internet and the Web are working
  - Learn how web clients and web servers work
  - Build websites using web technologies such as HTML, CSS and JavaScript
  - Become frontend developers
  - Get to know how to develop backend web applications
  - Work and interact with databases
  - Get a basic introduction to AI and Machine Learning
  - Become responsible and ethical professionals 

## Tracking your progress

  Once you've joined the course and forked this repository, you'll be tracking your progress by updating several CSV files _(found under your personal \`user/\` directory)_. You will be evaluating (and re-evaluating) your level of knowledge for each particular concept and self-assess your skills throughout the course. You will be sharing your progress with your instructor(s) and/or mentor(s).

## Syllabus

{{ WDX:Syllabus }}

---
`

const expected = `
# Web Development X - 180°

![](assets/syllabus.jpg)

## Overview 

  The \`Intechgration.io\` WDX curriculum consists of several lessons spread over 9 months, covering concepts such as the Internet, World Wide Web, HTML, CSS, JavaScript, Node.js, React and more.

  This course will guide and support students towards the following goals:

  - Gain a firm understanding of computing and basic computer science concepts
  - Understand how the Internet and the Web are working
  - Learn how web clients and web servers work
  - Build websites using web technologies such as HTML, CSS and JavaScript
  - Become frontend developers
  - Get to know how to develop backend web applications
  - Work and interact with databases
  - Get a basic introduction to AI and Machine Learning
  - Become responsible and ethical professionals 

## Tracking your progress

  Once you've joined the course and forked this repository, you'll be tracking your progress by updating several CSV files _(found under your personal \`user/\` directory)_. You will be evaluating (and re-evaluating) your level of knowledge for each particular concept and self-assess your skills throughout the course. You will be sharing your progress with your instructor(s) and/or mentor(s).

## Syllabus

### Beginner: WDX 60°

  - [**Week 01**: Basics of Computing, How the Internet & the World Wide Web works, intro to HTML, CSS and JavaScript](week01/index.md)
  - [**Week 02**: HTML, Accessibility & Git](week02/index.md)
  - [**Week 03**: CSS, Accessibility & more Git](#) _(🔒 Stay tuned! This module is on the way.)_
  - [**Week 04**: JavaScript Core 1](#) _(🔒 Stay tuned! This module is on the way.)_
  - [**Week 05**: JavaScript Core 2](#) _(🔒 Stay tuned! This module is on the way.)_
  - [**Week 06**: CSS 2 & Performance](#) _(🔒 Stay tuned! This module is on the way.)_
  - [**Week 07**: Web APIs 1: DOM, Events, Asynchronous Programming & Ajax](#) _(🔒 Stay tuned! This module is on the way.)_
  - [**Week 08**: Web APIs 2: Promises, JSON, Fetch API, Web Storage, Media, Drag and Drop](#) _(🔒 Stay tuned! This module is on the way.)_
  - [**Week 09**: Functional Programming 1, Clean Code & Testing](#) _(🔒 Stay tuned! This module is on the way.)_
  - [**Week 10**: CSS Frameworks](#) _(🔒 Stay tuned! This module is on the way.)_
  - [**Week 11**: Templating, JavaScript Frameworks & Git Workflow](#) _(🔒 Stay tuned! This module is on the way.)_
  - [**Week 12**: Deploying our Applications & Group Project](#) _(🔒 Stay tuned! This module is on the way.)_

### Intermediate: WDX 120°

  - [**Week 13**: JavaScript Intermediate 1 & Git](#) _(🔒 Stay tuned! This module is on the way.)_
  - [**Week 14**: Data Structures](#) _(🔒 Stay tuned! This module is on the way.)_
  - [**Week 15**: Algorithms](#) _(🔒 Stay tuned! This module is on the way.)_
  - [**Week 16**: Web APIs 3: Geolocation, Canvas, Audio API, Web Workers & more](#) _(🔒 Stay tuned! This module is on the way.)_
  - [**Week 17**: JavaScript Intermediate 2: Software Patterns & TypeScript](#) _(🔒 Stay tuned! This module is on the way.)_
  - [**Week 18**: Node.js 1](#) _(🔒 Stay tuned! This module is on the way.)_
  - [**Week 19**: Node.js 2, NoSQL Databases & Docker](#) _(🔒 Stay tuned! This module is on the way.)_
  - [**Week 20**: React 1](#) _(🔒 Stay tuned! This module is on the way.)_
  - [**Week 21**: React 2, Firebase](#) _(🔒 Stay tuned! This module is on the way.)_
  - [**Week 22**: React 3, Redux & Tech Interview](#) _(🔒 Stay tuned! This module is on the way.)_
  - [**Week 23**: Group Project, Tech Interview & Job Hunt](#) _(🔒 Stay tuned! This module is on the way.)_
  - [**Week 24**: Group Project](#) _(🔒 Stay tuned! This module is on the way.)_

### Advanced: WDX 180°

  - [**Week 25**: JavaScript Advanced 1](#) _(🔒 Stay tuned! This module is on the way.)_
  - [**Week 26**: JavaScript Advanced 2, TypeScript Advanced](#) _(🔒 Stay tuned! This module is on the way.)_
  - [**Week 27**: Node.js 3 & Relational Databases](#) _(🔒 Stay tuned! This module is on the way.)_
  - [**Week 28**: Express.js, REST APIs & GraphQL](#) _(🔒 Stay tuned! This module is on the way.)_
  - [**Week 29**: Thinking out-of-the-box: CLI, Browser Extensions & ElectronJS](#) _(🔒 Stay tuned! This module is on the way.)_
  - [**Week 30**: Functional Programming 2, Software Principles & Reading Academic Papers](#) _(🔒 Stay tuned! This module is on the way.)_
  - [**Week 31**: Content Management Systems, WordPress, Eleventy & Serverless Architecture](#) _(🔒 Stay tuned! This module is on the way.)_
  - [**Week 32**: Introduction to AI, Machine Learning & Tensorflow.js](#) _(🔒 Stay tuned! This module is on the way.)_
  - [**Week 33**: Introduction to Data Science & Danfo.js](#) _(🔒 Stay tuned! This module is on the way.)_
  - [**Week 34**: Blockchain & Web3](#) _(🔒 Stay tuned! This module is on the way.)_
  - [**Week 35**: Solo Project](#) _(🔒 Stay tuned! This module is on the way.)_
  - [**Week 36**: Solo Project](#) _(🔒 Stay tuned! This module is on the way.)_
  - [**The Road Ahead**](#) _(🔒 Stay tuned! This module is on the way.)_

---
`

const outputContent = createSyllabusFromMarkdownText({ 
  textContent, configYaml: curriculumYaml 
});

console.log(outputContent === expected);
