const router = require('express').Router()
const Url = require('../../models/url')
const shortCode = require('../../tools/shortenURL')
const PORT = process.env.PORT || 3000
const SERVER = `http://localhost:${PORT}/`
const validateUrl = require('../../tools/validateURL')

router.get('/', (req, res) => {
  return res.render('index')
})

router.post('/', (req, res) => {
  const originalUrl = req.body.originalUrl.trim()
  const shortUrl = SERVER + shortCode()

  //check url valid
  if (validateUrl(originalUrl) === false) {
    return res.render('index', { warning: 'warning' })
  }
  //check the same url
  Url.findOne({ originalUrl })
    .lean()
    .then((url) => {
      if (url) { return res.render('index', { shortUrl: url.shortUrl })}

      return Url.create({ originalUrl, shortUrl })
        .then(() => res.render('index', { shortUrl }))
      
    })
    .catch((error) => console.log(error))
})

module.exports = router

