# PROJECT: kiptrak

Kiptrak is a mini full-stack project that will eventually be integrated into the WDX-180 platform.

The WDX platform provides a `./user` folder that contains all the user-related data, such as personal progress tracking via `.csv` files, submitted exercises, etc.

The idea behind Kiptrak is, well... to keep track of the students' progress.

Right now, the students keep their progress through a series of CSV files. They update them manually (which sometimes leads to malformed CSV files and other errors) and then commit and push to their forked repo so we can track them through an instructor administrator tool called `Instructor Cockpit` (that's yet another mini-project here at intechgration).

The idea behind this project is to have an easier, quicker and more efficient way of letting the students track and update their progress through a nice UI that resembles [Google Sheets]() or [Microsoft Excel](https://www.microsoft365.com/).

The progress CSV files can be found in the `user/` directory under each week and subsequent day folders, e.g. `user/week01/progress/progress.w01.d01.csv` for week 1, day 1, `user/week01/progress/progress.w01.d02.csv` for week 1, day 2 and so forth. These user CSV files are based on a draft version of each file named `user/week01/progress/progress.draft.w01.d01.csv`, `user/week01/progress/progress.draft.w01.d02.csv` and so forth. The users must copy these files, rename them by removing the `draft` part from the filename and start updating them as soon as they finish each task.

In order to manage these files efficiently and through different environments (e.g. command line, REST API, browser, etc.) the following set of tools must be developed:

- At a very low level, we need to have a TypeScript library that reads, writes, updates and deletes (CRUD) the `progress.draft.*.csv` files which have a consistent table format. The library should expose (exports) a set of well-tested functions that perform these CRUD operations on the table contents of these files. Here are some of the required operations:

1. Read the full contents of a `.csv` file
2. Read a single row from a `.csv` file
3. Read multiple rows from a `.csv` file
4. Filter the row output (e.g. from 1, 2 and 3) to contain only a selected set of columns
5. Read rows and columns in ascending or descending order
6. Read rows and columns based on a filtering callback function (e.g. select columns that contain a certain keyword)
7. Update a row
8. Update a column
9. Lint/test that a row, column or a whole `.csv` contains the correct syntax, according to the CSV standards and a specific Schema for each column (e.g. a column age should only contain 3-digit numbers, etc.)

We've found this interesting library: [https://github.com/adaltas/node-csv](https://github.com/adaltas/node-csv) which might be a good candidate for the CRUD service.

- At a higher level, an Express.js API should be developed that is built on top of the low-level CSV CRUD library, exposing the same CRUD functionality through a REST interface.

- A simple React SPA that displays a page through which the students can access and update their CSV files, viewed as Spreadsheets.
  - Candidate Spreadsheet/CSV viewer libraries:
    - **SheetJS:** [https://github.com/SheetJS/sheetjs](https://github.com/SheetJS/sheetjs) ([Docs](https://docs.sheetjs.com/docs/demos/frontend/react/))
    - [https://github.com/iddan/react-spreadsheet](https://github.com/iddan/react-spreadsheet)
    - [https://handsontable.com/docs/javascript-data-grid/installation/](https://handsontable.com/docs/javascript-data-grid/installation/)
    - [https://github.com/exceljs/exceljs](https://github.com/exceljs/exceljs)
    - [https://github.com/natergj/excel4node](https://github.com/natergj/excel4node)
    - [https://github.com/silevis/reactgrid](https://github.com/silevis/reactgrid)
    - [https://github.com/ashishd751/react-excel-renderer](https://github.com/ashishd751/react-excel-renderer)
    - [https://github.com/nzambello/react-csv-reader](https://github.com/nzambello/react-csv-reader)

## SPECS

- **Project Manager**: [Asteris Giannoudis](https://github.com/asterisg)

- **Git Branch:** kiptrak

- *Requirements/Features:*
  - Backend is based on TypeScript, Node.js and Express.js
  - Frontend is a based on TypeScript and React
  - Page displays a header with the student name
  - Page displays a list of available weeks which are clickable and open up the progress sheet of each week
  - Ability to create a new progress sheet for a specific day, based on the draft
  - Chart view to show the overall progress of a student based on the submitted (checked) tasks in their CSV
  - POSTMAN collection for all the CRUD operations on the Backend

