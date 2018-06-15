const router = require("express").Router();
const {addPage} = require ("../views")
module.exports = router;

// ...


router.get('/', (req, res, next)=>{
    res.send('got to GET /wiki/')
})

// router.post('/', (req, res, next)=>{
//     res.json( req.body)
// })
// router.get('/add', (req, res, next)=>{
//     res.send('got to GET /wiki/add')
// })

router.get('/add', (req, res, next)=>{
    res.send(addPage())
})

const { Page } = require("../models");


router.post('/', async (req, res, next) => {

  // STUDENT ASSIGNMENT:
  // add definitions for `title` and `content`

  const page = new Page({
    title: req.body.title,
    content: req.body.content
    
  });
  console.log("FWE" , req.body)
  // make sure we only redirect *after* our save is complete!
  // note: `.save` returns a promise.
  try {
    await page.save();
    res.redirect('/');
  } catch (error) { next(error) }
});