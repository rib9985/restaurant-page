import * as text from './text.js'
import restaurantJpeg from './img/restaurant.jpg'


function createHome(){
    const home = document.createElement('div')
    home.setAttribute('class', 'home')
    home.appendChild(text.createHeader('h1','Who Are We?','home-header'))
    home.appendChild(text.createParagraph(text.aboutParagraph,'home-paragraph'))
    home.appendChild(text.createImage(restaurantJpeg, 'restaurant-image', 'restaurant-image'))
    home.appendChild(text.createParagraph(text.moreAboutUs,'home-paragraph'))
    return home
}



function loadHome(){
    const contentDiv = document.getElementById('content')
    contentDiv.appendChild(createHome())
}

export {loadHome}
