import './style.css'
import { loadHome } from './home.js'
import {loadMenu} from './menu.js'
import { loadReservations } from './reservations';
import {loadInfo} from './moreInfo'

import { loadNavBar } from './nav';
import { emptyContentDiv } from './text';


const contentDiv = document.getElementById('content')
const emptyDiv = () => contentDiv.innerHTML = ''

reservationsTab()

function homeTab(){
    emptyDiv()
    loadNavBar()
    addListeners()
    loadHome()
    const nav = document.getElementById('nav-home')
    nav.setAttribute('class', 'nav-activeTab')
}

function menuTab(){
    emptyContentDiv('content')
    loadNavBar()
    addListeners()
    loadMenu()
    const nav = document.getElementById('nav-menu')
    nav.setAttribute('class', 'nav-activeTab')
}

function reservationsTab(){
    emptyContentDiv('content')
    loadNavBar()
    addListeners()
    loadReservations()
    const nav = document.getElementById('nav-reserve')
    nav.setAttribute('class', 'nav-activeTab')
}


function moreInfoTab(){
    emptyContentDiv('content')
    loadNavBar()
    addListeners()
    
    loadInfo()
    const nav = document.getElementById('nav-info')
    nav.setAttribute('class', 'nav-activeTab')
}


function addListeners(){

const home = document.getElementById('nav-home');
home.addEventListener('click', () => homeTab())

const menu = document.getElementById('nav-menu')
menu.addEventListener('click', () => menuTab())

const reservations = document.getElementById('nav-reserve')
reservations.addEventListener('click', () => reservationsTab())

const moreInfo = document.getElementById('nav-info')
moreInfo.addEventListener('click', () => moreInfoTab())

}