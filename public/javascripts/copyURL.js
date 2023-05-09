const container = document.querySelector('#container')
const copyBtn = document.querySelectorAll('.copy-btn')
const shortUrlInput = document.querySelector('#short-url-input')
const cardTitle = document.querySelector('#card-title')

container.addEventListener('click', function onCopyBtnClick(event) {
  if (event.target.classList.contains('copy-btn')) {
    navigator.clipboard.writeText(shortUrlInput.value)
    cardTitle.textContent = 'URL Copied!'
    copyBtn[0].classList.add('btn-secondary')
    copyBtn[1].classList.add('text-light')
  }
})