const path          = require("node:path");
const https         = require('node:https'); // or 'https' for https:// URLs
const { parseArgs } = require("node:util");
// https://pawelgrzybek.com/til-node-js-18-3-comes-with-command-line-arguments-parser/

const { warn, ok, info, convertToKebabCase, iso8601ToSeconds, formatDate } = require("./utils");
require("dotenv").config({ path: path.resolve(__dirname, '.env') });



// --get-video-info

const { YOUTUBE_API_KEY } = process.env;

const args = parseArgs({
  options: {
    "get-video-info": {
      type: "string",
      short: "i",
    }
  },
});

const vid = args.values["get-video-info"];

getYouTubeVideoInfo({ vid });

async function getYouTubeVideoInfo({ vid }){

  const URL = `https://www.googleapis.com/youtube/v3/videos?part=contentDetails%2C+snippet&id=${vid}&key=${YOUTUBE_API_KEY}`
  
  const resourceJSON = {}

  try {

    let data="";
    https.get(URL, function(response) {
    
      // console.log('statusCode:', response.statusCode);
      // console.log('headers:', response.headers);

      response
      .on("data", append => {
        data += append
      })
      .on("error", e => console.log(e) )
      .on("end", ()=> {

       const json = JSON.parse(data);
        const videoInfo = json.items[0];

        let defaultAudioLanguage = videoInfo.snippet.defaultAudioLanguage;
        defaultAudioLanguage = defaultAudioLanguage.split("-")[0];

        // videoInfo.contentDetails.caption // BOOLEAN

        resourceJSON[convertToKebabCase(videoInfo.snippet.title)] = {
          type: "YouTube",
          duration: iso8601ToSeconds(videoInfo.contentDetails.duration),
          title: videoInfo.snippet.title,
          date: formatDate(videoInfo.snippet.publishedAt),
          youtube : {
            id : videoInfo.id,
            channel_id: videoInfo.snippet.channelId,
            channel_title: videoInfo.snippet.channelTitle,
            thumbnail_url: videoInfo.snippet.thumbnails.standard.url
          },
          tags: videoInfo.snippet.tags,
          language: [ defaultAudioLanguage ]
        }

        ok( JSON.stringify(resourceJSON, null, "\t"));

      });
    
    }).on("error", e =>{
      console.log(e);
    });

  } catch (error) {

    console.log({ error });
    
  } 

  console.log("EoF");

}