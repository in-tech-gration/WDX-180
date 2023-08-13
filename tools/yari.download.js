const fs = require("node:fs");
const https = require('node:https'); // or 'https' for https:// URLs
const path = require("node:path");
const { parseArgs } = require("node:util");
require("dotenv").config({
  path: path.resolve(__dirname, '.env')
});
// https://pawelgrzybek.com/til-node-js-18-3-comes-with-command-line-arguments-parser/
const { warn, ok, getImageFile } = require("./utils");
const { Octokit } = require("octokit");

const GITHUB_PATH = process.argv[2];
const TARGET_FOLDER = process.argv[3];

if ( !GITHUB_PATH || !TARGET_FOLDER ){
  warn("No GITHUB_PATH or TARGET_FOLDER supplied.")
  console.log(`\n Usage: node ${path.basename(process.argv[1])} files/en-us/ /local/assets`)
  process.exit();
}

// CHECK WHETHER SUPPLIED DESTINATION PATH ENDS IN assets/ (STICK TO THE SPECS)
if ( !TARGET_FOLDER.endsWith("assets/") ) {
  console.log( 'Invalid path. Path must end in assets/' );
  process.exit();
} 

(async function getRepoFile(){

  // Octokit.js
  // https://github.com/octokit/core.js#readme
  const octokit = new Octokit({
    auth: process.env.GITHUB_PERSONAL_ACCESS_TOKEN
  })
  
  const owner = "mdn";
  const repo = "content";
  const path = GITHUB_PATH;

  const response = await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
    owner,
    repo,
    path,
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })

  const downloads = [];

  response.data
  .filter( getImageFile )
  .forEach((resource, index ) => {
    
    console.log( index, resource.download_url );
    const targetPath = `${TARGET_FOLDER}/${resource.name}`;

    if ( fs.existsSync(targetPath) ){
      return;
    }

    const file = fs.createWriteStream(targetPath);
    const request = https.get(resource.download_url, function(response) {
      response.pipe(file);

      // after download completed close file stream
      file.on("finish", () => {
          file.close();
          console.log(`Download Completed. File is at file://${TARGET_FOLDER}/${resource.name}`);
          warn("Don't forget to optimize the images.");
      }).on("error", e =>{
        console.log(e);
      })
    });

  });

}())

