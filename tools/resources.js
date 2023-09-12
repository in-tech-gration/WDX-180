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

// HELPERS: ====================================================================

// PARAMETERS: =================================================================
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
      },
      "mdn": {
        type: "string",
        short: "m"
      },
      "output": {
        type: "string",
        short: "o"
      }
    }
});

// HANDLE MISSING PARAMETERS:
if ( Object.keys(args.values).length === 0 ){
return warn("Missing arguments. Maybe you wanted to run with `--search-for-youtube <ID> or -y <ID>?`")
}

const vid    = args.values["search-for-youtube"];
const url    = args.values["search-by-url"];
const mdn    = args.values["mdn"];
const output = args.values["output"];

// PARSE: search-for-youtube
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

// PARSE: search-by-url
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

// PARSE: Create MDN Resource
if ( mdn && ( typeof mdn === "string" ) ){

  if ( !output || typeof output !== "string" ){
    warn("Target directory not defined. Please use --output or -o options and supply the target directory.");
    process.exit();
  }

  if ( mdn.indexOf("https://developer.mozilla.org") !== 0 ){
    warn("This does not seem to be a valid MDN URL.");
    process.exit();`` 
  }

  const MDNPath = mdn.split("https://developer.mozilla.org/en-US/docs/Learn/")[1];
  let dirs = MDNPath.split("/");
  const lastPath = dirs[dirs.length-1];
  let lastPathClean = lastPath.split("#")[0];
  lastPathClean = lastPathClean.split("?")[0];
  dirs.pop();
  dirs.push(lastPathClean);
  dirs = dirs.map( p => p.toLowerCase() );
  const learnURL = "https://github.com/mdn/content/edit/main/files/en-us/learn/";
  const rawURL = "https://raw.githubusercontent.com/mdn/content/main/files/en-us/learn/";
  console.log(path.join( output, lastPathClean ));
  console.log( learnURL + dirs.join("/"));
  console.log( learnURL + dirs.join("/") + "/index.md" );
  console.log( rawURL + dirs.join("/") + "/index.md" );

  // Nice exercise:
  // FROM THIS => https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals#summary
  // TO THIS => https://github.com/mdn/content/edit/main/files/en-us/learn/html/introduction_to_html/html_text_fundamentals/index.md
  // AND THIS => https://raw.githubusercontent.com/mdn/content/main/files/en-us/learn/html/introduction_to_html/html_text_fundamentals/index.md

  try {
    
    const finalPath = path.join( output, lastPathClean );
    fs.mkdirSync(finalPath);
    fs.mkdirSync(path.join(finalPath, "assets"));
    // const README = fs.writeFileSync(path.join(finalPath,"README.md"), "", "utf8");
    const README = fs.createWriteStream(path.join(finalPath,"README.md"));
    
    https.get(rawURL + dirs.join("/") + "/index.md", function(response) {
      response.pipe(README);

      // after download completed close file stream
      README.on("finish", () => {
          README.close();
          console.log(`Download Completed. File is at file://${finalPath}/README.md`);
          
      }).on("error", e =>{
        console.log(e);
      })

    });

  } catch (error) {

    warn(error);
    process.exit();

  }


}

console.log("EoF");