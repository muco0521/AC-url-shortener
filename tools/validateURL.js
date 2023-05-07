const URL = require('url').URL

function validateUrl(urlString) {
  try {
    new URL(urlString)
    return true
  } catch {
    return false
  }
}

module.exports = validateUrl