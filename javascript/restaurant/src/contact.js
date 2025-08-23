const contact = document.createElement('div')
contact.classList.add('contact')

const header = document.createElement('h2')
header.textContent = 'Contact & Locations'

const address = document.createElement('div')

const addressHeading = document.createElement('h3')
addressHeading.appendChild = 'Adress'

const addressPara = document.createElement('div')

const adPara1 = document.createElement('p')
adPara1.textContent = '123 Main Boulevard,'

const adPara2 = document.createElement('p')
adPara2.textContent = 'Green Avenue,'

const adPara3 = document.createElement('p')
adPara3.textContent = 'Multan, Pnjab, Pakistan'

addressPara.appendChild(adPara1)
addressPara.appendChild(adPara2)
addressPara.appendChild(adPara3)

address.appendChild(addressHeading)
address.appendChild(addressPara)
const phone = document.createElement('div')

const phoneHeader = document.createElement('h3')
phoneHeader.textContent = 'Phone'

const phoneNumber = document.createElement('p')
phoneNumber.textContent = '(061) 555-FOOD (3663)'

phone.appendChild(phoneHeader)
phone.appendChild(phoneNumber)
const timing = document.createElement('div')
const timingHeader = document.createElement('h3')
timingHeader.textContent = 'Hours of Operation:'

const timingList = document.createElement('ul')

const timeMonToThur = document.createElement('li')
const timeMonToThurHead = document.createElement('span')
timeMonToThurHead.classList.add('bold')
timeMonToThurHead.textContent = 'Monday to Thursday :'

const timeFriToSun = document.createElement('li')

const timeFriToSunHead = document.createElement('span')
timeFriToSunHead.classList.add('bold')
timeFriToSunHead.textContent = 'Friady to Sunday :'

const timeMonToThurPara = document.createElement('span')
timeMonToThurPara.textContent = '9:00 AM to 1:00AM'

const timeFriToSunPara = document.createElement('span')
timeFriToSunPara.textContent = '9:00 AM to 11:30 AM'

timeMonToThur.appendChild(timeMonToThurHead)
timeMonToThur.appendChild(timeMonToThurPara)
timeFriToSun.appendChild(timeFriToSunHead)
timeFriToSun.appendChild(timeFriToSunPara)

timing.appendChild(timeMonToThur)
timing.appendChild(timeFriToSun)

contact.appendChild(address)
contact.appendChild(phone)
contact.appendChild(timing)

export {contact}