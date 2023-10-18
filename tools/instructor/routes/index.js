import express from "express";
const router  = express.Router();

router.get('/', async  function(req, res, next) {

  let links = null;
  let tabs  = null;

  if ( req.quickLinks ){
    links = req.quickLinks;
  }
  if ( req.tabs ){
    tabs = req.tabs;
  }

  let  data = {
    cohortData: req.cohortData,
    message: 'Instructor Cockpit',
    layout:  'layout.njk',
    title: 'Instructor Cockpit',
    links,
    tabs
  }

  res.render('index.njk', data)
})

export default router;