// DESCRIPTION: Utilities for CSV file (e.g. linting)

// 0) IMPORTS: =================================================================
const path = require("node:path");
const fs = require("node:fs");
const { parseArgs } = require("node:util");
const {
  warn,
  checkmark,
  ok,
  info,
  xmark
} = require("./utils");
// const CSVFileValidator = require("csv-file-validator"); // Temporarily disabling original library due to local bug fixing 
// const CSVFileValidator   = require("./libs/csv-file-validator/src/csv-file-validator");
const { parse } = require("csv/sync");

// 1) OUR FUNCTIONS: ===========================================================

function validateCSVSchema(filePath) {

  try {
    
    if ( fs.lstatSync(filePath).isDirectory() ){

      const dir    = fs.readdirSync(filePath);
      const drafts = [];

      const filteredFiles = dir.filter( file =>{
        const isDraft = file.startsWith("progress.draft.w") && file.endsWith(".csv");
        if ( isDraft ){
          drafts.push( file );
        }
        return !isDraft;
      });

      info("DRAFTS CHECK: ");

      if ( drafts.length < 5 ){
        warn(`Folder: ${filePath} seems to be missing some progress.draft CSV files. `);
      } else {
        ok("Drafts look good!\n");
      }
  
      const invalidFiles = filteredFiles.filter( file =>{
        const isValid = file.startsWith("progress.w") && file.endsWith(".csv");
        return !isValid;
      });
  

      info("STUDENT PROGRESS SHEETS CHECK: ");

      if ( invalidFiles.length === 0 ){
        ok("All good!");
      } else {
        invalidFiles.forEach( file =>{
          warn( "Error: the following file is not named correctly: ");
          info( file );
        });
      }
  
      return;
    }

  } catch (error) {

    return warn(error);
    
  }
  
  try {
    console.log(`Processing ${filePath}`);
    const fileContent = fs.readFileSync(filePath, "utf-8");

    warn("Feature currently unavailable.");
    // validateCSVSchemaUsingModule( fileContent ); // <= DEPRECATED.
    // TODO: Implement our own bug-free, simpler CSV schema validation
    // Based on fileContent, validate Schema...
    // 1) Run the file through lintCSVFile()
    // 2) Make sure that the CONFIDENCE column is set to a value between 0 and 10 when the COMPLETED column has been set to TRUE. When the COMPLETED column is set to TRUE, the CONFIDENCE column must NOT be set to "0-10" but rather reflect an integer.

  } catch (e) {
    warn(e.message);
  }

}

/* DEPRECATED DUE TO SEVERAL ISSUES WITH THE CSVFileValidator MODULE: */
function validateCSVSchemaUsingModule( fileContent ){

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
          return (level === "Beginner" | level === "Intermediate" | level === "Advanced");
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

  CSVFileValidator(fileContent, config)
    .then((csvData) => {
      csvData.data; // Array of objects from file
      csvData.inValidData; // Array of error messages
      console.log({ csvData });
      console.log( csvData.inValidData );
      console.log( csvData.data );
    })
    .catch((err) => {
      console.log({ err });
    });

}

function lintCSVFile(filePath) {

  const fileContent = fs.readFileSync(filePath, "utf-8");

  try {

    parse(fileContent);
    ok(`${checkmark} CSV Linting looks good!`)

  } catch (e) {

    warn(`${xmark} Error parsing CSV file: ${e}`);
    warn(`Line: ${e.lines}, Index: ${e.index}, Column: ${e.column} - ${e.field}...`);

  }

}

/**
 * @description Validates CLI arguments and displays available options
 * @param {*} args 
 * @param {*} options 
 */
function validateArgsAndDisplayAvailableOptions(args, options) {
  if (Object.keys(args.values).length === 0) {
    warn(`No options passed. Available options:`);
    Object.entries(options).forEach(([key, value]) => {
      console.log(`--${key}, -${value.short}`);
    })
    process.exit();
  }
}

// 2) OUR VARIABLES: ===========================================================

const options = {
  "lint": {
    type: "string",
    short: "l",
  },
  "validate-schema": {
    type: "string",
    short: "s",
  }
}

// 3) ACTION!!! ================================================================

if (require.main === module) {
  // console.log("This script was executed directly.");
  init();
} else {
  // console.log("This script was imported as a module.");
}

function init() {

  const args = parseArgs({ options, strict: false });

  validateArgsAndDisplayAvailableOptions(args, options);

  const lintOption = args.values["lint"];
  const validateSchemaOption = args.values["validate-schema"];

  if (lintOption && typeof lintOption === "string") {
    return lintCSVFile(lintOption)
  }

  if (validateSchemaOption && typeof validateSchemaOption === "string") {
    return validateCSVSchema(validateSchemaOption);
  }

}

// 4) EXPORT SECTION: ==========================================================

module.exports = {
  validateCSVSchema,
  lintCSVFile
};
