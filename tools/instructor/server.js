import fs from 'node:fs';
import express from 'express';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import nunjucks from 'nunjucks';
import open from 'open';
import indexRouter from './routes/index.js';
import yaml from 'yaml';
const port         = 4678;  
// const  usersRouter = require('./routes/users')
const __dirname = dirname(fileURLToPath(import.meta.url));

// LOAD COHORT DATE FROM YAML FILES:
const cohortData = {}
const cohortDataDirPath = path.join( __dirname, "../", "../", "teaching", "cohorts/" );
const cohortDataDir     = fs.readdirSync(cohortDataDirPath);
const cohortYamls       = cohortDataDir.filter( file =>{
  return file.endsWith(".yaml");
})
cohortYamls.forEach( yamlFile =>{

  const cohortFileData = fs.readFileSync( path.join( cohortDataDirPath, yamlFile ), "utf-8" );
  cohortData[yamlFile.replace(".yaml", "")] = yaml.parse(cohortFileData);

});

// LOAD OPTIONAL YAML FILES:
let quickLinks = {}
try {
  const instructorConfigPath = path.join( __dirname, "config" );
  const instructorConfigDir  = fs.readdirSync(instructorConfigPath);
  if ( instructorConfigDir.includes("links.yaml") ){
    const links = fs.readFileSync( path.join( instructorConfigPath, "links.yaml" ), "utf-8" );
    const linksObj = yaml.parse(links);
    quickLinks = { ...linksObj.links }
  }
} catch(e){
  console.log("\nWARNING: " + e.message + "\n");
}

function passCohortDataToRoutesMiddleware(options) {
  return function (req, res, next) {
    req.cohortData = options.cohortData;
    req.quickLinks = options.quickLinks;
    next();
  }
}

const  app = express();

nunjucks.configure( __dirname + '/views', {
  autoescape:  true,
  express:  app
})

// app.use(passCohortDataToRoutesMiddleware({ cohortData }));
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended:  false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', passCohortDataToRoutesMiddleware({ cohortData, quickLinks }), indexRouter)
// app.use('/users', usersRouter)

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  // open(`http://localhost:${port}`);
});

