const path = require("node:path");
const fs   = require("node:fs");

const { 
  warn, 
  ok, 
  decodeYouTubeURL 
} = require("./utils");

const resourcesDir  = path.join( __dirname, "..", "resources/" );
const resourcesPath = path.join( resourcesDir, "resources.json");
const resourcesText = fs.readFileSync(resourcesPath, "utf8");
const { resources } = JSON.parse(resourcesText)

function validateYouTubeEntry([slug, value]){

  if ( value.type !== "YouTube"){
    return;
  }

  // console.log(slug); // Slug
  if ( !value.youtube ){
    return warn(`ERROR: Found entry for YouTube video ${value.title} that does not contain required 'youtube' property.`);
  }

  if ( !value.youtube.id ){
    return warn(`ERROR: Found entry for YouTube video ${value.title} that does not contain required 'youtube.id' property.`);
  }
  // console.log(value.youtube); 
  // console.log(value.identifier); 

}

Object.entries(resources)
.forEach((entry) =>{

  validateYouTubeEntry( entry );

});