import express from "express";
const router  = express.Router();

router.get('/', async  function(req, res, next) {

  let links = null;

  if ( req.quickLinks ){
    links = req.quickLinks;
  }

  let  data = {
    cohortData: req.cohortData,
    message: 'Instructor Cockpit',
    layout:  'layout.njk',
    title: 'Instructor Cockpit',
    links
  }

  res.render('index.njk', data)
})

export default router;