var express = require('express')
var router = express.Router()
const Links = require('../models/links')

router.get('/', async function (req, res, next) {
  console.log(await Links.find({}))
  res.send(await Links.find({}))
})

router.post('/', (req, res) => {
  const link = new Links(req.body)

  link
    .save()
    .then(() => {
      console.log('link saved!')
      res.send(link)
    })
    .catch((e) => {
      res.status(400).send(e.message)
    })
})

module.exports = router
