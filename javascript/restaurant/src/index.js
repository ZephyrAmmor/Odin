import {home} from './home.js'
import {menu} from './menu.js'
import {about} from './about.js'
import {contact} from './contact.js'
import './styles.css'

const content = document.querySelector('#content')

content.appendChild(home)
const homeBtn = document.querySelector('#home')
homeBtn.classList.add('current')
const nav = document.querySelector('nav')
const navbtns = document.querySelectorAll('nav button')
nav.addEventListener('click', (e) =>{
    while (content.firstChild){

        content.removeChild(content.firstChild)
    }
    for(let btn of navbtns){
        if(btn.classList.contains('current'))
            btn.classList.remove('current')
    }
    e.target.classList.add('current')
    const btnId = e.target.id
    if(btnId === 'home'){
        content.appendChild(home)
        return
    }
    else if(btnId === 'menu'){
        content.appendChild(menu)
        return
    }
    else if(btnId === 'about'){
        content.appendChild(about)
        return
    }
    else if(btnId === 'contact'){
        content.appendChild(contact)
        return
    }
    else
        throw Error
})