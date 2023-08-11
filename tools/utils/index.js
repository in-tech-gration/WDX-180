const { URL } = require("node:url");
const path    = require("node:path");
const chalk   = require('chalk'); 

const warn = (text)=> console.log(chalk.bold.red("WARNING:"), chalk.bold.red(text));
const ok = (text)=> console.log(chalk.bold.green(text));

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

module.exports = {
  getFile,
  getImageFile,
  getExtensionFromUrl,
  warn,
  ok
}