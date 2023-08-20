const { URL } = require("node:url");
const path    = require("node:path");
const chalk   = require('chalk'); 

const warn = (text)=> console.log(chalk.bold.red("WARNING:"), chalk.bold.red(text));
const ok = (text)=> console.log(chalk.bold.green(text));
const info = (text)=> console.log(chalk.bold.blue(text));

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

module.exports = {
  getFile,
  getImageFile,
  getExtensionFromUrl,
  convertToKebabCase,
  formatDate,
  iso8601ToSeconds,
  warn,
  info,
  ok
}