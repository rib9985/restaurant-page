import * as text from './text.js'
import restaurantJpeg from './img/restaurant.jpg'


function createMoreInfoPage(){
    const info = document.createElement('div')
    info.setAttribute('class', 'info')
    info.appendChild(text.createHeader('h1','Need more info?','info-header'))
    info.appendChild(text.createHeader('h2','Address?','infoHeaderAddress'))
    info.appendChild(text.createParagraph('Our address is: 12354412 Boulevard Street','info-paragraph'))
    info.appendChild(text.createHeader('h2','Email?','infoHeaderAddress'))
    info.appendChild(text.createParagraph('test@email.com','info-paragraph'))
    info.appendChild(text.createHeader('h2','Open & Closing Times?','infoHeaderAddress'))
    info.appendChild(text.createParagraph('From Tuesday-Sunday, 11:00AM-10:00PM','info-paragraph'))

    return info
}



function loadInfo(){
    const contentDiv = document.getElementById('content')
    contentDiv.appendChild(createMoreInfoPage())
}

export {loadInfo}
