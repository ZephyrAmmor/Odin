const image = document.querySelector('img')
const search = document.querySelector('.search')
const searchBtn = document.querySelector('#search-btn')
const newGif = document.querySelector('#new-gif')
const error = document.querySelector('.error')
let value = '404';
fetch('https://api.giphy.com/v1/gifs/translate?api_key=Ak5tiNQ1k7pQgPKCcTmmn4kvrxJ0t9oM&s=cat')
    .then(function(response) {
        return (response.json())
    })
    .then(function(response) {
        image.src = response.data.images.original.url
    })
searchBtn.addEventListener('click', () =>{
    value = search.value || '404'
    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=Ak5tiNQ1k7pQgPKCcTmmn4kvrxJ0t9oM&s=${value}`)
      .then(function(response){
        return response.json()
      })
      .then(function(response){
        if (response.data.images.original.url) {
        image.src = response.data.images.original.url
        } else showError()
      })
      .catch(function(err) {
        error.textContent(`An Error occuered while fetching this data : ${err}`)
      })
})

newGif.addEventListener('click',() =>{
  fetch(`https://api.giphy.com/v1/gifs/translate?api_key=Ak5tiNQ1k7pQgPKCcTmmn4kvrxJ0t9oM&s=${value}`)
    .then (function(response) {
        return response.json()
    })
    .then (function(response) {
        image.src = response.data.images.original.url
    })
} )
function showError() {
    error.textContent('Something Goes wrong, or you are out of API calls')
}