const router = require('express').Router()
const Url = require('../../models/url')
const shortCode = require('../../tools/shortenURL')
const PORT = process.env.PORT || 3000
const SERVER = `http://localhost:${PORT}/`

router.get('/', (req, res) => {
  return res.render('index')
})

router.post('/', (req, res) => {
  const shortUrl = SERVER + shortCode()
  return res.render('index', { shortUrl })
})

module.exports = router