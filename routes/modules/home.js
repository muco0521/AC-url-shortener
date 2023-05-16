const router = require('express').Router()
const Url = require('../../models/url')
const shortCode = require('../../tools/shortenURL')
const PORT = process.env.PORT || 3000
const SERVER = `http://localhost:${PORT}/`
const validateUrl = require('../../tools/validateURL')

router.get('/', (req, res) => {
  return res.render('index')
})

// 連結短網址到原網址
router.get('/:path', (req, res) => {
  const path = req.params.path
  const shortUrl = SERVER + path
  Url.findOne({ shortUrl })
    .lean()
    .then((url) => res.redirect(url.originalUrl))
    .catch((error) => console.log(error))
})

router.post('/', (req, res) => {
  const originalUrl = req.body.originalUrl.trim()
  const shortUrl = SERVER + shortCode()

  // 用 validateUrl() 檢查網址是否有效
  if (validateUrl(originalUrl) === false) {
    return res.render('index', { warning: 'The URL is invalid!' })
  }

  Url.findOne({ originalUrl })
    // 查看資料庫是否有資料，沒有的話新建一個
    .then((url) =>
      url || Url.create({ originalUrl, shortUrl })
    )
    // 有資料的話，渲染原資料畫面
    .then((url) =>
      res.render('index', { shortUrl: url.shortUrl })
    )
    .catch(err => {
      console.error(err)
      res.render('index', { warning: 'Sorry there was a problem with your request.' })
    })
})

module.exports = router
