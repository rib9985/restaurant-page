import './style.css'
import { loadHome } from './home.js'
import logoPng from './img/logo.png';
import { loadNavBar } from './nav';
import { emptyContentDiv } from './text';

loadNavBar()
loadHome()

const contentDiv = document.getElementById('content')
const emptyDiv = () => contentDiv.innerHTML = ''

function homeTab(){
    emptyDiv()
    loadNavBar()
    loadHome()
}

function menuTab(){
    emptyContentDiv('content')
    loadNavBar()
    loadMenu()
}

const home = document.getElementById('nav-home');
home.addEventListener('click', () => homeTab())

const menu = document.getElementById('nav-menu')
menu.addEventListener('click', () => menuTab())