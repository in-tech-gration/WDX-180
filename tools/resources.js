/**
 * Utilities around the resources.json and resources.schema.json files:
 * 
 * 1) Check if a YouTube video is included in the resources: --search-for-youtube <VIDEO_ID>
 * 2) Check if a resource is included based on its URL: --search-by-url <URL>
 */
const path          = require("node:path");
const fs            = require("node:fs");
const https         = require('node:https'); 
const { parseArgs } = require("node:util");
const { getYouTubeResources, getResources, warn, ok, info, convertToKebabCase, iso8601ToSeconds, formatDate, checkmark, xmark } = require("./utils");

const args = parseArgs({
    strict: false,
    options: {
      "search-for-youtube": {
        type: "string",
        short: "y",
      },
      "search-by-url": {
        type: "string",
        short: "u"
      }
    }
});
  
// HANDLE MISSING PARAMETERS:
if ( Object.keys(args.values).length === 0 ){
return warn("Missing arguments. Maybe you wanted to run with `--search-for-youtube <ID> or -y <ID>?`")
}

const vid = args.values["search-for-youtube"];
const url = args.values["search-by-url"];

if ( vid && typeof vid === "string" ){

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

if ( url && typeof url === "string" ){
  const hasFound = Object.entries(getResources()).some(([key,value])=>{
    return value.identifier === url;
  });
  if (!hasFound){
    warn(`A resource with the '${url}' as an identifier was not found in the resources.json`);
  } else {
    ok(`${checkmark} A resource with '${url}' as an identifier was found in the resources.json`)
  }
}

console.log("EoF");