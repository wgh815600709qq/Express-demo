var express = require('express')
var router = express.Router()

router.get('/', (req, res, next)=> {
  res.render('test', {msg: 'hello'})
})

module.exports = router