const path          = require("node:path");
const fs            = require("node:fs");
const https         = require('node:https'); 
const { parseArgs } = require("node:util");
const { getYouTubeResources, warn, ok, info, convertToKebabCase, iso8601ToSeconds, formatDate } = require("./utils");

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

if ( vid ){

    const youTubeResources = getYouTubeResources();
    const found = youTubeResources.some(([slug, value])=>{
        return ( value.youtube.id === vid );
    });
    if ( found ){
        ok(`YouTube video with id ${vid} was found in the resources.json.`);
    }  else {
        warn(`YouTube video with id ${vid} was not found in the resources.json.`);
    }

}
