import express from "express";
const router  = express.Router();

router.get('/', async  function(req, res, next) {
  console.log("index.js router", req.cohortData);
  let  data = {
    cohortData: req.cohortData,
    message: 'Instructor Cockpit',
    layout:  'layout.njk',
    title: 'Instructor Cockpit'
  }

  res.render('index.njk', data)
})

export default router;