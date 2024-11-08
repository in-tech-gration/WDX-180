// cSpell:ignore clipboardy
const path = require("node:path");
const https = require('node:https'); // or 'https' for https:// URLs
const { parseArgs } = require("node:util");
const clipboardy = require('clipboardy');
const readline = require('node:readline');

const VERSION = "0.1.1";

// https://pawelgrzybek.com/til-node-js-18-3-comes-with-command-line-arguments-parser/
console.log("Running yt.s...");

const { warn, ok, info, convertToKebabCase, iso8601ToSeconds, formatDate, youTubeIdRegEx } = require("./utils");
require("dotenv").config({ path: path.resolve(__dirname, '.env') });

const { YOUTUBE_API_KEY } = process.env;

const IVideoInfo = {
  kind: 'string',
  etag: 'string',
  id: 'string',
  snippet: {
    publishedAt: 'Date',
    channelId: 'string',
    title: 'string',
    description: 'string',
    thumbnails: {
      default: "object",
      medium: "object",
      high: "object",
      standard: "object",
      maxres: "object"
    },
    channelTitle: 'string',
    tags: [
      'string',
      'string'
    ],
    categoryId: "number",
    liveBroadcastContent: 'string',
    localized: {
      title: 'string',
      description: 'string'
    },
    defaultAudioLanguage: 'string'
  },
  contentDetails: {
    duration: 'string',
    dimension: 'string',
    definition: 'string',
    caption: 'boolean',
    licensedContent: "boolean",
    contentRating: "object",
    projection: 'string'
  }
}

function getYouTubeVideoInfo({ vid, log = false }) {

  return new Promise((resolve, reject)=>{

    if (!youTubeIdRegEx.test(vid)) {
      warn(`Invalid YouTube ID: ${vid}`);
      return reject(`Invalid YouTube ID: ${vid}`); 
    }
  
    const URL = `https://www.googleapis.com/youtube/v3/videos?part=contentDetails%2C+snippet&id=${vid}&key=${YOUTUBE_API_KEY}`
  
    const resourceJSON = {}
  
    try {
  
      let data = "";
      https.get(URL, function (response) { 
  
        // response.statusCode, response.headers
        response
          .on("data", append => {
            data += append
          })
          .on("error", e => {
            console.log(e);
            reject({ error: e });
          })
          .on("end", () => {
  
            const json = JSON.parse(data);
  
            if (json.error) {
              return warn(json.error.message);
            }
  
            const videoInfo = json.items[0];
  
            let defaultAudioLanguage = null;
  
            if (!videoInfo) {
              warn("Ops! Something went wrong.");
              return reject("Ops! Something went wrong.");
            }
  
            if (videoInfo.snippet.defaultAudioLanguage) {
  
              defaultAudioLanguage = videoInfo.snippet.defaultAudioLanguage.split("-")[0];
  
            }
  
            // videoInfo.contentDetails.caption // BOOLEAN
            if ( log ){
  
              ok("YouTube video description below:");
              ok("================================");
              console.log();
              console.log(videoInfo.snippet.description);
              console.log();
              ok("================================");
              ok("End of YouTube video description");
  
            }
  
            const entrySlug = convertToKebabCase(videoInfo.snippet.title);
  
            // console.log("THUMBNAILS:", videoInfo.snippet.thumbnails);
  
            const thumbnail_url = videoInfo.snippet.thumbnails.standard ? videoInfo.snippet.thumbnails.standard.url : videoInfo.snippet.thumbnails.high.url;
  
            resourceJSON[entrySlug] = {
              type: "YouTube",
              duration: iso8601ToSeconds(videoInfo.contentDetails.duration),
              title: videoInfo.snippet.title,
              date: formatDate(videoInfo.snippet.publishedAt),
              youtube: {
                id: videoInfo.id,
                channel_id: videoInfo.snippet.channelId,
                channel_title: videoInfo.snippet.channelTitle,
                thumbnail_url
              },
              tags: videoInfo.snippet.tags
            }
  
            if (defaultAudioLanguage) {
              resourceJSON[entrySlug].language = [defaultAudioLanguage]
            }
  
            // ok( JSON.stringify(resourceJSON, null, "\t"));
            const removeFirstTabs = /^\s{1}/gm;
            const output = JSON.stringify(resourceJSON, null, "\t")
              .split("\n")
              .map(line => {
                return line.replace(removeFirstTabs, "");
              })
              .slice(1)
              .slice(0, -1)
              .join("\n")
  
            clipboardy.writeSync(output);
            if ( log ){
              
              console.log();
              ok(output);
              console.log();
  
            }
            resolve({ output });
            ok("Content copied to clipboard. Just use Ctrl+V to paste.");
  
          });
  
      }).on("error", e => {
  
        console.log(e);
        reject({ error: e });
  
      });
  
    } catch (error) {
  
      console.log("Ops!", { error });
      reject({ error });
      
    }
  
    console.log("EoF");

  });

}

function getYouTubeVideoTitle({ vid, log = false }) {

  return new Promise((resolve, reject)=>{

    if (!youTubeIdRegEx.test(vid)) {
      warn(`Invalid YouTube ID: ${vid}`);
      return console.log(`Invalid YouTube ID: ${vid}`); 
    }
  
    const URL = `https://www.googleapis.com/youtube/v3/videos?part=contentDetails%2C+snippet&id=${vid}&key=${YOUTUBE_API_KEY}`
  
    try {
  
      let data = "";
      https.get(URL, function (response) { 
 
        // response.statusCode, response.headers
        response
          .on("data", append => {
            data += append
          })
          .on("error", e => {
            console.log(e);
            reject({ error: e });
          })
          .on("end", () => {
  
            const json = JSON.parse(data);
            
            if (json.error) {
              return warn(json.error.message);
            }

            console.log(json.items[0].snippet.title);
            clipboardy.writeSync(json.items[0].snippet.title);
  
          });
  
      }).on("error", e => {
  
        console.log(e);
        reject({ error: e });
  
      });
  
    } catch (error) {
  
      console.log("Ops!", { error });
      reject({ error });
      
    }
  
    console.log("EoF");

  });

}

function init() {

  const args = parseArgs({
    strict: false,
    options: {
      "get-video-info": {
        type: "string",
        short: "i",
      },
      title: {
        type: "string",
        short: "t"
      },
      help: {
        type: "string",
        short: "h"
      },
      version: {
        type: "string",
        short: "v"
      }
    },
  });

  // HANDLE MISSING PARAMETERS:
  if (Object.keys(args.values).length === 0) {
    return warn("Missing arguments. Maybe you wanted to run with `--get-video-info <ID> or -i <ID>?`")
  }

  if ( args.values.help ){
    return info("Usage: node yt.js --get-video-info <YOUTUBE_ID>");
  }

  if ( args.values.version ){
    return info(`version ${VERSION}`);
  }

  if ( args.values.title ){
    const vid = args.values["title"];
    if ( vid === true ){
      // Create a readline interface for user input
      const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      });

      return rl.question('Enter YouTube video ID: ', (videoId) => {
        getYouTubeVideoTitle({ vid: videoId, log: true });
        rl.close();
      });
    }
    return getYouTubeVideoTitle({ vid, log: true });
  }
  
  const vid = args.values["get-video-info"];

  getYouTubeVideoInfo({ vid, log: true });

}

if (require.main === module) {
  // console.log("This script was executed directly.");
  init();
} else {
  // console.log("This script was imported as a module.");
}

module.exports = {
  getYouTubeVideoInfo
}