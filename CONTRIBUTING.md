🚧 WORK IN PROGRESS

# Welcome to the WDX 180° contributing guide 

Thank you for investing your time in contributing to our project! Any contribution you make will be reflected on the [Contributors](README.md#contribute) :sparkles:.

The WDX180 is licensed under the [GPLv3](https://www.gnu.org/licenses/gpl-3.0.txt) license. The source code of the tutorial is hosted on [GitHub](https://github.com/in-tech-gration/WDX-180). 

Read our [Code of Conduct](CODE_OF_CONDUCT.md) to keep our community approachable and respectable.

In this guide you will get an overview of the contribution workflow.

## New contributor guide

To get an overview of the project, please read the [README](README.md). 

## Getting started

- Search if an issue already exists []()
- Fork the repo
- Create a branch
- Make changes
- Commit and Push your changes
- Open an Issue
- Open a Pull Request
- We will review your PR and merge it :tada::tada:
- The team will add you to the list of contributors! []()

## Reviewing/Evaluating Online Content

Before evaluating or reviewing any content or online resource, ensure that you have made a copy of the [Review Google Document](https://docs.google.com/document/d/1CRaejbYTLorucBXauv2Z-FEqXtYB5K1hdsZu7496YEc/copy). Once you've made a copy, update the title then click the `Share` button, change the `General Access` to `Anyone with the link` and select `Commenter` as the role. Once the review is finished, update the document and share the link with the `integration.io` staff. 

In general, we try to evaluate each resource carefully and given a rough estimation of its educational value, **rate it on a scale from 0 to 5**. When a resource gets **a rating higher than 3** (out of 5) it **can be accepted**, otherwise we will be sharing the resource only if a specific part of it has some high value and only if it is accompanied by detailed instructions on which parts to focus on and which parts should be disregarded or considered of no value (e.g. outdated or misleading content). 

### Videos

- **Check for outdated content**. When reviewing videos, it's important to check whether the concepts explained or the content itself is outdated. If that's the case, make sure to accompany the video with relevant notes. Here's some examples:

  - In [this really nice introduction to the browser](https://www.youtube.com/watch?v=DuSURHrZG6I) the `http` protocol is mentioned along with the default port `80`. These days the default protocol is `https` and the default port is `443`. We've left a comment reminding the viewers about this important distinction.

- **Always check the comments section** for more information and feedback from the community. For example, you can use a Chrome extension like [SummifyYT](https://chrome.google.com/webstore/detail/summifyyt-summarize-youtu/mcjgidambippeaajehcfimmephgholco) to get a summary of all the submitted comments in a YouTube video. For example, here's what `SummifyYT` has to say about a video:

  - _"A few comments highlighted technical errors within the video, such as typos, inconsistencies, and inaccuracies."_ In this case, we should carefully go through the comments, find the inconsistencies and inform about them whenever we share the selected resource. 

- **YouTube:** Learn how to share or embed a part of a video using custom start and end timestamps by following [this guide](https://www.coolfundas.com/youtube-videos-how-to-set-start-and-end-time-easily/). An embed URL with start and end times, looks like this: `https://www.youtube.com/embed/7_LPdttKXPc?start=161&end=176`. In this example, `7_LPdttKXPc` is the YouTube video unique ID.
  - In case you want to hide the video controls (play, pause, etc.) in order to prevent the user from looking at other parts of a video, you can append the `controls=0` query string to the URL: `https://www.youtube.com/embed/7_LPdttKXPc?start=161&end=176&controls=0`.

## Teaching & Mentoring

Don't forget to consult the [Teaching Resources](/teaching/README.md) for additional information and useful resources related to education.

## Making a Pull Request

Here are some things to keep in mind before making a PR:

- **Compress those images:** If you are including images or photos in your PR, make sure that you have used a compression tool like [TinyPNG*](https://tinypng.com/) or [ImageOptim (Mac)](https://imageoptim.com/mac) to minimize the file size. *_(works with all types of images)_

---

## Integrating Content from MDN 

1) We find the article on MDN (e.g. [HTML Basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics))

2) We scroll down to the bottom to find the `View the source on GitHub` link and click it.

3) We click the `More file actions button` (the ... three dots at the top right) and select `Copy permalink`.

4) We download the raw file and insert an extra field inside the Frontmatter called `permalink`. We paste the link we copied on step 3:

```markdown
---
title: HTML basics
slug: Learn/Getting_started_with_the_web/HTML_basics
page-type: learn-module-chapter
permalink: https://github.com/mdn/content/blob/9f27a13036d9a0367a500c853648cc3b02da779a/files/en-us/learn/getting_started_with_the_web/html_basics/index.md
---
```

This helps us track our content sources and be able to check whether they are up-to-date.

5) We remove all the dynamic template content (e.g. sidebar, footer, etc.) from the markdown file. For example:

```
{{LearnSidebar}}{{PreviousMenuNext("Learn/Getting_started_with_the_web/Dealing_with_files", "Learn/Getting_started_with_the_web/CSS_basics", "Learn/Getting_started_with_the_web")}}
```

6) Replace relative path links with absolute links, for example:

Before:

```markdown
[`required`](/en-US/docs/Web/HTML/Attributes/required)
```

After:

```markdown  
[`required`](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/required)
```

7) Replace dynamic template content with static content. For example:

Before:

```markdown
**{{glossary("void element", "void elements")}}**
```

After:

```markdown
**[void elements](https://developer.mozilla.org/en-US/docs/Glossary/Void_element)**
```
