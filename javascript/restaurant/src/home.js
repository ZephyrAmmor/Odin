import heroPic from './hero.webp'
import tommy from './WilliamXTommy.png'
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
actionBtn.textContent = 'View Menu'

const reviewsTag = document.createElement('p')
reviewsTag.classList.add('reviewTag')
reviewsTag.textContent = 'Our Happy Customers'
const coustomers = document.createElement('div')
coustomers.classList.add('reviews')
const coustomerImg = document.createElement('img')
coustomerImg.setAttribute('src', tommy)
coustomerImg.setAttribute('width', '50')
const coustomerImg2 = document.createElement('img')
coustomerImg2.setAttribute('src', tommy)
coustomerImg2.setAttribute('width', '50')
const coustomerImg3 = document.createElement('img')
coustomerImg3.setAttribute('src', tommy)
coustomerImg3.setAttribute('width', '50')

coustomers.appendChild(coustomerImg)
coustomers.appendChild(coustomerImg2)
coustomers.appendChild(coustomerImg3)
coustomers.appendChild(reviewsTag)

const info = document.createElement('div')
info.classList.add('infoHome')
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
contentDiv.appendChild(coustomers)
contentDiv.appendChild(info)

const imgDiv = document.createElement('div')
imgDiv.classList.add('imgHome')

const imgElm = document.createElement('img')
imgElm.setAttribute('width', '300')
imgElm.setAttribute('src', heroPic)
const refImg = document.createElement('a')
refImg.setAttribute('href', 'https://www.allrecipes.com/thmb/NbS3BNdr8ljRJW4jBT3Vp-U4gmQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/4437164-biryani-with-yogurt-marinated-chicken-Buckwheat-Queen-1x1-1-35e7310f2c5b4fd09251d6deac7256a3.jpg')
refImg.textContent = 'Credit: Buckwheat Queen | Allrecipes'
imgDiv.appendChild(imgElm)
imgDiv.appendChild(refImg)

home.appendChild(contentDiv)
home.appendChild(imgDiv)

export {home}