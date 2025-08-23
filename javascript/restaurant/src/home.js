const home = document.createElement('div')
home.classList.add('home')

const hero = document.createElement('h1')
hero.textContent = 'It\'s not just Food, it\'s an Experience'

const tagLine = document.createElement('p')
tagLine.classList.add('tagline')
tagLine.textContent = 'We are helping you to get rich and delecious food in a few minutes by using our nice web App'

const actionBtn = document.createElement('button')
actionBtn.classList.add('btn')
actionBtn.setAttribute('id', 'menu')

const customers = document.createElement('ul')
customers.classList.add('reviews')
actionBtn.textContent = 'View Menu'

const reviewsTag = document.createElement('p')
reviewsTag.classList.add('reviewTag')
reviewsTag.textContent = 'Our Happy Customers'

const info = document.createElement('div')
const infoDownload = document.createElement('div')
const infoActiveUsers = document.createElement('div')

const activeUsers = document.createElement('div')
activeUsers.textContent = '23451'
const activeHeading = document.createElement('div')
activeHeading.textContent = 'Active Users'

const downloadHeading = document.createElement('div')
downloadHeading.textContent = 'Downloads'
const downloadCount = document.createElement('div')
downloadCount.textContent = '+ 1M'

infoActiveUsers.appendChild(activeHeading)
infoActiveUsers.appendChild(activeUsers)

infoDownload.appendChild(downloadHeading)
infoDownload.appendChild(downloadCount)

info.appendChild(infoActiveUsers)
info.appendChild(infoDownload)

const contentDiv = document.createElement('div')
contentDiv.classList.add('contentHome')

contentDiv.appendChild(hero)
contentDiv.appendChild(tagLine)
contentDiv.appendChild(actionBtn)
contentDiv.appendChild(reviewsTag)
contentDiv.appendChild(info)

const imgDiv = document.createElement('div')
imgDiv.classList.add('imgHome')

home.appendChild(contentDiv)
home.appendChild(contentDiv)
export {home}