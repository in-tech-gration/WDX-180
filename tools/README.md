# Tools

If you intend to create, update or maintain a tool, please reach out to the project manager first.

**IMPORTANT:** if you intend to contribute and collaborate on the development of the platform 
and the curriculum, we highly recommend that you have the following 2 VSCode Extensions installed
on your system:

- [**VSCode WDX Extension Pack**](https://marketplace.visualstudio.com/items?itemName=kostasx.vscode-wdx-extension-pack)
- [**WDX Development Pack**](https://github.com/in-tech-gration/VSCode-WDX-Development-Extension)
  - You will need to download the `.vsix` file and install it manually via `code --install-extension vscode-wdx-development-extension-0.1.0.vsix` (read more about command line extension management [here](https://code.visualstudio.com/docs/editor/extension-marketplace#_command-line-extension-management
))

## EDUCATIONAL TOOLS

  - [JSON Placeholder](https://jsonplaceholder.typicode.com/): `npm run jsonplaceholder`

## GENERAL TOOLS

  ### Create a generic curriculum linting tool

  **Project manager:** Kostas Minaidis (@kostasx)

  - Requirements: scans all files and folders and lints them according to the following rules:
    - Ensures that all folders under resources/ are in `all_lowercase_underscore`
    - Ensures that all spacing is based on 2 space characters

  ### tools/utils/index.js

  **Project manager:** Kostas Minaidis (@kostasx)

  **Testing:** 

    - Files: `tools/utils/index.test.js` 
    - Coverage: `LOW`

## MARKDOWN VALIDATOR 

  ### tools/validator.js

  **Project manager:** Kostas Minaidis (@kostasx)

  **Description:** A tool to read and validate markdown files. Specifically, it is used to read and validate the curriculum markdown files that contain the weekly content and other related resources.

  **Testing:** `NO`

  **Tasks:**

  - (001) Scan the file for links and check whether these resources are contained within the `resources/resources.json` file. You can start by validating the [/curriculum/week18/README.md](../curriculum/week18/README.md) file as it contains a lot of links that are not referenced in the `resources.json`.  

  > **IMPORTANT:** If you are up to the challenge, please create a branch named `tasks-tools-validator-001` and work on that branch. Try to implement as many unit tests as possible to ensure the reliability of your code.

  For example, here are some links contained in the `README.md` file:

  ```markdown
  - [NodeJS Official Site](https://nodejs.org/)
  - [NPM Official Site](https://www.npmjs.com/)
  - [ExpressJS Official Site](https://expressjs.com/)
  - [NPM: CORS package](https://www.npmjs.com/package/cors)
  - [MDN: CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
  - [Thunder Client Official Site](https://www.thunderclient.com/)
  ```

  Most, if not all, of these links are not found inside the `resources.json`.

  You can start by reading the file, parsing it for links starting with `https://` and then check through the `resources.json` to see if they are to be found there.

  You can check the `resources` property object, iterate over all the entries and check whether the links are matched with an `identifier` property of an entry.

  ---

  - (002) Check if intermediary Headings are skipped, e.g. going from H1 to H3

  > **IMPORTANT:** If you are up to the challenge, please create a branch named `tasks-tools-validator-002` and work on that branch. Try to implement as many unit tests as possible to ensure the reliability of your code.

  ---
  
  - (003) Check if front matter is present and contains necessary key/value pairs

  > **IMPORTANT:** If you are up to the challenge, please create a branch named `tasks-tools-validator-003` and work on that branch. Try to implement as many unit tests as possible to ensure the reliability of your code.

  ---

  - (004) Husky script to ensure that UPDATED section has been updated

  > **IMPORTANT:** If you are up to the challenge, please create a branch named `tasks-tools-validator-004` and work on that branch. Try to implement as many unit tests as possible to ensure the reliability of your code.

  ---

  - (005) Check if Sources and Attributions section contains MDN Permalinks for version control and bi-annual review

  > **IMPORTANT:** If you are up to the challenge, please create a branch named `tasks-tools-validator-005` and work on that branch. Try to implement as many unit tests as possible to ensure the reliability of your code.

  - (006) If a Day is missing All the required headings (e.g. Study Plan, Summary, Exercises, etc.), then the test for that particular day is ignored. It should display a message that the daily structure check has failed.

  - (007) script should be able to validate non-weekly content.
  Right now, it gives warnings such as the following:

  "WARNING: Daily Content (## Week X - Day Y) requires 5 sections. Found: 0"

  - (008) Fix bug that reports daily structure error on Day 5, when only Day 1 is correctly structure. Expected behavior: It should warn us about Day 2, 3, 4, 5 instead of skipping to 5. Example current output:

  "WARNING: Daily structure for day 5 is missing some sections.
   6 required. Found 0."

  - (009) Find entries like `[Watch: **JavaScript Numbers, Number Methods, isNaN | JavaScript Tutorial for Beginners**]` and escape the `|` pipe character with `\|` as it breaks during the Jekyll build process

  Breaking links:

  Don't do this: [Watch: **What is Localhost? | Explained**]()
  Do this: [Watch: **What is Localhost? \| Explained**]()

  Ref: https://github.com/jekyll/jekyll/issues/2818

## YARI MARKDOWN PARSER

  ### tools/yari.parser.js

  **Project manager:** Kostas Minaidis (@kostasx)

  **Testing:** 

    - Files: `tools/yari.parser.test.js` 
    - Coverage: `LOW`

## YARI CONTENT DOWNLOADER

  ### tools/yari.download.js

  **Project manager:** Kostas Minaidis (@kostasx)

  **Testing:** `NO`

## YOUTUBE TOOL

  ### tools/yt.js

  **Project manager:** Kostas Minaidis (@kostasx)

  **Description:** Download YouTube information and metadata via the YouTube v3 API.

  **Requirements:** You must supply a `YOUTUBE_API_KEY` in the `.env` file. See `.env.sample` if you don't already have a `.env` file.

  **Testing:** `NO`

## MARKDOWN SCANNER

  ### tools/capture.js

  **Project manager:** Kostas Minaidis (@kostasx)

  **Testing:** `NO`

## RESOURCES TOOL

  ### tools/resources.js

  **Project manager:** Kostas Minaidis (@kostasx)

  **Features:**

  - Automate MDN content integration. 
    - If you want to integrate a new MDN resource, you can start by providing the full URL to the tool using the `--mdn` or `-m` option. 
    
    Syntax: `resources.js --mdn <MDN_URL> -o <TARGET_DIR>`

    Example: 

    `node tools/resources.js -m https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals#summary -o curriculum/week02/resources`

    The above command will create the following structure:
    
    - `curriculum/week02/resources/HTML_text_fundamentals/`  
      - `assets/`  
      - `README.md`  

    The command will also download the markdown source and append it to the `README.md` file.

  
