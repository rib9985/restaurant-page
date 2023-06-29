import * as text from './text.js'
import logoPng from './img/logo.png'

function createNavBar(){
    const nav = text.createHeader('header', '', 'nav-header')
    nav.appendChild(text.createDiv('Home','nav','nav-home'))
    nav.appendChild(text.createDiv('Menu','nav','nav-menu'))
    nav.appendChild(text.createDiv('Reservations','nav','nav-reserve'))
    nav.appendChild(text.createDiv('More Information','nav','nav-info'))
    return nav   
}

function createLogo(){
    const logo = document.createElement('div')
    logo.appendChild(text.createImage(logoPng, 'logo', 'logo-image'))
    logo.setAttribute('class','div-logo')
    logo.setAttribute('id', 'main-logo')
    return logo
}


function loadNavBar(){
    const contentDiv = document.getElementById('content')
    contentDiv.appendChild(createLogo())
    contentDiv.appendChild(createNavBar())
}

export {loadNavBar}