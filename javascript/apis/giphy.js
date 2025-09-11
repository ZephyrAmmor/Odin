const image = document.querySelector('img')
const search = document.querySelector('.search')
const searchBtn = document.querySelector('#search-btn')
const newGif = document.querySelector('#new-gif')
const error = document.querySelector('.error')
let value = '404';

async function getGif() {
  value = search.value || '404'
    const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=Ak5tiNQ1k7pQgPKCcTmmn4kvrxJ0t9oM&s=${value}`)
      const gif = await response.json()
      if (gif.data.images.original.url) {
        image.src = gif.data.images.original.url
      } else showError()
}
getGif()
searchBtn.addEventListener('click', getGif)

newGif.addEventListener('click',getGif)
function showError() {
    error.textContent('Something Goes wrong, or you are out of API calls')
}