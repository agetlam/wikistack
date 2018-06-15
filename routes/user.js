const router = require("express").Router()
module.exports = router;



router.get('/', (req, res, next)=>{
    res.send('got to GET /users/')
})

router.post('/', (req, res, next)=>{
    res.send('got to POST /wiki/')
})
router.get('/add', (req, res, next)=>{
    res.send('got to GET /wiki/')
})