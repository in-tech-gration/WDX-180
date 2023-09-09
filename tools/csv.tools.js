// DESCRIPTION: Utilities for CSV file (e.g. linting)

// 0) IMPORTS: =================================================================
const path = require("node:path");
const fs = require("node:fs");
const { parseArgs } = require("node:util");
const { warn, ok, info } = require("./utils");
// const CSVFileValidator = require("csv-file-validator"); // Temporarily disabling original library due to local bug fixing 
const CSVFileValidator = require("./libs/csv-file-validator/src/csv-file-validator");

// 1) OUR FUNCTIONS: ===========================================================

// 2) OUR VARIABLES: ===========================================================

// 3) ACTION!!! ================================================================

if (require.main === module) {
  // console.log("This script was executed directly.");
  init();
} else {
  // console.log("This script was imported as a module.");
}

function init() {
  const fileName = process.argv[2];

  if (!fileName) {
    warn("No filename.");
    process.exit();
  }

  try {
    console.log(`Processing ${fileName}`);

    const file = fs.readFileSync(fileName, "utf-8");

    const config_basic = {
      headers: [], // required
      isHeaderNameOptional: false, // default (optional)
      isColumnIndexAlphabetic: false, // default (optional)
    };

    const config = {
      // Week, Day, Concept, Task, Level, Confidence, Completed, Submitted Links
      headers: [
        // Week
        {
          name: "Week",
          inputName: "week",
          required: true,
          requiredError: function (headerName, rowNumber, columnNumber) {
            return `${headerName} is required in the ${rowNumber} row / ${columnNumber} column`;
          },
        },
        // Day
        {
          name: "Day",
          inputName: "day",
          required: true,
          requiredError: function (headerName, rowNumber, columnNumber) {
            return `${headerName} is required in the ${rowNumber} row / ${columnNumber} column`;
          },
        },
        // Concept
        {
          name: "Concept",
          inputName: "concept",
          required: true,
          requiredError: function (headerName, rowNumber, columnNumber) {
            return `${headerName} is required in the ${rowNumber} row / ${columnNumber} column`;
          },
        },
        // Task
        {
          name: "Task",
          inputName: "task",
          required: true,
          requiredError: function (headerName, rowNumber, columnNumber) {
            return `${headerName} is required in the ${rowNumber} row / ${columnNumber} column`;
          },
        },
        // Level
        {
          name: "Level",
          inputName: "level",
          required: true,
          requiredError: function (headerName, rowNumber, columnNumber) {
            return `${headerName} is required in the ${rowNumber} row / ${columnNumber} column`;
          },
          validate: function (level) {
            // console.log("Level::validate()", level);
            // TODO: full row text is required here, e.g. -,-,-,-,-,-,-,-
            return ( level === "Beginner" | level === "Intermediate" | level === "Advanced" );
          },
          validateError: function (headerName, rowNumber, columnNumber) {
            return `${headerName} is not valid at the row: ${rowNumber} / column: ${columnNumber}`;
          }
        },
        // Confidence
        {
          name: "Confidence",
          inputName: "confidence",
          required: true,
          requiredError: function (headerName, rowNumber, columnNumber) {
            return `${headerName} is required in the ${rowNumber} row / ${columnNumber} column`;
          },
        },
        // Completed
        {
          name: "Completed",
          inputName: "completed",
          required: true,
          requiredError: function (headerName, rowNumber, columnNumber) {
            return `${headerName} is required in the ${rowNumber} row / ${columnNumber} column`;
          },
        },
        // Submitted Links
        {
          name: "Submitted Links",
          inputName: "submittedLinks",
          required: true,
          requiredError: function (headerName, rowNumber, columnNumber) {
            return `${headerName} is required in the ${rowNumber} row / ${columnNumber} column`;
          },
        },
        // {
        //   name: "Email",
        //   inputName: "email",
        //   unique: true,
        //   uniqueError: function (headerName) {
        //     return `${headerName} is not unique`;
        //   }
        // },
        // {
        //   name: "Roles",
        //   inputName: "roles",
        //   isArray: true,
        // },
        // {
        //   name: "Country",
        //   inputName: "country",
        //   optional: true,
        //   dependentValidate: function (email, row) {
        //     return isEmailDependsOnSomeDataInRow(email, row);
        //   },
        // }
      ]
    };

    CSVFileValidator(file, config)
      .then((csvData) => {
        csvData.data; // Array of objects from file
        csvData.inValidData; // Array of error messages
        // console.log({ csvData });
        console.log( csvData.inValidData );
        // console.log( csvData.data );
      })
      .catch((err) => {
        console.log({ err });
      });
  } catch (e) {
    warn(e.message);
  }
}

// 4) EXPORT SECTION: ==========================================================

module.exports = {};
