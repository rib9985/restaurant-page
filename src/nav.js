import * as text from './text.js'
import logoPng from './img/logo.png'

function createNavBar(){
    const nav = text.createHeader('header', '', 'nav-header')
    nav.appendChild = text.createAnchorLink('Home','','nav-home','nav-home')
    nav.appendChild = text.createAnchorLink('Menu','','nav-menu','nav-menu')
    nav.appendChild = text.createAnchorLink('Reservations','','nav-reserve','nav-reserve')
    nav.appendChild = text.createAnchorLink('Informations','','nav-info','nav-info')
    return nav   
}

function createLogo(){
    const logo = document.createElement('div')
    logo.appendChild = text.createImage(logoPng, 'logo', 'logo-image')
    logo.setAttribute('class','div-logo')
    return logo
}

function loadNavBar(){
    const contentDiv = document.getElementById('content')
    contentDiv.appendChild(createLogo())
    contentDiv.appendChild(createNavBar())
}

export {loadNavBar}