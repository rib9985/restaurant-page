import './style.css'
import { loadHome } from './home.js'
import {loadMenu} from './menu.js'
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

function addListeners(){

const home = document.getElementById('nav-home');
home.addEventListener('click', () => homeTab())

const menu = document.getElementById('nav-menu')
menu.addEventListener('click', () => menuTab())}