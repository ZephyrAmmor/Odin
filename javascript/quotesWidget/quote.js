const quotePara = document.querySelector('.quote-para')
const quoteAuthor = document.querySelector('.quote-author')
const quoteHolder = document.querySelector('body')
const accessKey = 'T1LQhigOmiug7tPs5VEN08XDAjZW0wnTZqSEcdFYqRM'
const unsplashUrl = `https://api.unsplash.com/photos/random?803076=${accessKey}`
function getQuote() {
  fetch('https://random-quotes-freeapi.vercel.app/api/random')
    .then(function(response) {
      return response.json()
    })
    .then(function(response) {
      quotePara.textContent = response.quote
      quoteAuthor.textContent = `--${response.author}`
    })
}
getQuote()
setInterval(getQuote, 15*60*1000)