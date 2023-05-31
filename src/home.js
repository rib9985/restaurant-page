import {createHeader, createParagraph,createImage} from './text.js'


function createHome(){
    const home = document.createElement('div')
    home.setAttribute('class', 'home')
    home.appendChild(createHeader('h1','Who Are We?','home-header'))
    home.appendChild(createParagraph(aboutParagraph,'home-paragraph'))
    home.appendChild(createImage('./img/restaurant.jpg', 'restaurant-image', 'restaurant-image'))
    home.appendChild(createParagraph(moreAboutUs,'home-paragraph'))

    return home
}

function loadHome(){
    const contentDiv = document.getElementById('content')
    contentDiv.textContent = ''
    contentDiv.appendChild(createHome())
}

export default loadHome()
