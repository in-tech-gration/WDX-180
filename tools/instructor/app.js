const fs           = require('node:fs')
const express      = require('express')
const path         = require('path')
const cookieParser = require('cookie-parser')
const logger       = require('morgan')
const nunjucks     = require('nunjucks')
const port         = 4678;  
const yaml         = require('yaml');

const  indexRouter = require('./routes/index')
// const  usersRouter = require('./routes/users')

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

function passCohortDataToRoutesMiddleware(options) {
  return function (req, res, next) {
    req.cohortData = options.cohortData;
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

app.use('/', passCohortDataToRoutesMiddleware({ cohortData }), indexRouter)
// app.use('/users', usersRouter)

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app