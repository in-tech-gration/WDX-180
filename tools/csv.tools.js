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
const { parse, stringify} = require("csv/sync");

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

/**
 * Gets all 'progress.draft.wXX.dYY.csv' files inside a 'progress' folder for minWeek <= week <= maxWeek inside the 'dir' folder
 * @param {*} dir `
 * @param {*} minWeek 
 * @param {*} maxWeek 
 * @returns a string array of all 'progress.draft.wXX.dYY.csv' files
 */
function getProgressDraftCsvFilesFromDir(dir, minWeek, maxWeek) {
  let files = [];
  
  // Convert minWeek and maxWeek to two-digit strings (e.g., '01', '36')
  const minWeekStr = String(minWeek).padStart(2, '0');
  const maxWeekStr = String(maxWeek).padStart(2, '0');

  // Read items in the current directory
  const items = fs.readdirSync(dir);

  for (const item of items) {
    const itemPath = path.join(dir, item);
    const stats = fs.statSync(itemPath);

    // Check if item is a directory and follows the 'weekXX' naming pattern
    if (stats.isDirectory()) {
      if (item.startsWith('week')) { 
        const weekNumber = item.slice(4); // Extract 'XX' part (the number) from 'weekXX'
        
        // Process directories within the range minWeek to maxWeek
        if (weekNumber >= minWeekStr && weekNumber <= maxWeekStr) {
          console.log(`Processing directory: ${item}`);
          files = files.concat(getProgressDraftCsvFilesFromDir(itemPath, minWeek, maxWeek));
        }
      } else if (item === "progress") {
        files = files.concat(getProgressDraftCsvFilesFromDir(itemPath, minWeek, maxWeek))
      }
    } else if (path.extname(itemPath) === '.csv' && itemPath.includes('progress.draft.w')) {
      // Add CSV files to the list
      files.push(itemPath);
    }
  }

  return files;
}

/**
 * Merges all csv files inside 'files' parameter and writes them to the 'outputFile' path
 * @param {*} files 
 * @param {*} outputFile 
 * @param {boolean} forImport boolean if the outputFile.csv should be for Supabase Database import
 */
function mergeCsvFiles(files, outputFile, forImport=false) {
  let combinedData = [];
  let headers = null;

  // Loop through all files
  for (const file of files) {
    const fileContent = fs.readFileSync(file, 'utf-8');

    // Parse the CSV file content
    const parsed = parse(fileContent, {
      columns: true, // Treat the first row as headers
      skip_empty_lines: true
    });

    if (!headers) {
      headers = Object.keys(parsed[0]); // Get headers from the first file
      if (forImport) {
        headers.push('course');        // Add the new 'course' column
        combinedData.push(headers.map(header => header.toLowerCase()));       // Add headers in lowerCase to the output data
      } else {
        combinedData.push(headers);       // Add headers to the output data
      }
    }

    // Add all rows from the current file to the combinedData, and add the 'course' column
    parsed.forEach(row => {
      const rowWithCourse = headers.map(header => {
        // If the csv should be imported to Supabase Database, change columns to be according to the database model
        if (forImport) {
          // If it's the new 'course' column, add the value 'wdx-180'
          if (header === 'course') {
            return 'wdx-180';
          }
          // If it's the 'confidence' column, change value to '0'
          if (header === 'Confidence') {
            return '0'
          }
          // If it's the 'day' column and value is 'Weekend' change it to '6' 
          if (header === 'Day' && row[header] === 'Weekend') {
            return '6'
          }
        }
        return row[header];
      });
      combinedData.push(rowWithCourse);
    });
  }

  // Stringify the combined data back to CSV format
  const outputCsv = stringify(combinedData);

  // Write the merged CSV data to the output file
  fs.writeFileSync(outputFile, outputCsv);

  console.log(`All CSV files have been merged into: ${outputFile}`);
}

/**
 * @description Merges all progress.draft.csv's inside inputDirectory from the specific term (Beginner, Intermediate, Advanced) into a single CSV.
 * @param {*} inputDirectory 
 * @param {*} term 
 */
function mergeProgressDraftCsvFilesOfTermForSupabaseImport(inputDirectory, term) {
  let minWeek, maxWeek;
  if (term === "beginner") {
    minWeek = 1;
    maxWeek = 12;
  } else if (term === "intermediate") {
    minWeek = 13;
    maxWeek = 24;
  } else if (term === "advanced") {
    minWeek = 25;
    maxWeek = 36;
  }
  const csvFiles = getProgressDraftCsvFilesFromDir(inputDirectory, minWeek, maxWeek);

  if (csvFiles.length > 0) {
    mergeCsvFiles(csvFiles, `${inputDirectory}/progress.draft.${term}.csv`, true);
  } else {
    console.log(`No 'progress.draft.wXX.dYY.csv' files found inside ${inputDirectory} folder.`);
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
  },
  "term": {
    type: "string",
    short: "t",
  },
  "merge": {
    type: "string",
    short: "m",
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
  const termOption = args.values["term"];
  const mergeOption = args.values["merge"];

  if (lintOption && typeof lintOption === "string") {
    return lintCSVFile(lintOption)
  }

  if (validateSchemaOption && typeof validateSchemaOption === "string") {
    return validateCSVSchema(validateSchemaOption);
  }

  if (mergeOption && typeof mergeOption === "string") {
    if (termOption && typeof termOption === "string") {
      const terms = ["beginner", "intermediate", "advanced"];
      if (!terms.includes(termOption)) {
        console.log(`The "--term/-t" option can be one of the following "${terms}".`);
        process.exit();
      }
      console.log(`Going to merge the csv's inside folder '${mergeOption}' into '${termOption}.csv'`);
      mergeProgressDraftCsvFilesOfTermForSupabaseImport(mergeOption, termOption);
    } else {
      console.log(`Please provide the "--term/-t" option as well`);
      process.exit();
    }
  }

}

// 4) EXPORT SECTION: ==========================================================

module.exports = {
  validateCSVSchema,
  lintCSVFile
};
