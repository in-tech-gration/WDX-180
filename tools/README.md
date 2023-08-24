# Tools

If you intend to create, update or maintain a tool, please reach out to the project manager first.

## GENERAL UTILITIES

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
