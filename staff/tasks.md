# Tasks

## CONTENT

  ### Content Review & curriculum selection: [Machine Learning for Web Developers (Web ML)](https://www.youtube.com/playlist?list=PLOU2XLYxmsILr3HQpqjLAUkIPa5EaZiui)

  - Total duration: 07:53:45
  - Videos counted: 47

  Please use the [**Review Form**](https://docs.google.com/document/d/1CRaejbYTLorucBXauv2Z-FEqXtYB5K1hdsZu7496YEc/edit?usp=sharing) if you intend to review the content and provide a valuable feedback. Create a copy of the form template and start working there.

  ### Content Review & curriculum selection: [Dave Gray's Next.js course](https://www.youtube.com/playlist?list=PL0Zuz27SZ-6Pk-QJIdGd1tGZEzy9RTgtj)

  - Videos: 1 - 12. 14 - 15. 19 - 22. 25.

  ### Create Searchable Glossary based on MDN

  **Specifications:**

  - Based on [MDN Web Docs Glossary](https://developer.mozilla.org/en-US/docs/Glossary)

  - Glossary terms should be placed in `resources/glossary/` as Markdown files (`.md`).

  - Markdown files should be parsed using the `tools/yari.parser.js` script.

  - (New) glossary terms should also be appended to the `resources/terms.json` file in alphabetical order.

## MISC

  ### Complete unit testing and documentation pages for the tools

    Scripts found in `tools/` folder must be accompanied by several unit tests.

    At this point, only a handful of scripts contain unit tests. Check [the relevant file](../tools/README.md) to get more information about the tools and their testing status.

    If you feel ready to contribute, and it's the first time you are working on the testing of a tool, please reach out to the corresponding Project Manager for the tool before starting to work on the tests.

  ### Set up GitHub Actions to run housekeeping scripts (linting, etc.)

    For more information reach out to: Kostas Minaidis (@kostasx)

  ### Implement Digital Certificates Issuing (Next.js)

    A special certificate HTML template, along with a unique address on our website will be used to certify the attendance and completion of the various parts of our curriculum (60°, 120°, 180°).

    **Specifications:**

    - Must be built on top of `Next.js`
    - Must have a unique (hashed) shareable URL

## TOOLS

  ### Implement Weekly Feedback/Follow-up form

    At the end of each week, we ask students to submit a feedback form in order to check on their progress and get some valuable feedback on how things are going.

    **Specifications:**

    - Must be anonymous

  ### Implement a tool to estimate reading time for markdown files

    The tool should be able to read and parse a markdown file, estimate the reading time and possibly have the ability to automatically update the file with a section containing the reading time, ideally somewhere at the top of the file.

    - Possible (library) candidates: [reading-time](https://github.com/ngryman/reading-time)

  ### Complete open tasks for the validator.js tool

  See the [README.md](../tools/README.md#toolsvalidatorjs) file `Tasks` section for more details. 