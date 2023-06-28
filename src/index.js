import './style.css'
import {loadTab} from './text'
import { loadHome } from './home.js'
import {loadMenu} from './menu.js'
import { loadReservations } from './reservations';

import logoPng from './img/logo.png';
import { loadNavBar } from './nav';
import { emptyContentDiv } from './text';


loadNavBar()
loadHome()
addListeners()

const contentDiv = document.getElementById('content')
const emptyDiv = () => contentDiv.innerHTML = ''



function homeTab(){
    emptyDiv()
    loadNavBar()
    addListeners()
    loadHome()
}

function menuTab(){
    emptyContentDiv('content')
    loadNavBar()
    addListeners()
    loadMenu()
}

function reservationsTab(){
    emptyContentDiv('content')
    loadNavBar()
    addListeners()
    loadReservations()
}


function addListeners(){

const home = document.getElementById('nav-home');
home.addEventListener('click', () => homeTab())

const menu = document.getElementById('nav-menu')
menu.addEventListener('click', () => menuTab())

const reservations = document.getElementById('nav-reserve')
reservations.addEventListener('click', () => reservationsTab())

}