import * as text from './text.js'
import restaurantJpeg from './img/restaurant.jpg'


function createMoreInfoPage(){
    const info = document.createElement('div')
    info.setAttribute('class', 'info')
    info.appendChild(text.createHeader('h1','Need more info?','info-header'))
    info.appendChild(text.createHeader('h2','Open & Closing Times?','infoHeaderAddress'))
    info.appendChild(text.createParagraph('From Tuesday-Sunday, 11:00AM-10:00PM','info-paragraph'))
    info.appendChild(text.createHeader('h2','Email?','infoHeaderAddress'))
    info.appendChild(text.createParagraph('test@email.com','info-paragraph'))
    info.appendChild(text.createHeader('h2','Address?','infoHeaderAddress'))
    info.appendChild(text.createParagraph('Our address is: 12354412 Boulevard Street','info-paragraph'))
    info.appendChild(createMap())
    return info
}

function createMap(){
    const mapDiv = text.createDiv('', 'map', 'map-div')
    const mapElement = document.createElement('iframe')
    mapElement.setAttribute('src', `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d914.2816978912917!2d-46.68427920438772!3d-23.563889320307677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce579dbf4eca5d%3A0xa479d0e7c757a5d1!2sR.%20Artur%20de%20Azevedo%2C%201298%20-%20Pinheiros%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2005404-003!5e0!3m2!1sen!2sbr!4v1687991074697!5m2!1sen!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade`)
    mapDiv.appendChild(mapElement)
    return mapDiv
}


function loadInfo(){
    const contentDiv = document.getElementById('content')
    contentDiv.appendChild(createMoreInfoPage())
}

export {loadInfo}
