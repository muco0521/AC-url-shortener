function generateShortCode () {
  const lowerLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperLetters = lowerLetters.toUpperCase()
  const numbers = '1234567890'
  const codeLength = 5
  const baseChar = lowerLetters + upperLetters + numbers

  let shortCode = ''

  for (let i = 0; i < codeLength; i++) {
    const index = Math.floor(Math.random() * baseChar.length)

    shortCode += baseChar.charAt(index)
  }
  return shortCode
}

module.exports = generateShortCode
