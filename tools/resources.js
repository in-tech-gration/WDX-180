const path          = require("node:path");
const fs            = require("node:fs");
const https         = require('node:https'); 
const { parseArgs } = require("node:util");
const { warn, ok, info, convertToKebabCase, iso8601ToSeconds, formatDate } = require("./utils");

console.log("resources.js")

const args = parseArgs({
    strict: false,
    options: {
        "search-for-youtube": {
        type: "string",
        short: "y",
        }
    }
});
  
// HANDLE MISSING PARAMETERS:
if ( Object.keys(args.values).length === 0 ){
return warn("Missing arguments. Maybe you wanted to run with `--search-for-youtube <ID> or -y <ID>?`")
}

const vid = args.values["search-for-youtube"];
// console.log({ vid });

const resourcesFilePath = path.join( __dirname, "..","resources","resources.json");
// console.log({ resourcesFilePath });
const resourcesJSON = fs.readFileSync( resourcesFilePath, "utf8");
const resources = JSON.parse(resourcesJSON).resources;
console.log({ resources });