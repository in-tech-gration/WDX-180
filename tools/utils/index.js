const { URL } = require("node:url");
const fs      = require("node:fs");
const path    = require("node:path");
const chalk   = require('chalk'); 
// UNICODE CHARACTERS:
const checkmark = "\u2713"; // ✅ 
const xmark     = "\u274C"; // ❌

const warn = (text, hasWARNING = true)=> console.log(chalk.bold.red( hasWARNING ? "WARNING:" : ""), chalk.bold.red(text));
const ok = (text)=> console.log(chalk.bold.green(text));
const info = (text)=> console.log(chalk.bold.blue(text));

const youTubeIdRegEx = /([a-z0-9_-]{11})/i;

/**
 * @param {string}
 * @return {Array}
 * The captured groups are:
  - protocol
  - subdomain
  - domain
  - path
  - video code
  - query string
 */
const ytRegex = text => {

  const regex = /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube(-nocookie)?\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|live\/|v\/)?)([\w\-]+)(\S+)?$/;
  const match = text.match(regex);

  let playlist = null;
  if ( match[6] === "playlist" ){
    if (match[7].indexOf("?list=") === 0 ){
      playlist = match[7].split("?list=")[1];
    }
  }

  if ( match ){
    return {
      url: match[0],
      protocol: match[1],
      subdomain: match[2],
      domain: match[3],
      playlist: playlist ? playlist : undefined,
      path: match[5],
      vid: match[6]
    }
  }

  return null;

}
function getExtensionFromUrl( url ){

  const extension = path.extname(new URL(url).pathname).slice(1);

  return extension.toLowerCase();

}
function getFile( resource ){
  return resource.type === "file";
}
function getImageFile( resource ){

  if ( !getFile( resource ) ){
    return false;
  }

  const imageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'svg'];
  const ext = getExtensionFromUrl( resource.download_url );
  
  if ( !imageExtensions.includes(ext) ) {
    return false;
  }

  return true;
}
function convertToKebabCase(inputString) {
  // Remove special characters and convert to lowercase
  const cleanedString = inputString.toLowerCase().replace(/[^\w\s-]/g, '');

  // Replace spaces with hyphens
  const kebabCaseString = cleanedString.replace(/\s+/g, '-');

  return kebabCaseString;
}
function iso8601ToSeconds(duration) {
  var match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);

  match = match.slice(1).map(function(x) {
    if (x != null) {
        return x.replace(/\D/, '');
    }
  });

  var hours = (parseInt(match[0]) || 0);
  var minutes = (parseInt(match[1]) || 0);
  var seconds = (parseInt(match[2]) || 0);

  return hours * 3600 + minutes * 60 + seconds;
}
function formatDate(iso8601String) {
  const parsedDate = new Date(iso8601String);
  const day = parsedDate.getUTCDate().toString().padStart(2, "0");
  const month = (parsedDate.getUTCMonth() + 1).toString().padStart(2, "0");
  const year = parsedDate.getUTCFullYear();
  const formattedDate = `${day}/${month}/${year}`;
  return formattedDate;
}
/**
 * Description: accepts a markdown text as input and returns an array of **bold text** sections found in the file
 * @param {string} fileContent 
 * @returns {Array}
 */
function findBoldTextMatches( fileContent ){

  const regex = /\*\*(.*?)\*\*/g;
  const boldTextMatches = fileContent.match( regex );
  return boldTextMatches

}
/**
 * Description: accepts a markdown text as input and returns an array of **YouTube URLs** found in the file
 * @param {string} fileContent 
 * @returns {Array}
 */
function decodeYouTubeURL( fileContent ){

  // Regular Expression Source: https://stackoverflow.com/a/37704433/4861760
  const ytRegexNoCapture = /((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube(-nocookie)?\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|live\/|v\/)?)([\w\-]+)([^\s)]+)?/g;

  const ytLinks = fileContent.match( ytRegexNoCapture );
  return ytLinks ?? [];

}
function findMarkdownLinks( fileContent ){

  throw new Error("Not implemented yet");
  // const regex = /\*\*(.*?)\*\*/g;
  // const boldTextMatches = fileContent.match( regex );
  // return boldTextMatches
  return fileContent;

}
function getYouTubeListIdParts( ytURL ){

  const playListQueryString = ytURL.match(/[&?]list=([^&]+)/i);

  if ( playListQueryString ){
    const [ firstPart, secondPart ] = ytURL.split(playListQueryString[0]);
    const output = [ firstPart, playListQueryString[0] ]
    if ( secondPart.trim().length > 0 ){
      output.push( secondPart );
    }
    return output;
  }

  return [];
}
function getResourcesContent(){

  const resourcesDir = path.join( __dirname, "..", "..", "resources/" );
  const resourcesPath = path.join( resourcesDir, "resources.json");
  const resourcesText = fs.readFileSync(resourcesPath, "utf8");
  return resourcesText;

}
/**
 * Description: read resource.json and return the contents in JSON format
 */
function getResources(){

  const resourcesText = getResourcesContent()
  const { resources } = JSON.parse(resourcesText)
  return resources;

}
function appendObjectToResources( obj ){

  const resourcesDir = path.join( __dirname, "..", "..", "resources/" );
  const resourcesPath = path.join( resourcesDir, "resources.json");
  const resourcesText = getResourcesContent()
  const json = JSON.parse(resourcesText)
  const key = Object.keys(obj)[0];
  json.resources[key] = obj[key];
  try {
    fs.writeFileSync(resourcesPath, JSON.stringify(json, null, "  "), "utf-8");
  } catch(e){
    console.log(e);
  }
  return json;

}
function getYouTubeResources(){

  const resources = getResources();
  const youTubeResources = Object
  .entries(resources)
  .filter(([slug, value])=>{
    return value.type === "YouTube";
  });
  return youTubeResources;
}
function createFrontMatterMarkdownFromObject( fmObj ){

  let fmText = "";
  
  const fmObjEntries = Object.entries(fmObj);

  if (fmObjEntries.length > 0) {

    fmText = [
      "---",
      ...fmObjEntries.map(([key, value]) => {

        // If the type is Array make sure to use YAML list format:
        // entry:
        //  - valueA
        //  - valueB
        if ( Array.isArray(value) ) {
          let arrayText = `${key}:\n`;
          value.forEach( item => {
            arrayText += `  - ${item}\n`;
          });
          return arrayText.trimEnd();
        }
        
        return `${key}: ${value}`
      }),
      "---"
    ].join("\n") + "\n";

  }

  return fmText;

}

module.exports = {
  appendObjectToResources,
  checkmark,
  xmark,
  youTubeIdRegEx,
  ytRegex,
  getFile,
  getResources,
  getYouTubeResources,
  getYouTubeListIdParts,
  decodeYouTubeURL,
  getImageFile,
  getExtensionFromUrl,
  convertToKebabCase,
  formatDate,
  iso8601ToSeconds,
  findBoldTextMatches,
  warn,
  info,
  ok,
  createFrontMatterMarkdownFromObject
}